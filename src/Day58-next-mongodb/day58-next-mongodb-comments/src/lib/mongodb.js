const { MongoClient } = require('mongodb');

const DB_URL = process.env.DB_DEV_URL;

const client = new MongoClient(DB_URL);
const clientPromise = client.connect();

export default clientPromise;
