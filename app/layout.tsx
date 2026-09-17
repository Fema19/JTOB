import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JEMBAR — KainKita Tote Bag",
  description: "Website KainKita: tote bag dari kain sisa dengan konsep digital dan cerita yang terhubung.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
