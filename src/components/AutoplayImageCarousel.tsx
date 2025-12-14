import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

export default function AutoplayImageCarousel(props: {
  className?: string;
  imgList: string[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
        WheelGesturesPlugin({ forceWheelAxis: "x" }),
      ]}
      className={cn(
        "w-[20rem] md:w-[50rem] xl:w-[70rem] 2xl:w-7xl",
        props.className,
      )}
    >
      <CarouselContent>
        {props.imgList.map((img, index) => (
          <CarouselItem
            key={index}
            className="basis-1/1 md:basis-1/3 xl:basis-1/4"
          >
            <Card className="overflow-hidden p-0 border-[3px] border-(--highlight-color)">
              <CardContent className="p-0 md:aspect-square">
                <img src={img} className="h-full w-full object-cover" />
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
