"use client"
import { useState } from "react";
import { BarChart } from "./BarChart/BarChart";

export default function Home() {
  const [data, setData] = useState<number[]>([5, 60, 110, 20, 25]);
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Bar Chart with D3.js</h1>
      <BarChart data={data} />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setData(data.map(() => Math.floor(Math.random() * 30)))}
      >
        Update Data
      </button>
    </div>
  );
}
