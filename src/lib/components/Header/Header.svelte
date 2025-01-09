<script lang='ts'>
    import { Ico } from '$lib/index.js'
    import { Lang } from '$store'
    import { Header1, Header2Eng, Header2Mar } from '$data/Header.js'

    $Lang = 'Eng'
    function LangButton(Name: string) {
        $Lang = Name
    }

    let Header2: any
    $: Header2 = $Lang === 'Eng' ? Header2Eng : Header2Mar;

    let isOpen: boolean = false

    function MenuHandler() {
        if (isOpen == false) {
            isOpen = true
        }
        else {
            isOpen = false
        }
    }
</script>

<header class='flex flex-col place-items-center relative top-0 h-18 md:h-26 lg:h-26 xl:h-28 2xl:h-28 w-100%'>
    {#each Header1 as header1}
    <div class='flex justify-between items-center text-2 md:text-3 lg:text-4 xl:text-4 2xl:text-4 text-nowrap h-30% w-100% bg-red-600'>
        <div class='flex gap-2 md:gap-8 lg:gap-10 xl:gap-10 2xl:gap-12'>
            <a href={header1.NumbLink} class='flex items-center gap-1 lg:ml-24 xl:ml-25 color-white no-underline' target='_blank'>
                <Ico class='w-3 md:w-4 lg:w-5 xl:w-5 2xl:w-6' name='Phone' />
                {header1.Numb}
            </a>
            <a href={header1.WhatsAppLink} class='flex items-center gap-1 color-white no-underline' target='_blank'>
                <Ico class='w-3 md:w-4 lg:w-5 xl:w-5 2xl:w-6' name='WhatsApp' />
                {header1.WhatsAppNum}
            </a>
            <a href={header1.EmailLink} class='flex items-center gap-1 color-white no-underline' target='_blank'>
                <Ico class='w-3 md:w-4 lg:w-5 xl:w-5 2xl:w-6' name='Mail' />
                {header1.Email}
            </a>    
        </div>
        <div class='flex gap-2 md:gap-3 lg:gap-4 xl:gap-6 2xl:mr-25'>
            <button class='px-2 text-2 md:text-3 lg:text-4 lg:text-4 2xl:text-4 py-1 border-none rounded-1 bg-transparent hover:bg-white hover:color-black' on:click={() => LangButton('Eng')}>{header1.Lang1}</button>
            <button class='px-2 text-2 md:text-3 lg:text-4 lg:text-4 2xl:text-4 py-1 border-none rounded-1 bg-transparent hover:bg-white hover:color-black' on:click={() => LangButton('Mar')}>{header1.Lang2}</button>
        </div>
    </div>
    {/each}
    {#each Header2 as header2}
    <div class='flex items-center h-70% w-100% justify-between'>
        <div class='md:ml-2 lg:ml-44 xl:ml-46 2xl:ml-48 h-100% gap-4 w-fit flex items-center'>
            <img class='Logo h-10 w-10 md:h-13 md:w-13 2xl:h-15 2xl:w-15 rounded-12' src={header2.Logo} alt='Logo1'>
            <h2 class='text-nowrap'>{header2.Title}</h2>
            <img class='h-4 w-8 md:h-6 md:w-10 lg:h-8 lg:w-12 xl:h-8 x:w-12 2xl:h-8 2xl:w-12' src={header2.Logo1} alt='Logo2'>
            <img class='h-4 w-8 md:h-6 md:w-10 lg:h-8 lg:w-12 xl:h-8 x:w-12 2xl:h-8 2xl:w-12' src={header2.Logo2} alt='Logo3'>
        </div>
        <nav class='hidden md:flex lg:flex xl:flex 2xl:flex md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-3 md:mr-2 lg:mr-44 xl:mr-46 2xl:mr-48'>
            <a class='Button' href={header2.Button1Link}>{header2.Button1}</a>
            <a class='Button' href={header2.Button2Link}>{header2.Button2}</a>
            <a class='Button' href={header2.Button3Link}>{header2.Button3}</a>
            <a class='Button' href={header2.Button4Link}>{header2.Button4}</a>
        </nav>
        {#if isOpen == true}
        <div class='Menu-Wrapper'>
            <div class='Menu'>
                <nav class='flex md:hidden lg:flex xl:hidden 2xl:hidden md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-3 md:mr-2 lg:mr-44 xl:mr-46 2xl:mr-48'>
                    <a class='Button' href={header2.Button1Link}>{header2.Button1}</a>
                    <a class='Button' href={header2.Button2Link}>{header2.Button2}</a>
                    <a class='Button' href={header2.Button3Link}>{header2.Button3}</a>
                    <a class='Button' href={header2.Button4Link}>{header2.Button4}</a>
                </nav>
            </div>
        </div>
        {/if}
    </div>
    {/each}
</header>

<style>
    header {
        border-bottom: .5px solid #000;
    }

    .Logo {
            filter: drop-shadow(0 0 10px rgb(0, 0, 0, .2));
    }
</style>