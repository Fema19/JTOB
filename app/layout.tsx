import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JEMBAR — Upcycled Denim Tote Bag",
  description: "A digital story about transforming unused jeans into a reusable tote bag.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
