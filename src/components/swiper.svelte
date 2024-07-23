<script lang="ts">
    import Swiper from "swiper";
    import { Autoplay } from "swiper/modules";
    import "swiper/css";
    import { onMount } from "svelte";
    import one from "../assets/slides/one.jpeg";
    import two from "../assets/slides/two.jpeg";
    import three from "../assets/slides/three.jpeg";
    import four from "../assets/slides/four.jpeg";
    import five from "../assets/slides/five.jpeg";
    import six from "../assets/slides/six.jpeg";
    import seven from "../assets/slides/seven.jpeg";

    let swiper_element: HTMLDivElement;

    onMount(() => {
        new Swiper(".swiper", {
            direction: "horizontal",
            speed: 1000,
            allowTouchMove: false,

            modules: [Autoplay],

            autoplay: {
                delay: 3000,
            },
            loop: true,
        });
    });
    const images = [one, two, three, four, five, six, seven];
</script>

<div class="swiper w-full h-fit">
    <div class="swiper-wrapper">
        {#each images as image}
            <div class="swiper-slide overflow-hidden">
                <img class="w-full" src={image} alt="" />
            </div>
        {/each}
    </div>
</div>
