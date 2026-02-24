"use client";
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SonucIcerik() {
  const searchParams = useSearchParams();
  const [metin, setMetin] = useState("");
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    const generate = async () => {
      const res = await fetch('/api/generate', {
        method: 'POST',
        body: JSON.stringify({
          type: searchParams.get('mod'),
          data: Object.fromEntries(searchParams.entries())
        })
      });
      const data = await res.json();
      setMetin(data.text);
      setYukleniyor(false);
    };
    generate();
  }, [searchParams]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-start mb-12 gap-4">
        <div className="flex-1 p-4 border-2 border-dashed border-green-300 rounded-lg text-center">
          <div className="w-24 h-24 bg-gray-200 mx-auto rounded-full mb-2"></div>
          <p className="font-bold">1. Yazar</p>
        </div>
        <div className="text-2xl font-black mt-10">VS</div>
        <div className="flex-1 p-4 border-2 border-dashed border-green-300 rounded-lg text-center">
          <div className="w-24 h-24 bg-gray-200 mx-auto rounded-full mb-2"></div>
          <p className="font-bold">2. Yazar</p>
        </div>
      </div>

      {yukleniyor ? (
        <div className="animate-pulse flex space-y-4 flex-col">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      ) : (
        <article className="prose lg:prose-xl bg-white p-8 rounded-2xl shadow-sm border border-gray-100 whitespace-pre-wrap">
          {metin}
        </article>
      )}
    </div>
  );
}

export default function Sonuc() {
  return <Suspense fallback={<div>Yükleniyor...</div>}><SonucIcerik /></Suspense>;
}
