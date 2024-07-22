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
    class="bg-secondary sticky top-0 flex items-center h-20 px-4 gap-10 xl:px-32 xl:h-16 justify-between"
>
    <div class="w-28"><img class="w-full" src={logo} alt="" /></div>
    <div>
        <a class="font-medium" href="#contact">CONTACT US</a>
    </div>
    <div class="hidden xl:block"></div>
</nav>
