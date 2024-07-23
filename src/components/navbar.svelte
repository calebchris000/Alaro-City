<script lang="ts">
    import logo from "../assets/logo.png";

    let nav: HTMLElement;

    window.addEventListener("scroll", () => {
        if (!nav) return;
        if (window.scrollY > 0) {
            console.log("off");
            nav.style.boxShadow = "0 5px 20px rgba(63,156,61, 0.6)";
        } else {
            nav.style.boxShadow = "none";
        }
    });
</script>

<nav
    bind:this={nav}
    class="bg-secondary z-50 sticky top-0 flex items-center h-20 px-4 gap-10 xl:px-32 xl:h-16 justify-between"
>
    <div class="w-28 flex gap-4 items-center font-medium">
        <img class="w-full" src={logo} alt="" />
        <p
            class="text-xs text-black px-2 rounded-lg font-semibold bg-orange-500"
        >
            BROKER
        </p>
    </div>
    <div>
        <a class="font-medium text-primary" href="#contact">Contact Us</a>
    </div>
    <div class="hidden xl:block"></div>
</nav>
