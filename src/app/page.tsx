import { Metadata } from "next";
import TelegentHomepage from './components/TelegentHomepage';

export const metadata: Metadata = {
  title: "Telegent Documentation",
  description: "Enterprise documentation for Telegent solutions.",
};

export default function Home() {
  return <TelegentHomepage />;
}
