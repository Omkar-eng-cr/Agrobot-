const express = require("express");
const router = express.Router();

// Example sensor data (later from database or IoT)
let sensorData = {
  moisture: 45,
  density: 1.3,
  nitrogen: 42,
  ph: 6.5,
  disease: "Healthy",
  updatedAt: new Date().toLocaleTimeString()
};

// Dashboard Page
router.get("/", (req, res) => {
  res.render("dashboard", { data: sensorData });
});

// Simulate refreshing sensor data
router.get("/refresh", (req, res) => {
  sensorData = {
    ...sensorData,
    moisture: Math.floor(Math.random() * 100),
    updatedAt: new Date().toLocaleTimeString(),
  };
  res.redirect("/");
});

// Control bot actions
router.post("/control", (req, res) => {
  const { action } = req.body;
  console.log(`🦾 Bot Action Triggered: ${action}`);
  // Here you can send the action to your bot via MQTT / API
  res.redirect("/");
});

module.exports = router;
