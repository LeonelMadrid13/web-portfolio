import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from "next/server";
import React from 'react';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || '';

export async function POST(req: Request, res: Response) {
  const { email, subject, message } = await req.json();
  // console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['leonel.madrid1304@gmail.com'],
      subject: subject,
      react: EmailTemplate({subject: subject, message: message}) as React.ReactElement,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}