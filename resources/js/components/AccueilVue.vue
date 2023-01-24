<template>
    <h1 class="text-center vh-100 big-title gs_reveal ipsType_center">Bienvenues</h1>
    <section class="section-couleur couleur1 d-sm-flex" >
        <div class="w-200 me-5 gs_reveal gs_reveal_fromLeft" >
            <img src="../../images/cactus7.jpg" alt="" class="img-fluid">
        </div>
        <div class="pt-5 pe-5">
            <h2 class="gs_reveal">Titre 1</h2>
            <p class="gs_reveal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores officia ea, perspiciatis enim dolore suscipit vero exercitationem, laudantium et, maxime magni sequi! Accusantium ipsa voluptatum quia dolorem laboriosam corrupti.</p>
        </div>
    </section>
    <section class="section-parallax pSection ">
        <div class="w-200 img-absolute pImage">
            <img src="../../images/cactus7.jpg" alt="" class="img-fluid">
        </div>
        <div class="container">
            <div class="couleur2 pContent">
                <h2>Titre 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores officia ea, perspiciatis enim dolore
                    suscipit vero exercitationem, laudantium et, maxime magni sequi! Accusantium ipsa voluptatum quia dolorem
                    laboriosam corrupti.</p>
            </div>
        </div>
    </section>
    
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 1.45,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

document.addEventListener("DOMContentLoaded", function (event) {

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        // hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            markers: true,
            onEnter: function () { animateFrom(elem) },
            onEnterBack: function () { animateFrom(elem, -1) },
            onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });

    gsap.to(".pContent", {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
            trigger: ".pSection",
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true
        },
    });

    gsap.to(".pImage", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
            trigger: ".pSection",
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true
        },
    });

})
</script>