<script lang="ts">
    import video_intro from "../assets/alaro-city-intro.mp4";
    import Play from "../assets/play.svelte";
    import video_shot from "../assets/video_shot.png";
</script>

<section
    class="bg-secondary relative h-[80vh] w-full flex flex-col justify-between pt-20 gap-10 px-32"
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

        <div
            class="absolute video_holder left-10 top-10 -rotate-6 text-2xl w-40 space-y-2"
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
        </div>
    </div>
    <div class="w-full"></div>
</section>

<style>
    .video_holder {
        font-family: "Caveat", cursive;
    }
</style>
