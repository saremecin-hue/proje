"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const DONEMLER = [
  "İslamiyet Öncesi", "Geçiş Dönemi", "Halk Edebiyatı", 
  "Divan Edebiyatı", "Tanzimat", "Servet-i Fünun", "Milli Edebiyat"
]; [cite: 84, 85, 86, 87]

export default function DonemSayfasi() {
  const [d1, setD1] = useState('');
  const [d2, setD2] = useState('');
  const router = useRouter();

  const olustur = () => {
    if (d1 && d2) router.push(`/sonuc?mod=donem&d1=${d1}&d2=${d2}`);
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <div className="header-oval">Dönemine Göre</div> [cite: 82]
      <div className="w-full max-w-md space-y-6">
        <select className="input-select" onChange={(e) => setD1(e.target.value)}>
          <option value="">1. Dönemi Seçin</option> [cite: 89]
          {DONEMLER.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <select className="input-select" onChange={(e) => setD2(e.target.value)}>
          <option value="">2. Dönemi Seçin</option> [cite: 92]
          {DONEMLER.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <button onClick={olustur} className="eko-button w-full">Metin Oluştur</button> [cite: 94]
      </div>
    </div>
  );
}
