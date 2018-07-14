var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/myapp');

var Schema = mongoose.Schema;

var doctorSchema = new Schema({ Desc: String });
var DoctorSchema = mongoose.model('doctor', doctorSchema);
module.exports = DoctorSchema;