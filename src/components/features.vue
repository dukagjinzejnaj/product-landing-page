<script setup>
/* Images */
import feature1 from '@/assets/images/feature1.jpg';
import feature2 from '@/assets/images/feature2.jpg';
import feature3 from '@/assets/images/feature3.jpg';
import feature4 from '@/assets/images/feature4.jpg';
</script>

<template>
    <div>
        <div id="aufmerksamkeit" class="bg-acier h-lvh flex flex-col items-center justify-center">
            <div class="featureContent max-w-72 lg:max-w-lg">
                <h2 class="text-sm lg:text-2xl mb-2 font-bold uppercase">Die ungeteilte Aufmerksamkeit ist Ihnen Gewiss</h2>
                <p class="text-xs lg:text-base">Die Tasten lassen sich leicht erfühlen. Und die glatte Form liegt hervorragend in der Hand. So haben Sie alles von Anfang bis Ende unter Kontrolle.</p>
                <img class="mt-5 rounded-2xl mt-5 rounded-2xl" :src="feature1" alt="Feature 1">
            </div>
        </div>
        <div id="laserpointer" class="bg-grigio h-lvh flex flex-col items-center justify-center">
            <div class="featureContent max-w-72 lg:max-w-lg">
                <h2 class="text-sm lg:text-2xl mb-2 font-bold uppercase">Roter Laserpointer</h2>
                <p class="text-xs lg:text-base mb-2">Die Tasten lassen sich leicht erfühlen. Und die glatte Form liegt hervorragend in der Hand.</p>
                <a class="text-xs lg:text-base text-azzuro hover:text-cemento hover:underline underline-offset-1 font-bold uppercase" href="https://www.logitech.com/de-at/products/presenters/r400-wireless-presenter.910-001356.html">Spotlight Presenter Fernbedienung</a>
                <img class="mt-5 rounded-2xl" :src="feature2" alt="Feature 2">
            </div>
        </div>
        <div id="bewegungsfreiheit" class="bg-acier h-lvh flex flex-col items-center justify-center">
            <div class="featureContent max-w-72 lg:max-w-lg">
                <h2 class="text-sm lg:text-2xl mb-2 font-bold uppercase">Bewegungsfreiheit</h2>
                <p class="text-xs lg:text-base">Die kabellose Reichweite ist abhängig von Nutzungs-, Umgebungs- und Computerbedingungen. und der Batteriestandsanzeige werden Ihre Präsentationen garantiert ein Erfolg.</p>
                <img class="mt-5 rounded-2xl" :src="feature3" alt="Feature 4">
            </div>
        </div>
        <div id="kabellos" class="bg-grigio h-lvh flex flex-col items-center justify-center">
            <div class="featureContent max-w-72 lg:max-w-lg">
                <h2 class="text-sm lg:text-2xl mb-2 font-bold uppercase">Sofort einsatzbereiter kabelloser Empfänger</h2>
                <p class="text-xs lg:text-base">Schließen Sie einfach den Empfänger an einen USB-Anschluss an, um zu beginnen. Nach der Präsentation können Sie den Empfänger in der Fernbedienung verstauen.</p>
                <img class="mt-5 rounded-2xl" :src="feature4" alt="Feature 4">
            </div>
        </div>
    </div>
</template>