<script lang="ts">
    import logo from "../assets/logo.png";
</script>

<section
    class="w-full bg-gray-700 h-full lg:h-64 flex flex-col gap-4 justify-between p-10 pb-4 text-primary"
>
    <div class="flex justify-between flex-col gap-8 lg:flex-row">
        <div>
            <img class="bg-white rounded-md px-4" src={logo} alt="" />
            <h2 class="text-lg font-medium my-2">Reach me on WhatsApp</h2>
            <a href="tel:08179525233">08179525233</a>
        </div>
        <div class="flex flex-col gap-4">
            <p class="font-medium">Links</p>
            <div class="flex flex-col gap-2 text-sm">
                <a href="#home">Home</a>
                <a href="#contact">Contact Us</a>
            </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="w-fit mx-auto space-y-2">
        <p class="text-xs text-center font-medium">Disclaimer!</p>
        <p class="text-xs text-orange-300">
            This is a broker page. We do not provide direct services but connect
            you with service providers.
        </p>
        <p class="text-xs text-center">© 2024. All Rights Reserved</p>
    </div>
</section>
