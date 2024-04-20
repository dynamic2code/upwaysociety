<template>
    <div>
        <HomeHeaderComponents/>
    </div>
    <div class="body">
        <div  class="container">   
            <div v-for="product in products">
                <cartComponent :product="product"></cartComponent>
            </div>
            <span class="cost">Total: {{ total_cost }}</span>
            <button class="cost" @click="toggleAdd">CheckOut</button>
            <UNotifications />
        </div>
    </div>

    <div id="add" v-if="addIsVisible">
        <div id="close">
            <button  @click="toggleAdd">
                <img src="@/assets/images/close-circle-fill.png" alt="">                
            </button>

        </div>
        <div id="portal" >
            <PaymentPortal></PaymentPortal>            
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const toast = useToast()
const runtimeConfig = useRuntimeConfig()

import { useCartStore } from '../stores/carts.js';

import { useUserStore } from '../stores/counter';

const cartStore = useCartStore();
const userStore = useUserStore();
// Define a computed property to get products from the cart store

const products = computed(() => {
    return cartStore.products;
});


const total_cost = computed(() => {
    return cartStore.totalPriceOfSelectedProducts;
});

const addIsVisible = ref(false);

const toggleAdd = () => {
    if (userStore.user) {
        addIsVisible.value = !addIsVisible.value;
    } else {
        toast.add({
            title: 'User Not Logged In',
            description: 'Please log in to proceed.',
        });
    }
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
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
    backdrop-filter: blur(8px); 
    width: 100%;
    height: 100%;
    z-index: 5;
    top: 0;
}
#close{
    background-color: orangered;
}
#portal{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
}
</style>
