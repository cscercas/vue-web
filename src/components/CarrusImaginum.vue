
<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

interface Props {
  photos: string[]
  basePath: string
  autoplayDelay?: number
  loop?: boolean
  dragFree?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoplayDelay: 2000,
  loop: true,
  dragFree: true
})

</script>

<template>
    <Carousel 
    class="w-full maw-w-md md:max-w-2xl lg:max-w-4xl bg-gray-900"
      :opts="{
                  dragFree: props.dragFree,
                  loop: props.loop
                }"
                 :plugins="[Autoplay({
                  delay: props.autoplayDelay,
                })]"
                >

    <CarouselContent>
      <CarouselItem v-for="(photo, index) in props.photos" :key="index">
        <div class="p-1">
          <Card class="bg-gray-900 border-none">
            <CardContent class="flex aspect-6/4 items-center justify-center p-6">
              <img 
                :src="`${props.basePath}/${photo}.jpg`" 
                class="w-full h-full object-cover"
                :alt="`Imagen ${index + 1} de Batman`"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="hidden md:flex bg-gray-900 text-white" />
    <CarouselNext class="hidden md:flex bg-gray-900 text-white" />
  </Carousel>
</template>


<style lang="scss" scoped></style>