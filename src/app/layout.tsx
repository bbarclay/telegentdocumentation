import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Telegent Documentation",
  description: "Official documentation for Telegent solutions.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className="text-base antialiased">
      <body>
        {children}
      </body>
    </html>
  );
} 