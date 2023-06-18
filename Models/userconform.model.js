const mongoose = require('mongoose');
const {connection}=require("../db")
const userconformSchema = mongoose.Schema({
    name:{ type: String  },
    email:{ type: String  },
    message:{ type: String},
    time:{ type: String},
 
});

const userconformModel = mongoose.model('Conform', userconformSchema);

module.exports = {
    userconformModel
}
