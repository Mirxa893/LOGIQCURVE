import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const prompt = messages.map((m: any) => `${m.role}: ${m.content}`).join('\n');

  const response = await fetch('https://mirxakamran893-LOGIQCURVECHATIQBOT.hf.space/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: prompt,
      history: []
    })
  });

  const data = await response.json();
  return NextResponse.json({ output: data });
}
