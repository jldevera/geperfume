<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  // autoplay: 2,
  // transition: 8000,
  dir: 'ltr',
  // gar: 1,
  // wrapAround: true,
  // pauseAutoplayOnHover: true,
}
</script>

<template>
  <div class="relative">
    <!-- Description Positioned on Top -->
    <div class="absolute top-0 left-0 w-full bg-black/50 text-white text-center p-4 z-10">
      <p class="max-w-2xl mx-auto">
        Eau de Parfum is a favorite among many due to its rich concentration of fragrance oils, usually around 15-20%. This high concentration means that EDPs typically last longer on the skin, ranging from 4 to 6 hours, sometimes even longer.
      </p>
    </div>
      <Carousel v-bind="carouselConfig">
      <Slide v-for="image in images" :key="image.id">
        <div class="carousel__item sp:h-[350px] h-[500px]">
          <img 
            :src="`/carousel/${image.filename}`" 
            class="carousel-image"
          />
        </div>
      </Slide>

      <template #addons="{ slidesCount }">
        <Navigation v-if="slidesCount > 1" />
      </template>
    </Carousel>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
.carousel__item {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel__next {
  width: 80px;
}

.carousel__prev {
  width: 80px;
}

.carousel__icon path {
  fill: white;
}

.carousel__icon:hover path {
  fill: rgb(214, 214, 214);
}
</style>