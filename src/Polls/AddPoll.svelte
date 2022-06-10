<script>
    import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();

    import Button from "../shared/Button.svelte";

    let fields = { question: '', answerA: '', answerB: '' };
    let errors = { question: '', answerA: '', answerB: '' };
    let valid = false;

    const AddPoll = () => {
        valid = true;

        // Validate form
        if (fields.question.trim().length < 1) {
            valid = false;
            errors.question = 'Question field is required';
        } else if (fields.question.trim().length < 5) {
            valid = false;
            errors.question = 'Question must be at least 5 characters long';
        } else {
            errors.question = '';
        }

        if (fields.answerA.trim().length < 1) {
            valid = false;
            errors.answerA = 'Answer A field is required';
        }  else {
            errors.answerA = '';
        }

        if (fields.answerB.trim().length < 1) {
            valid = false;
            errors.answerB = 'Answer B field is required';
        } else {
            errors.answerB = '';
        }

        // Add poll
        if (valid) {
            let poll = {...fields, votesA: 0, votesB: 0, id: Math.random()}
            dispatch('add', poll);
        }
    }
</script>

<main>
    <form on:submit|preventDefault={AddPoll}>
        <div class="form-fields">
            <label for="question">Poll Question:</label>
            <input type="text" bind:value={fields.question} placeholder="Enter Question" id="question">
            <div class="error"><i>{ errors.question }</i></div>
        </div>

        <div class="form-fields">
            <label for="answer-a">Answer A:</label>
            <input type="text" bind:value={fields.answerA} placeholder="Enter Answer A" id="answer-a">
            <div class="error"><i>{ errors.answerA }</i></div>
        </div>

        <div class="form-fields">
            <label for="answer-b">Answer B:</label>
            <input type="text" bind:value={fields.answerB} placeholder="Enter Answer B" id="answer-b">
            <div class="error"><i>{ errors.answerB }</i></div>
        </div>

        <Button type="primary" flat={true}>Add Poll</Button>
    </form>
</main>
  
<style>
    form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }

    .form-fields {
        margin: 18px auto;
    }

    input {
        width: 100%;
        border-radius: 6px;
    }

    label {
        margin: 10px auto;
        text-align: left;
    }

    .error {
        text-align: left;
        font-weight: bold;
        font-size: 12px;
        color: #d91b42;
    }
</style>