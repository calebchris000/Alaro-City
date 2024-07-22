<script lang="ts">
    import Swiper from "swiper";
    import { Autoplay } from "swiper/modules";
    import "swiper/css";
    import { onMount } from "svelte";
    import image2 from "../assets/slides/image2.jpeg";
    import image3 from "../assets/slides/image3.jpeg";
    import image4 from "../assets/slides/image4.jpeg";
    import image5 from "../assets/slides/image5.jpeg";
    import image6 from "../assets/slides/image6.jpeg";
    import image7 from "../assets/slides/image7.jpeg";
    import image8 from "../assets/slides/image8.jpeg";

    let swiper_element: HTMLDivElement;

    onMount(() => {
        new Swiper(".swiper", {
            direction: "horizontal",
            speed: 1000,
            modules: [Autoplay],

            autoplay: {
                delay: 3000,
            },
            loop: true,
        });
    });
    const images = [image2, image3, image4, image5, image6, image7, image8];
</script>

<div class="swiper w-full">
    <div class="swiper-wrapper">
        {#each images as image}
            <div class="swiper-slide overflow-hidden">
                <img class="w-full" src={image} alt="" />
            </div>
        {/each}
    </div>
</div>
