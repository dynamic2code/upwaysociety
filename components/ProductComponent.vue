
<template>
    <div class="product">
      <div>
        <button @click="addCart" id="love">
          <img src="@/assets/images/heart-line.png" alt="like">
        </button>
        <NuxtLink :to="`/product/${product.id}`" >
          <img id="image" :src="getMediaUrl()"  alt="">          
        </NuxtLink>

      </div>
      <div class="details">
        <span class="cost">{{ product.attributes.name }}</span>
        <span id="description">{{ product.attributes.description }}</span>
        <span class="cost">Ksh: {{ product.attributes.prize }}</span>
      </div>
      <UNotifications />
    </div>
    
</template>

<script setup>
import { toastInjectionKey } from 'vue-toastification';
import { useCartStore } from '../stores/carts.js';

const toast = useToast()
const {product} = defineProps(['product'])
const userStore = useUserStore();

const cartStore = useCartStore();

const runtimeConfig = useRuntimeConfig()
const api = runtimeConfig.public.apiBase
const getMediaUrl = (filename) => {
  return `${api}${product.attributes.preview_image.data.attributes.formats.small.url}`;
};

const  addCart = ()=>{
  cartStore.addToCart(product);
  toast.add({
    title: 'added to cart',
    description: "the product was added to your cart successfully",
  })
}

</script>


<style scoped>
.product {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 2%;
    /* background-color: white; */
    /* background-color: blue; */
    width: 29%;
    height: auto;
    border: 1px solid black;
    border-radius: 20px;
    justify-content: space-between;
}
#image{
    display: block;
    width: 100%;
}
.details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
}
#love{
    position: absolute;
    right: 0;
    display: flex;
    padding: 2%;
    justify-content: center;
    align-items: center;
    /* background-color: orangered; */
    border-radius: 50%;
}
#description {
  display: block; /* Ensure the span is displayed as a block element */
  max-height: 60px; /* Set the maximum height for the description */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap; 
}

@media (max-width: 728px) {
    .product {
        width: 45%;
        /* background-color: brown; */
    }
}
</style>