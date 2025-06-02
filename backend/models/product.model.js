import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    image: {
        type: String,
        required: [true, "Image is required"]
    },
    category: {
        type: String,
        default: "General"
    }
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);

export default Product;

