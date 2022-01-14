const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.checkoutSession = async (req, res) => {
  const { id, title, description, price } = await req.body
  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price_data: {
        unit_amount: price,
        currency: 'EUR',
        product_data: {
          name: title,
          description: description
        }
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${req.headers.origin}/?success=true`,
    cancel_url: `${req.headers.origin}/?canceled=true`
  });

  res.status(200).json(session.url);
};

exports.verifyToken = (req, res) => {
  if (req.user) {
      res.status(200).json({verify:true})
  }
}