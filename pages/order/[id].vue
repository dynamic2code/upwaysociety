<template>
    <div>
        <AdminHeader></AdminHeader>
    </div>
    <form class="container">
        <div class="products">
            <CheckingOrderComponent></CheckingOrderComponent>
        </div>
        <button class="cost" @click="toggleAdd">Complete order</button>
    </form>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

</script>

<style scoped>
.container{
    width: 100%;
    display: flex;
    /* justify-content: center;
    flex-direction: column;
    /* justify-content: center; 
    align-items: center; */
}
form{
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
}
button{
    width: 20%;
    height: auto;
    padding: 2%;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: orangered;
}
.products{
    margin-top: 20px;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    /* background-color: brown; */
}
.products > * {
    flex: 0 0 auto; 
    margin: auto;
    margin-top: 10px;
}
#add{
    position: absolute;
    /* background-color: black; */
    width: 100%;
    z-index: 5;
    height: 100%;
    top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>