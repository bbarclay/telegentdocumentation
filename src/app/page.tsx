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
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255, 0, 255, 0.15)" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 group-hover:fill-[rgba(255,0,255,0.25)] group-hover:stroke-[#FF00FF] transition-all">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  <path d="M8 7h6" />
                  <path d="M8 11h8" />
                </svg>
              )
            },
            {
              title: "Solutions",
              description: "Enterprise-ready configurations and best practices",
              link: "/docs/solutions",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255, 0, 255, 0.15)" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 group-hover:fill-[rgba(255,0,255,0.25)] group-hover:stroke-[#FF00FF] transition-all">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <path d="M6 11h4" />
                  <path d="M14 11h4" />
                </svg>
              )
            },
            {
              title: "Support",
              description: "Resources for troubleshooting and assistance",
              link: "/docs/support",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255, 0, 255, 0.15)" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 group-hover:fill-[rgba(255,0,255,0.25)] group-hover:stroke-[#FF00FF] transition-all">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              )
            }
          ].map((card, i) => (
            <Link 
              key={i} 
              href={card.link}
              className="p-6 rounded-lg border border-accent/30 hover:border-telegent-primary hover:shadow-md transition-all group"
            >
              <div className="mb-4 flex justify-center items-center">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-telegent-primary transition-colors">{card.title}</h3>
              <p className="text-foreground/70">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
