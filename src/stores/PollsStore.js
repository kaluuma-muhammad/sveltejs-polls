import { writable } from 'svelte/store';

const PollStore  = writable([
    {
        id: 1,
        question: "Is JavaScript the best language",
        answerA: "Yes",
        answerB: "No",
        votesA: 179,
        votesB: 96
    }
]);

export default PollStore;