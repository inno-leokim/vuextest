<template>
    <div>
        Value: {{ counter }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(["counter"])
    }    
}
</script>

<style scoped>

</style>