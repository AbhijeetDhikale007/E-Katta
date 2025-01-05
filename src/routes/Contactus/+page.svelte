<script lang='ts'>
    import { Ico, Heading } from '$lib/index.js'
</script>

<Heading Title='Contact Us' />
<div class='Wrapper'>
<div class='Aboutus flex gap-14'>
    <a href='tel:+917040218626' class='flex gap-1 color-black no-underline select-none' target='_blank'>
        <Ico class='w-20 Ico' name='Call' />
        Phone
    </a>
    <a href='https://wa.me/+917040218626' class='flex gap-1 color-black no-underline select-none' target='_blank'>
        <Ico class='w-20 Ico' name='WhatsAppColor' />
        WhatsApp
    </a>
    <a href='emailto:ekatta.online@gmail.com' class='flex gap-1 color-black no-underline select-none' target='_blank'>
        <Ico class='w-20 Ico' name='GMail' />
        Email
    </a>
    <a href='https://t.me/labhadesanket' class='flex gap-1 color-black no-underline select-none' target='_blank'>
        <Ico class='w-20 Ico' name='Telegram' />
        Telegram
    </a>
</div>
</div>

<style lang='scss'>
    .Aboutus {
        a {
            // border: 1px solid orangered;
            transition: .5s ease;
            box-shadow: 0 0 10px rgb(0, 0, 0, .6);
            filter: drop-shadow(0 0 10px rgb(0, 0, 0, .2));
            @apply flex flex-col items-center justify-center p-4 w-30 h-30 rounded-5;
        }

        a:hover {
            scale: 1.1;
        }

        :global(.Ico) {
            filter: drop-shadow(0 0 6px rgb(0, 0, 0, .2));
        }
    }
</style>