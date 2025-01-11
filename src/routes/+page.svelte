<script lang='ts'>
    // import { Header, Footer } from "$lib/index.js"
    import { Lang } from '$store'
    import { Heading } from '$lib/index.js'
    import { ServicesEng, ServicesMar } from '$data/Services.js'
	import { HeadingEng, HeadingMar } from '$data/Heading.js';

    let Services: any
    let HeadingTitle: any
    $: Services = $Lang === 'Eng' ? ServicesEng : ServicesMar;
    $: HeadingTitle = $Lang === 'Eng' ? HeadingEng : HeadingMar;

    // import 'virtual:uno.css'
</script>

<!-- <Header/> -->
{#each HeadingTitle as heading }
<Heading Title={heading.Heading1} />
<!-- <img src='BG.jpg' alt="Ekatta Cyber Cafe" class='BG w-92% h-50 md:w-60% h-40 lg:w-78% lg:h-120 rounded-2 md:rounded-4 mt-4'> -->
<div class='grid w-88%'>
    <p class='text-8 mt-10'>{heading.Heading1Name}</p>
    <div class='flex flex-wrap text-6 py-12 w-80% justify-self-center'>
        <ul style="list-style-type:square;">
            {#each Services as S}
            <li>{S.Title}</li>
            {/each}
        </ul>
    </div>
</div>
{/each}

<!-- <Footer /> -->

<!-- <style lang='scss'>
    .BG {
        background: url(BG.jpg);
        box-shadow: 0 0 10px #000;
    }
</style> -->