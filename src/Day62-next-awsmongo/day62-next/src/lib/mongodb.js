import { MongoClient } from 'mongodb';

const DB_URL = process.env.DB_DEV_URL;
const clientPromise = new MongoClient(DB_URL).connect();

export default clientPromise;
