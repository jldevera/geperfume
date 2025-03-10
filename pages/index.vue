<template>
  <div
    class="bg-[#f7f7f7]"
    :class="{ 'absolute w-full h-screen top-0 left-0': menu }"
  >
    <div class="flex flex-wrap justify-between">
      <div class="flex items-center justify-between p-2 w-full">
        <div class="flex items-center">
          <div>
            <!-- Logo -->
            <NuxtImg src="/logo.png" 
              alt="GE"
              width="50px"
            />
          </div>
          <h1 class="hidden sm:block font-bold text-xl ml-5">{{ info.site_name }}</h1>
        </div>     

        <!-- Desktop nav list -->
        <nav class="hidden sm:block">
          <ul class="flex gap-4">
            <li
              v-for="(item, index) in items"
              :key="index"
              class="menu-item"
            >
              <NuxtLink
                :to="item.href"
                @click.native.prevent="setActive(item.href)"
                :class="{ 'font-bold': activeHref === item.href }"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Toggle menu mobile icon -->
        <div
          class="ml-auto sm:hidden p-2"
          @click="menu = !menu"
        >
          <button 
            class="hamburger hover:text-gray-500" 
          >
            <svg
              v-if="!menu"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg 
              v-if="menu" 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile nav list -->
    <nav v-show="menu" class="w-full">
      <ul class="flex flex-col text-center">
        <li
          v-for="(item, index) in items"
          :key="index"
        >
          <a
            :href="item.href"
            class="hover:bg-gray-200 p-6 block"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
      <div class="flex justify-center items-center text-gray-500">{{ title }}</div>
    </nav>

    <!-- Carousel -->
    <SlideIn>
      <Carousel :images="carousel" class="mb-[120px]" />
    </SlideIn>

    <!-- Products -->
    <SlideIn>
      <Products :products="products" />
    </SlideIn>

    <SlideIn>
      <About />
    </SlideIn>
    

    <!-- Footer -->
    <AppFooter :footers="footer"/>

    <!-- scroll -->
    <ScrollToTop />
  </div>

</template>

<script setup>
import SlideIn from '~/components/SlideIn.vue'; 
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Load JSON data
const module = await import('~/assets/main.json');
const info = ref(module.default.info);
const items = ref(module.default.items);
const carousel = ref(module.default.carousel);
const products = ref(module.default.products);
const footer = ref(module.default.footer_link);

// Reactive state
const menu = ref(false)

// Methods
const handleScreenSize = () => {
  if (window.innerWidth >= 640) {
    menu.value = false
  }
}

/**
 * Scroll to section smooth effect
 *
 * @param string href 
 */
const scrollToSection = (href) => {
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Function for back to top button behavior
 */
const hideTopButton = () => {
  const distance = (document.documentElement.scrollHeight - window.innerHeight) - window.scrollY
  const scrollContainer = document.querySelector('.scrollContainer')
  if (scrollContainer) {
    distance <= 40
      ? scrollContainer.classList.add('hidden')
      : scrollContainer.classList.remove('hidden')
  }
}

/**
 * Reactive variable to track active href
 */
const activeHref = ref(null)

/**
 * Function to set the active href and scroll to the section
 *
 * @param string href 
 */
const setActive = (href) => {
  activeHref.value = href
  scrollToSection(href)
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('resize', handleScreenSize)
  window.addEventListener('scroll', hideTopButton)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleScreenSize)
  window.removeEventListener('scroll', hideTopButton)
})

// SEO (Head)
useHead({
  title: info.site_name ?? 'GE',
  meta: [
    { hid: 'description', name: 'description', content: 'Page description goes here.' },
    { hid: 'keywords', name: 'keywords', content: 'nuxt, seo, example' },
    { property: 'og:title', content: 'Open Graph Title' },
    { property: 'og:description', content: 'Open Graph Description' },
    { property: 'og:image', content: '/path-to-image.jpg' },
  ],
})

</script>

<style lang="postcss" scoped>
.menu-item {
  @apply hover:font-bold block text-center;
  width: 80px;
}
.section {
  opacity: 0; /* Start with invisible elements */
  transform: translateY(20px); /* Move elements down slightly */
  transition: opacity 0.6s ease-in, transform 0.6s ease-in;
}

.section.visible {
  opacity: 1; /* Fade in */
  transform: translateY(0); /* Move to original position */
}
</style>
