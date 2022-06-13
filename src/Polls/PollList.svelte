<script>
    import { scale, fade, slide } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import PollStore from '../stores/PollsStore';
    import PollDetails from "./PollDetails.svelte";
</script>

<main>
    <div class="polls-list">
        {#each $PollStore as poll (poll.id)}
            <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
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