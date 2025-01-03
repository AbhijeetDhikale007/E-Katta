<script lang='ts'>
    import { Wrapper } from '$lib/index.js'
    import { Services } from '$data/Services.js'
</script>

<Wrapper>
    <main slot='Wrapper' class='flex justify-center'>
        <div class='flex flex-wrap items-center justify-center gap-18 py-10 w-88% min-h-100'>
        {#each Services as services}
        <div class='flex flex-col w-20% h-[40vh] text-white justify-center items-center bg-orange border-rounded-12'>
            <img class='w-100% h-35' src={services.Img} alt={services.Alt}>
            <p class='text-10'>{services.Title}</p>
            <p>{services.Info}</p>
        </div>
        {/each}
        </div>
    </main>
</Wrapper>