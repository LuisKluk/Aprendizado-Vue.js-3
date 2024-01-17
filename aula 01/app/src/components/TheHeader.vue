<template>
    <header class="header">
    <slot></slot>
    <slot name="title"></slot>
    </header>
</template>

<script>
     export default{

     }

</script>

<style scoped>
    .header{
        background: #000;
        color: white;
    }
</style>