<script lang='ts'>
    import { Heading, Location } from '$lib/index.js'
    import { About } from '$data/About.js'
</script>

<Heading Title='About Us' />
{#each About as about}
<div class='flex flex-col items-center py-14'>
    <div class='Wrapper'>
        <div class='w-85%'>
            <div class='flex items-center gap-15'>
                <div class='flex flex-col gap-6 items-center'>
                    <img class='Logo w-50 h-50 rounded-25' src={about.Logo} alt='Logo'>
                    <p class='Brand text-11'>{about.Title}</p>
                </div>
                <p class='text-6 text-justify'>{about.Info}</p>
            </div>
        </div>
        <div class='h-50 w-85% py-18 flex gap-20'>
            <img class='w-50 h-50 border-solid border-2 border-black' src={about.Photo} alt="Owner">
            <div>
                <p class='text-8'>Owner: {about.Owner}</p>
            </div>
        </div>
    </div>
    <Location />
</div>
{/each}

<style lang='scss'>
    .Logo, .Brand {
        filter: drop-shadow(0 0 10px #000);
    }
</style>