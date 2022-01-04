var express = require("express");
var router = express.Router();
var format = require("date-fns/format");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: format(new Date(2022, 0, 1, 14, 25), "MMM d, yyyy 'at' h:mmaaa"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: format(new Date(2022, 0, 1, 15, 47), "MMM d, yyyy 'at' h:mmaaa"),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.post("/new", function (req, res) {
  messages.push({
    text: req.body.messageContent,
    user: req.body.author,
    added: format(new Date(), "MMM d, yyyy 'at' h:mmaaa"),
  });
  res.redirect("/");
});

module.exports = router;
