const Diagnose = require('../models/Diagnose');
const Symptom = require('../models/Symptom');
const Diseases = require('../models/Diseases');
const Category = require('../models/Category');
const mongoose = require('mongoose');
var Diagnoses = mongoose.model('Diagnose');
var Symptoms = mongoose.model('Symptom');

class DiagnoseController{
    // [GET] /diagnose
    index(req, res){
        res.render('Diagnose');
    }

    // [POST] /User/Services/Diagnose
    diagnose(req, res){
        Symptoms.find({name: req.body.name}, function(err, result){
            if (err) throw err;
            var id = result.Sid;
            const query = ([
                {
                    $match: {
                        Sid : "S02"
                    }
                },
                {
                    $group: {
                        _id : "$Did",
                        //count: { $sum: 1 }
                    }
                },
                {
                    $count: "Did"
                }
            ]);

            Diagnoses.aggregate(query, function(err, result1){
                if (err) throw err;
                res.send({result1});
            });
        });     
    }
}

module.exports = new DiagnoseController();