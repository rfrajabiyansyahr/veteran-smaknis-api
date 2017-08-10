var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Set up a mongoose model
var UserSchema = new Schema({
    nama_depan : String,
    nama_belakang : String,
    gender : String,
    tempat_lahir : String,
    tanggal_lahir : Date,
    alamat_obj : {
        alamat : String ,
        desa : String ,
        kecamatan: String,
        kabupaten: String,
        provinsi: String,
        negara: String,
        kode_pos: String
    },
    telepon: String,
    medsos : {
        email : String,
        facebook: String,
        website: String,
        twitter: String,
        instagram: String,
        line: String
    },
    pekerjaan : {
        tempat : String,
        tahun_masuk : String,
        tahun_keluar : String,
        posisi : String
    },
    username: String,
    password : String
});

module.exports = mongoose.model('User', UserSchema);