import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/top", (req, res) => {
  res.render("top.ejs");
});

app.listen(3000, () => console.log("server running on http://localhost:3000/"));
