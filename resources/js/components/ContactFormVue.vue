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
        <span class="align-bottom mb-2" id="message"></span>
    </form>
</template>

<script setup>

import { ref } from 'vue';

let elInputNom = ref('');
let elInputMessage = ref('');

async function postMessage() {  
    axios.post('/contact/ajout', {
        nom: elInputNom.value,
        message: elInputMessage.value
    })
        .then((res) => {
            if (res.data === 'ok') {
                document.getElementById('message').innerHTML = 'Votre message a bien ete envoye.'
            } 
        }).catch(err => {
            console.log(err)
        })
}
</script>