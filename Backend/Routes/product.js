const express = require('express');
const Product = require('../Models/product'); // Import Product schema
const adminAuthMiddleware=require('../Middleware/adminAuthMiddleware.js')
const router = express.Router();


// const adminAuthMiddleware = (req, res, next) => {
//     const adminPassword = process.env.ADMIN_PASSWORD;
//     if (req.headers['x-admin-password'] === adminPassword) {
//         next();
//     } else {
//         res.status(403).json({ error: "Unauthorized" });
//     }
// };


// GET: Fetch all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// POST: Add a new product (protected)
router.post('/',adminAuthMiddleware, async (req, res) => {
    const { name, description } = req.body;
    try {
        const newProduct = new Product({ name, description });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: "Failed to add product" });
    }
});

// PUT: Edit an existing product (protected)
router.put('/:id',adminAuthMiddleware, async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, description },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: "Failed to update product" });
    }
});

// DELETE: Delete a product (protected)
router.delete('/:id',adminAuthMiddleware, async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete product" });
    }
});

module.exports = router;
