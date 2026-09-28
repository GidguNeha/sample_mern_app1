const mongoose = require("mongoose");

const hrSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        department: {
            type: String,
            required: true
        },

        phone: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("HR", hrSchema);