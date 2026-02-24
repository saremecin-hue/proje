"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const YAZARLAR = ["Namık Kemal", "Tevfik Fikret", "Halit Ziya", "Yahya Kemal", "Ahmet Hamdi Tanpınar"];

export default function YazarSayfasi() {
  const [y1, setY1] = useState('');
  const [y2, setY2] = useState('');
  const [hata, setHata] = useState('');
  const router = useRouter();

  const olustur = () => {
    if (y1 === y2) {
      setHata("İki yazar aynı seçilemez!"); [cite: 101]
      return;
    }
    if (y1 && y2) router.push(`/sonuc?mod=yazar&y1=${y1}&y2=${y2}`); [cite: 107]
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <div className="header-oval">Yazarına Göre</div> [cite: 97]
      <div className="w-full max-w-md space-y-4">
        {hata && <p className="text-red-500 font-bold text-center">{hata}</p>}
        <select className="input-select" onChange={(e) => {setY1(e.target.value); setHata('');}}>
          <option value="">1. Yazarı Seçin</option> [cite: 99]
          {YAZARLAR.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <select className="input-select" onChange={(e) => {setY2(e.target.value); setHata('');}}>
          <option value="">2. Yazarı Seçin</option> [cite: 100]
          {YAZARLAR.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <button onClick={olustur} className="eko-button w-full">Metin Oluştur</button>
      </div>
    </div>
  );
}
