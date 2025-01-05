<script lang='ts'>
    import { Location } from '$lib/index.js'
</script>

<div class='flex flex-col items-center py-14'>
    <div class='Wrapper'>
        <p class='absolute top-30% text-center font-700 text-10'>About Us</p>
        <div class='w-85%'>
            <div class='flex items-center gap-15'>
                <div class='flex flex-col gap-6 items-center'>
                    <img class='Logo w-50 h-50 rounded-25' src='Ekatta.jpg' alt='Logo'>
                    <p class='Brand text-11'>E-Katta</p>
                </div>
                <p class='text-6 text-justify'>We have done our absolute best to ensure our team is filled with only the most experienced and competent personnel available. That’s why we’re confident that everyone, from our front desk receptionists to our trusted professional tax advisors will be able to help you out every single step of the way. The way that we treat all of our customers has not been overlooked and, as a result, we have recieved a lot of positive feedback. Which, of course, pushes us to be even better.</p>
            </div>
        </div>
    </div>
    <Location />
</div>

<style lang='scss'>
    .Logo, .Brand {
        filter: drop-shadow(0 0 10px #000);
    }
</style>