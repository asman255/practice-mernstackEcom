// place orders using COD method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
  } catch (error) {}
};
// place orders using stripe method
const placerderStripe = async (req, res) => {};
// place orders using razorpay method
const placeOrderRazorpay = async (req, res) => {};

// All orders data for admin panel

const allOrders = async (req, res) => {};

// user order data for frontend

const userOrders = async (req, res) => {};

// update order status from admin panel
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placerderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
