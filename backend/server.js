import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import productRoute from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/products', productRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
