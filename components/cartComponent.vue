<template>
    <p>{{ product }}</p>
    <div class="order">
        <div id="image">
            <img id="image" :src="getMediaUrl()"  alt=""> 
        </div>
        <div id="details">
            <span class="cost">{{product.name}}</span>
            <span>{{ product.details }}</span>
            <span class="cost">{{ product.price }}</span>
        </div>
        <div id="action">
            <button id="tick">

            </button>
            <button @click="removeCart">
                <img src="@/assets/images/delete-bin-line.png" alt="bin">
            </button>
        </div>
    </div>

</template>

<script setup>
const {product} = defineProps(['product'])

const runtimeConfig = useRuntimeConfig()
const api = runtimeConfig.public.apiBase
// console.log(api + product.previewImage)
const getMediaUrl = (filename) => {
  return `${api}${product.previewImage}`;
};
// interactions with cart store

import { useCartStore } from '../stores/carts.js';

const cartStore = useCartStore();

const  removeCart = () =>{
  cartStore.removeFromCart(product.id);
}
</script>

<style scoped>
.order {
    width: 80vw;
    height: auto;
    padding: 2%;
    display: flex;
    align-items: center;
    /* background-color: blueviolet; */
}
.order >* {
    margin: 1%;
}
#image{
    width: 20%;
    height: auto;
    background-color: aquamarine;
    border-radius: 20px;
}
#image img{
    display: block;
    width: 100%;
    height: 100%;
}
#details{
    width: 60%;
    display: flex;
    flex-direction: column;
}
#action{
    /* background-color: orangered; */
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#action >*{
    margin: 5%;
}
#tick{
    /* background-color: orangered; */
    border-radius: 20px;
    /* padding: 2%; */
    height: 40px;
    width: 40px;
    cursor:cell;
    border: 3px solid black;
}
@media (max-width: 728px) {
    .order{
      width: 90vw;
    }
}
</style>