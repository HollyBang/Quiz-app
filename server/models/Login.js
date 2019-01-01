const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema

const Admin = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// create collection and add schema

mongoose.model('admin', Admin);