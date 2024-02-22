import React from 'react'; //import React library


export function TableHeader({ columnNames }) {
    return (
      <thead>
        <tr>
          {columnNames.map(name => (
            <th key={name}>{name}</th>
          ))}
        </tr>
      </thead>
    );
}

