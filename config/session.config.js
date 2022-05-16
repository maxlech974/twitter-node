const { app } = require('../app');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
require('dotenv').config();


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: false,
    maxAge: 1000 * 60 * 60 * 24 * 14
  },
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB,
    ttl: 60 * 60 *24 * 14 
  })
}))