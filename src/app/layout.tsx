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
    keywords: [
    "Beshoy Faiez",
    "Bishoy Fayez ",
    "Beshoy Faiez Bartender",
    "Beshoy Faiez - Off-site Bartender",
    "Beshoy Faiez - Exclusive Events",
    "Beshoy Faiez - 12 Years Experience",
    "Beshoy Faiez - 5 Years in Moscow",
    "Beshoy Faiez - Mobile Bar Services",
    "Beshoy Faiez - High-End Cocktail Bars",
    "Beshoy Faiez - Event Bartending",
    "Beshoy Faiez - Birthdays",
    "Beshoy Faiez - Weddings",
    "Beshoy Faiez - Corporate Events",
    "Beshoy Faiez - Private Parties",
    "Beshoy Faiez - Turnkey Bar Experience",
    "Beshoy Faiez - Alcohol Selection",
    "Beshoy Faiez - Custom Cocktail Creation",
    "Beshoy Faiez - Glassware Rental",
    "Beshoy Faiez - Ice Delivery",
    "Beshoy Faiez - Soho Rooms",
    "Beshoy Faiez - Club Home 16",
    "Beshoy Faiez - Waves Restaurant & Lounge Bar",
    "Beshoy Faiez - The Grill & Chill Restaurant",
    "Beshoy Faiez - Mixology",
    "Beshoy Faiez - Hospitality",
    "Beshoy Faiez - Fully Equipped Mobile Bar",
    "Beshoy Faiez - Urgent Bookings",
    "Beshoy Faiez - Holidays",
    "Beshoy Faiez - Large-scale Events",
    "Beshoy Faiez - 300+ Guests",
    "Бешой Фаиз",
    "Бешой Фаиз Бармен",
    "Бешой Фаиз - Выездной бармен",
    "Бешой Фаиз - Эксклюзивные мероприятия",
    "Бешой Фаиз - 12 лет опыта",
    "Бешой Фаиз - 5 лет в Москве",
    "Бешой Фаиз - Мобильный бар",
    "Бешой Фаиз - Элитные коктейльные бары",
    "Бешой Фаиз - Организация мероприятий",
    "Бешой Фаиз - Сервис «под ключ»",
    "Бешой Фаиз - Авторские коктейли",
    "Бешой Фаиз - Аренда посуды",
    "Бешой Фаиз - Доставка льда",
  ],
    verification:{
      google:"AX8Of7Fm_aCO1FMtoL5EryCqfCn6kkVDlVNdi3fPX1I",
      yandex:"ff0ac26d23e8ad11"

    },
  
  openGraph: {
    title: "Beshoy Faiez ",
    description:
      "Off-site bartender for the events 12 years of experience, including 5 years in Moscow.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Open Graph Image",
      },
    ],
  },
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
