"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';

export default function TelegentHomepage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Add custom animations
  const customStyles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(180deg); }
    }
    @keyframes networkPulse {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.1); }
    }
  `;

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const FloatingElement = ({ delay = 0, size = 'w-3 h-3', position = 'top-1/4 left-1/4', connections = [] }) => (
    <div 
      className={`absolute ${position} transform -translate-x-1/2 -translate-y-1/2`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {/* Connection lines */}
      {connections.map((connection, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 origin-left bg-gradient-to-r from-purple-400/30 to-transparent"
          style={{
            width: `${connection.length}px`,
            height: '1px',
            transform: `rotate(${connection.angle}deg)`,
            animation: `pulse 2s ease-in-out infinite`,
            animationDelay: `${delay + i * 0.5}s`,
          }}
        />
      ))}
      
      {/* Central node */}
      <div 
        className={`${size} bg-gradient-to-r from-purple-400 to-pink-400 rounded-full relative`}
        style={{
          animation: `pulse 2s ease-in-out infinite, float 4s ease-in-out infinite`,
          animationDelay: `${delay}s`,
          boxShadow: '0 0 20px rgba(147, 51, 234, 0.6), 0 0 40px rgba(147, 51, 234, 0.3)',
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" 
             style={{ animationDuration: '3s', animationDelay: `${delay}s` }} />
        
        {/* Outer ring */}
        <div 
          className="absolute -inset-2 border border-purple-400/40 rounded-full"
          style={{
            animation: `spin 8s linear infinite`,
            animationDelay: `${delay}s`,
          }}
        />
      </div>
    </div>
  );

  const BackgroundGrid = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px),
            linear-gradient(180deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );

  const GlowOrb = ({ x, y }: { x: number; y: number }) => (
    <div
      className="absolute pointer-events-none transition-all duration-300 ease-out"
      style={{
        left: x - 100,
        top: y - 100,
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(255,0,255,0.1) 0%, rgba(255,0,255,0.05) 50%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(20px)',
        transform: 'scale(0.8)'
      }}
    />
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div 
        ref={containerRef}
        className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
      >
      <BackgroundGrid />
      <GlowOrb x={mousePosition.x} y={mousePosition.y} />
      
      {/* Floating Network Elements */}
      <FloatingElement 
        delay={0} 
        size="w-4 h-4" 
        position="top-1/4 left-1/4" 
        connections={[
          { length: 120, angle: 45 },
          { length: 80, angle: 135 }
        ]}
      />
      <FloatingElement 
        delay={1} 
        size="w-3 h-3" 
        position="top-1/3 right-1/4" 
        connections={[
          { length: 100, angle: 225 },
          { length: 60, angle: 315 }
        ]}
      />
      <FloatingElement 
        delay={2} 
        size="w-5 h-5" 
        position="bottom-1/3 left-1/3" 
        connections={[
          { length: 90, angle: 0 },
          { length: 110, angle: 90 },
          { length: 70, angle: 180 }
        ]}
      />
      <FloatingElement 
        delay={0.5} 
        size="w-3 h-3" 
        position="top-1/2 right-1/3" 
        connections={[
          { length: 85, angle: 270 }
        ]}
      />
      <FloatingElement 
        delay={1.5} 
        size="w-2 h-2" 
        position="top-3/4 left-1/2" 
        connections={[
          { length: 95, angle: 60 },
          { length: 75, angle: 300 }
        ]}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            {/* Logo with enhanced animation */}
            <div 
              className={`mb-8 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-110 animate-pulse" />
                <div className="relative w-44 h-44 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center border border-gray-600/30 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    TG
                  </div>
                </div>
              </div>
            </div>
            
            {/* Title with staggered animation */}
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transform transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ textShadow: '0 0 30px rgba(147, 51, 234, 0.3)' }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                Telegent Documentation
              </span>
            </h1>
            
            {/* Description with animation */}
            <p 
              className={`text-xl md:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed transform transition-all duration-1000 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Comprehensive guides and reference materials for Telegent's enterprise solutions
            </p>
            
            {/* Enhanced buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Link 
                href="/docs"
                className="group relative px-8 py-4 text-lg font-medium rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <span className="relative text-white font-semibold tracking-wide">Get Started</span>
                <div className="absolute inset-0 border border-white/20 rounded-lg group-hover:border-white/40 transition-colors duration-300" />
              </Link>
              
              <Link 
                href="/docs/api"
                className="group relative px-8 py-4 text-lg font-medium rounded-lg border border-gray-600 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover:border-purple-500/50 backdrop-blur-sm bg-gray-800/30 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <span className="relative tracking-wide">API Reference</span>
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-500" />
              </Link>
            </div>
          </div>
          
          {/* Enhanced Cards Section */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {[
              {
                title: "Quick Start Guides",
                description: "Accelerate your onboarding with our comprehensive tutorials designed for enterprise teams",
                link: "/docs/tutorials",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="rgb(147, 51, 234)" strokeWidth="2" fill="rgba(147, 51, 234, 0.2)"/>
                    <path d="M9 12l2 2 4-4" stroke="rgb(236, 72, 153)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                gradient: "from-purple-500/10 to-pink-500/10",
                border: "border-purple-500/20",
                hover: "hover:border-purple-400/50"
              },
              {
                title: "Enterprise Solutions",
                description: "Production-ready architectures and deployment strategies for scale",
                link: "/docs/solutions",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="12" rx="2" stroke="rgb(147, 51, 234)" strokeWidth="2" fill="rgba(147, 51, 234, 0.2)"/>
                    <path d="M7 8h10M7 12h6" stroke="rgb(236, 72, 153)" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="17" cy="10" r="1.5" fill="rgb(236, 72, 153)"/>
                    <path d="M3 20h18" stroke="rgb(147, 51, 234)" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                gradient: "from-purple-500/10 to-pink-500/10",
                border: "border-purple-500/20",
                hover: "hover:border-purple-400/50"
              },
              {
                title: "Expert Support",
                description: "24/7 technical assistance and dedicated success management for enterprise clients",
                link: "/docs/support",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="rgb(34, 197, 94)" strokeWidth="2" fill="rgba(34, 197, 94, 0.2)"/>
                    <circle cx="9" cy="10" r="1.5" fill="rgb(134, 239, 172)"/>
                    <circle cx="15" cy="10" r="1.5" fill="rgb(134, 239, 172)"/>
                    <path d="M9 14c1 1 2.5 1.5 3 1.5s2-0.5 3-1.5" stroke="rgb(134, 239, 172)" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                gradient: "from-green-500/10 to-emerald-500/10",
                border: "border-green-500/20",
                hover: "hover:border-green-400/50"
              }
            ].map((card, i) => (
              <Link 
                key={i}
                href={card.link}
                className={`group relative p-8 rounded-xl border ${card.border} ${card.hover} backdrop-blur-sm bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer block`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />
                
                <div className="relative z-10">
                  <div className="mb-6 text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300 flex justify-center">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                
                {/* Subtle shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    </div>
    </>
  );
} 