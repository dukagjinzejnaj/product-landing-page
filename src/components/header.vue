<script setup>
import { ref } from 'vue';

/* Images */
import Logo from '@/assets/images/logitech-logo.png';

/* Display toggle menu */
const mobileMenuVisible = ref(false);

function toggleMobileMenu() {
  mobileMenuVisible.value = !mobileMenuVisible.value;

  /* Add class to body tag */
  const body = document.body;
    
    if(mobileMenuVisible.value) {
        body.classList.add('disableScrollNav');
    } else {
        body.classList.remove('disableScrollNav');
    }
}
</script>

<template>
    <div class="fixed z-50 w-screen bg-marin py-1.5 lg:py-3.5 px-6 z-50 lg:flex justify-between items-center">
        <div class="flex items-center justify-between">
            <a href="#intro"><img class="size-1/5 lg:size-2/5" :src="Logo" alt="Logitech Logo"></a>
            <div class="lg:hidden">
                <!-- Mobile toggle button -->
                <button @click="toggleMobileMenu" :class="{ 'rotate-0 transition duration-300': !mobileMenuVisible, 'rotate-90 transition duration-300': mobileMenuVisible }" class="text-lg text-green-500 hover:text-white focus:outline-none">
                    <span class="bg-kohle w-5 mt-1 h-1 block rounded"></span>
                    <span class="bg-kohle w-5 mt-1 h-1 block rounded"></span>
                    <span class="bg-kohle w-5 mt-1 h-1 block rounded"></span>
                </button>
            </div>
        </div>
        <ul :class="{ 'h-0 lg:h-auto lg:h-20 duration-300': !mobileMenuVisible, 'pt-5 h-36 lg:h-auto duration-300': mobileMenuVisible }" class="overflow-hidden lg:flex lg:items-center transition-height">
            <li class="lg:mx-4"><a href="#aufmerksamkeit" class="text-xs lg:text-lg text-kohle uppercase hover:bg-kohle hover:text-marin transition transition duration-300 hover:duration-300">Aufmerksamkeit</a></li>
            <li class="lg:mx-4"><a href="#laserpointer" class="text-xs lg:text-lg text-kohle uppercase hover:bg-kohle hover:text-marin transition transition duration-300 hover:duration-300">Laserpointer</a></li>
            <li class="lg:mx-4"><a href="#bewegungsfreiheit" class="text-xs lg:text-lg text-kohle uppercase hover:bg-kohle hover:text-marin transition transition duration-300 hover:duration-300">Bewegungsfreiheit</a></li>
            <li class="lg:mx-4"><a href="#kabellos" class="text-xs lg:text-lg text-kohle uppercase hover:bg-kohle hover:text-marin transition transition duration-300 hover:duration-300">Kabellos</a></li>
        </ul>
    </div>
</template>