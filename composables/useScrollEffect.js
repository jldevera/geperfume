import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollEffect() {
  const isInView = ref(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const element = document.getElementById('product');

    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      // isInView.value = scrollPosition > 800; // Adjust threshold as needed
      isInView.value = scrollPosition > elementTop + 100; // Adjust threshold as needed
    }
  };

  onMounted(() => window.addEventListener('scroll', handleScroll));
  onUnmounted(() => window.removeEventListener('scroll', handleScroll));

  return { isInView };
}
