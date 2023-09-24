import express, { json } from "express";
const app = express();
const port = 3000;
import Razorpay from "razorpay";
import cors from "cors";



app.use(json());
app.use(cors());


app.post("/payment", async (req, res) => {
  let { amount } = req.body;
  var instance = new Razorpay({
    key_id: "rzp_test_ZJAL1yv3qWVFKs",
    key_secret: "9EwvtEab6CjBfnOI9QbWietc",
  });

  let order = await instance.orders.create({
    amount: amount * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  });
  res.status(201).json({
    success: true,
    order,
    amount,
  });
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
