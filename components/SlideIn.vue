<template>
    <div :class="['slide-in', isVisible ? 'slide-in-active' : '']" ref="observerTarget">
      <slot />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const isVisible = ref(false);
  const observerTarget = ref(null);
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;

          // Stop observing once visible (optional)
          observer.disconnect();
        }
      },
      { 
        // Trigger when 30% of the element is visible
        threshold: 0.1
      }
    );
  
    if (observerTarget.value) {
      observer.observe(observerTarget.value);
    }
  });
  
  onUnmounted(() => {
    if (observerTarget.value) {
      observer.unobserve(observerTarget.value);
    }
  });
  </script>

<style scoped>
.slide-in {
  opacity: 0;
  transform: translateY(50px); /* Slide from bottom */
  transition: all 2s cubic-bezier(0.25, 0.8, 0.25, 1);
  will-change: opacity, transform;
}

.slide-in-active {
  opacity: 1;
  transform: translateY(0); /* Slide into place */
}
</style>
  