<script setup>
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

let showModal = ref(false);

</script>

<template>

    <Teleport to="body">
        <Modal :show="showModal">
            <template>
                <p>C'est le modal.</p>

                
            </template>
        </Modal>
    </Teleport>
</template>