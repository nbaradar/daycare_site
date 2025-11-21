import HomeContent from "@/components/pages/HomeContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KidsDaycare - Home",
  description: "Welcome to KidsDaycare, a nurturing environment for your child's growth and development.",
};

export default function Home() {
  return <HomeContent />;
}
