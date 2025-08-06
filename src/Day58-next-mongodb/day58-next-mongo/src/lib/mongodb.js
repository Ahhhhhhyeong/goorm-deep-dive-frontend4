// lib/mongodb.js
import { MongoClient } from 'mongodb';

const DB_URL = process.env.DB_DEV_URL;
// const DB_URL = process.env.DB_TEST_URL;

// 몽고디비에 연결하기 위한 객체 생성
const client = new MongoClient(DB_URL);

const clientPromise = client.connect();

export default clientPromise;
