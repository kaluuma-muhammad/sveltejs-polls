<script>
    // Lifecycle hooks
    // import { onDestroy, onMount } from 'svelte';
    import PollStore from '../stores/PollsStore';
    import PollDetails from "./PollDetails.svelte";
    
    // export let polls = [];

    // const unsub = PollStore.subscribe(data => {
    //     polls = data;
    // });

    // onMount(() => {
    //     // Get data from the db
    //     console.log("Component mounted");
    // });

    // onDestroy(() => {
    //     // Un subscribe from store
    //     console.log("Component destroyed");
    //     unsub();
    // });
</script>

<main>
    <div class="polls-list">
        {#each $PollStore as poll (poll.id)}
            <div>
                <PollDetails {poll} on:vote />
            </div>
        {/each}
    </div>
</main>
  
<style>
    .polls-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>