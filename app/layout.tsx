import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Dev Store",
    default: "Dev Store",
  },
  description:
    "Discover top-tier tools, hardware, and accessories designed for developers. Dev Store offers a streamlined shopping experience tailored to coding professionals.",
  keywords: [
    "developer store",
    "coding essentials",
    "developer tools",
    "hardware for coders",
    "developer accessories",
    "Dev Store",
  ],
  authors: [
    { name: "Abdullah Hussein", url: "https://github.com/abdullahhussein1" },
  ],
  publisher: "Dev Store",
  robots: {
    index: true,
    follow: true,
  },
  bookmarks: ["dev store", "coding tools", "developer accessories"],
  category: "E-commerce, Development, Tools",
  classification: "Developer Essentials",
  metadataBase: new URL("https://devstorekrd.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
