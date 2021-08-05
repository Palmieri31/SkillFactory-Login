const express = require('express');
const loginRoutes = require('./routes/login.routes');
const greetingRoutes = require('./routes/greeting.routes');

const app = express();

app.use(express.json());

app.use('/api/login', loginRoutes);
app.use('/api/greeting', greetingRoutes);

module.exports = app;