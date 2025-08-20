import { AnyPerson } from '@/types/people';
import React from 'react';

export interface PersonCardProps {
  human: AnyPerson;
}
export default function PersonCard({ human }: PersonCardProps) {
  return (
    <div>
      <h3>{human.name}</h3>
      <h4>{human.age}</h4>
    </div>
  );
}
