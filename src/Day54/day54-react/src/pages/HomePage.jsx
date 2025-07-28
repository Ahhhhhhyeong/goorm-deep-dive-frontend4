import React from 'react';
import AlarmCard from '../components/practices/AlarmCard';

export default function HomePage() {
  return (
    <div>
      <AlarmCard type='INFO' />
      <AlarmCard type='WARNING' />
      <AlarmCard type='SUCCESS' />
      <AlarmCard type='ERROR' />
    </div>
  );
}
