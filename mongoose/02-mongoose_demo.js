const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
var Schema = mongoose.Schema;

var stuSchema = new Schema({
  name:  String,
  age: Number,
  gender: {
    type: String,
    default: "female"
  },
  address: String
  
});

var stuModel = mongoose.model('student', stuSchema);

stuModel.create({
  name: '白骨精',
  age: 18,
  address: "白骨洞"
},(err)=> {
if(!err){
  console.log('ok')
}
})