<template>
  <div class="scrollContainer z-50">
    <!-- Scroll-to-top button -->
    <button
      class="scroll-to-top fixed bottom-[13%] right-4 p-3 bg-gray-800 text-white rounded-full
        w-[50px] h-[50px] 
        transition-opacity duration-300 z-50 hover:bg-gray-300 hover:text-black"
      @click="scrollToTop"
      ref="scrollTopButton"
      v-show="true"
    >
      <font-awesome-icon :icon="['fas', 'chevron-up']" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
    }
  },
  mounted() {
    this.checkSizeScreen();
    window.addEventListener('resize', this.checkSizeScreen);
    window.addEventListener('scroll', this.handleScrollTop);
  },
  methods: {
    checkSizeScreen() {
      this.isMobile = window.innerWidth < 768;
    },
    handleScrollTop() {
      const btn = this.$refs.scrollTopButton;
      const scrollTop = document.documentElement.scrollTop;
      const isScrollTop = scrollTop < 100;

      if (!btn) return;

      if (this.isMobile) {
        // Mobile logic
        const isScrollFooter = scrollTop > 100;

        if (!isScrollFooter) {
          btn.style.display = 'none';
        } else {
          btn.style.display = 'block';
          btn.style.opacity = '1';
        }
      } else { 
        // Desktop logic
        if (isScrollTop) {
          btn.style.display = 'none';
          btn.style.opacity = '0';
        } else {
          btn.style.display = 'block';
          btn.style.opacity = '1';
        }
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
}
</script>

<style scoped>
.scroll-to-top {
  transition: opacity 0.3s ease;
  display: none;
}
</style>