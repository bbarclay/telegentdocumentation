import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Telegent Documentation",
  description: "Enterprise documentation for Telegent solutions.",
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <Image 
            src="/logo.png" 
            alt="Telegent Logo" 
            width={180} 
            height={180} 
            className="mb-8"
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-telegent-primary via-telegent-purple to-telegent-secondary bg-clip-text text-transparent">
            Telegent Documentation
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mb-10">
            Comprehensive guides and reference materials for Telegent's enterprise solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/docs" 
              className="px-8 py-3 text-lg font-medium rounded-md bg-telegent-primary text-white hover:opacity-90 transition-all"
            >
              Get Started
            </Link>
            <Link 
              href="/docs/api" 
              className="px-8 py-3 text-lg font-medium rounded-md border border-accent/40 hover:border-telegent-secondary hover:text-telegent-secondary transition-all"
            >
              API Reference
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Tutorials",
              description: "Step-by-step guides to get started with Telegent",
              link: "/docs/tutorials",
              icon: "📚"
            },
            {
              title: "Solutions",
              description: "Enterprise-ready configurations and best practices",
              link: "/docs/solutions",
              icon: "🏢"
            },
            {
              title: "Support",
              description: "Resources for troubleshooting and assistance",
              link: "/docs/support",
              icon: "🛟"
            }
          ].map((card, i) => (
            <Link 
              key={i} 
              href={card.link}
              className="p-6 rounded-lg border border-accent/30 hover:border-telegent-primary hover:shadow-md transition-all group"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-telegent-primary transition-colors">{card.title}</h3>
              <p className="text-foreground/70">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
