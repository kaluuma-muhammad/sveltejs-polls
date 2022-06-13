<script>
    import PollStore from '../stores/PollsStore';
    import PollDetails from "./PollDetails.svelte";
    
    export let polls = [];

    PollStore.subscribe(data => {
        polls = data;
    })
</script>

<main>
    <div class="polls-list">
        {#each polls as poll (poll.id)}
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