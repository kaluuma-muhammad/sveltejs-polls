<script>
    import Card from  "../shared/Card.svelte";
    import PollStore from '../stores/PollsStore';
    import Button from "../shared/Button.svelte";

    export let poll;

    // reative values
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor( 100 / totalVotes * poll.votesA );
    $: percentB = Math.floor( 100 / totalVotes * poll.votesB );

    // Handling votes
    const handleVote = (option, id) => {
        PollStore.update(allPolls => {
            let copiedPolls = [...allPolls];
            let votedPolls = copiedPolls.find((poll) => poll.id == id);

            if (option === 'a') {
                votedPolls.votesA++;
            }
            else if (option === 'b') {
                votedPolls.votesB++;
            }

            return copiedPolls;
        });
    }

    // Delete poll
    const deletePoll = (id) => {
        PollStore.update(allPolls => {
            return allPolls.filter((poll) => poll.id != id);
        });
    }
</script>

<main>
    <Card>
        <div class="polls">
            <h3> { poll.question } </h3>
            <p>Total votes: <i>{ totalVotes }</i></p>
            <div class="answer" on:click={() => handleVote('a', poll.id)}>
                <div class="percent percent-a" style="width: {percentA}%" ></div>
                <span>{ poll.answerA } ({ poll.votesA })</span>
            </div>

            <div class="answer" on:click={() => handleVote('b', poll.id)}>
                <div class="percent percent-b" style="width: {percentB}%"></div>
                <span>{ poll.answerB } ({ poll.votesB })</span>
            </div>

            <div class="delete">
                <Button on:click={() => deletePoll(poll.id)} type="danger" flat={true}>Delete</Button>
            </div>
        </div>
    </Card>
</main>
  
<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }

    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }

    .answer {
        background: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }

    .answer:hover {
        opacity: 0.6;
    }

    span {
        display: inline-block;
        padding: 10px 20px;
    }

    .percent {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }

    .percent-a {
        border-left: 4px solid #d91b42;
        background: rgba(217,27,66,0.2);
    }

    .percent-b {
        border-left: 4px solid #45c596;
        background: rgba(69,196,150,0.2);
    }

    .delete {
        margin-top: 30px;
        text-align: center;
    }
</style>