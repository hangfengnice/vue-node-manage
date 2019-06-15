const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
var Schema = mongoose.Schema;

var stuSchema = new Schema({
  name: String,
  age: Number,
  gender: {
    type: String,
    default: "female"
  },
  address: String
});

var stuModel = mongoose.model("student", stuSchema);

// stuModel.create(
//   [
//     {
//       name: "猪八戒",
//       age: 28,
//       gender: "male",
//       address: "高佬转"
//     },
//     {
//       name: "唐僧",
//       age:16,
//       gender: 'male',
//       address:"女儿国"
//     }
//   ],
//   err => {
//     if (!err) {
//       console.log("ok");
//     }
//   }
// );
// stuModel.find(
  
//     {
//       name: "唐僧",
//       age:16,
//       gender: 'male',
//       address:"女儿国"
//     }
//   ,
//   (err, doc )=> {
//     if (!err) {
//       console.log(doc);
//     }
//   }
// );
// stuModel.find(
  
//     {
//       // name: "唐僧",
//       // age:16,
//       // gender: 'male',
//       // address:"女儿国"
//     }
//   ,"name age -_id",{skip:2,limit:1},
//   (err, doc )=> {
//     if (!err) {
//       console.log(doc);
//     }
//   }
// );
stuModel.findById('5d04888484f5db06adf256b9',
  
  
(err, doc )=> {
  if (!err) {
    console.log(doc);
  }
}
);


