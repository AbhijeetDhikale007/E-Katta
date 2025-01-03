<script lang='ts'>
    import { Wrapper } from '$lib/index.js'
    import { Services } from '$data/Services.js'
</script>

<Wrapper>
    <main slot='Wrapper' class='flex justify-center'>
        <div class='flex flex-wrap items-center justify-center gap-18 py-10 w-90% min-h-100'>
        {#each Services as services}
        <div class='ServiceCard flex flex-col gap-5 w-25% h-[42vh] text-white justify-center items-center bg-orange border-rounded-10'>
            <img class='w-82% h-52%' src={services.Img} alt={services.Alt}>
            <div class='text-justify w-80%'>
                <p class='text-10 text-start'>{services.Title}</p>
                <p>{services.Info}</p>
            </div>
        </div>
        {/each}
        </div>
    </main>
</Wrapper>

<style lang='scss'>
    .ServiceCard {
        box-shadow: 1px 1px 10px #000;
    }
</style>