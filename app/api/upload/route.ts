import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  // You can customize file handling logic here
  return NextResponse.json({ name: file.name, size: file.size });
}
