import * as React from 'react';

export default function Task(t) {
  console.log(t)
  return (
    <tr key={t.id} className="task">
      <td>{t.id}</td>
      <td>{t.description}</td>
      <td>{t.status}</td>
    </tr>
  );
}
