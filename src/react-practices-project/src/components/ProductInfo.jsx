import React from 'react';

export default function ProductInfo({ title, content, subContent = null }) {
  return (
    <tr>
      <td className='align-top pr-4 text-base text-zinc-600 font-semibold'>{title}</td>
      <td>
        <p className='text-base text-zinc-600 font-semibold'>{content}</p>
        {subContent != null ? <p className='text-xs whitespace-pre-line text-zinc-400'>{subContent}</p> : <p></p>}
      </td>
    </tr>
  );
}
