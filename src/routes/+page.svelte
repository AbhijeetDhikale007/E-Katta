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
<div class='grid w-88%'>
    <p class='text-6'>{heading.Heading1Name}</p>
    <div class='flex flex-wrap w-80% justify-self-center'>
        <ol>
            {#each Services as S}
            <li class=''>{S.Title}</li>
            {/each}
        </ol>
    </div>
</div>
{/each}

<!-- <Footer /> -->