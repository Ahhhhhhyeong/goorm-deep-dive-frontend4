import React from 'react';
import { useFilterStore } from '../../app/stores/filterStore';

const filters = ['all', 'active', 'completed'];

export default function FilterButton() {
  const { filter, setFilter } = useFilterStore();

  return (
    <div>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-lg transition-all duration-200
      ${
        filter === f
          ? 'bg-red-100 text-red-600 border-2 border-red-500 font-bold'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }
    `}>
          {f.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
