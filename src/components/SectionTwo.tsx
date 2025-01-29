import Image from "next/image";

import { Card, CardHeader } from "@/src/components/ui/card";

import avito from "@/public/avito.png";
import insta from "@/public/insta.svg";
import telegram from "@/public/telegram.webp";
import vk from "@/public/vk.png";

import { Button } from "@/src/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { useTranslations } from "next-intl";
const socialMedia = [
  {
    id: 1,
    icon: avito,
    name: "Avito",
    username: "beshoy faiez",
    link: "https://www.avito.ru/moskva/predlozheniya_uslug/vyezdnoy_barmen_barmen_na_meropriyatie_3761201737?utm_campaign=native&utm_medium=item_page_ios&utm_source=soc_sharing_seller",
  },
  {
    id: 2,
    icon: insta,
    name: "Instagram",
    username: "@bishoy_faiez",
    link: "https://www.instagram.com/bishoy_faiez/",
  },
  {
    id: 3,
    icon: vk,
    name: "VK",
    username: "@beshoy_faiez_97",
    link: "https://vk.com/id636381816",
  },
  {
    id: 4,
    icon: telegram,
    name: "Telegram",
    username: "+7 (903) 962-10-08",
    link: "https://t.me/beshoy_faiez?start=Hi%20Beshoy,%20I%20visited%20your%20portfolio%20and%20I%20would%20like%20to%20connect%20with%20you.",
  },
];
export function SectionTwo() {
  const t = useTranslations("Index");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 md:mt-10">
      <div className="w-full relative col-span-1">
        {/* <Image
          src={sideImage}
          alt="square"
          className="w-full h-full object-cover rounded-2xl"
        /> */}
        <video
          src="/drinks/sideImage.mp4"
          autoPlay
          loop
          muted
          className="w-full h-fit object-cover rounded-2xl max-sm:h-[100%]"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none  pb-8">
          <CardHeader>{/* <CardTitle>{t("stack")}</CardTitle> */}</CardHeader>
          <Carousel
            className="w-[85%] mx-auto"
            opts={{
              slidesToScroll: 2,
            }}
          >
            <CarouselContent className="px-4 sm:px-6">
              {Array.from({ length: 56 }, (_, index) => index).map(
                (item, index) => (
                  <CarouselItem
                    style={{
                      aspectRatio: "1 / 1.18",
                    }}
                    key={index}
                    className="relative basis-1/2 pl-0 ml-4"
                  >
                    <Image
                      fill
                      key={index}
                      src={`/drinks/${index + 1}.jpg`}
                      alt="Icon"
                      className="object-center object-cover rounded-lg select-none "
                    />
                  </CarouselItem>
                )
              )}
            </CarouselContent>
            <CarouselNext className=" w-10 h-10 " />
            <CarouselPrevious className=" w-10 h-10" />
          </Carousel>
        </Card>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
            >
              <Image
                src={item.icon}
                alt="Icon"
                className={`w-16 h-16 object-cover `}
              />
              <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button className="mt-4" size="sm" asChild>
                <a href={item.link} target="_blank">
                  {t("Contact")}
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
