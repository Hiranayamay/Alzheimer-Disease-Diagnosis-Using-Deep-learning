import React, { useEffect, useState } from 'react';

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch('/history', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setHistory(data);
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h1>Diagnostic History</h1>
      <ul>
        {history.map((item) => (
          <li key={item.id}>
            {item.image_name}: {item.result}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
