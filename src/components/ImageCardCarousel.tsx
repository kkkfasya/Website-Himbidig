import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { ReactNode, HTMLAttributes } from "react";
import { CarouselItem } from "./ui/carousel";

interface Props extends HTMLAttributes<HTMLImageElement> {
  className?: string;
  children?: ReactNode;
  alt?: string;
  src: string;
}

export function ImageCardCarousel(props: Props) {
  return (
    <CarouselItem>
      <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <img className={cn(props.className)} {...props} />
        </CardContent>
      </Card>
        <span className="text-xl font-semibold">{props.children}</span>
    </CarouselItem>
  );
}
