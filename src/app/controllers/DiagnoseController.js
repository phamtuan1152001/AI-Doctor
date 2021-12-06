const Diagnose = require('../models/Diagnose');
const Symptom = require('../models/Symptom');
const Diseases = require('../models/Diseases');
const Category = require('../models/Category');
const mongoose = require('mongoose');
//const {mongooseToObject} = require('../../util/mongoose');
// const MongoClient = require ('mongodb').MongoClient;
var Diagnoses = mongoose.model('Diagnose');
var Symptoms = mongoose.model('Symptom');
// const url = "mongodb://localhost:27017/"

class DiagnoseController{
    // [GET] /diagnose
    index(req, res){
        res.render('Diagnose');
    }

    // [POST] /User/Services/Diagnose
    diagnose(req, res){
        // Get the data from client to server.
        //var symptomInput = new Diagnose({symptom: req.body.name});
        // const dbo = db.db("mydb");

        Symptoms.find({name: req.body.name}, function(err, result){
            if (err) throw err;
            var SymptomID = result.Sid;

            const query = ([
                {
                    $group: {
                        _id : null,
                        NumberOfDisease: {$count : {Did: "$Did" }}
                    }
                },
                {
                    $match: {
                        Sid : SymptomID
                    }
                }
            ]);

            Diagnoses.aggregate(query, function(err, result){
                if (err) throw err;
                res.send({response: result});
            });
        });
        // Diagnose.find(query, function(err, result){
        //     // var DiseaseName = result.disease.name;
        //     // var DiseaseDescription = result.disease.description;
        //     // var DiseaseCategory = result.disease.category.department;

        //     if (err) throw err;
        //     else if (result >= 2){
        //         res.send({response: result});
        //         //console.log("We have" + result + "diseases based on the symptoms you entered. You can enter more symptoms so we can diagnose better.");
        //         //return "We have" + result + "diseases based on the symptoms you entered. You can enter more symptoms so we can diagnose better.";
        //     }
        //     else if (result == 0){
        //         res.send({response: "error"});
        //         //console.log("We cannot diagnose based on the symptoms you entered. You can enter more symptoms so we can diagnose better. ")
        //         //return "We cannot diagnose based on the symptoms you entered. You can enter more symptoms so we can diagnose better. ";
        //     }
        //     else{
        //         res.send({response: result});
        //         // console.log(DiseaseName);
        //         // console.log(DiseaseDescription);
        //         // console.log(DiseaseCategory);
        //     }
        // });

        // MongoClient.connect(url, function(err, db){
        //      if (err){
        //         throw err;
        //     }
        //     const dbo = db.db("mydb");

        //     var Diagnose = Symptoms.find({Sid}, {name: {$regex : /symptomInput/i}}, function(err, result){
        //         if (err) throw err;
        //         var SymptomID = result.Sid;

        //         Diagnoses.find({Sid : SymptomID}, function(err, result){
        //             if (err) throw err;
        //             var DiseaseID = result.disease.Did;
        //             console.log(DiseaseID);
        //         });
        //     });

        //     const query = ([
        //         {
        //             $group: {
        //                 _id : null,
        //                 NumberOfDisease: {$count : {Did: "$Did" }}
        //             }
        //         },
        //         {
        //             $match: {
        //                 Diagnose
        //             }
        //         }
        //     ]);
        //     dbo.collection("Diagnose").find(query, function(err, result){
        //         if (err) throw err;
        //         console.log(result);
        //         db.close();
        //     })
        // });



        // // Search and query data in mongodb.
        // MongoClient.connect(url, function(err, db){
        //     if (err){
        //         throw err;
        //     }
        //     const dbo = db.db("mydb");
        //     // Query the name of symptoms in database are the same with the input.
        //     const queryDB = (
        //         { $group: {
        //             _id: {_id : "$_id"}
        //         }
        //         },

        //         {
        //         $match: {name : /.*symptomInput*/ }
        //         }
        //     );
        //     // Show all document in database base on the queryDB. 
        //     dbo.collection("Symptoms").find(queryDB).toArray(function(err, result){
        //         if (err) throw err;
        //         console.log(result);
        //         db.close();
        //         // After having the list of symptoms. Query the diseases having these symptoms ID.
        //         const queryResult =( 
        //             { $group: {
        //                 _id: "$diseaseID",
        //                 Disease: { $count: {diseaseID: "$diseaseID"} }
        //             }
        //             },
        //             // $match tương tự Having
        //             {
        //                 $match: { "symptomID": {symptomID} }
        //             }
        //         );
                
        //         // dbo.collection("Diagnose").find(queryResult).toArray(function(err, result){
        //         //     if (err) throw err;
        //         //     console.log(result);
        //         //     var count = 1;
        //         //     result.forEach(function(){
        //         //         count++;
        //         //         console.log(count);
        //         //     })
        //         // });
        //     });
        // });
        
    }

}

module.exports = new DiagnoseController();