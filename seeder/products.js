import mongoose from 'mongoose';
import 'dotenv/config';
import Product from '../models/Product.js';

const sampleProducts = [
  {
    name: "iPhone 14 Pro",
    description: "Apple's latest flagship smartphone with advanced camera system and A16 Bionic chip",
    price: 999.99,
    images: [
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb",
      "https://images.unsplash.com/photo-1678685888221-additional1.jpg"
    ],
    category: "electronics",
    stock: 50,
    features: [
      "A16 Bionic chip",
      "48MP main camera",
      "Dynamic Island",
      "Super Retina XDR display"
    ],
    specifications: {
      "Screen Size": "6.1 inches",
      "Storage": "128GB",
      "Color": "Space Black",
      "Battery": "3200mAh"
    }
  },
  {
    name: "Samsung 4K Smart TV",
    description: "65-inch QLED 4K Smart TV with quantum processor and HDR",
    price: 1299.99,
    images: [
      "https://images.unsplash.com/photo-1601944179066-29786cb9d32a",
      "https://images.unsplash.com/photo-1601944179066-additional1.jpg"
    ],
    category: "electronics",
    stock: 30,
    features: [
      "4K QLED Display",
      "Smart Hub",
      "Quantum HDR",
      "Built-in Voice Assistants"
    ],
    specifications: {
      "Screen Size": "65 inches",
      "Resolution": "4K Ultra HD",
      "HDR": "Quantum HDR",
      "Smart Platform": "Tizen"
    }
  },
  {
    name: "Nike Air Max",
    description: "Classic running shoes with Air cushioning for maximum comfort",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1542291026-additional1.jpg"
    ],
    category: "clothing",
    stock: 100,
    features: [
      "Air cushioning",
      "Mesh upper",
      "Rubber outsole",
      "Foam midsole"
    ],
    specifications: {
      "Material": "Mesh and synthetic",
      "Closure": "Lace-up",
      "Sole": "Rubber",
      "Style": "Running"
    }
  },
  {
    name: "Levi's 501 Original Jeans",
    description: "Classic straight fit jeans with button fly",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
      "https://images.unsplash.com/photo-1542272604-additional1.jpg"
    ],
    category: "clothing",
    stock: 150,
    features: [
      "Original fit",
      "Button fly",
      "5-pocket styling",
      "100% cotton"
    ],
    specifications: {
      "Material": "100% Cotton",
      "Fit": "Regular Straight",
      "Rise": "Mid Rise",
      "Wash": "Medium Stonewash"
    }
  },
  {
    name: "The Psychology of Money",
    description: "Timeless lessons on wealth, greed, and happiness",
    price: 19.99,
    images: [
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666",
      "https://images.unsplash.com/photo-1592496431122-additional1.jpg"
    ],
    category: "books",
    stock: 75,
    features: [
      "Bestseller",
      "Personal Finance",
      "Behavioral Economics",
      "Investment Advice"
    ],
    specifications: {
      "Format": "Hardcover",
      "Pages": "256",
      "Author": "Morgan Housel",
      "Publisher": "Harriman House"
    }
  },
  {
    name: "Dyson Air Purifier",
    description: "Smart air purifier with HEPA filter and air quality monitoring",
    price: 499.99,
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
      "https://images.unsplash.com/photo-1585771724684-additional1.jpg"
    ],
    category: "home",
    stock: 25,
    features: [
      "HEPA Filter",
      "Air Quality Monitoring",
      "Quiet Operation",
      "Smart Connectivity"
    ],
    specifications: {
      "Filter Type": "HEPA",
      "Room Size": "Up to 400 sq ft",
      "Noise Level": "35-60 dB",
      "Connectivity": "Wi-Fi"
    }
  },
  {
    name: "MacBook Pro 16",
    description: "Apple's most powerful laptop with M2 Pro chip",
    price: 2499.99,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca4",
      "https://images.unsplash.com/photo-1517336714731-additional1.jpg"
    ],
    category: "electronics",
    stock: 25,
    features: [
      "M2 Pro Chip",
      "Liquid Retina XDR Display",
      "Advanced Camera and Audio",
      "Long Battery Life"
    ],
    specifications: {
      "Screen Size": "16 inches",
      "Processor": "Apple M2 Pro",
      "RAM": "16GB",
      "Storage": "512GB SSD"
    }
  },
  {
    name: "Sony WH-1000XM4",
    description: "Premium noise-cancelling headphones",
    price: 349.99,
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
      "https://images.unsplash.com/photo-1618366712010-additional1.jpg"
    ],
    category: "electronics",
    stock: 60,
    features: [
      "Industry-leading Noise Cancellation",
      "30-hour Battery Life",
      "Touch Controls",
      "Multipoint Connection"
    ],
    specifications: {
      "Type": "Over-ear",
      "Noise Cancellation": "Active",
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.0"
    }
  },
  {
    name: "Adidas Ultraboost",
    description: "Premium running shoes with responsive cushioning",
    price: 179.99,
    images: [
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
      "https://images.unsplash.com/photo-1587563871167-additional1.jpg"
    ],
    category: "clothing",
    stock: 80,
    features: [
      "Boost Midsole",
      "Primeknit Upper",
      "Continental Rubber Outsole",
      "Supportive Heel Counter"
    ],
    specifications: {
      "Material": "Primeknit",
      "Sole": "Boost Midsole",
      "Closure": "Lace-up",
      "Style": "Running"
    }
  },
  {
    name: "The Lean Startup",
    description: "How Today's Entrepreneurs Use Continuous Innovation",
    price: 24.99,
    images: [
      "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6",
      "https://images.unsplash.com/photo-1588666309990-additional1.jpg"
    ],
    category: "books",
    stock: 100,
    features: [
      "Entrepreneurship Guide",
      "Innovation Strategy",
      "Business Development",
      "Startup Methodology"
    ],
    specifications: {
      "Format": "Paperback",
      "Pages": "336",
      "Author": "Eric Ries",
      "Publisher": "Currency"
    }
  },
  {
    name: "Philips Hue Starter Kit",
    description: "Smart LED lighting system",
    price: 199.99,
    images: [
      "https://images.unsplash.com/photo-1557318041-1ce374d55ebf",
      "https://images.unsplash.com/photo-1557318041-additional1.jpg"
    ],
    category: "home",
    stock: 45,
    features: [
      "Color Changing",
      "App Control",
      "Voice Assistant Compatible",
      "Energy Efficient"
    ],
    specifications: {
      "Bulbs": "3 Color Bulbs",
      "Bridge": "Included",
      "Compatibility": "Alexa, Google Home, Apple HomeKit",
      "Connectivity": "Wi-Fi, Bluetooth"
    }
  }
];

export default sampleProducts;

const seedProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Delete existing products
    await Product.deleteMany({});
    console.log('Deleted existing products');

    // Insert new products
    await Product.insertMany(sampleProducts);
    console.log('Sample products inserted successfully');

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();
