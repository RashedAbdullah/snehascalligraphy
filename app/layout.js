import { Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Sneha's Calligraphy",
  description:
    "Elegant Arabic Calligraphy or Islamic Wall Art for display, sale, and custom orders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add a favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`antialiased bg-neutral-50 text-gray-800 dark:bg-neutral-900 dark:text-neutral-200 ${playfair.className}`}
      >
        {/* Theme Provider for dark/light mode */}
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />

          {/* Main Content */}
          <main className="mx-auto">{children}</main>

          {/* Footer */}
          <footer className="px-8 py-6 bg-gray-100 dark:bg-neutral-800 text-center text-sm">
            <p className="text-gray-500 dark:text-neutral-400">
              © 2024 Sneha&apos;s Calligraphy. All rights reserved.
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
