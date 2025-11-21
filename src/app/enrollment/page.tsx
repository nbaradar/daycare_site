import EnrollmentContent from "@/components/pages/EnrollmentContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enrollment - KidsDaycare",
    description: "Learn about our enrollment process, schedule a tour, and join our waitlist.",
};

export default function EnrollmentPage() {
    return <EnrollmentContent />;
}
