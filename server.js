const express = require('express')
//path?
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const dotenv = require('dotenv')
dotenv.config()
const db = require('./db')
const AppRouter = require('./routes/AppRouter')
