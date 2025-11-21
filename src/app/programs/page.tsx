import ProgramsContent from "@/components/pages/ProgramsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Programs - KidsDaycare",
    description: "Explore our age-appropriate programs for infants, toddlers, and preschoolers.",
};

export default function ProgramsPage() {
    return <ProgramsContent />;
}
