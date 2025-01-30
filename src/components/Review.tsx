"use client";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Autoplay from "embla-carousel-autoplay";

export default function Review() {
  const t = useTranslations("Index");

  return (
    <div className="mt-10">
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-6 ">
        {t("reviewHeader")}
        <span className="text-primary text-5xl">
          {t("reviewHeaderClients")}
        </span>
        {t("reviewHeaderSay")}
      </h2>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 10 }, (_, index) => index).map(
            (item, index) => (
              <CarouselItem
                style={{
                  aspectRatio: "1 / 0.6",
                }}
                className="md:basis-1/3  select-none pl-4 "
                key={index}
              >
                <div className="relative h-full">
                  <Image
                    src={`/reviews/${index + 1}.jpg`}
                    alt="Icon"
                    fill
                    className="object-center object-cover rounded-lg select-none "
                  />
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
