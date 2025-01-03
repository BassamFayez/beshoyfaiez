// import Image from "next/image";
// import square from "../../public/square.svg";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import facebook from "../../public/facebook.webp";
// import insta from "../../public/insta.svg";
// import vk from "../../public/vk.png";
// import whatsapp from "../../public/whatsapp.png";

// import { Button } from "@/components/ui/button";
// import { useTranslations } from "next-intl";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// const socialMedia = [
//   {
//     id: 1,
//     icon: insta,
//     name: "Instagram",
//     username: "@bishoy_faiez",
//     link: "https://www.instagram.com/bishoy_faiez/",
//   },
//   {
//     id: 2,
//     icon: facebook,
//     name: "Facebook",
//     username: "@alkingbeashoy",
//     link: "https://www.facebook.com/alkingbeashoy",
//   },
//   {
//     id: 3,
//     icon: vk,
//     name: "VK",
//     username: "@yousefsaeed668",
//     link: "https://vk.com/id636381816",
//   },
//   {
//     id: 4,
//     icon: whatsapp,
//     name: "Whatsapp",
//     username: "+7 (903) 962-10-08",
//     link: "https://wa.me/+79039621008?text=Hi Beshoy, I visited your portfolio and I would like to connect with you.",
//   },
// ];
// export function SectionTwo() {
//   const t = useTranslations("Index");
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
//       <div className="w-full relative col-span-1">
//         <Image
//           src={square}
//           alt="square"
//           className="w-full h-full object-cover rounded-2xl"
//         />
//       </div>
//       <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
//         <Card className="bg-gray-100 border-none  pb-8">
//           <CardHeader>{/* <CardTitle>{t("stack")}</CardTitle> */}</CardHeader>
//           <Carousel
//             className="w-[80%] mx-auto"
//             opts={{
//               slidesToScroll: 2,
//             }}
//           >
//             <CarouselContent>
//               {Array.from({ length: 32 }, (_, index) => index).map(
//                 (item, index) => (
//                   <CarouselItem
//                     style={{
//                       aspectRatio: "1 / 1",
//                     }}
//                     key={index}
//                     className="relative basis-1/2 pl-0 ml-4"
//                   >
//                     <Image
//                       fill
//                       key={index}
//                       src={`/drinks/${index + 1}.jpg`}
//                       alt="Icon"
//                       className="object-center object-cover rounded-lg select-none "
//                     />
//                   </CarouselItem>
//                 )
//               )}
//             </CarouselContent>
//             <CarouselNext className="w-10 h-10 " />
//             <CarouselPrevious className="w-10 h-10" />
//           </Carousel>
//         </Card>
//         <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4">
//           {socialMedia.map((item) => (
//             <Card
//               key={item.id}
//               className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
//             >
//               <Image src={item.icon} alt="Icon" className="w-16 h-16" />
//               <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
//               <p className="text-muted-foreground">{item.username}</p>
//               <Button className="mt-4" size="sm" asChild>
//                 <a href={item.link}>{t("Contact")}</a>
//               </Button>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import square from "../../public/square.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import facebook from "../../public/facebook.webp";
import insta from "../../public/insta.svg";
import vk from "../../public/vk.png";
import telegram from "../../public/telegram.webp";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const socialMedia = [
  {
    id: 1,
    icon: insta,
    name: "Instagram",
    username: "@bishoy_faiez",
    link: "https://www.instagram.com/bishoy_faiez/",
  },
  {
    id: 2,
    icon: facebook,
    name: "Facebook",
    username: "@alkingbeashoy",
    link: "https://www.facebook.com/alkingbeashoy",
  },
  {
    id: 3,
    icon: vk,
    name: "VK",
    username: "@yousefsaeed668",
    link: "https://vk.com/id636381816",
  },
  {
    id: 4,
    icon: telegram,
    name: "Telegram",
    username: "+7 (903) 962-10-08",
    link: "https://wa.me/+79039621008?text=Hi Beshoy, I visited your portfolio and I would like to connect with you.",
  },
];
export function SectionTwo() {
  const t = useTranslations("Index");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image
          src={square}
          alt="square"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none  pb-8">
          <CardHeader>{/* <CardTitle>{t("stack")}</CardTitle> */}</CardHeader>
          <Carousel
            className="w-[80%] mx-auto"
            opts={{
              slidesToScroll: 2,
            }}
          >
            <CarouselContent>
              {Array.from({ length: 32 }, (_, index) => index).map(
                (item, index) => (
                  <CarouselItem
                    style={{
                      aspectRatio: "1 / 1",
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
            <CarouselNext className="w-10 h-10 " />
            <CarouselPrevious className="w-10 h-10" />
          </Carousel>
        </Card>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
            >
              <Image src={item.icon} alt="Icon" className="w-16 h-16" />
              <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button className="mt-4" size="sm" asChild>
                <a href={item.link}>{t("Contact")}</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
