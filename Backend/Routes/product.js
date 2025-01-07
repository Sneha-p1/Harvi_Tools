const express = require('express');
const fileUpload = require('express-fileupload'); // Import express-fileupload
const path = require('path');
const fs = require('fs');
const Product = require('../Models/product'); // Import Product schema
const adminAuthMiddleware = require('../Middleware/adminAuthMiddleware.js');
const router = express.Router();

// Enable file upload middleware
router.use(
  fileUpload({
    createParentPath: true, // Create parent directories if they don't exist
    limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB file size limit
  })
);

// Ensure 'uploads' directory exists
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// GET: Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    const productsWithFullImagePath = products.map((product) => ({
      ...product._doc,
      image: product.image ? `${req.protocol}://${req.get('host')}/${product.image}` : null,
    }));
    res.status(200).json(productsWithFullImagePath);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// POST: Add a new product with an image (protected)
router.post('/', adminAuthMiddleware, async (req, res) => {
  const { name, description } = req.body;

  if (!req.files || !req.files.image) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const imageFile = req.files.image;
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];

  if (!allowedMimeTypes.includes(imageFile.mimetype)) {
    return res.status(400).json({ error: 'Invalid file type. Only JPEG, PNG, and JPG are allowed.' });
  }

  const imagePath = `uploads/${Date.now()}-${imageFile.name}`;
  imageFile.mv(path.join(__dirname, `../${imagePath}`), async (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to upload file' });
    }

    try {
      const newProduct = new Product({ name, description, image: imagePath });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add product' });
    }
  });
});

// PUT: Edit an existing product (protected, supports updating image)
router.put('/:id', adminAuthMiddleware, async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    let imagePath = product.image;

    if (req.files && req.files.image) {
      const imageFile = req.files.image;
      const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];

      if (!allowedMimeTypes.includes(imageFile.mimetype)) {
        return res.status(400).json({ error: 'Invalid file type. Only JPEG, PNG, and JPG are allowed.' });
      }

      imagePath = `uploads/${Date.now()}-${imageFile.name}`;
      imageFile.mv(path.join(__dirname, `../${imagePath}`), (err) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to upload file' });
        }
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, image: imagePath },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// DELETE: Delete a product (protected)
router.delete('/:id', adminAuthMiddleware, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;
