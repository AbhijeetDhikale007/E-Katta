<script lang='ts'>
    import { Header, Wrapper, Footer } from "$lib/index.js"
    import Services from './Services/+page.svelte'

    import './app.scss'
    import 'virtual:uno.css'
</script>

<!-- <Header/> -->
<Wrapper>
<div slot='Wrapper' class='Wrapper'>
    <Services />
</div>
</Wrapper>
<!-- <Footer /> -->