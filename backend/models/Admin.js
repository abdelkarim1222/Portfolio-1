const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: {
        type: String,
        default: 'https://imgs.search.brave.com/qckNHIA3-RFIn9aFlH-zipn-lombVlJzDhCjofSw-bg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93M2ltYWdlcy9h/dmF0YXIyLnBuZw' // Définir une URL par défaut pour l'avatar
    }
});

module.exports = mongoose.model('Admin', adminSchema);
