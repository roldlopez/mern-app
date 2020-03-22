const express = require("express");
const router = express.Router();

const descriptionModel = require("../models/Todo"); 

router.get("/description", async (req, res) => {
    try {
        const data = await descriptionModel.find({});
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
    }
});

router.post("/description", async (req, res) => {
    try {
        const { description } = req.body;
        console.log(description);
        const document = new descriptionModel({
            description
        });
        await document.save();
        res.status(201).json({status:"success"});

    } catch (error) {
        console.error(error.message);
    }
});

router.put("/description/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const result = await descriptionModel.findByIdAndUpdate(id, {description});
        res.json({status:"item updated succesfully"});
    } catch (error) {
        console.error(error.message);
    }
});

router.delete("/description/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deteledItem = await descriptionModel.findByIdAndDelete(id);
        res.json({status:"item deleted succesfully"});
    } catch (error) {
        console.error(error.message);
    }
});

module.exports = router;
