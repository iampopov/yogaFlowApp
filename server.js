const express = require("express");
const db = require("./models");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const session = require("express-session");
const passport = require("./config/passport");

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


db.sequelize.sync({ force: true }).then(function () {

  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  })
});
