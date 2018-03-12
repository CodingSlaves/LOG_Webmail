const db = require('mongoose');
const Schema = db.Schema;
exports.User = db.model('user',new Schema({
    ID : {type : String},
    PW : {type : String}
}));
