// components/PriceTable.jsx
import React from 'react';

const TableComponent = ({ title, columns, data }) => (
  <>
    <p className='table-title'>{title}</p>
    <table className='custom-table'>
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th key={idx}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns.map((col, cidx) => (
              <td key={cidx}>{row[col.toLowerCase()]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default TableComponent;
