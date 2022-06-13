<script>
    import PollStore from '../stores/PollsStore';
    import PollDetails from "./PollDetails.svelte";
</script>

<main>
    <div class="polls-list">
        {#each $PollStore as poll (poll.id)}
            <div>
                <PollDetails {poll} />
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