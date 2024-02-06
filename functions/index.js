

const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")( "sk_test_51NZjJlFjixT0xODnLWSIjnwRYDMJ7owifod0pQftAfp0mImD7CG7FvDy92H0gUr5BmZKvkQ6RbLvPTbZi2ZS9sRC00EHEeU4PQ",
);

// - App config
const app = express();

// - Middlwares
app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// // - Listen commands
exports.api = functions.https.onRequest(app);
