import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

export function AutoplayImageCarousel(props: {
  className?: string;
    imgList: string[]
}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
        WheelGesturesPlugin({ forceWheelAxis: "x" }),
      ]}
      className="w-full max-w-5xl"
    >
      <CarouselContent>
        {props.imgList.map((img, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="p-0 overflow-hidden">
                <CardContent className={cn(`aspect-square bg-cover bg-no-repeat bg-center bg-[url(${img})]`)}>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
