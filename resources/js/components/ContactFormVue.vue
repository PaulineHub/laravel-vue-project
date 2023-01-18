<template>
    <form action="" @submit.prevent="postMessage">
        <div class="input-group mb-3">
            <span class="input-group-text">Nom</span>
            <input type="text" class="form-control" v-model="elInputNom">
        </div>
        <div>
            <label class="form-label">Votre message</label>
            <textarea name="commentaire" id="commentaire" cols="30" rows="10" class="form-control" v-model="elInputMessage"></textarea>
        </div>
        <button class="btn btn-secondary mt-3" type="submit">Envoyer</button>
    </form>
</template>

<script setup>

import { ref } from 'vue';

let elInputNom = ref('');
let elInputMessage = ref('');

async function postMessage() {
    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom: elInputNom.value, message: elInputMessage.value}),
    };

    await fetch(
        `http://127.0.0.1:8000/contact/ajout`,
        options
    )
        .then((response) => {
            return response[1].json()
        })
}
</script>