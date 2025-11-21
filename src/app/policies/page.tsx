import PoliciesContent from "@/components/pages/PoliciesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Policies & Handbook - KidsDaycare",
    description: "Review our operational policies, including hours, illness guidelines, and tuition.",
};

export default function PoliciesPage() {
    return <PoliciesContent />;
}
