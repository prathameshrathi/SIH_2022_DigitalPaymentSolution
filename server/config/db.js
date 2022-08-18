const mongoose = require("mongoose");
const mongodbUrl = process.env.MONGO_URI;
mongoose.connect(mongodbUrl)
  .then(() => {
    console.log(`Connected to database`);
  })
  .catch((err) => {
    console.log(err);
    console.log(`Connection to database failed`);
  });
