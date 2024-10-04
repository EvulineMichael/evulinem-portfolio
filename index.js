import express from "express";
import path from "path"; // Import path module for handling file paths
import { fileURLToPath } from "url"; // Import fileURLToPath to get current file path

const app = express();
const port = 3000;

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Use dirname to get the directory name

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Specify the views directory

app.use(express.static("public")); // Serve static files from the "public" directory

// Define routes to render EJS files
app.get("/", (req, res) => {
  res.render("index", { activePage: 'home' }); // Render index.ejs and pass the activePage
});

app.get("/about", (req, res) => {
  res.render("about", { activePage: 'about' }); // Render about.ejs and pass the activePage
});

app.get("/contact", (req, res) => {
  res.render("contact", { activePage: 'contact' }); // Render contact.ejs and pass the activePage
});

app.get("/services", (req, res) => {
  res.render("services", { activePage: 'services' }); // Render services.ejs and pass the activePage
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
