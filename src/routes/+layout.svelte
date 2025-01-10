<script lang="ts">
    import type { Snippet } from 'svelte';
    // import type { LayoutData } from './src/routes/$types.js';
    import { Header, Footer } from '$lib/index.js'
    import './app.scss'
    import 'virtual:uno.css'

    let { children }: { children: Snippet } = $props();
</script>

<video class='hidden absolute md:flex scale-115 fixed bg-cover left-0 top-0 w-screen h-screen z--1' autoplay muted>
    <source src="Background.mp4" type="video/mp4">
</video>

<Header />
<main class='Wrapper'>
    {@render children()}
</main>
<Footer />