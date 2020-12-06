const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo-db/gmapzip',
                {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
mongoose.set('debug', true);

const express = require('express');
const app = express();
const port = 8090;

app.use('/api/v1', require('./apis/v1'));

app.listen(port);
