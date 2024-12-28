import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "./_components/navbar";
import Providers from "./_components/providers";

export const metadata: Metadata = {
  title: "Croissant Software",
  description: "Creating and launching software projects with the power of AI",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <div className="mx-auto max-w-screen-lg rounded-lg shadow-lg p-4 py-6 md:px-6 md:border md:my-8">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
