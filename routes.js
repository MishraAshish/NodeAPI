var express = require('express');
var router = express.Router();

// Doctor API's
  var doctorController = require("./api/controller/getDataController");
  // -- api/createdoctor
  router.post('/api/createdoctor',doctorController.save_doctor);
  
  // -- api/getdoctor  
  router.get('api/getdoctor', doctorController.make_httpCall);

  router.get('/api/doctors', doctorController.get_allDoctors);  
  
  //Default call
  router.get('*', (req, res) => { 
      console.log("I am in routes"); res.sendfile('./index.html'); 
    });
  
module.exports = router;