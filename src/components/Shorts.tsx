"use client";

import { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import YouTube, { YouTubeProps } from "react-youtube";
import Image from "next/image";

interface VideoData {
  id: string;
  thumbnail: string;
}

const shortsData: VideoData[] = [
  "S0McztpfNmw",
  "OAH2YfFPA00",
  "tcZ-SMwjKOQ",
  "DKLCFMRAC8E",
  "3ewHVvEVIdg",
  "KZ-FSYfFDpc",
  "O8VdpYQ17DU",
  "Au9uUWAQOmQ",
  "29ZcgDFcE9A",
  "bfvjfEw86ww",
  "QSA71Wo7KBU",
  "yKSaP2vjBzo",
  "BIWeOVNGsDI",
  "KIew2kyaYDg",
  "JMX0hQ4D_mU",
  "gFwKL3Q9dqM",
  "btH89uVldp8",
  "c_ug-e-YayI",
  "YAD-6lrnxVg",
  "oH9f3fq8ARU",
  "zSbYTCHPxQI",
  "JbiBkpJkSlE",
].map((id) => ({
  id,
  thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
}));

export default function Shorts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",

    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
      controls: 1,
    },
  };

  return (
    <div ref={containerRef} className="mt-16">
      <Carousel>
        <CarouselContent>
          {shortsData.map((video) => (
            <CarouselItem className=" md:basis-1/3 " key={video.id}>
              <div
                key={video.id}
                style={{ aspectRatio: "9/16" }}
                className=" relative rounded-lg overflow-hidden"
              >
                {activeVideo === video.id ? (
                  <div className="w-full h-full">
                    <YouTube
                      videoId={video.id}
                      opts={opts}
                      id="player"
                      className="w-full h-full rounded-lg"
                      onEnd={() => setActiveVideo(null)}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    onClick={() => setActiveVideo(video.id)}
                    className="cursor-pointer relative w-full h-full"
                  >
                    <Image
                      fill
                      src={video.thumbnail}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                      <div className="w-12 h-12 bg-black/70 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-sm:left-2 sm:flex" />
        <CarouselNext className=" max-sm:right-2 sm:flex" />
      </Carousel>
    </div>
  );
}
