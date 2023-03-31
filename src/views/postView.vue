<template>
    <p>Mi tercer componentPostDetails</p>
</template>
  
<script lang="ts">
export default {
    name: 'componentPostDetails',
    props: ['postId'],
    mounted() {
        console.log("--->", this.postId)
    },
    methods: {

    }
}


</script>