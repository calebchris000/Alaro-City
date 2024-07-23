<script lang="ts">
    import video_intro from "../assets/alaro-city-intro.mp4";
    import Play from "../assets/play.svelte";
    import video_shot from "../assets/video_shot.png";
    import Swiper from "./swiper.svelte";

    $: show_video_popup = false;
    let video_element: HTMLVideoElement;
</script>

<section
    id="home"
    class="bg-secondary p-4 h-max py-20 relative w-full flex flex-col justify-between pt-20 gap-10 lg:px-32"
>
    <div class="mx-auto space-y-4 lg:w-[50rem]">
        <h1
            class="text-3xl lg:text-[4rem] font-semibold text-center text-primary leading-tight"
        >
            Alaro City: Discover Mixed-Use Community in Lekki Free Zone.
        </h1>
        <p class="text-primary leading-loose text-center">
            Alaro City is a mixed-use community in the Lekki Free Zone, offering
            offices, logistics, homes, schools, and more. Enjoy a modern living
            experience with world-class amenities and a thriving business
            environment.
        </p>

        <button
            type="button"
            on:click={() => {
                show_video_popup = !show_video_popup;
            }}
            class="absolute hidden video_holder hover:scale-[1.2] hover:rotate-0 cursor-pointer transition-all left-10 top-10 -rotate-6 text-2xl w-40 space-y-2 xl:block"
        >
            <span class="w-[12rem] block bg-gray-200 relative">
                <img class="w-full" src={video_shot} alt="" />
                <Play
                    className="w-24 text-white shadow-md absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                />
            </span>
            <p class="font-medium text-3xl text-primary select-none">
                Watch Video
            </p>
        </button>
    </div>
    <div
        class="w-full lg:w-[50rem] mx-auto box-border lg:h-[70vh] overflow-hidden"
    >
        <Swiper />
    </div>

    <div
        style="opacity: {show_video_popup
            ? '1'
            : '0'}; pointer-events: {show_video_popup ? 'all' : 'none'}"
        class="fixed h-full w-full transition-all inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
        <div
            role="button"
            on:click={() => {
                show_video_popup = false;
                video_element.pause();
            }}
            class="absolute inset-0 blur"
        ></div>
        <div
            class="w-full lg:w-[60vw] overflow-hidden h-fit bg-white lg:rounded-lg z-50"
        >
            <video
                bind:this={video_element}
                controls
                class="w-full"
                src={video_intro}
            ></video>
        </div>
    </div>

    <button
        type="button"
        on:click={() => {
            show_video_popup = true;
        }}
        class="lg:hidden video_holder flex flex-col items-center w-full gap-4 mt-20"
    >
        <p class="text-4xl text-primary select-none font-semibold underline">
            Watch Video
        </p>
        <span class="w-full block bg-gray-200 relative">
            <img class="w-full" src={video_shot} alt="" />
            <Play
                className="w-24 text-white shadow-md absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            />
        </span>
    </button>
</section>

<style>
    .video_holder {
        font-family: "Caveat", cursive;
    }

    .blur {
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(7.1px);
        -webkit-backdrop-filter: blur(7.1px);
    }
</style>
