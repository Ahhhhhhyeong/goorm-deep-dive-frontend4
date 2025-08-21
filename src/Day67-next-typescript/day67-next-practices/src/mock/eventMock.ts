import { AnyEvent } from '@/types/interfaceEvent';

export const mockEvents: AnyEvent[] = [
  // OnlineEvent 데이터
  {
    id: 1,
    title: 'TypeScript Deep Dive',
    date: '2025-08-27T10:00:00.000Z',
    type: 'online',
    url: 'https://example.com/ts-deep-dive',
  },
  // OfflineEvent 데이터
  {
    id: 2,
    title: 'React Native Workshop',
    date: '2025-09-15T14:30:00.000Z',
    type: 'offline',
    location: 'Seoul Conference Center, Room 301',
    seatsLeft: 15,
  },
  // BaseEvent 데이터 (AnyEvent가 OnlineEvent 또는 OfflineEvent인 경우)
  {
    id: 3,
    title: 'Open Source Contribution Day',
    date: '2025-09-05T09:00:00.000Z',
    type: 'offline',
    location: 'Busan Developer Hub',
    seatsLeft: 0,
  },
  // OnlineEvent 데이터
  {
    id: 4,
    title: 'GraphQL API Design',
    date: '2025-09-20T19:00:00.000Z',
    type: 'online',
    url: 'https://example.com/graphql-api',
  },
];
