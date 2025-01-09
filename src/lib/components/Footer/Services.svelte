<script lang='ts'>
    import { Services } from '$data/FooterServices.js'
    import { Ico } from '$lib/index.js'
</script>

<div class='flex flex-wrap w-100% justify-between'>
{#each Services as services}
<div class='flex flex-col md:gap-2 text-white no-underline'>
    <p class='text-3 md:text-6.8 text-white text-nowrap'>{services.Title}</p>
    <a class='mt-1 flex items-center gap-2' href={services.url1}>
        {#if services.Icon1}<Ico class='w-3 md:w-5' name={services.Icon1} />{/if}
        {services.name1}
    </a>
    <a class='mt-1 flex items-center gap-2' href={services.url2}>
        {#if services.Icon2}<Ico class='w-3 md:w-5' name={services.Icon2} />{/if}
        {services.name2}
    </a>
    {#if services.name3}<a class='mt-1 flex items-center gap-2' href={services.url3}>
        {#if services.Icon3}<Ico class='w-3 md:w-5' name={services.Icon3} />{/if}
        {services.name3}
    </a>{/if}
    {#if services.name4}<a class='mt-1 flex items-center gap-2' href={services.url4}>
        {#if services.Icon4}<Ico class='w-3 md:w-5' name={services.Icon4} />{/if}
        {services.name4}
    </a>{/if}
    {#if services.name5}<a class='mt-1 flex items-center gap-2' href={services.url5}>
        {#if services.Icon5}<Ico class='w-3 md:w-5' name={services.Icon5} />{/if}
        {services.name5}
    </a>{/if}
    {#if services.name6}<a class='mt-1 flex items-center gap-2' href={services.url6}>
        {#if services.Icon6}<Ico class='w-3 md:w-5' name={services.Icon6} />{/if}
        {services.name6}
    </a>{/if}
</div>
{/each}
</div>

<style lang='scss'>
    div a {
        @apply no-underline text-white text-2 md:text-4 md:ml-2;
    }

    div a:hover {
        @apply text-black;
    }
</style>