const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Albums
let Albums = new Schema({
  nom: {
    type: String
  },
  artiste: {
    type: String
  },
  date: {
    type: Date
  },
  style: {
    type: String
  },
  nombre_de_titres: {
    type: Number
  }

},{
    collection: 'albums'
});

module.exports = mongoose.model('Albums', Albums);