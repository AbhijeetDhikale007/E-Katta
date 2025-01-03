<script lang='ts'>
    import { Wrapper } from '$lib/index.js'
    import { Services } from '$data/Services.js'
</script>

<Wrapper>
    <main slot='Wrapper' class='flex justify-center'>
        <div class='flex flex-wrap items-center justify-center gap-18 py-10 w-90% min-h-100'>
        {#each Services as services}
        <div class='flex flex-col gap-2 w-28% h-[42vh] text-white justify-center items-center bg-orange border-rounded-12'>
            <img class='w-82% h-50%' src={services.Img} alt={services.Alt}>
            <div class='text-justify h-34%'>
                <p class='text-10 text-start'>{services.Title}</p>
                <p>{services.Info}</p>
            </div>
        </div>
        {/each}
        </div>
    </main>
</Wrapper>