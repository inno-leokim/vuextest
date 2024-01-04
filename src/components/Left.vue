<template>
    <div>
        <button @click="subCounter">-</button>
        <button @click="addCounter">+</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions(["addCounter", "subCounter"])
    }    
}
</script>

<style scoped>

</style>