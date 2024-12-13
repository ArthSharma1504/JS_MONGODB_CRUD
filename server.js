const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Setup Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Create a schema for Items
const itemSchema = new mongoose.Schema({
  name: String,
  description: String
});
const Item = mongoose.model('Item', itemSchema);

// CRUD API routes

// Create Item
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  const newItem = new Item({ name, description });
  newItem.save()
    .then(item => res.status(201).json(item))
    .catch(err => res.status(400).json({ error: 'Failed to add item' }));
});

// Read all Items
app.get('/items', (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json({ error: 'Failed to fetch items' }));
});

// Update Item
app.put('/items/:id', (req, res) => {
  const { name, description } = req.body;
  Item.findByIdAndUpdate(req.params.id, { name, description }, { new: true })
    .then(item => res.json(item))
    .catch(err => res.status(400).json({ error: 'Failed to update item' }));
});

// Delete Item
app.delete('/items/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Item deleted' }))
    .catch(err => res.status(400).json({ error: 'Failed to delete item' }));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
