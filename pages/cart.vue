<template>
    <div>
        <HomeHeaderComponents/>
    </div>
    <div class="body">
        <div  class="container">
            <div v-for="product in products">
                <cartComponent :product="product"></cartComponent>
            </div>
            <button class="cost" @click="toggleAdd">CheckOut</button>
        </div>
    </div>

    <div id="add" v-if="addIsVisible">
        <PaymentPortal></PaymentPortal>
    </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

import { useCartStore } from '../stores/carts.js';

const cartStore = useCartStore();

// Define a computed property to get products from the cart store
const products = cartStore.products;

const addIsVisible = ref(false);

const toggleAdd = () => {
    addIsVisible.value = !addIsVisible.value;
};
</script>

<style scoped>
.container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: brown; */
}
/* form{
    display: flex;
    flex-direction: column;
    /* justify-content: center; 
    align-items: center;
} */
button{
    width: auto;
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
