<script lang='ts'>
    import { Ico } from '$lib/index.js'
</script>

<main class='Wrapper'>
    <p class='absolute top-20% text-center font-700 text-10'>Contact Us</p>
    <div class='Aboutus flex gap-14'>
        <a href='tel:+917040218626' class='flex gap-1 color-black no-underline'>
            <Ico class='w-20' name='Phone' />
            Phone
        </a>
        <a href='https://wa.me/+917040218626' class='flex gap-1 color-black no-underline'>
            <Ico class='w-20 invert' name='WhatsApp' />
            WhatsApp
        </a>
        <a href='https://emailto:ekatta.online@gmail.com' class='flex gap-1 color-black no-underline'>
            <Ico class='w-20' name='Mail' />
            Email
        </a>
        <a href='https://t.me/labhadesanket' class='flex gap-1 color-black no-underline'>
            <Ico class='w-20' name='Telegram' />
            Telegram
        </a>
    </div>
</main>

<style lang='scss'>
    .Aboutus {
        a {
            border: 1px solid orangered;
            transition: .5s ease;
            box-shadow: 0 0 10px rgb(0, 0, 0, .6);
            filter: drop-shadow(0 0 10px rgb(0, 0, 0, .2));
            @apply flex flex-col items-center justify-center p-4 w-30 h-30 rounded-5;
        }

        a:hover {
            scale: 1.1;
        }
    }
</style>