import express from "express";

const router = express.Router();
const options = { root: "./public/pages" };
router.get("/", (req, res) => {
  res.sendFile("home.html", options);
});
router.get("/movie", (req, res) => {
  res.sendFile("movie.html", options);
});
router.get("/search", (req, res) => {
  res.sendFile("search.html", options);
});
router.get("/contact", (req, res) => {
  res.sendFile("contact.html", options);
});
router.get("/detail", (req, res, next) => {
  res.sendFile("detail.html", options);
});

export { router };
