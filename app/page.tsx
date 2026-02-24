import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-black text-green-600 mb-12 italic">Eko-Söz</h1>
      <div className="flex flex-col gap-5 w-full max-w-xs">
        <Link href="/donem" className="eko-button">Dönemine Göre</Link>
        <Link href="/yazar" className="eko-button">Yazarına Göre</Link>
        <Link href="/tema" className="eko-button">Temasına Göre</Link>
      </div>
    </main>
  );
}
