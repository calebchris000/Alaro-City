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
    class="bg-secondary h-max py-20 relative w-full flex flex-col justify-between pt-20 gap-10 px-32"
>
    <div class="w-[50rem] mx-auto space-y-4">
        <h1
            class="text-[4rem] font-semibold text-center text-primary leading-tight"
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
            class="absolute video_holder hover:scale-[1.2] hover:rotate-0 cursor-pointer transition-all left-10 top-10 -rotate-6 text-2xl w-40 space-y-2"
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
    <div class="w-[50rem] mx-auto h-[70vh] overflow-hidden">
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
        <div class="w-[60vw] overflow-hidden h-fit bg-white rounded-lg z-50">
            <video
                bind:this={video_element}
                controls
                class="w-full"
                src={video_intro}
            ></video>
        </div>
    </div>
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
