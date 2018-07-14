var DoctorModel = require(__base+'api/model/UserModel');

var DoctorController = {
    
    get_allDoctors :  function(req, res) {
        //res.send("unable to get doctor");         
        console.log("Get all doctors");
        DoctorModel.find(function(err, doctor) {
            console.log("doctor" + "in get doctor");
            DoctorController.sendResponse(err, res, doctor);
      });       
    },
    save_doctor : function(req, res) {        
        console.log(req.body.desc);
        var DoctorModel = new DoctorModel({
        Desc: req.body.desc
        });

        DoctorModel.save(function(err) {
        console.log(err);
        if (err) {
            res.send(err);
            return;
        };

        res.send("Doctor Saved!");
        console.log('Data saved successfully!');
        });
    },
    make_httpCall : function(req, res) {
        var Client = require('node-rest-client').Client; 
        var client = new Client();
        client.get('http://localhost:9000/api/doctors', function (data, response) {
               
        console.log("Doctor Through HTTP Call");        
        
        res.json(data); 
        });
    },
    sendResponse : function  (err, res, data){        
        console.log("doctor" + "in send response");
        if (err)
            res.send(err);
    
        res.json(data); 
    }    
}
module.exports = DoctorController;