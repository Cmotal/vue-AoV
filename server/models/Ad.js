const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  item: [{
    imgs: {
      type: String
    },
    url: {
      type: String
    }
  }],

})

module.exports = mongoose.model('Ad', schema)