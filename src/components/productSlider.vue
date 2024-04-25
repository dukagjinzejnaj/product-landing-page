<script setup>
import { ref } from 'vue';

/* Images */
import gallery1 from '@/assets/images/gallery-1.jpg';
import gallery2 from '@/assets/images/gallery-2.jpg';
import gallery3 from '@/assets/images/gallery-3.jpg';
import gallery4 from '@/assets/images/gallery-4.jpg';
import gallery5 from '@/assets/images/gallery-4.jpg';

/* Select image */
const currentImage = ref(0);

function selectImage(index) {
  currentImage.value = index;
};
</script>

<template>
  <div class="bg-grigio h-lvh flex flex-col items-center justify-center">
    <div class="featureContent max-w-72 lg:max-w-lg relative overflow-hidden">
      <h2 class="text-sm lg:text-2xl mb-2 font-bold uppercase">Produkt</h2>
      <div class="flex items-stretch bg-kohle rounded-2xl relative">
        <img class="w-full" v-for="(image, index) in [gallery1, gallery2, gallery3, gallery4, gallery5]"
          :key="index" :class="currentImage === index ? 'current rounded-2xl' : 'next absolute rounded-2xl'" :src="image" alt="Feature">
      </div>
      <div class="mt-10 flex justify-center items-center">
        <span v-for="index in 5"
          :key="index" @click="selectImage(index - 1)"
          :class="currentImage === index - 1 ? 'pagination-dot h-5 w-5 active border-2 border-azzuro rounded-full cursor-pointer m-2.5 bg-azzuro' : 'pagination-dot h-5 w-5 rounded-full cursor-pointer m-2.5 bg-kohle'">
        </span>
      </div>
    </div>
  </div>
</template>