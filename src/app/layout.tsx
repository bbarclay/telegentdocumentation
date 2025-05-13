import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Telegent Documentation",
  description: "Official documentation for Telegent solutions.",
};

const banner = (
  <div className="w-full py-3 text-center bg-gradient-to-r from-telegent-primary/10 via-telegent-purple/10 to-telegent-secondary/10 backdrop-blur-xs border-b border-accent/20">
    <span className="font-medium bg-gradient-to-r from-telegent-primary via-telegent-purple to-telegent-secondary bg-clip-text text-transparent bg-200% animate-gradient">
      Welcome to Telegent Documentation
    </span>
  </div>
);

const footer = (
  <div className="border-t border-accent/20 pt-8 mt-12">
    <Footer>
      <div className="flex items-center justify-between">
        <div className="space-y-4">
          <Image 
            src="/logo.png" 
            alt="Telegent Logo" 
            width={120} 
            height={40} 
            className="transition-transform duration-300 hover:scale-105"
          />
          <p className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Telegent. All rights reserved.
          </p>
        </div>
      </div>
    </Footer>
  </div>
);

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className="text-base antialiased">
      <body>
        <Layout
          banner={banner}
          navbar={
            <div className="border-b border-accent/20 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
              <div className="mx-auto max-w-[90rem] py-4 px-6">
                <Navbar
                  logo={
                    <div className="flex items-center gap-2 group">
                      <div className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-glow p-0">
                        <Image 
                          src="/logo.png" 
                          alt="Telegent Logo" 
                          width={120} 
                          height={60} 
                          className="transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                      </div>
                      <h1 className="text-2xl font-bold bg-gradient-to-r from-telegent-primary via-telegent-purple to-telegent-secondary bg-clip-text text-transparent bg-300% animate-gradient">
                        Telegent
                      </h1>
                    </div>
                  }
                  projectLink=""
                />
              </div>
            </div>
          }
          pageMap={await getPageMap()}
          sidebar={{ 
            defaultMenuCollapseLevel: 1, 
            autoCollapse: true
          }}
          footer={footer}
        >
          <div className="px-6 py-8 transition-size duration-200">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {children}
            </div>
          </div>
        </Layout>
      </body>
    </html>
  );
}
