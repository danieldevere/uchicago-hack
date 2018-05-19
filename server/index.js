var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/patient_tracker';

app.use(bodyParser.json());

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/patients', function(req, res) {
    Patient.find().then((patients) => {
        res.status(200).send(patients);
    }).catch((error) => {
        res.sendStatus(500);
    });
});

app.post('/patient', function(req,res) {
    var patient = req.body;
    Patient.create(patient).then((value) => {
        console.log(value);
        res.status(200).send({id:value.id});
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

app.put('/patient/:id', function(req, res) {
    var id = req.params.id;
    Patient.findByIdAndUpdate(id, req.body, {new:true}).then((data) => {
        res.status(200).send(data);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

app.delete('/patient/:id', function(req,res) {
    var id = req.params.id;
    Patient.findByIdAndRemove(id).then((data) => {
        console.log(data);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

app.listen(3000, function() {
    console.log("listening on 3000");
});

var patientSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number
});

var Patient = mongoose.model('Patient', patientSchema);