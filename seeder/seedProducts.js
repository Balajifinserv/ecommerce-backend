import mongoose from 'mongoose';
import 'dotenv/config';
import Product from '../models/Product.js';
import sampleProducts from './products.js';

const seedProducts = async () => {
  try {
    // Connect to the database
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Delete existing products
    await Product.deleteMany({});
    console.log('Existing products deleted');

    // Insert new products
    const createdProducts = await Product.insertMany(sampleProducts);
    console.log(`${createdProducts.length} products seeded successfully`);

    // Close the connection
    await mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();
