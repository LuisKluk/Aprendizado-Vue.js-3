<template>
    <div :class="baseClass">
    Seu formulario foi enviado com sucesso
    <button @click="onClick">
        X
    </button>
    </div>
</template>

<script>
export default{
    methods:{
        onClick(){
            this.$emit('close')
            console.log('click')
        }
    },
    props:['variant'],
    computed:{
        baseClass(){
            return [
                'alert',
                this.variant ? `alert-${this.variant}` :''
            ]
        }
    }
        
    
}

</script>

<style scoped>
.alert{
    display: flex;
    justify-content: space-between;
    padding: 6px;
    text-align: left;
    border-radius: 7px;
    color: gray;
    background: #ddd;
}
.alert-success{
    text-align: left;
    background: green;
    color: #fff;
}
.alert-danger{
    background: red;
    color: #fff;
    text-align: left;
}
</style>