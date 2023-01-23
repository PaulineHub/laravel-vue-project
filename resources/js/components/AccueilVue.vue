<template>
    <section class="section-couleur couleur1">
        <h1>Accueil 1</h1>
    </section>
    <section class="section-couleur couleur2 box">
        <h2>Accueil 2</h2>
    </section>
    <section class="section-couleur couleur3 box">
        <h2>Accueil 3</h2>
    </section>
    
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function (event) {
    gsap.to(".box", {
        scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
        opacity: 1,
    });

})
</script>