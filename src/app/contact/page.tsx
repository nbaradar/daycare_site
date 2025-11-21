import ContactContent from "@/components/pages/ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - KidsDaycare",
    description: "Get in touch with us to schedule a tour or ask questions.",
};

export default function ContactPage() {
    return <ContactContent />;
}
