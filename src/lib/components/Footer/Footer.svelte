<script lang='ts'>
    import { Ico } from '$lib/index.js'
    import Services from './Services.svelte'
    import { AboutEng } from '$data/About.js'
    import { Lang } from '$store'
    import { FooterEng, FooterMar } from '$data/Footer.js'

    let Footer: any
    $: Footer = $Lang === 'Eng' ? FooterEng : FooterMar;
</script>

{#each Footer as footer}
<footer class='flex flex-col relative bottom-0 gap-5 items-center justify-center w-100% md:min-h-88 py-5 bg-red-600'>
    <div class='flex w-88% md:w-80% items-center gap-2 md:gap-6 lg:gap-13 xl:gap-14 2xl:gap-15'>
        <img class='h-12 w-12 lg:h-32 lg:w-32 border-rounded-18' src={footer.Logo} alt="Logo">
        <p class='text-justify text-white text-2 md:text-3.5'>{footer.Info}</p>
    </div>
    <div class='flex w-88% md:w-78%'>
        <Services />
    </div>
    <hr class='w-80%'>
    <div class='flex justify-between items-center w-88% md:w-80%'>
        <div class='flex gap-2 items-center'>
            <Ico class='h-5 w-5 invert' name='Address' />
            {#each AboutEng as about}
            <a class='text-white text-2 md:text-5.8 no-underline' href={about.Location} target='_blank'>{footer.Location}</a>
            {/each}
        </div>
        <p class='text-white text-2 md:text-4'>{footer.Copyright}</p>
    </div>
</footer>
{/each}

<style lang='scss'>
    footer {
        hr {
            border: none;
            border-bottom: .5px solid rgb(255, 255, 255, 0.4);
        }
    }
</style>