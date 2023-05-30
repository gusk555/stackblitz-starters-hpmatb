import React from 'react';

export default function TaskTable() {
  return (
    <div className="TaskTable">
      <table>
        <thead>
          <tr>
            <th style={{width:'10℅'}}>ID</th>
            <th>Description</th>
            <th style={{width:'20%'}}>Status</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
