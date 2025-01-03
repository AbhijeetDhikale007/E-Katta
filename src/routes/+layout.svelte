<script lang="ts">
    import type { Snippet } from 'svelte';
    // import type { LayoutData } from './src/routes/$types.js';
    import { Header, Footer } from '$lib/index.js'
    import './app.scss'
    import 'virtual:uno.css'

    let { children }: { children: Snippet } = $props();
</script>

<!-- {@render children()} -->
<Header />
<Footer />