import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Leonel <onboarding@resend.dev>',
      to: ['leonel.madrid1304@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({firstName: 'Leonel'}) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
