const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const compareSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
   procedure: {
       type: Schema.Types.ObjectId,
       ref: 'Procedure',
       required: true,
   }
})

module.exports = mongoose.model("Compare", compareSchema)