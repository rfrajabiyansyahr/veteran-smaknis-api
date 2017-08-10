var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var DeptSchema  = new Schema({
    nama_jurusan : String,
    tahun : String
});

module.exports = mongoose.model('DeptSchema', DeptSchema);