import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import "./globals.css";
import ThemeProviders from "./themeProvide";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App",
  description: "Next + Redux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProviders>
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </ThemeProviders>
    </html>
  );
}
