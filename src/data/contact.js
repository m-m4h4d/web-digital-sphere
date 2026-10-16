// Placeholder contact details shown on the Contact page, in the Request
// Quote modal and in the footer. Replace these with real values before
// launch. The phone number uses the 555-01xx range reserved for fiction.

const contact = {
    company: 'Web Digital Sphere',
    address: '123 Example Street, Suite 100, Anytown, USA',
    countryCode: 'US',
    email: 'hello@example.com',
    phone: '+1 (555) 010-0000',
    hours: 'Monday - Friday',
    // A Google Maps "Embed a map" URL (https://www.google.com/maps/embed?pb=...).
    // While empty, the Contact page shows a placeholder panel.
    mapEmbedUrl: '',
};

export const telHref = `tel:${contact.phone.replace(/[^\d+]/g, '')}`;
export const mailtoHref = `mailto:${contact.email}`;

export default contact;
