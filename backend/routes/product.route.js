import express from "express";
import Product from "../models/product.model.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        if (!product.name || !product.price || !product.image ) {
            return res.status(400).json({success: false, message: "Please fill all required fields" });
        }
        await product.save();
        res.status(201).json({success: true, message: "Product created successfully", product });
    } catch (error) {
        res.status(400).json({success: false, message: error.message });
    }
});

export default router;
