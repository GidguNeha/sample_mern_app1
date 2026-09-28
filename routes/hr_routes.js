const express = require("express");
const router = express.Router();

const HR = require("../models/hr");

// GET all HR records
router.get("/", async (req, res) => {
    try {
        const hr = await HR.find();
        res.json(hr);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching HR records",
            error: error.message
        });
    }
});

// GET HR by ID
router.get("/:id", async (req, res) => {
    try {
        const hr = await HR.findById(req.params.id);

        if (!hr) {
            return res.status(404).json({
                message: "HR record not found"
            });
        }

        res.json(hr);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching HR record",
            error: error.message
        });
    }
});

// CREATE HR
router.post("/", async (req, res) => {
    try {
        const newHR = new HR(req.body);
        const savedHR = await newHR.save();

        res.status(201).json(savedHR);
    } catch (error) {
        res.status(400).json({
            message: "Error creating HR record",
            error: error.message
        });
    }
});

// UPDATE HR
router.put("/:id", async (req, res) => {
    try {
        const updatedHR = await HR.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedHR) {
            return res.status(404).json({
                message: "HR record not found"
            });
        }

        res.json(updatedHR);
    } catch (error) {
        res.status(400).json({
            message: "Error updating HR record",
            error: error.message
        });
    }
});

// DELETE HR
router.delete("/:id", async (req, res) => {
    try {
        const deletedHR = await HR.findByIdAndDelete(req.params.id);

        if (!deletedHR) {
            return res.status(404).json({
                message: "HR record not found"
            });
        }

        res.json({
            message: "HR record deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting HR record",
            error: error.message
        });
    }
});

module.exports = router;