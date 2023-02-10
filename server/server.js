const stripe = require('stripe')(
  'sk_test_51MY8fBAcLxoBdYjXcl7LESAvMN7PyOLvQN7KQTyANt1nswIwBDjxey8xIdkv29o5nNG3ARKzLTRrJhrpqFD9AfHW00mGjcrOfu',
);
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('hello----------------------->');
});

app.post('/payment-sheet', async (req, res) => {
  const {amount, currency} = req.body;

  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2022-11-15'},
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: currency,
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
  });
});
app.listen(4402, () => {
  console.log('server in http://localhost:4402 ');
});
