'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className=" lg:w-3/5 w-full m-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem >
        <AspectRatio ratio={16 / 9} className="rounded-md overflow-hidden">
      <Image
        src="/about.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        quality={40}
      />
    </AspectRatio>  
                </CarouselItem>
        <CarouselItem><AspectRatio ratio={16 / 9} className="rounded-md overflow-hidden">
      <Image
        src="/about.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        quality={40}
      />
    </AspectRatio>  </CarouselItem>
        <CarouselItem><AspectRatio ratio={16 / 9} className="rounded-md overflow-hidden">
      <Image
        src="/about.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        quality={40}
      />
    </AspectRatio>  </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}



