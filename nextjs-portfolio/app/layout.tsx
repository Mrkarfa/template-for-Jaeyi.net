import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const customFont = localFont({
  src: "../public/fonts/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2",
  variable: "--font-custom",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Souvik | Full Stack Developer",
  description:
    "Web Designer & Framer Developer for service and software businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${customFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
