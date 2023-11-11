import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const fromEmail = process.env.FROM_EMAIL || '';

export async function POST(req: Request, res: Response) {
  const { email, subject, message } = await req.json();
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [fromEmail, email],
        subject: 'hello world',
        react: EmailTemplate({subject, message}) as React.ReactElement,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
    return NextResponse.json({ error: 'Something went wrong' });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
