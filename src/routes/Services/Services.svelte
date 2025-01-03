<script lang='ts'>
    import { Wrapper } from '$lib/index.js'
    import { Services } from '$data/Services.js'
</script>

<Wrapper>
    <main slot='Wrapper'>
        {#each Services as services}
        <div class='border-rounded-12'>
            <img src={services.Img} alt={services.Alt}>
            <h5>{services.Title}</h5>
            <p>{services.Info}</p>
        </div>
        {/each}
    </main>
</Wrapper>