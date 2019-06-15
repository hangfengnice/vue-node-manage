
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connection.once('open',() => {
  console.log('ok')
})