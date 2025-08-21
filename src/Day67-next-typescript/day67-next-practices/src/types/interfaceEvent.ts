//2025-08-20T08:04:05.700Z
export type ISOString = `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;

export interface BaseEvent {
  _id: string;
  title: string;
  date: ISOString;
}

export interface OnlineEvent extends BaseEvent {
  type: 'online';
  url: string;
}

export interface OfflineEvent extends BaseEvent {
  type: 'offline';
  location: string;
  seatsLeft: number;
}

export type AnyEvent = BaseEvent | OnlineEvent | OfflineEvent;
