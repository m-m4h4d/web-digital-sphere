import LegalPage from "@/views/LegalPage";

export const metadata = {
  title: "Terms and Conditions",
};

// Outline of what the real terms usually cover; replace with the actual text.
const sections = [
  { heading: "Use of this website", description: "Describe who may use the site and what is and isn't allowed." },
  { heading: "Services and quotes", description: "Explain how quotes, proposals and engagements work and when they become binding." },
  { heading: "Intellectual property", description: "State who owns the site content and the work delivered to clients." },
  { heading: "Liability", description: "Set out any limits on liability and warranties." },
  { heading: "Changes and contact", description: "Explain how these terms may change and how to get in touch about them." },
];

export default function TermsPage() {
  return <LegalPage title="Terms and Conditions" sections={sections} />;
}
