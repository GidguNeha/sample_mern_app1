const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const hrRoutes = require("./routes/hr_routes");
const empRoutes = require("./routes/emp_routers");

const app = express();

app.use(express.json());

app.use("/api/hr", hrRoutes);
app.use("/api/emp", empRoutes);

app.get("/", (req, res) => {
    res.send("Sample MERN App Server is Working!");
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error.message);
    });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});