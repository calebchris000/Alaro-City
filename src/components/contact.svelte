<script lang="ts">
</script>

<section
    id="contact"
    class="w-full bg-white mt-10 p-4 flex flex-col gap-10 items-center lg:p-20"
>
    <h1 class="text-2xl font-semibold text-secondary underline">Message Us</h1>

    <form class="form" action="post">
        <div class="form_item">
            <label for="full_name">Full Name</label>
            <input
                type="text"
                name="full_name"
                placeholder="Enter your full name"
            />
        </div>
        <div class="form_item">
            <label for="phone">Phone Number</label>
            <input
                type="text"
                name="phone"
                placeholder="e.g +234 801 234 56789"
            />
        </div>
        <div class="form_item">
            <label for="email">Email Address</label>
            <input
                type="text"
                name="email"
                placeholder="Enter your email address"
            />
        </div>
        <div class="form_item">
            <label for="interest">What Are You Interested In?</label>
            <select name="interest" id="">
                <option value="Apartment">Apartment</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial Plot">Industrial Plot</option>
            </select>
        </div>
        <div class="form_item">
            <label for="comment">Comment</label>
            <textarea name="comment" id=""></textarea>
        </div>

        <button
            class="bg-secondary text-primary p-2 font-semibold px-10 w-fit mx-auto"
            type="submit">Submit</button
        >
    </form>
</section>

<style>
    .form {
        @apply flex flex-col gap-4 lg:w-[40vw] w-full;
    }
    .form_item {
        @apply flex flex-col gap-2;
    }

    .form_item input,
    .form_item select,
    .form_item textarea {
        @apply h-10 outline-none p-4 bg-white border border-gray-200 rounded-md text-sm;
    }
    .form_item select {
        @apply p-0 text-gray-400 px-4;
    }

    .form_item select option {
        @apply text-black;
    }

    .form_item textarea {
        @apply h-[10rem];
    }
</style>
