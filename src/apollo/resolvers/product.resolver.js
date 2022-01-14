const Product = require('../../models/product.model');

module.exports = {
    Query: {
        getProducts: () => {
            return Product.find();
        },
        getProduct(parent, args, context) {
            return Product.findById(args.id);
        }
    },
    Mutation: {
        createProduct(parent, args) {
            const newProduct = new Product(
                {
                    title: args.title,
                    description: args.description,
                    img_uri: args.img_uri,
                    price: args.price
                }
            )
            return newProduct.save();
      }
    }

}