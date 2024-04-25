<script setup>
import { reactive } from 'vue';

/* Send form */
const formdata = reactive({
    email: "",
})

function sendForm() {
    if(formdata.email == null || formdata.email == "") {
        alert("Bitte gib deine E-Mailadresse ein!")
    } else {
        alert('Vielen Dank für deine Anmeldung!');
    }
}
</script>

<template>
    <div class="bg-kohle py-5 px-3.5">
        <div class="flex justify-between flex-wrap">
            <div class="w-1/2 xl:w-1/4 py-5">
                <ul>
                    <h3 class="mx-4 text-sm lg:text-lg font-bold text-marin uppercase">Info</h3>
                    <li class="mx-4"><a href="https://www.logitech.com/de-at/about.html" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Logitech Story</a></li>
                    <li class="mx-4"><a href="https://jobs.jobvite.com/logitech" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Karriere</a></li>
                    <li class="mx-4"><a href="https://ir.logitech.com/" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Investoren</a></li>
                    <li class="mx-4"><a href="https://press.logitech.eu/de-de/?h=1&t=Blog" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Blog</a></li>
                    <li class="mx-4"><a href="https://press.logitech.eu/de-de/" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Presse</a></li>
                    <li class="mx-4"><a href="https://www.logitech.com/de-at/about/contact.html" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Kontakt</a></li>
                </ul>
            </div>
            <div class="w-1/2 xl:w-1/4 py-5">
                <ul>
                    <h3 class="mx-4 text-sm lg:text-lg font-bold text-marin uppercase">Werte</h3>
                    <li class="mx-4"><a href="https://www.logitech.com/de-at/social-impact.html" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Sozialer Einfluss</a></li>
                    <li class="mx-4"><a href="https://www.logitech.com/de-at/sustainability.html" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Nachhaltigkeit</a></li>
                    <li class="mx-4"><a href="https://www.logitech.com/de-at/sustainability/recycling.html" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Recycling</a></li>
                </ul>
            </div>
            <div class="w-1/2 xl:w-1/4 py-5">
                <ul>
                    <h3 class="mx-4 text-sm lg:text-lg font-bold text-marin uppercase">Partner</h3>
                    <li class="mx-4"><a href="https://www.logitech.com/de-at/promo/affiliate-program.html" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Partner-Programm</a></li>
                    <li class="mx-4"><a href="https://partners.logitech.com/German/" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Partner-Portal</a></li>
                </ul>
            </div>
            <div class="w-1/2 xl:w-1/4 py-5">
                <ul>
                    <h3 class="mx-4 text-sm lg:text-lg font-bold text-marin uppercase">Kunden</h3>
                    <li class="mx-4"><a href="https://www.logitech.com/de-at/my-account/order-faqs.html#returns-cancellations" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Rückgabebedingungen</a></li>
                    <li class="mx-4"><a href="https://www.logitech.com/de-at/my-account/email-preferences.html" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">E-Mail-Einstellungen</a></li>
                </ul>
            </div>
        </div>
        <div class="flex justify-between flex-wrap border-t border-t-acier">
            <div class="w-full xl:w-1/3 py-5">
                <ul class="xl:flex xl:items-center">
                    <li class="mx-4"><a href="https://www.facebook.com/Logitech" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Facebook</a></li>
                    <li class="mx-4"><a href="https://twitter.com/Logitech" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Twitter (X)</a></li>
                    <li class="mx-4"><a href="https://www.instagram.com/logitech/" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Instagram</a></li>
                </ul>
            </div>
            <div class="w-full xl:w-1/3 py-5 mx-5">
                <form @submit.prevent>
                    <input class="outline-none py-2.5 px-5 max-w-60 rounded-l-2xl text-xs lg:text-lg text-acier uppercase" type="text" name="email" placeholder="Bitte E-Mail-Adresse" v-model="formdata.email"/>
                    <input @click="sendForm()" type="submit" class="bg-electrico text-marin-900 py-2.5 px-3.5 text-xs lg:text-lg rounded-r-2xl uppercase hover:bg-ciano transition duration-300 hover:duration-300" value="Anmelden"/>
                    <div class="block pt-4">
                        <input class="accent-azzuro" type="checkbox" id="news" name="news" value="news">
                        <label class="p-3 text-xs lg:text-lg text-acier font-bold" for="news">Ja, ich möchte Neuigkeiten und Produkt-E-Mails erhalten. Lesen Sie unsere <a class="underline underline-offset-1 hover:no-underline" href="https://www.logitech.com/de-ch/legal/web-privacy-policy.html" target="_blank">Datenschutzrichtlinien</a>.</label>
                    </div>
                </form>
            </div>
        </div>
        <div class="flex justify-start xl:justify-between py-3">
            <ul class="xl:flex">
                <li class="mx-4"><a href="https://www.logitech.com/de-at/tos/terms.html" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Nutzungsbedingungen</a></li>
                <li class="mx-4"><a href="https://www.logitech.com/de-at/legal/web-privacy-policy.html" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Web-Datenschutzrichtlinien</a></li>
                <li class="mx-4"><a href="https://www.logitech.com/de-at/legal/product-privacy-policy.html" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Produktdatenschutzrichtlinien</a></li>
                <li class="mx-4"><a href="https://www.logitech.com/de-at/legal/cookie-policy.html#manage-cookies" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Cookie-Einstellungen</a></li>
                <li class="mx-4"><a href="https://www.logitech.com/de-at/sitemap.html" target="_blank" class="text-xs lg:text-lg text-acier hover:underline underline-offset-1">Sitemap</a></li>
            </ul>
        </div>
    </div>
</template>