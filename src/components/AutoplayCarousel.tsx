import { type ReactNode } from "react";
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

export function AutoplayCarousel(props: {
  children: ReactNode;
  className: string;
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
      className="w-full max-w-sm"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className={cn("p-1", props.className)}>{props.children}</div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
