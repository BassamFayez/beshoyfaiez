"use client";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
const shortsLink = [
  "https://www.youtube.com/embed/S0McztpfNmw",
  "https://www.youtube.com/embed/OAH2YfFPA00",
  "https://www.youtube.com/embed/tcZ-SMwjKOQ",
  "https://www.youtube.com/embed/DKLCFMRAC8E",
  "https://www.youtube.com/embed/3ewHVvEVIdg",
  "https://www.youtube.com/embed/KZ-FSYfFDpc",
  "https://www.youtube.com/embed/O8VdpYQ17DU",
  "https://www.youtube.com/embed/Au9uUWAQOmQ",
  "https://www.youtube.com/embed/29ZcgDFcE9A",
  "https://www.youtube.com/embed/bfvjfEw86ww",
  "https://www.youtube.com/embed/QSA71Wo7KBU",
  "https://www.youtube.com/embed/yKSaP2vjBzo",
  "https://www.youtube.com/embed/BIWeOVNGsDI",
  "https://www.youtube.com/embed/KIew2kyaYDg",
  "https://www.youtube.com/embed/JMX0hQ4D_mU",
  "https://www.youtube.com/embed/gFwKL3Q9dqM",
  "https://www.youtube.com/embed/btH89uVldp8",
  "https://www.youtube.com/embed/c_ug-e-YayI",
  "https://www.youtube.com/embed/YAD-6lrnxVg",
  "https://www.youtube.com/embed/oH9f3fq8ARU",
  "https://www.youtube.com/embed/zSbYTCHPxQI",
  "https://www.youtube.com/embed/JbiBkpJkSlE",
];
export default function Shorts() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = (): void => {
    const swipeThreshold = 50;
    const difference = touchStartX - touchEndX;

    if (Math.abs(difference) > swipeThreshold && containerRef.current) {
      if (difference > 0) {
        const nextButton =
          containerRef.current.querySelector<HTMLButtonElement>(
            "[data-carousel-next]"
          );
        nextButton?.click();
      } else {
        const prevButton =
          containerRef.current.querySelector<HTMLButtonElement>(
            "[data-carousel-prev]"
          );
        prevButton?.click();
      }
    }
  };

  return (
    <div
      className="mt-6"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Carousel>
        <CarouselContent>
          {shortsLink.map((item) => (
            <CarouselItem
              key={item}
              className="basis-full md:basis-1/3 flex justify-center"
            >
              <iframe
                width="356"
                height="634"
                className="rounded-lg pointer-events-none sm:pointer-events-auto"
                src={`${item}?enablejsapi=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="max-sm:-right-3" data-carousel-next />
        <CarouselPrevious className="max-sm:-left-3" data-carousel-prev />
      </Carousel>
    </div>
  );
}
