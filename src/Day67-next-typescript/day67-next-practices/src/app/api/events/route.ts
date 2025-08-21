import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { WithId } from 'mongodb'; // WithId 타입 임포트

export async function GET() {
  // 서버 연결 및 가져오기
  try {
    const client = await clientPromise;
    const db = client.db('GoormStudy');

    // event 값 불러오기
    const events = await db.collection('event').find().limit(20).toArray();
    return NextResponse.json({ data: events }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: '연결 실패' });
  }
}

export async function POST(req: Request) {
  try {
    // body의 json 파싱
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db('GoormStudy');

    const result = db.collection('event').insertOne(body);

    return NextResponse.json({ message: 'Event added successfully', result }, { status: 200 });
  } catch (error) {
    // 에러 발생 시 500 상태 코드와 함께 에러 메시지를 반환
    console.error('Failed to add event:', error);
    return NextResponse.json({ message: 'Failed to add event' }, { status: 500 });
  }
}
