<script lang='ts'>
    // import { Header, Footer } from "$lib/index.js"
    import { Heading } from '$lib/index.js'
    import { Services } from '$data/Services.js'

    import './app.scss'
    // import 'virtual:uno.css'
</script>

<!-- <Header/> -->
<Heading Title='Welcome'/>
<div class='grid w-88%'>
    <p class='text-6'>Services We Provide:</p>
    <div class='flex flex-wrap w-80% justify-self-center'>
        <ol>
            {#each Services as S}
            <li class=''>{S.Title}</li>
            {/each}
        </ol>
    </div>
</div>
<!-- <Footer /> -->