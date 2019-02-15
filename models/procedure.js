const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const procedureSchema = new Schema({
    "Bill Item ID": {
        type: String,
        required: false
    },
    "Charge Description": {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Hospital: {
        type: String,
        required: true
    }

})
procedureSchema.index ({
    '$**': 'text'
})


module.exports = mongoose.model("Procedure", procedureSchema)