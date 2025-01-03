<script lang='ts'>
    import { Ico } from '$lib/index.js'
</script>

<header class='flex flex-col place-items-center relative top-0 h-28 w-100%'>
    <div class='flex gap-10 items-center h-30% w-100% bg-red-600'>
        <a href='tel:+917040218626' class='flex gap-1 ml-25 color-white no-underline'>
            <Ico class='w-5' name='Phone' />
            +91 70402 18626
        </a>
        <a href='wa.me/+917040218626' class='flex gap-1 color-white no-underline'>
            <Ico class='w-5' name='WhatsApp' />
            +91 70402 18626
        </a>
        <a href='emailto:ekatta.online@gmail.com' class='flex gap-1 color-white no-underline'>
            <Ico class='w-5' name='Mail' />
            ekatta.online@gmail.com
        </a>
    </div>
    <div class='flex items-center h-70% w-100% justify-between'>
        <div class='ml-48 h-100% gap-4 w-fit flex items-center'>
            <img class='h-15 w-15' src='Ekatta.jpg' alt='Logo'>
            <h2 class=''>E-Katta</h2>
            <img class='h-8 w-12' src='Digital-India.png' alt='Logo'>
            <img class='h-8 w-12' src='My-Gov.png' alt='Logo'>
        </div>
        <nav class='mr-48'>
            <a class='Button' href="/">Home</a>
            <a class='Button' href="/Services">Services</a>
            <a class='Button' href="/Aboutus">About Us</a>
            <a class='Button' href="/Contactus">Contact Us</a>
        </nav>
    </div>
</header>

<style>
    header {
        border-bottom: .5px solid #000;
    }
</style>