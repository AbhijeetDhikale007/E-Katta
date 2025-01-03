<script lang='ts'>
    import { Services } from '$data/Footer/Services.js'
</script>

<div class='flex gap-50'>
{#each Services as services}
<div class='flex flex-col gap-2 text-white no-underline'>
    <p class='text-6.8 text-white text-nowrap'>{services.Title}</p>
    <a class='mt-1' href={services.url1}>{services.name1}</a>
    <a href={services.url2}>{services.name2}</a>
    {#if services.name3}<a href={services.url3}>{services.name3}</a>{/if}
    {#if services.name4}<a href={services.url4}>{services.name4}</a>{/if}
    {#if services.name5}<a href={services.url5}>{services.name5}</a>{/if}
</div>
{/each}
</div>

<style lang='scss'>
    div a {
        @apply no-underline text-white ml-2;
    }

    div a:hover {
        @apply text-black;
    }
</style>