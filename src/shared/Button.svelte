<script>
    export let type = 'primary';
    export let flat = false;
    export let inverse = false;
</script>

<main>
    <button class={type} class:flat={flat} class:inverse={inverse}>
        <slot></slot>
    </button>
</main>
  
<style>
    button {
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    }

    .primary {
        background: #0252ad;
        color: white;
    }

    .success {
        background: #03b228;
        color: white;
    }

    .danger {
        background: #d91b42;
        color: white;
    }

    .flat {
        box-shadow: none;
    }

    .primary.inverse {
        background: white;
        color: #0252ad;
        border: 2px solid #0252ad;
    }

    .success.inverse {
        background: white;
        color: #03b228;
        border: 2px solid #03b228;
    }

    .danger.inverse {
        background: white;
        color: #d91b42;
        border: 2px solid #d91b42;
    }
</style>