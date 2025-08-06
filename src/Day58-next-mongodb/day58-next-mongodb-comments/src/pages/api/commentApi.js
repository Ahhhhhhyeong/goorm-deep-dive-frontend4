import clientPromise from '@/lib/mongodb';
import React from 'react';

export default async function commentApi(req, res) {
  try {
    const client = await clientPromise;
    const database = client.db('sample_mflix');

    //comment 값 불러오기
    const comments = await database.collection('comments').find().limit(20).toArray();

    return res.status(200).json({ message: '데이터 가져오기 성공', data: comments });
  } catch (error) {
    console.error('ERROR 발생: ', error);
    return res.status(500).json({ message: '연결 실패' });
  }
}
