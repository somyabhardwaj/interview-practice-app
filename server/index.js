const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectToMongo = require('./db/connectToDb'); // Import the connectToDb function
dotenv.config();
const PORT = process.env.PORT || 6002; // Default to port 6002 if not defined
const app = express();
app.use(express.json());
app.use(cors());
// Connect to MongoDB before starting the server
connectToMongo().then(() => {
    app.listen(PORT, () => {
        console.log(`App is listening at ${PORT}`);
    });
}).catch((error) => {
    console.error("Error starting the server:", error);
    process.exit(1); // Exit the process if MongoDB connection fails
});
// API to list all databases and collections
// app.get("/list-databases", async (req, res) => {
//     try {
//         const client = mongoose.connection.client; // Access the MongoDB client directly
//         const adminDb = client.db().admin(); // Access the admin database    
//         // List all databases
//         const dbList = await adminDb.listDatabases();
//         // Create an array to hold the databases and their collections
//         const dbDetails = [];
//         // For each database, list its collections
//         for (const db of dbList.databases) {
//             const dbName = db.name;
//             const collections = await client.db(dbName).listCollections().toArray();
//             dbDetails.push({ dbName, collections: collections.map(c => c.name) });
//         };
//         // Return the list of databases and collections
//         res.status(200).json({ success: true, dbDetails });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, error: error.message });
//     }
// });

app.get("/list", async (req, res) => {
    const client = mongoose.connection.client;
    const adminDb = client.db().admin()
     const dbs = await adminDb.listDatabases();
     console.log(dbs)
});
