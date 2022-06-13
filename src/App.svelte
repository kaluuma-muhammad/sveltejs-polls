<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import PollsList from "./Polls/PollList.svelte";
	import AddPoll from "./Polls/AddPoll.svelte";

	// tabs
	let items = ['All Polls', 'Add New Poll'];
	let activeItem = 'All Polls';

	const changeTab = (e) => {
		activeItem = e.detail;
	}

	// Add poll
	const addPoll = (e) => {
		activeItem = 'All Polls';
	}
</script>

<Header />
<main>
	<Tabs {activeItem} {items} on:changeTab={changeTab} />
	{#if activeItem === 'All Polls'}
		<PollsList />
	{:else if activeItem === 'Add New Poll'}
		<AddPoll on:add={addPoll}/>
	{/if}
</main>
<Footer />
<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>