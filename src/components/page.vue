<script setup>
import Header from './header.vue';
import Intro from './intro.vue';
import ProductSlider from './productSlider.vue';
import Features from './features.vue';
import ChatBot from './chatbot.vue';
import Footer from './footer.vue';

import { handleScroll } from './scrollDown';

handleScroll();
</script>

<template>
  <Header></Header>
  <Intro></Intro>
  <ProductSlider></ProductSlider>
  <Features></Features>
  <ChatBot></ChatBot>
  <Footer></Footer>
</template>