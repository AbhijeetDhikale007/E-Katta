<script lang='ts'>
    import { Ico } from '$lib/index.js'
    import { Lang } from '$store'
    import { Header1, Header2Eng, Header2Mar } from '$data/Header.js'

    function LangButton(Name: string) {
        $Lang = Name
    }

    let Header2: any
    $: Header2 = $Lang === 'Eng' ? Header2Eng : Header2Mar;
</script>

<header class='flex flex-col place-items-center relative top-0 h-28 w-100%'>
    {#each Header1 as header1}
    <div class='flex justify-between items-center h-30% w-100% bg-red-600'>
        <div class='flex gap-10'>
            <a href={header1.NumbLink} class='flex gap-1 ml-25 color-white no-underline' target='_blank'>
                <Ico class='w-5' name='Phone' />
                {header1.Numb}
            </a>
            <a href={header1.WhatsAppLink} class='flex gap-1 color-white no-underline' target='_blank'>
                <Ico class='w-5' name='WhatsApp' />
                {header1.WhatsAppNum}
            </a>
            <a href={header1.EmailLink} class='flex gap-1 color-white no-underline' target='_blank'>
                <Ico class='w-5' name='Mail' />
                {header1.Email}
            </a>    
        </div>
        <div class='flex gap-6 mr-25 text-3.6'>
            <button class='px-2 py-1 border-none rounded-1 bg-transparent hover:bg-white hover:color-black' on:click={() => LangButton('Eng')}>{header1.Lang1}</button>
            <button class='px-2 py-1 border-none rounded-1 bg-transparent hover:bg-white hover:color-black' on:click={() => LangButton('Mar')}>{header1.Lang2}</button>
        </div>
    </div>
    {/each}
    {#each Header2 as header2}
    <div class='flex items-center h-70% w-100% justify-between'>
        <div class='ml-48 h-100% gap-4 w-fit flex items-center'>
            <img class='Logo h-15 w-15 rounded-12' src={header2.Logo} alt='Logo1'>
            <h2 class=''>{header2.Title}</h2>
            <img class='h-8 w-12' src={header2.Logo1} alt='Logo2'>
            <img class='h-8 w-12' src={header2.Logo2} alt='Logo3'>
        </div>
        <nav class='mr-48'>
            <a class='Button' href={header2.Button1Link}>{header2.Button1}</a>
            <a class='Button' href={header2.Button2Link}>{header2.Button2}</a>
            <a class='Button' href={header2.Button3Link}>{header2.Button3}</a>
            <a class='Button' href={header2.Button4Link}>{header2.Button4}</a>
        </nav>
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