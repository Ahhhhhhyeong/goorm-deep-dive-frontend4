import clientPromise from '@/lib/utils/mongodb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db('GoormStudy');

    const result = db.collection('users').insertOne(body);

    return NextResponse.json({ message: 'Event Added successfully', result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed Added successfully' }, { status: 500 });
  }
}
