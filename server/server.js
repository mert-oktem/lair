/******************** Core Modules **********************/
const http = require('http');

/******************** NPM Modules ***********************/
const express = require('express');
const Joi = require('joi');
const mysql = require('mysql')
const cors = require('cors');
const { stat } = require('fs');
/******************** Custom Modules ********************/

/******************** End of Modules ******************************/


const app = express();
app.use(cors());
app.use(express.json());


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'lairdbadmin',
    password: '479ghsJO@',
    database: 'lairdb'
})

connection.connect()


/****************************************************************/
/******************** GET METHODS *******************************/
/****************************************************************/


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

app.get('/api/relatedspecies/:id', (req, res) => {
    let q = `SELECT sDT.statusDescription
            FROM endangeredSpeciesTable AS e
            LEFT JOIN statusDescriptionTable sDT on e.statusID = sDT.statusID
            WHERE e.speciesID = '${req.params.id}' `

    let statusDescription; 

    connection.query(q, function (err, result) {
        if (err) throw res.status(400).send(err)
        else if ( result == [] ) res.status(404).send("The specie with given id could not found.");
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
            ORDER BY RAND() LIMIT 3;`
    
            connection.query(q, function (err, result) {
            if (err) throw res.status(400).send(err)
            else if ( result == [] ) res.status(404).send("The given status could not found.");
            else { res.send(result); }
            }) 
        }
    })
});

app.get('/api/species/population/:id', (req, res) => {
    let q = `SELECT SUM(speciesCount) as y, YEAR(date) as x
        FROM populationTable AS p
        LEFT JOIN locationSpeciesLink ON p.locationSpeciesLinkID = locationSpeciesLink.locationSpeciesLinkID
        WHERE speciesID = ${req.params.id} GROUP BY speciesID, YEAR(date);`;

    connection.query(q, function (err, result) {
        if (err) throw res.status(400).send(err)
        else if (result == []) res.status(404).send("The specie with given id could not found.");
        else { res.send(result); }
    }) 
});

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
        else if (result == []) res.status(404).send("The location with given id could not found.");
        else { res.send(result); }
    }) 
});

app.get('/api/ngos', (req, res) => {
    connection.query('SELECT * FROM NGOsTable', function (err, result) {
        if (err) throw res.status(400).send(err)
        res.send(result)
    })

});

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
            var urls = []
            var str = item.content
            var rex = /<img.*?src="([^">]*\/([^">]*?))".*?>/g;
            var m = rex.exec( str )
            item.url = m[1];
            const jsdom = require("jsdom");
            const dom = new jsdom.JSDOM(item.content);
            item.firstp = dom.window.document.querySelector("p").textContent;
            if (item.firstp == "") {
                item.firstp = item.contentSnippet
            }
        })
        res.send(feed);
    })
});



/****************************************************************/
/******************** POST METHODS ******************************/
/****************************************************************/
//
// app.post('/api/species', (req, res) => {
//     const { error } = ValidateSpecie(req);
//     if (error) { return res.status(400).send(result.error.details[0].message)}

//     let lastid = connection.query(`SELECT MAX(speciesID) FROM endangeredSpeciesTable)`, function (err, result) {
//     if (err) throw res.status(400).send(err)
//     })

//     connection.query(`INSERT INTO endangeredSpeciesTable
//     (speciesID, statusID, trendID, familyID, name, scientificName, description, threats, image1, image2, icon, averageAge, averageWeight, averageHeight, speciesSignificance, active)
//     VALUES
//     (${lastid + 1},
//     ${req.body.statusID},
//     ${req.body.trendID},
//     ${req.body.familyID},
//     ${req.body.name},
//     ${req.body.scientificName},
//     ${req.body.description},
//     ${req.body.threats},
//     ${req.body.image1},
//     ${req.body.image2}, ${req.body.icon},
//     ${req.body.averageAge},
//     ${req.body.averageWeight},
//     ${req.body.averageHeight},
//     ${req.body.speciesSignificance},
//     ${req.body.active});`,
//     function (err, result) {
//         if (err) throw res.status(400).send(err)
//         res.send("ok");
//     })
// });

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

app.post('/api/newsletter', (req, res) => {
    const { error } = ValidateNewsletter(req);
    if (error) { return res.status(400).send(res.error.details[0].message)}

    connection.query(`INSERT INTO newsLetterTable 
        (email) 
        VALUES 
        ('${req.body.email}');`,
    function (err, result) {
        if (err) throw res.status(400).send(err)
        res.send(result);
    })
});

/****************************************************************/
/******************** PUT METHODS *******************************/
/****************************************************************/
//
// app.put('/api/species/:id', (req, res) => {
//     const { error } = ValidateSpecie(req);
//     if (error) { return res.status(400).send(result.error.details[0].message); }
//
//     connection.query('SELECT * FROM endangeredSpeciesTable', function (err, result) {
//         if (err) throw err
//         let species = result
//
//         let specie = species.find(s => s.id === parseInt(req.params.id));
//         if (!specie) return res.status(404).send("The specie with given id could not found.");
//
//
//
//         connection.query(`UPDATE endangeredSpeciesTable SET
//         statusID = ${req.body.statusID}
//         trendID = ${req.body.trendID}
//         familyID = ${req.body.familyID}
//         name = ${req.body.name}
//         scientificName = ${req.body.scientificName}
//         description = ${req.body.description}
//         threats = ${req.body.threats}
//         image1 = ${req.body.image1}
//         image2 = ${req.body.image2}
//         icon = ${req.body.icon}
//         averageAge = ${req.body.averageAge}
//         averageWeight = ${req.body.averageWeight}
//         averageHeight = ${req.body.averageHeight}
//         speciesSignificance = ${req.body.speciesSignificance}
//         active = ${req.body.active}
//         WHERE speciesID = ${req.body.id}`, function (err, result) {
//             if (err) throw res.status(400).send(err)
//             res.send("ok");
//             })
//     })
// });

/****************************************************************/
/******************** DELETE METHODS ****************************/
/****************************************************************/
//
// app.delete('/api/species/:id', (req, res) => {
//     const { error } = ValidateSpecie(req);
//     if (error) { return res.status(400).send(result.error.details[0].message); }
//
//     connection.query('SELECT * FROM endangeredSpeciesTable', function (err, result) {
//         if (err) throw err
//         let species = result
//
//         let specie = species.find(s => s.id === parseInt(req.params.id));
//         if (!specie) return res.status(404).send("The specie with given id could not found.");
//
//         connection.query(`DELETE from endangeredSpeciesTable WHERE speciesID = ${req.body.id}`, function (err, result) {
//             if (err) throw res.status(400).send(err)
//             res.send("ok");
//             })
//     })
// });



//Validates Request
function ValidateSpecie(req) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(req.body, schema);
}

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


const port = process.env.port || 3011;
app.listen(port, () => console.log(`Listening on port ${port}...`));



