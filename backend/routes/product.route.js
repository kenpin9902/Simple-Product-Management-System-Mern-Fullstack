import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";

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

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({success: true, products });
    } catch (error) {
        res.status(400).json({success: false, message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({success: false, message: "Invalid Product ID" });
        }
        res.status(200).json({success: true, message: "Product updated successfully", product });
    } catch (error) {
        res.status(400).json({success: false, message: error.message });
    }
});

export default router;
