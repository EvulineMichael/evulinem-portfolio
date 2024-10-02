import express from "express";


const app = express();
const port = 3000;


app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { activePage: 'home' });
});

app.get("/about", (req, res) => {
  res.render("about.ejs", { activePage: 'about' });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs", { activePage: 'contact' });
});

app.get("/services", (req, res) => {
  res.render("services.ejs", { activePage: 'services' });
});
app.get("/portfolio", (req,res) =>{
  res.render("portfolio.ejs", { activePage: 'portfolio' })
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
