const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const procedureSchema = new Schema ({
    description: {
        type: String,
        required: true
    },
    list: {
        type: Object,
        required: true
    },

})

module.exports = mongoose.model("Procedure", procedureSchema)