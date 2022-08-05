const express = require('express')
const app = express()
app.use(express.json())
require("dotenv").config()
const connect = require("./config/db")
const allItemController = require('./controller/allItemController')
const chickenRollsController = require('./controller/chickenRollsController')
const popCornController = require('./controller/popCornController')
const hotDealsController = require('./controller/hotDealsController')
const chickenBucketController = require('./controller/chickenBucketController')
const boxMealController = require('./controller/boxMealController')
const burgerController = require('./controller/burgerController')
const biriyaniController = require('./controller/biriyaniController') 
const snacksController = require('./controller/snacksController')
const drinksController = require('./controller/drinksController')
const cartController = require('./controller/cartController')
const Razorpay = require('razorpay')
const cors = require("cors");
const helmet = require("helmet");
const crypto = require("crypto");
const port = process.env.PORT || 8787
app.use('/allItem', allItemController)
app.use('/chicken_rolls', chickenRollsController)
app.use('/popCorn', popCornController)
app.use('/hotDeal', hotDealsController)
app.use('/chicken_bucket', chickenBucketController)
app.use('/boxMeal', boxMealController)
app.use('/burger', burgerController)
app.use('/biriyani', biriyaniController)
app.use('/snacks', snacksController)
app.use('/drinks', drinksController)
app.use('/cart', cartController)
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [`http://localhost:${port}/razorpay`],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(helmet());
app.post("/orders", async (req, res) => {
    try {
      const instance = new Razorpay({
        key_id: "rzp_test_jdpRfTxtTkdTxk",
        key_secret: '03StFEnZ3QNZRQNi5wCpgzuH',
      });
      const options = {
        amount: req.body.amount * 100,
        currency: "INR",
        receipt: crypto.randomBytes(10).toString("hex"),
      };
  
      instance.orders.create(options, (error, order) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Something went wrong!" });
        }
        res.status(200).json({ data: order });
      });
    } catch (err) {
      console.log("err:", err);
      res.status(500).json({ message: "Inernal Server Error!" });
    }
  });
  
  // Payment Verifying
  app.post("/verify", async (req, res) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;
      const sign = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSign = crypto
        .createHmac("sha256", '03StFEnZ3QNZRQNi5wCpgzuH')
        .update(sign.toString())
        .digest("hex");
  
      if (razorpay_signature === expectedSign) {
        return res.status(200).json({ message: "Payment Varified Successfully" });
      } else {
        return res.status(400).json({ message: "Invalid Signature send!" });
      }
    } catch (err) {
      console.log("err:", err);
      res.status(500).json({ message: "Inernal Server Error!" });
    }
  });
app.get('/verify/my', async(req, res) => {
    try {
        return res.status(200).send('yes... you got it')
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})


app.listen(port, async () => {
    try {
         connect()
        console.log('connected')
        
    }
    catch (err) {
        console.log(err.message)
    }
    console.log("port 8787 running")
})







