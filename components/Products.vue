<template>
  <div class="text-center mb-6 bg-gray-200 p-5" id="product">
    <h1 class="font-bold text-4xl">Our Products</h1>
    <div class="mt-2">20% Eau de Parfum</div>
  </div>

  <div class="flex items-center justify-center min-h-screen">
    <div class="grid grid-cols-3 sp:grid-cols-1 align-center gap-4 text-center items-center justify-center p-4 mt-5">
      <div 
        class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white"
        v-for="(product, index) in products"
        :key="index"
      >
        <div class="w-full h-[11.25rem] overflow-hidden relative">
          <img 
            class="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110 hover:object-center" 
            :src="`/products/${product.url}`" 
            :alt="product.url" 
          />
        </div>
        <div class="p-6">
          <h2 class="text-xl font-semibold text-red-800">{{ product.name }}</h2>
          <p class="text-gray-600 mt-2 mb-5">{{ truncateText(product.description, 100) }}</p>
          <a href="#" class="hover:text-gray-600">Read More</a>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="flex justify-center">
    <a href="" class="hover:text-blue">See More...</a>
  </div> -->
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true,
  },
});

const truncateText = (text, length) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};
</script>