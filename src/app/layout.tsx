// /app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import Providers from "./providers";
import ThemeProviders from "./themeProvide";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js + Redux + Clerk Auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeProviders>
          <body className={`${inter.className} bg-white text-black`}>
            {/* NAVBAR */}
            <header className="flex justify-between items-center px-6 h-16 border-b border-gray-800">
              <h1 className="font-semibold text-lg">MyApp</h1>

              <div className="flex items-center gap-4">
                {/* Signed out users */}
                <SignedOut>
                  <SignInButton>
                    <button className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>

                {/* Signed in users */}
                <SignedIn>
                  {/* Shows manage account & sign out menu */}
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </header>

            {/* APP CONTENT */}
            <Providers>{children}</Providers>
          </body>
        </ThemeProviders>
      </html>
    </ClerkProvider>
  );
}
