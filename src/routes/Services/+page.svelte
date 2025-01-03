<script lang='ts'>
    import { Wrapper } from '$lib/index.js'
    import { Services } from '$data/Services.js'
</script>

<Wrapper>
    <main slot='Wrapper' class='Wrapper'>
        <p class='absolute top-20% text-center font-700 text-10'>Services</p>
        <div class='flex mt-20 flex-wrap items-center justify-center gap-18 py-10 w-90% min-h-100'>
        {#each Services as services}
        <div class='ServiceCard flex flex-col px-4 py-2 gap-5 w-20% h-[46vh] text-white justify-center items-center border-rounded-4'>
            <img class='w-94% h-52% rounded-2' src={services.Img} alt={services.Alt}>
            <div class='text-justify w-80%'>
                <p class='text-7 text-start'>{services.Title}</p>
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
        transition: .5s ease;
        background-color: rgb(255, 69, 0);

        img {
            filter: drop-shadow(0 0 12px rgb(0, 0, 0, .5));
        }
    }

    .ServiceCard:hover {
        scale: 1.05;
    }
</style>