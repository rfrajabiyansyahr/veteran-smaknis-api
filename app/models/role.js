var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var RoleSchema  = new Schema({
    role_name : String,
    permissions : String
});

module.exports = mongoose.model('Role', RoleSchema);