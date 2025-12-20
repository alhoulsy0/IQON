import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ error: "Resend API Key is missing" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    try {
        const body = await request.json();
        const { name, email, company, topic, message } = body;

        const data = await resend.emails.send({
            from: 'website@qertex.com',
            to: 'info@qertex.com',
            subject: `New Inquiry from ${name}: ${topic}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
