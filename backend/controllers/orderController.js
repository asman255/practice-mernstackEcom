import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
// place orders using COD method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    console.log(newOrder);

    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, messege: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, messege: error.messege });
  }
};
// place orders using stripe method
const placerderStripe = async (req, res) => {};
// place orders using razorpay method
const placeOrderRazorpay = async (req, res) => {};

// All orders data for admin panel

const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, messege: error.messege });
  }
};

// user order data for frontend

const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, messege: error.messege });
  }
};

// update order status from admin panel
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, messege: "Status updateded" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, messege: error.messege });
  }
};

export {
  placeOrder,
  placerderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
