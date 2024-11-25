import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { LanguageProvider } from "../../context/language-context";
import { getDictionary } from "../../i18n/dictionaries";
import { Locale } from "@/types/language-types";

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
  creator: "Abdullah Hussein",
  publisher: "Dev Store",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "E-commerce, Development, Tools",
  classification: "Developer Essentials",
};

const bahij = localFont({
  variable: "--font-bahij",
  src: [
    {
      path: "../../fonts/bahij/Bahij_Light.ttf",
      weight: "100 200",
    },
    {
      path: "../../fonts/bahij/Bahij_SemiLight.ttf",
      weight: "300",
    },
    {
      path: "../../fonts/bahij/Bahij_Plain.ttf",
      weight: "400",
    },
    {
      path: "../../fonts/bahij/Bahij_SemiBold.ttf",
      weight: "500 600",
    },
    {
      path: "../../fonts/bahij/Bahij_Bold.ttf",
      weight: "700 800",
    },
    {
      path: "../../fonts/bahij/Bahij_Black.ttf",
      weight: "900",
    },
  ],
});

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ku" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return (
    <html lang={lang} dir={lang == "en" ? "ltr" : "rtl"}>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${bahij.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider lang={lang} dict={dict}>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
