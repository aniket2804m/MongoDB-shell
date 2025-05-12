// mongoose installation
// npm i mongoose
// npm i express
// npm i nodemon

// Mongoose first code
const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// Insert
// const user1 = new User({
//   name: "aniket",
//   email: "aniket@gmail.com",
//   age: 22,
// });

user1.save();

// InsertMany:-
// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 22 },
//   { name: "peter", email: "peter@gamil.com", age: 30 },
//   { name: "Brruce", email: "bruce@gmail.com", age: 27 },
// ]).then((res) => {
//   console.log(res);
// });

// Find in MongoDB :-
// User.find({ age : {$gt: 30}})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// findOne :-
// User.findOne({_id: '681e05c5b692738141f5e381'})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// findById :-
//  User.findById('681e05c5b692738141f5e381')
//  .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Update :-
// UpdateOne:-
// User.updateOne({name: "aniket"}, {age: 49})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// UpdateMany:-
// User.updateMany({age: {$gt:30}}, {age:55})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// Upadate with findOneAndUpdate:-
// User.findOneAndUpdate({name: "Tony"}, {age: 49}, {new:true})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// Delete :-
// deleteOne:-
// User.deleteOne({name: "Brruce"})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// deletemany:-
// User.deleteMany({name: "peter"})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });