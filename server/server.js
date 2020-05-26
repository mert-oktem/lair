const Joi = require('joi');
const http = require('http');

const express = require('express');
const app = express();

app.use(express.json());


const species = [
    { id: 1, name: "bear"},
    { id: 2, name: "tiger"},
    { id: 3, name: "shark"}
]



app.get('/api/species', (req, res) => {
    res.send(species)
});

app.get('/api/species/:id', (req, res) => {
    const specie = species.find(s => s.id === parseInt(req.params.id));
    if (!specie) res.status(404).send("The specie with given id could not found.");

    res.send(specie);
});

app.post('/api/species', (req, res) => {
    console.log(req);
    const { error } = ValidateSpecie(req); 
    if (error) { return res.status(400).send(result.error.details[0].message)}


    specie = {
        id: species.length + 1,
        name: req.body.name
    };

    species.push(specie);
    res.send(specie);
});

app.put('/api/species/:id', (req, res) => {
    let specie = species.find(s => s.id === parseInt(req.params.id));
    if (!specie) return res.status(404).send("The specie with given id could not found.");
     
    const { error } = ValidateSpecie(req); 
    if (error) { return res.status(400).send(result.error.details[0].message); }

    specie = {
        id: req.params.id,
        name: req.body.name
    };

    // Update
    specie.name = req.body.name;
    res.send(specie);
});

function ValidateSpecie(req) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(req.body, schema);
}

app.delete('/api/species/:id', (req, res) => {
    const specie = species.find(s => s.id === parseInt(req.params.id));
    if (!specie) return res.status(404).send("The specie with given id could not found.");


    const index = species.indexOf(course);
    species.splice(index, 1);

    res.send(specie);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));