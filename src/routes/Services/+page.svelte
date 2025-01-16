<script lang='ts'>
    import { Heading } from '$lib/index.js'
    import { Lang, ServicesPage } from '$store'
    import { HeadingEng, HeadingMar } from '$data/Heading.js'
    import { ServicesEng, ServicesMar } from '$data/Services.js'

    let Services: any
    let ServicesHeading: any
    $: Services = $Lang === 'Eng' ? ServicesEng : ServicesMar;
    $: ServicesHeading = $Lang === 'Eng' ? HeadingEng : HeadingMar;

    $ServicesPage = 'Income'
    function ServicePageRouting(Page: string) {
        $ServicesPage = Page
    }
</script>

{#each ServicesHeading as heading}
<Heading Title={heading.Heading2} />
<main class='Wrapper'>
    <div class='flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-22 py-10 w-100% md:w-90% min-h-100'>
        {#each Services as services}
        <a class='ServiceCard flex flex-col border-none p-2 md:p-4 gap-3 md:gap-5 w-32% min-h-[5vh] md:w-20% md:min-h-[38vh] text-white justify-center items-center rounded-2 md:rounded-4' href='/ServicesPage' on:click={() => ServicePageRouting(services.Page)}>
            <img class='w-94% md:min-h-20vh rounded-2' src={services.Img} alt={services.Alt}>
            <div class='text-center min-h-5vh md:min-h-10vh w-90%'>
                <p class='md:text-5 lg:text-8'>{services.Title}</p>
                <!-- <p>{services.Info}</p> -->
            </div>
        </a>
        {/each}
    </div>
</main>
{/each}

<style lang='scss'>
    .ServiceCard {
        box-shadow: 1px 1px 10px #000;
        transition: .5s ease;
        background-color: rgb(204, 48, 20);

        img {
            filter: drop-shadow(0 0 12px rgb(0, 0, 0, .5));
        }
    }

    .ServiceCard:hover {
        scale: 1.05;
    }
</style>