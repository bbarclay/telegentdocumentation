import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
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
  );
} 