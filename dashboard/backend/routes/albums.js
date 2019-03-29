const express = require('express');
const albumsRoutes = express.Router();

// Require Albums model in our routes module
let Albums = require('../albums.model');

// Defined store route
albumsRoutes.route('/add').post(function (req, res) {
  let albums = new Albums(req.body);
  albums.save()
    .then(albums => {
      res.status(200).json({'albums': 'albums in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
albumsRoutes.route('/').get(function (req, res) {
    Albums.find(function(err, allalbums){
    if(err){
      console.log(err);
    }
    else {
      res.json(allalbums);
    }
  });
});

// Defined edit route
albumsRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
    Albums.findById(id, function (err, albums){
      res.json(albums);
  });
});

//  Defined update route
albumsRoutes.route('/update/:id').post(function (req, res) {
    Albums.findById(req.params.id, function(err, albums) {
    if (!albums)
      res.status(404).send("data is not found");
    else {
        albums.person_name = req.body.person_name;
        albums.albums_name = req.body.albums_name;
        albums.albums_gst_number = req.body.albums_gst_number;

        albums.save().then(albums => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
albumsRoutes.route('/delete/:id').get(function (req, res) {
    Albums.findByIdAndRemove({_id: req.params.id}, function(err, albums){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = albumsRoutes;