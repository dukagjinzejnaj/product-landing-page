<script setup>
/* Images */
import Laser from '@/assets/images/laser-presentation.png';
</script>

<template>
    <div id="intro" class="bg-[url('../images/intro-image.jpg')] bg-no-repeat bg-cover h-lvh flex flex-col items-center justify-center">
        <div class="flex flex-wrap animate-show-content">
            <div class="px-10 content-center mb-8">
                <img class="w-20 lg:size-fit mt-5 rounded-2xl" :src="Laser" alt="Feature 1">
            </div>
            <div class="px-10 content-center">
                <h1 class="text-marin font-bold text-base lg:text-6xl uppercase">R400 Laser Presentation Remote</h1>
                <p class="text-marin text-xs lg:text-lg py-5 mb-5">Für einfache Foliennavigation</p>
                <a class="bg-azzuro px-20 py-5 rounded-2xl text-xs lg:text-lg text-kohle uppercase hover:bg-acier transition transition duration-300 hover:duration-300" target="_blank" href="https://www.logitech.com/de-at/products/presenters/r400-wireless-presenter.910-001356.html">Produkt Kaufen</a>
            </div>
        </div>
    </div>
</template>