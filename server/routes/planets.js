import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { Router } from 'express';
import dotenv from 'dotenv';
import process from 'process';

const router = Router();

// Load environment variables from .env.local in current working directory
const envPath = process.cwd() + '../../.env.local';
console.log('Trying to access env file:', envPath);
dotenv.config({ path: envPath });

// Connect to MongoDB
if (mongoose.connection.readyState === 0) {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
        throw new Error('MONGODB_URI environment variable is not defined. Please check your .env.local file.');
    }
    mongoose.connect(`${mongoUri}/SOLAR_INFO`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("✅ Connected to SOLAR_INFO DB"))
      .catch(err => console.error("❌ MongoDB connection error:", err));
}

// Define planet schema outside the route handler
const planetSchema = new Schema({
    info: { type: String, required: true }, 
    title: { type: String, required: true },
});

// Force collection name to exactly "Planets"
const Planet = mongoose.models.Planet || model('Planet', planetSchema, 'Planets');

router.get('/:slug', async (req, res, next) => {
    try {
        const planetName = req.params.slug;
        console.log("🔎 Searching for:", planetName);

        // Case-insensitive match on title
        const data = await Planet.find({
            title: { $regex: new RegExp(`^${planetName}$`, 'i') }
        });

        // console.log("✅ Result:", data);
        res.status(200).json({ data });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

    next();
});

export default router;
