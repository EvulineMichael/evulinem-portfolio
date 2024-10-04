import express from "express";
import path from "path"; // Import path module for handling file paths
import { fileURLToPath } from "url"; // Import fileURLToPath to get current file path

const app = express();
const port = 3000;

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Use dirname to get the directory name

app.use(express.static("public")); // Serve static files from the "public" directory

// Define the view engine to HTML files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html")); // Serve index.html
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html")); // Serve about.html
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html")); // Serve contact.html
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "services.html")); // Serve services.html
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
