const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const compareSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    description: {
        type: String,
        required: true
    },
    list: {
        type: Object,
        required: true
    },

})

module.exports = mongoose.model("Compare", compareSchema)