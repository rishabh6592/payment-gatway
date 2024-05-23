var express = require('express');
var router = express.Router();
const Razorpay = require("razorpay");
var instance = new Razorpay({
  key_id: 'rzp_test_RIgj450IMnWsnb',
  key_secret: 'qmG0A7tALIFI1Im8bby8FbC2',
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/create/orderId",(req,res,)=>{
  var options = {
    amount: 40000,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  instance.orders.create(options, function(err, order) {
    console.log(order);
    res.send(order)
  });
})





module.exports = router;
