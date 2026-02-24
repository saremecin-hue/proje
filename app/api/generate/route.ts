import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { type, data } = await req.json();
  
  const prompt = `
    Edebi Karşılaştırma Metni Oluştur.
    Tür: ${type}
    Seçimler: ${JSON.stringify(data)}
    
    Kurallar:
    1. Metin yaklaşık 500-530 kelime olmalıdır[cite: 39].
    2. İki yazarın veya dönemin fikirlerini çarpıştır[cite: 50, 125].
    3. Yazarların üslupları arasındaki farkları analiz et[cite: 123, 126].
    4. Bölümleri net başlıklarla ayır.
  `;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });
    return NextResponse.json({ text: completion.choices[0].message.content });
  } catch (error) {
    return NextResponse.json({ error: "API Hatası" }, { status: 500 });
  }
}
