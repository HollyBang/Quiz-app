const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');

require('./models/Login');


const keys = require('./config/keys');


const login = require('./routes/login');


const PORT = process.env.PORT || 5000;
mongoose.Promise = global.Promise;

//mongo test
mongoose.connect(keys.mongoURI)
  .then(() =>
    console.log('mongoDb is connected'))
  .catch(err => console.log(err))

const app = express();
app.use(cookieParser());


app.use(express.static(path.resolve(__dirname, '../react/build')));

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', login);


app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../react/build', 'index.html'));
});

app.listen(PORT, function () {
  console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});
