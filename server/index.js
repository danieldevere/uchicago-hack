var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Twilio = require('twilio');
var multer = require('multer');
var uuid = require('uuid/v1');
var cors = require('cors');

var storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, uuid() + '.jpg');
    }
});
var upload = multer({storage:storage});
var twilioAccountSid; // put in SID
var twilioAuthToken; // put in AuthToken
var twilioPhoneNumber="+ 19524794364";
app.use('/uploads', express.static('uploads'));
var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/patient_tracker';

app.use(bodyParser.json());
app.use(cors());

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

app.post('/patient/:id/photo', upload.single('image'), (req, res) => {
    console.log(req.params.id);
    var id = req.params.id;
    var filename = req.file.path;
    Patient.findById(id).then((patient) => {
        patient.images.push({
            filename:filename,
            date:new Date()
        });
        patient.save();
        res.status(200).send(patient);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(200);
    });
});

app.post('/patient', function(req,res) {
    var patient = req.body;
    Patient.create(patient).then((value) => {
        // sendNotifications("+ 16125976937", "Help us out: http://f693b14e.ngrok.io", function() {
            res.status(200).send({id:value.id});
        // });
        
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
    id: String,
    witness: {
        firstname: String,
        lastname: String,
        age: Number,
        sex: String,
        location: String,
        description: String,
        time: Date,
        typeOfEmergency:String,
    },
    ems: {
        tech1Name: String,
        tech2Name: String,
        shiftDate: Date,
        chiefComplaint: String,
        primaryFieldImpressions: [String],
        secondaryFieldImpressions: [String],
        primaryTrauma: [String],
        secondaryTrauma: [String],
        mechanismOfInjury: [String],
        medication: String,
        allergies: [String],
        bp: [
            {
                systolic: Number,
                diastolic: Number,
                time: Date,
            }
        ],
        pulse: [
            {
                beatsPerMinute: Number,
                time: Date,
            }
        ],
        respiratory: [
            {
                breathsPerMinute:Number,
                time: Date,
                o2Saturation: Number,
            }
        ],
        glasgowComaScale: {
            eyesOpen: Number
        }
    }
});

var Patient = mongoose.model('Patient', patientSchema);

function sendNotifications(number, message, cb) {
    var client = new Twilio(twilioAccountSid, twilioAuthToken);
    var options = {
        to:number,
        from:twilioPhoneNumber,
        body:message
    };
    client.messages.create(options, function(err, response) {
        if (err) {
            // Just log it for now
            console.error(err);
        } else {
            console.log(response);
            console.log("message sent");
            cb();
        }
    });
}
