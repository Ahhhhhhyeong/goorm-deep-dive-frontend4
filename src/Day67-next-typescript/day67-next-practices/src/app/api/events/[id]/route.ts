import clientPromise from '@/lib/mongodb';
import { mockEvents } from '@/mock/eventMock';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';
import React from 'react';

// params type을 명확히 정의
interface EventRouteProps {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: EventRouteProps) {
  const resolvedParams = await params;
  const eventId: string = resolvedParams.id;
  // console.log('시작!! id 불러오자', eventId);

  // 전달된 ID가 올바른 ObjectId 형식인지 확인
  if (!ObjectId.isValid(eventId)) {
    return new NextResponse('Invalid ID format', { status: 400 });
  }
  try {
    const client = await clientPromise;
    const db = client.db('GoormStudy');

    // ObjectId 객체로 변환하여 쿼리에 사용
    // findOne()을 사용하여 단일 문서를 가져옵니다.
    const event = await db.collection('event').findOne({
      _id: new ObjectId(eventId),
    });

    if (event) {
      // JSON 응답으로 반환하기 전에 _id를 id로 변환
      const mappedEvent = { ...event, id: event._id.toString() };
      return NextResponse.json(mappedEvent);
    }

    return new NextResponse('Event not found', { status: 404 });
  } catch (error) {
    console.error('Database query failed:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
