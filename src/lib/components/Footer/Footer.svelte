<script lang='ts'>
    import { Ico } from '$lib/index.js'
    import Services from './Services.svelte'
</script>

<footer class='flex flex-col absolute bottom-0 gap-5 items-center justify-center w-100% min-h-88 py-5 bg-red-600'>
    <div class='flex w-80% items-center gap-15'>
        <img class='h-32 w-32 border-rounded-18' src="Ekatta.jpg" alt="Logo">
        <p class='text-justify text-white text-3.5'>We have done our absolute best to ensure our team is filled with only the most experienced and competent personnel available. That’s why we’re confident that everyone, from our front desk receptionists to our trusted professional tax advisors will be able to help you out every single step of the way. The way that we treat all of our customers has not been overlooked and, as a result, we have recieved a lot of positive feedback. Which, of course, pushes us to be even better.</p>
    </div>
    <div class='flex gap-50 w-78%'>
        <Services />
        <div class='flex flex-col gap-2 text-white no-underline'>
            <p class='text-6.8 text-white text-nowrap'>Get In Touch</p>
            <a href='tel:+917040218626' class='flex gap-1 mt-2 color-white no-underline'>
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
    </div>
    <hr class='w-80%'>
    <div class='flex justify-between items-center w-80%'>
        <div class='flex gap-2 items-center'>
            <Ico class='h-5 w-5' name='Address' />
            <a class='text-white no-underline' href='https://g.co/kgs/p5oUJY8'>Behind Ganapati Temple, Adgaon, Nashik, Maharashtra - 422003</a>
        </div>
        <p class='text-white'>Copyright 2025. All RIght Reserved</p>
    </div>
</footer>

<style lang='scss'>
    footer {
        hr {
            border: none;
            border-bottom: .5px solid rgb(255, 255, 255, 0.4);
        }
    }
</style>