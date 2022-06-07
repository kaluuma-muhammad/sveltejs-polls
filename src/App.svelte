<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";

	// tabs
	let items = ['All Polls', 'Add New Poll'];
	let activeItem = 'All Polls';

	const changeTab = (e) => {
		activeItem = e.detail;
	}
</script>

<Header />
<main>
	<Tabs {activeItem} {items} on:changeTab={changeTab} />
	{#if activeItem === 'All Polls'}
		<p>All polls list component goes here</p>
	{:else if activeItem === 'Add New Poll'}
		<p>Polls Form component goes here</p>
	{/if}
</main>
<Footer />
<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>