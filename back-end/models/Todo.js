const mongoose = require("mongoose");

const DescriptionSchema = new mongoose.Schema({
    description: String
});

module.exports = mongoose.model("Description", DescriptionSchema);

