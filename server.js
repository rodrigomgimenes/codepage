const express  = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

// Routes
// require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)

mongoose.connect(process.env.MONGODB_URI || "mongodb://rodrigomgimenes:password1@ds149806.mlab.com:49806/heroku_7w5vdz8t", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on: http://localhost:${PORT}/`);
});
