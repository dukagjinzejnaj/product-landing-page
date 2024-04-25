<script setup>
import { ref, reactive } from 'vue';

/* Images */
import speachBubble from '@/assets/images/speach-bubble.png';

/* Show chatbot */
const chatVisible = ref(false);

function displayChat() {
    chatVisible.value = !chatVisible.value;

    /* Add class to body tag */
    const body = document.body;

    if(chatVisible.value) {
        body.classList.add('disableScrollChat');
    } else {
        body.classList.remove('disableScrollChat');
    }
}

/* Send form */
const formdata = reactive({
    email: "",
    message: ""
})

function sendForm() {
    if(formdata.email == null || formdata.email == "") {
        alert("Bitte gib deine E-Mailadresse ein!")
    } else if (formdata.message == null || formdata.message == "") {
        alert("Bitte gib deine Nachricht ein!")
    } else {
        alert('Vielen Dank für deine Nachricht!');
    }
}
</script>

<template>
    <div class="fixed bottom-24 lg:bottom-32 right-10 bg-ciano rounded-2xl w-10/12 lg:w-72 px-4 overflow-hidden" :class="{ 'h-0 duration-300': !chatVisible, 'h-52 lg:h-80 duration-300': chatVisible }">
        <form class="form-container" @submit.prevent>
            <h3 class="p-2 font-bold text-xs lg:text-2xl text-marin">Chat</h3>
            <input class="p-2 no-underline rounded-xl outline-none text-xs lg:text-lg text-acier w-full resize-none" type="text" name="email" placeholder="E-Mail-Adresse" v-model="formdata.email"/>
            <textarea class="p-2 mt-4 no-underline rounded-xl outline-none text-xs lg:text-lg text-acier w-full h-11 lg:h-32 resize-none" name="comment" :maxlength="150" placeholder="Nachricht" v-model="formdata.message"></textarea>
            <input @click="sendForm()" type="submit" value="Senden" class="bg-electrico block mt-4 px-10 py-2 rounded-2xl text-xs lg:text-lg text-kohle hover:bg-acier transition transition duration-300 hover:duration-300"/>
        </form>
    </div>
    <div class="fixed bottom-6 lg:bottom-10 right-10">
        <button @click="displayChat()" class="bg-electrico p-4 rounded-full text-xs lg:text-lg text-kohle hover:bg-ciano transition duration-300 hover:duration-300">
            <img :src="speachBubble" alt="Speach bubble">
        </button>
    </div>
</template>