'use client';
import { useEffect, useState } from 'react';

export default function FetchPage() {
  const [data, setData] = useState<any[] | null>(null);

  async function fetchApi() {
    const res = await fetch('https://api.publicapis.org/entries');
    const json = await res.json();
    const entries = json.entries;
    await setData(entries);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const showAlert = (str: string) => () => {
    alert(str);
  };

  return (
    <div className="flex flex-col items-center  gap-2 p-5">
      {data ? (
        data.map((i: any, index) => {
          return (
            <div
              onClick={showAlert(i.API)}
              className="font-semibold border rounded-xl px-2 py-1 shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-blue-100"
              key={index}
            >
              {i.API}
            </div>
          );
        })
      ) : (
        <div className="text-blue-500 font-bold text-2xl">loading...</div>
      )}
    </div>
  );
}
