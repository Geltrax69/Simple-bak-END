const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route'); // add this line

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTES
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
  res.send('Working');
});

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error('MONGODB_URI is not set. Copy .env.example to .env and fill it in, or export MONGODB_URI.');
  process.exit(1);
}

mongoose.connect(mongoUri)
 .then(() => {
    console.log('Connected!')
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
 .catch((err) => console.error(err)); // define the error in the catch block