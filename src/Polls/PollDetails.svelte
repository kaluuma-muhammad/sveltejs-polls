<script>
    export let poll;
    import Card from  "../shared/Card.svelte";

    // reative values
    $: totalVotes = poll.votesA + poll.votesB;
</script>

<main>
    <Card>
        <div class="polls">
            <h3> { poll.question } </h3>
            <p>Total votes: <i>{ totalVotes }</i></p>
            <div class="answer">
                <div class="percent percent-a"></div>
                <span>{ poll.answerA } ({ poll.votesA })</span>
            </div>

            <div class="answer">
                <div class="percent percent-b"></div>
                <span>{ poll.answerB } ({ poll.votesB })</span>
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
</style>