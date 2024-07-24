<script lang="ts">
    import { onMount } from "svelte";
    import Contact from "../components/contact.svelte";
    import Footer from "../components/footer.svelte";
    import Hero from "../components/hero.svelte";
    import Info from "../components/info.svelte";
    import Navbar from "../components/navbar.svelte";
    import axios from "axios";

    onMount(() => {
        const backend_url = import.meta.env.VITE_BACKEND_URL;

        axios.post(`${backend_url}/sendVisit`, {}, {});
    });
</script>

<main class="main">
    <Navbar />
    <Hero />
    <Info />
    <Contact />
    <Footer />
</main>
