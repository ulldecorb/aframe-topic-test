// Load required modules
const http = require("http");                 // http server core module
const path = require("path");
const express = require("express");           // web framework external module

// Set process name
process.title = "mecanofas-app-server";

// Get port or default to 8080
const port = process.env.PORT || 8080;

// Setup and configure Express http server.
const app = express();
app.use(express.static(path.resolve(__dirname, "..", "web")));

// Start Express http server
const webServer = http.createServer(app);

// Listen on port
webServer.listen(port, () => {
console.log("listening on http://localhost:" + port);
});



