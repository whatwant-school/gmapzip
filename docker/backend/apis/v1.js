const express = require('express');
const router = express.Router();

const geodata = require('../models/v1');

router.get('/within', function(request, response) {
  geodata.findInBox([Number(request.query.left), Number(request.query.lower)],
                    [Number(request.query.right), Number(request.query.upper)])
          .exec(function(error, result){
    if (error) return response.status(500).json(error);
    return response.json(result);
  });
});


router.get('/:id', function(request, response) {
  geodata.findByID(request.params.id).exec(function(error, result){
    if (error) return response.status(500).json(error);
    return response.json(result[0]);
  });
});

module.exports = router;
