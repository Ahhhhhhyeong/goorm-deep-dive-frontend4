// lib/mongodb.js
import { MongoClient } from 'mongodb';

const DB_URL: string = process.env.DB_DEV_URL as string;
// const DB_URL = process.env.DB_TEST_URL;
if (!DB_URL) {
  throw new Error('DB connection string is missing. Please set DB_DEV_URL');
}
// 몽고디비에 연결하기 위한 객체 생성
const client = new MongoClient(DB_URL);

const clientPromise: Promise<MongoClient> = client.connect();

export default clientPromise;
