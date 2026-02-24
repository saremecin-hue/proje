
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const TEMALAR = [
  "Özgürlük", "Ahlak ve Erdem", "Vatan Sevgisi ve Sorumluluk", 
  "İnsan-Toplum Çatışması", "Gelenek ve Modernleşme", "Kader ve İrade", 
  "Ölüm ve Yaşam", "Adalet ve Eşitlik", "Aşk ve Bağlılık", "Yalnızlık"
];

export default function TemaSayfasi() {
  const [secilenTema, setSecilenTema] = useState('');
  const router = useRouter();

  const git = () => {
    if (secilenTema) router.push(`/sonuc?mod=tema&val=${secilenTema}`);
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <div className="header-oval">Temasına Göre</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl mb-8">
        {TEMALAR.map(t => (
          <button 
            key={t}
            onClick={() => setSecilenTema(t)}
            className={`p-3 rounded-lg border-2 transition-all ${secilenTema === t ? 'bg-green-500 text-white border-green-600' : 'bg-gray-50 border-gray-200'}`}
          >
            {t}
          </button>
        ))}
      </div>
      <button onClick={git} className="eko-button w-full max-w-xs">Metin Oluştur</button>
    </div>
  );
}
