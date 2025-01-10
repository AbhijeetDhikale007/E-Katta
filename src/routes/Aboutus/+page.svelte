<script lang='ts'>
    import { Heading, Location } from '$lib/index.js'
    import { Lang } from '$store'
    import { AboutEng, AboutMar } from '$data/About.js'
	import { HeadingEng, HeadingMar } from '$data/Heading.js'

    let About: any
    let HeadingAbout: any
    $: About = $Lang === 'Eng' ? AboutEng : AboutMar;
    $: HeadingAbout = $Lang === 'Eng' ? HeadingEng : HeadingMar;
</script>

{#each HeadingAbout as heading}
<Heading Title={heading.Heading3} />
{#each About as about}
<div class='flex flex-col items-center max-w-[100vw] md:max-w-[99vw] py-8 md:py-14'>
    <div class='grid justify-items-center items-center max-w-[99vw] px-2 md:px-5'>
        <div class='w-90% md:w-85%'>
            <div class='flex items-center gap-2 md:gap-15 mb-10'>
                <div class='flex flex-col md:gap-6 items-center'>
                    <img class='Logo w-18 h-18 md:w-50 md:h-50 rounded-25' src={about.Logo} alt='Logo'>
                    <p class='Brand md:text-11'>{about.Title}</p>
                </div>
                <p class='text-2 md:text-6 text-justify'>{about.Info}</p>
            </div>
            <!-- <div class='h-40 md:h-50 items-center w-85% py-2 md:py-18 flex gap-4 md:gap-20'>
                <img class=' w-18 h-18 md:w-50 md:h-50 border-solid border-2 border-black' src={about.Photo} alt="Owner">
                <div>
                    <p class='text-3 md:text-8'>{about.Owner}</p>
                </div>
            </div> -->
        </div>
    </div>
    <Location />
</div>
{/each}
{/each}

<style lang='scss'>
    .Logo, .Brand {
        filter: drop-shadow(0 0 10px #000);
    }
</style>