import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

export default function AutoplayImageCarousel(props: {
  className?: string;
  imgList: string[];
}) {
    React.useEffect(() => {
        console.log(props.imgList)
    }, [])
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
        WheelGesturesPlugin({ forceWheelAxis: "x" }),
      ]}
      className={cn("w-full max-w-7xl", props.className)}
    >
      <CarouselContent>
        {props.imgList.map((img, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <Card className="overflow-hidden p-0">
              <CardContent
                className="aspect-square p-0"
              >
                                <img src={img} className="w-full h-full object-cover" />
                            </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
    </Carousel>
  );
}
