const db = require('mongoose');
const Schema = db.Schema;
exports.User = new Schema({
    ID : {type : String},
    PW : {type : String}
});
