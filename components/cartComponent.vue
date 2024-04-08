<template>
    <div class="order">
        <div id="image">
            <img id="image" :src="getMediaUrl()"  alt=""> 
        </div>
        <div id="details">
            <span class="cost">{{product.name}}</span>
            <span>{{ product.details }}</span>
            <span class="cost">Ksh: {{ product.price }}</span>
            <div id="addition">
                <button  @click="addQuantity()">
                    <img src="@/assets/images/add-fill.png" alt="">

                </button>
                <span class="">Units: {{ product.quantity }}</span>

                <button @click="removeQuantity()">
                    <img src="@/assets/images/subtract-line.png" alt="">                    
                </button>

            </div>
        </div>
        <div id="action">
            <button id="tick"  @click="select()">
                <UChip v-if="product.isSelected" size="2xl"></UChip>
                <img class="select_to_order" src="@/assets/images/truck-line.png" alt="">
            </button>                
            
            <button @click="removeCart">
                <img src="@/assets/images/delete-bin-line.png" alt="bin">
            </button>
        </div>
        <UNotifications />
    </div>

</template>

<script setup>
const {product} = defineProps(['product'])
const toast = useToast()
const runtimeConfig = useRuntimeConfig()
const api = runtimeConfig.public.apiBase
// console.log(api + product.previewImage)
const getMediaUrl = (filename) => {
  return `${api}${product.previewImage}`;
};
// interactions with cart store

import { useCartStore } from '../stores/carts.js';

const cartStore = useCartStore();

const addQuantity = () =>{
    cartStore.addQuantity(product.id)

}

const removeQuantity = () =>{
    cartStore.removeQuantity(product.id)
}


const  removeCart = () =>{
  cartStore.removeFromCart(product.id);
  toast.add({
        title: 'removed from your cart',
        description: "the product was removed your cart successfully",
    })
}

const  select= ()=>{
    toast.add({
        title: 'added to your oder',
        description: "the product was added to your oder successfully",
    })
    cartStore.toggleSelection(product.id)
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
/* #tick{
    /* background-color: orangered;
    border-radius: 20px;
    /* padding: 2%;
    height: 40px;
    width: 40px;
    cursor:cell;
    border: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
} */
.select_to_oder{
    /* background-color: orangered;
    width: 100%;
    height: 100%;
    border-radius: 20px; */
}
#addition{
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* background-color: aqua; */
    width: auto;
}
#addition >* {
    margin: 1%;
}
@media (max-width: 728px) {
    .order{
      width: 90vw;
    }
}
</style>