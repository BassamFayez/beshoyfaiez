import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const readexpro = Readex_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beshoy Faiez ",
  description:
    "Off-site bartender for the events 12 years of experience, including 5 years in Moscow.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={readexpro.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
