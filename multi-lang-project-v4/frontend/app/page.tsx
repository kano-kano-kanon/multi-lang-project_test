'use client';
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState('');

  const analyze = async () => {
    const res = await fetch('http://localhost:3001/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ numbers: [1, 2, 3, 4] })
    });
    const data = await res.json();
    setResult(`Sum: ${data.sum}, Avg: ${data.average}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Multi-Lang Project v4</h1>
      <button onClick={analyze} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Analyze Numbers
      </button>
      <p className="mt-4">{result}</p>
    </div>
  );
}
