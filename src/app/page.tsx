import { Metadata } from "next";
import { HomePage } from "@/components/homepage";

export const metadata: Metadata = {
  title: "Telegent Documentation",
  description: "Enterprise documentation for Telegent solutions.",
};

export default function Home() {
  return <HomePage showFeatureCards={false} />;
}
