const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
const dashboardRoute = require("./routes/dashboard");
app.use("/", dashboardRoute);

// Start Server
const PORT = 8080;
app.listen(PORT, () => console.log(`✅ AgroBot server running on http://localhost:${PORT}`));
