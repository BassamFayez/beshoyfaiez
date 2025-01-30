import { Card } from "@/src/components/ui/card";
import about1 from "@/public/about.jpg";
import about2 from "@/public/about.2jpg.jpg";
import about3 from "@/public/about3.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { Youtube } from "lucide-react";
export async function AboutSection() {
  const t = await getTranslations("Index");
  const locale = await getLocale();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4  gap-4 mt-10">
        <Card className="col-span-2  border-none bg-gray-100 p-8 pb-4">
          <h1 className="text-4xl lg:text-6xl">
            {t("title3")}
            <span className="text-3xl lg:text-5xl">
              <br /> {t("title4")}
            </span>
          </h1>

          <p
            className={`mt-4 text-muted-foreground lg:text-lg  ${locale === "en" ? "text-justify" : "text-left"}`}
          >
            {t("description")}
          </p>
          <div>
            {/* <button className="bg-red-700 rounded-lg text-white w-36 h-10 px-2  text-center  flex gap-4 items-center group relative transition">
              <Image
                src="/youtube.svg"
                alt="youtube"
                width={30}
                height={30}
                className="group-hover:mx-auto transition-all duration-300 ease-in-out"
              />
              <span className="group-hover:absolute group-hover:-right-4 group-hover:opacity-0 transition">
                Youtube
              </span>
            </button> */}
            <a
              href="https://www.youtube.com/@beshoyfaiez1205"
              target="_blank"
              className="bg-red-700 rounded-lg mt-4 text-white w-36 h-12 px-2 text-center flex items-center group relative"
            >
              <Image
                src="/Youtube.svg"
                alt="youtube"
                width={30}
                height={30}
                className="transition-all duration-500 ease-in-out transform group-hover:translate-x-12"
              />
              <span className="absolute left-14 transition-all duration-500 ease-in-out transform group-hover:translate-x-8 group-hover:opacity-0">
                Youtube
              </span>
            </a>
          </div>

          {/* <div className="flex max-[450px]:flex-col gap-6 min-[450px]:items-center mt-5">
            <a
              href="mailto:yousefsaeed668@gmail.com"
              className="relative inline-block text-lg group w-fit"
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">{t("button")}</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=1kUfIglR_8jeXvGi5irIX-gIt0zp6_BOg&export=download"
              className="relative w-fit inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary/80 rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primary rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-primary/70 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                <span className="block text-md">{t("button2")}</span>
              </span>
            </a>
          </div> */}
        </Card>
        <div className="col-span-2">
          <div className="flex justify-center items-center gap-4">
            <div>
              <Image
                src={about3}
                alt="Beshoy Faiez"
                style={{
                  aspectRatio: locale === "ru" ? "1/1.9" : "",
                }}
                className=" object-cover object-top rounded-lg w-full"
              />
            </div>
            <div>
              <Image
                src={about2}
                alt="Beshoy Faiez"
                style={{
                  aspectRatio: locale === "ru" ? "1/1.9" : "",
                }}
                className=" object-cover object-top  rounded-lg w-full"
              />
            </div>
          </div>
          <div className="pt-4">
            <Image
              src={about1}
              alt="Beshoy Faiez"
              className={`h-[250px] ${locale === "ru" ? "md:h-[370px]" : "md:h-[325px]"} object-cover object-center rounded-lg w-full`}
            />
          </div>
        </div>
      </div>
      <h2 className="text-3xl mt-6 font-semibold text-center bg-gray-100 p-4 rounded-md border  ">
        {t("header")}
      </h2>
    </>
  );
}
