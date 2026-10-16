// Delivers form submissions by email through Resend (https://resend.com).
// Without RESEND_API_KEY and CONTACT_TO_EMAIL set, submissions are logged
// to the server console in development and rejected in production, so
// leads are never silently dropped.

const RESEND_URL = 'https://api.resend.com/emails';
const DEFAULT_FROM = 'Web Digital Sphere <onboarding@resend.dev>';

export async function sendEmail({ subject, text, replyTo, attachments = [] }) {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !to) {
        if (process.env.NODE_ENV === 'production') {
            console.error('Form submission not delivered: RESEND_API_KEY and CONTACT_TO_EMAIL must be set.');
            return { ok: false };
        }
        console.info(`\n[dev] Email not configured; logging submission instead.\nSubject: ${subject}\nReply-To: ${replyTo}\n${text}\nAttachments: ${attachments.map((a) => a.filename).join(', ') || 'none'}\n`);
        return { ok: true };
    }

    const res = await fetch(RESEND_URL, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
            to: to.split(',').map((address) => address.trim()),
            reply_to: replyTo,
            subject,
            text,
            attachments: attachments.map(({ filename, content }) => ({ filename, content: content.toString('base64') })),
        }),
    });

    if (!res.ok) {
        console.error('Resend rejected the email:', res.status, await res.text());
        return { ok: false };
    }
    return { ok: true };
}
