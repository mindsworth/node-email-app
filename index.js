const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./services/passport');
require('./models/user');

mongoose
  .connect(keys.mongoURL)
  .then(() => {
    console.log('Database Conneccted!');
  })
  .catch(() => {
    console.log('Unable to connect to the pointed Database!!');
  });

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The server is listening at port ${PORT}`);
});
