/******************** Core Modules **********************/
const http = require('http');

/******************** NPM Modules ***********************/
const express = require('express');
const Joi = require('joi');
const mysql = require('mysql')
const cors = require('cors');
const { stat } = require('fs');
/******************** End of Modules ********************/


/******************** Environmental Variables ***********/

const conStr = {
    host: 'localhost',
    user: 'lairdbadmin',
    password: '479ghsJO@',
    database: 'lairdb'
}

/******************** Query Setup ***********************/

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection(conStr)

connection.connect()


/*********************************************************************************************************************************************/
/******************** GET METHODS ************************************************************************************************************/
/*********************************************************************************************************************************************/


/************** Endpoint for Discovery page ****************************************************/

app.get(`/api/species`, (req, res) => {
    let species
    let q = `SELECT e.speciesID, sDT.statusDescription, e.name, fT.familyDescription,
                    e.image1, pT.speciesCount, lT.habitat
            FROM endangeredSpeciesTable AS e
            LEFT JOIN statusDescriptionTable sDT on e.statusID = sDT.statusID
            LEFT JOIN trendDescriptionTable tDT on e.trendID = tDT.trendID
            LEFT JOIN locationSpeciesLink on e.speciesID = locationSpeciesLink.speciesID
            LEFT JOIN familyTable fT on e.familyID = fT.familyID
            LEFT JOIN populationTable pT on locationSpeciesLink.locationSpeciesLinkID = pT.locationSpeciesLinkID
            LEFT JOIN locationTable lT on locationSpeciesLink.locationID = lT.locationID
            WHERE e.active = TRUE
            GROUP BY e.speciesID`

    connection.query(q, function (err, result) {
    if (err) throw res.status(400).send(err)
    species = result
    res.send(species)
    }) 
});

/************** Endpoint for Discovery Detail page ****************************************************/

app.get('/api/species/:id', (req, res) => {
    let species
    let q = `SELECT e.speciesID, sDT.statusDescription, tDT.trendDescription, fT.familyDescription, e.name, e.scientificName, e.description, e.threats,
                    e.image1, e.image2, e.icon, e.averageAge, e.averageWeight, e.averageHeight, e.speciesSignificance, e.active
            FROM endangeredSpeciesTable AS e
            LEFT JOIN statusDescriptionTable sDT on e.statusID = sDT.statusID
            LEFT JOIN trendDescriptionTable tDT on e.trendID = tDT.trendID
            LEFT JOIN familyTable fT on e.familyID = fT.familyID;`

    connection.query(q, function (err, result) {
    if (err) throw res.status(400).send(err)
    species = result
    const specie = species.find(s => s.speciesID === parseInt(req.params.id));
    if (!specie) res.status(404).send("The specie with given id could not found.");

    res.send(specie);
    }) 
});

/************** Endpoint for Related species from Discovery detail page ****************************************************/

app.get('/api/relatedspecies/:id', (req, res) => {
    let q = `SELECT sDT.statusDescription
            FROM endangeredSpeciesTable AS e
            LEFT JOIN statusDescriptionTable sDT on e.statusID = sDT.statusID
            WHERE e.speciesID = '${req.params.id}' `

    let statusDescription; 

    connection.query(q, function (err, result) {
        if (err) throw res.status(400).send(err)
        else if ( result === [] ) res.status(404).send("The specie with given id could not found.");
        else { 
            statusDescription = JSON.stringify(result[0].statusDescription) 
            statusDescription = statusDescription.replace(/^"|"$/g, '').toString()

            q = `SELECT e.speciesID, sDT.statusDescription, e.name, fT.familyDescription,
            e.image1, pT.speciesCount, lT.habitat
            FROM endangeredSpeciesTable AS e
            LEFT JOIN statusDescriptionTable sDT on e.statusID = sDT.statusID
            LEFT JOIN trendDescriptionTable tDT on e.trendID = tDT.trendID
            LEFT JOIN locationSpeciesLink on e.speciesID = locationSpeciesLink.speciesID
            LEFT JOIN familyTable fT on e.familyID = fT.familyID
            LEFT JOIN populationTable pT on locationSpeciesLink.locationSpeciesLinkID = pT.locationSpeciesLinkID
            LEFT JOIN locationTable lT on locationSpeciesLink.locationID = lT.locationID
            WHERE e.active = TRUE AND sDT.statusDescription = '${statusDescription}'
            GROUP BY e.speciesID
            ORDER BY RAND() LIMIT 4;`
    
            connection.query(q, function (err, result) {
            if (err) throw res.status(400).send(err)
            else if ( result === [] ) res.status(404).send("The given status could not found.");
            else { res.send(result); }
            }) 
        }
    })
});

/************** Endpoint for Line graph on Discovery Detail page ****************************************************/

app.get('/api/species/population/:id', (req, res) => {
    let q = `SELECT SUM(speciesCount) as y, YEAR(date) as x
        FROM populationTable AS p
        LEFT JOIN locationSpeciesLink ON p.locationSpeciesLinkID = locationSpeciesLink.locationSpeciesLinkID
        WHERE speciesID = ${req.params.id} GROUP BY speciesID, YEAR(date);`;

    connection.query(q, function (err, result) {
        if (err) throw res.status(400).send(err)
        else if (result === []) res.status(404).send("The specie with given id could not found.");
        else { res.send(result); }
    }) 
});

/************** Endpoint for Canada Map ****************************************************/

app.get('/api/locations/:location', (req, res) => {
    let q = `SELECT lT.locationID, lT.habitat, e.speciesID, e.name, e.icon, pT.speciesCount 
    FROM endangeredSpeciesTable AS e
    LEFT JOIN locationSpeciesLink on e.speciesID = locationSpeciesLink.speciesID
    LEFT JOIN populationTable pT on locationSpeciesLink.locationSpeciesLinkID = pT.locationSpeciesLinkID
    LEFT JOIN locationTable lT on locationSpeciesLink.locationID = lT.locationID
    WHERE e.active = TRUE AND lT.habitat = '${req.params.location}'
    GROUP BY e.speciesID;`
    

    connection.query(q, function (err, result) {
        if (err) throw res.status(400).send(err)
        else if (result === []) res.status(404).send("The location with given id could not found.");
        else { res.send(result); }
    }) 
});

/************** Endpoint for Donation page ****************************************************/

app.get('/api/ngos', (req, res) => {
    connection.query('SELECT * FROM NGOsTable', function (err, result) {
        if (err) throw res.status(400).send(err)
        res.send(result)
    })

});

/************** Endpoint for Article page ****************************************************/

app.get('/medium/rss', (req, res) => {
    let Parser = require('rss-parser');
    let parser = new Parser({
        customFields: {
            item: [
                ['content:encoded', 'content'],
            ]
        }
    });
    parser.parseURL('https://medium.com/feed/wild-without-end', function(err, feed) {
        feed.items.forEach(item => {
            var str = item.content
            var rex = /<img.*?src="([^">]*\/([^">]*?))".*?>/g;
            var m = rex.exec( str )
            item.url = m[1];
            const jsdom = require("jsdom");
            const dom = new jsdom.JSDOM(item.content);
            item.firstp = dom.window.document.querySelector("p").textContent;
            if (item.firstp === "") {
                item.firstp = item.contentSnippet
            }
        })
        res.send(feed);
    })
});

/***Reference to articles, which are taken from endpoint provided by Medium.com ********/
/**************** https://medium.com/wild-without-end *****************/


/*********************************************************************************************************************************************/
/******************** POST METHODS ***********************************************************************************************************/
/*********************************************************************************************************************************************/


/************** Endpoint for Contact form ****************************************************/

app.post('/api/contact', (req, res) => {
    const { error } = ValidateForm(req);
    if (error) { return res.status(400).send(res.error.details[0].message)}

    connection.query(`INSERT INTO contactFormTable 
        (contactFirstName, contactLastName, contactEmail, placeOfObservation, observationDetails) 
        VALUES 
        ('${req.body.contactFirstName}', '${req.body.contactLastName}', '${req.body.contactEmail}', '${req.body.placeOfObservation}', '${req.body.observationDetails}');`,
    function (err, result) {
        if (err) throw res.status(400).send(err)
        res.send(result);
    })
});

/************** Endpoint for Newsletter form ****************************************************/

app.post('/api/newsletter', (req, res) => {
    const { error } = ValidateNewsletter(req);
    if (error) { return res.status(400).send(res.error.details[0].message)}

    connection.query(`INSERT INTO newsletterTable 
        (subscriberEmail) 
        VALUES 
        ('${req.body.subscriberEmail}');`,
    function (err, result) {
        if (err) throw res.status(400).send(err)
        res.send(result);
    })
});


/*********************************************************************************************************************************************/
/******************** Request Validations *********************************************************************************************************/
/*********************************************************************************************************************************************/

function ValidateForm(req) {
    const schema = {
        contactFirstName: Joi.string().min(3).required(),
        contactLastName: Joi.string().min(3).required(),
        contactEmail: Joi.string().min(3).required(),
        placeOfObservation: Joi.string().min(3).required(),
        observationDetails: Joi.string().min(3).required()
    };

    return Joi.validate(req.body, schema);
}
function ValidateNewsletter(req) {
    const schema = {
        subscriberEmail: Joi.string().min(3).required()
    };
    return Joi.validate(req.body, schema);
}


const port = process.env.port || 3011;
app.listen(port, () => console.log(`Listening on port ${port}...`));



