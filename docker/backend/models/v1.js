const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  type: { type: String, enum: ['Point'], required: true },
  coordinates: { type: [Number], required: true }
});

const geodataSchema = new mongoose.Schema({
    geometry: pointSchema,
    properties: {
      business_id: { type: String, unique: true, index: true, required: true },
      name: String,
      tel: String,
      address: String,
      category: String,
    }
  },
  {
    collection: 'geodata'
  }
);

geodataSchema.index({'properties.name': 'text', 'properties.category': 'text'});

geodataSchema.statics.findByID = function(ID){
  return this.find().where('properties.business_id', ID);
};

geodataSchema.index({geometry: '2dsphere'});

geodataSchema.statics.findInBox = function(lowerLeft, upperRight){
  return this.find().where('geometry').box(lowerLeft, upperRight);
};


module.exports = mongoose.model('geodata', geodataSchema);
