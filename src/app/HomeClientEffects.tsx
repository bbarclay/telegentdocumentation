'use client';

import { useEffect } from "react";

export default function HomeClientEffects() {
  useEffect(() => {
    // Parallax effect for floating particles
    const handleParallax = (e: MouseEvent) => {
      const parallaxElements = document.querySelectorAll('.parallax');
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      parallaxElements.forEach((el) => {
        const speed = (el as HTMLElement).dataset.speed || '50';
        const x = mouseX * parseInt(speed);
        const y = mouseY * parseInt(speed);
        (el as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with animate-on-scroll class
    const elementsToObserve = document.querySelectorAll('.animate-on-scroll');
    elementsToObserve.forEach((el) => {
      observer.observe(el);
    });

    document.addEventListener('mousemove', handleParallax);
    
    return () => {
      document.removeEventListener('mousemove', handleParallax);
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything, just handles effects
}
