<template>
    <header>
        <h1>
            {{title}}
        </h1>
    </header>
</template>

<script>
export default {
    data() {
        return {
            title:'Your todos today!'
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1{
        text-transform: uppercase;
        color: #222;
    }

    header{
        background: rgb(180, 110, 30);
        padding: 10px;
    }
    
</style>
