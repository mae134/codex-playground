import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codex Playground",
  description: "Memo app development playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
