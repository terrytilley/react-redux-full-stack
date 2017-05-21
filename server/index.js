const http = require('http');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const config = require('./config');
const router = require('./router');

// DB Setup
mongoose.connect(config.database);

// App Setup
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || config.port;
const server = http.createServer(app);
server.listen(port);
