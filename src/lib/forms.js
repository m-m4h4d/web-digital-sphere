// Shared by the form components and the server actions in ./actions.js.

export const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024;

export const BUDGETS = [
    { value: '1000-10000', label: '$1000 - $10,000' },
    { value: '10000-50000', label: '$10,000 - $50,000' },
    { value: '50000-100000', label: '$50,000 - $100,000' },
    { value: '100000-1000000', label: '$100,000 - $1,000,000' },
    { value: 'Discuss', label: 'Discuss' },
];

export const initialFormState = { status: 'idle', message: '', errors: {} };
