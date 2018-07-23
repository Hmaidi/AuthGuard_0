const mongoose = require("mongoose");
const shema = mongoose.Schema;

const  UserShema = new shema({
    email: String,
    password : String
})

module.exports = mongoose.model('user',UserShema,'users');
