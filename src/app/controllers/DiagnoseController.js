const Diagnose = require('../models/Diagnose');
const Symptom = require('../models/Symptom');
const Disease = require('../models/Diseases');
const Category = require('../models/Category');
const mongoose = require('mongoose');
var Diagnoses = mongoose.model('Diagnose');
var Symptoms = mongoose.model('Symptom');
var Diseases = mongoose.model('Disease');

class DiagnoseController{
    // [GET] /diagnose
    index(req, res){
        res.render('Diagnose');
    }

    // [POST] /User/Services/Diagnose
    diagnose(req, res){
        Symptoms.findOne({name: {$regex: new RegExp(req.body.name)}}, function(err, result){
            if (err) throw err;
            else if (result == null){
                res.send("We don't find any diseases base on your symptoms. You can enter more symptoms.");
                return 0;
            }
            var id = result.Sid;
            const query = ([
                {
                    $match: {
                        Sid : id
                    }
                },
                {
                    $group: {
                        _id : "$Did",
                    }
                }
            ]);

            Diagnoses.aggregate(query, function(err, result1){
                if (err) throw err;
                else if (result1.length >= 2){
                    res.send("You must add more symptoms.");
                }else{
                    var disease = result1[0]._id;
                    Diseases.findOne({Did: disease}, function(error, disease){
                        if (error) throw error;
                        var Disease = disease.name;
                        res.send(Disease);
                    })
                }
            });
        }); 
    }
}

module.exports = new DiagnoseController();