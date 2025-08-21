import clientPromise from '@/lib/utils/mongodb';
import { getCookie, setCookie } from 'cookies-next';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    const client = await clientPromise;
    const db = client.db('GoormStudy');

    // 로그인 유저가 맞는지 체크
    const user = await db.collection('users').findOne({ username, password });
    if (!user) {
      return NextResponse.json({ message: '로그인 실패' }, { status: 401 });
    }
    return NextResponse.json({ message: '로그인 성공', userId: user._id });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: '서버 에러' }, { status: 500 });
  }
}
