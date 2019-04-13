const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const dotenv = require("dotenv");
var Twitter = require("twitter");
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    return res.status(200).json({});
  }
  next();
});
app.get("/test", (req, res) => {
  res.send("hello");
  console.log("hello");
});
app.post("/searchTweet", (req, res) => {
  console.log("searching...");
  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
  client.get("search/tweets", { q: "$" + req.body.search }, function(
    error,
    tweets,
    response
  ) {
    console.log(tweets);
  });
  client.stream("statuses/filter", { track: "$" + req.body.search }, function(
    stream
  ) {
    stream.on("data", function(tweet) {
      console.log(tweet.text);
    });

    stream.on("error", function(error) {
      console.log(error);
    });
  });
  res.sendStatus(200);
});

app.listen(8080, () => {
  console.log("connected to server");
});
