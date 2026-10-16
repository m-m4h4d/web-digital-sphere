import LegalPage from "@/views/LegalPage";

export const metadata = {
  title: "Privacy Policy",
};

// Outline of what the real policy usually covers; replace with the actual text.
const sections = [
  { heading: "Information we collect", description: "List what visitors share through the contact and quote forms (name, email, phone, project details, attachments) and anything collected automatically." },
  { heading: "How we use it", description: "Explain how submissions are used, for example to reply to enquiries and prepare proposals." },
  { heading: "Sharing and storage", description: "Name the services that process the data, such as the email provider that delivers form submissions, and how long it is kept." },
  { heading: "Your rights", description: "Describe how people can access, correct or delete their information." },
  { heading: "Contact", description: "Give the address people should use for privacy questions." },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" sections={sections} />;
}
