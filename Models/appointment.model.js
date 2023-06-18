const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    Date:Date,
 
});

const AppointmentModel = mongoose.model('Appointment', AppointmentSchema);

module.exports = {
    AppointmentModel
}
