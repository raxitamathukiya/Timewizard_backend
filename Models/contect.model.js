const mongoose = require('mongoose');
const {connection}=require("../db")
const contectSchema = mongoose.Schema({
    name:{ type: String  },
    email:{ type: String  },
    chat:{ type: String },
    message:{ type: String},
    time:{ type: String},
 
});

const contectModel = mongoose.model('Contect', contectSchema);

module.exports = {
   contectModel
}
