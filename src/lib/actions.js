'use server';

import { sendEmail } from './email';
import countries from '@/data/countries';
import { BUDGETS, MAX_ATTACHMENT_BYTES } from './forms';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field = (formData, name) => String(formData.get(name) ?? '').trim();

function checkLength(errors, name, value, label, max) {
    if (!value) errors[name] = `${label} is required.`;
    else if (value.length > max) errors[name] = `${label} must be ${max} characters or fewer.`;
}

function checkEmail(errors, value) {
    if (!value) errors.email = 'Email is required.';
    else if (!EMAIL_PATTERN.test(value) || value.length > 254) errors.email = 'Enter a valid email address.';
}

const SENT = { status: 'success', message: 'Thanks! Your message has been sent. We will get back to you soon.' };
const FAILED = { status: 'error', message: 'Sorry, we could not send your message. Please try again or email us directly.' };
const invalid = (errors) => ({ status: 'error', message: 'Please fix the highlighted fields.', errors });

// Bots fill in every field, including the visually hidden "website" one.
const isSpam = (formData) => field(formData, 'website') !== '';

export async function submitContact(prevState, formData) {
    if (isSpam(formData)) return SENT;

    const name = field(formData, 'name');
    const email = field(formData, 'email');
    const subject = field(formData, 'subject');
    const message = field(formData, 'message');

    const errors = {};
    checkLength(errors, 'name', name, 'Name', 100);
    checkEmail(errors, email);
    checkLength(errors, 'subject', subject, 'Subject', 200);
    checkLength(errors, 'message', message, 'Message', 5000);
    if (Object.keys(errors).length) return invalid(errors);

    const { ok } = await sendEmail({
        subject: `Contact form: ${subject}`,
        replyTo: email,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    });
    return ok ? SENT : FAILED;
}

export async function submitQuote(prevState, formData) {
    if (isSpam(formData)) return SENT;

    const name = field(formData, 'name');
    const email = field(formData, 'email');
    const phone = field(formData, 'phone');
    const project = field(formData, 'project');
    const budget = field(formData, 'budget');
    const country = field(formData, 'country');
    const file = formData.get('attachment');
    const hasFile = file && typeof file === 'object' && file.size > 0;

    const errors = {};
    checkLength(errors, 'name', name, 'Full name', 100);
    checkEmail(errors, email);
    if (phone.replace(/\D/g, '').length < 7) errors.phone = 'Enter a valid phone number.';
    checkLength(errors, 'project', project, 'Project description', 5000);
    if (budget && !BUDGETS.some(({ value }) => value === budget)) errors.budget = 'Choose a budget from the list.';
    if (country && !countries.includes(country)) errors.country = 'Choose a country from the list.';
    if (hasFile) {
        const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
        if (!isPdf) errors.attachment = 'The attachment must be a PDF.';
        else if (file.size > MAX_ATTACHMENT_BYTES) errors.attachment = 'The attachment must be 10MB or smaller.';
    }
    if (Object.keys(errors).length) return invalid(errors);

    const attachments = hasFile ? [{ filename: file.name, content: Buffer.from(await file.arrayBuffer()) }] : [];
    const { ok } = await sendEmail({
        subject: `Quote request from ${name}`,
        replyTo: email,
        text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Budget: ${budget || 'Not specified'}`,
            `Country: ${country || 'Not specified'}`,
            '',
            project,
        ].join('\n'),
        attachments,
    });
    return ok ? SENT : FAILED;
}
