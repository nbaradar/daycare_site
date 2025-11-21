import AboutContent from "@/components/pages/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - KidsDaycare",
    description: "Meet our dedicated provider and learn about our philosophy of love, respect, and lifelong learning.",
};

export default function AboutPage() {
    return <AboutContent />;
}
