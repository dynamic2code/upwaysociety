
<template>
    <NuxtLink :to="`/product/${product.id}`" class="product">
      <div>
        <button @click="addToCart" id="love">
          <img src="@/assets/images/heart-line.png" alt="like">
        </button>
        <img id="image" :src="getMediaUrl()"  alt="">
      </div>
      <div class="details">
        <span class="cost">{{ product.attributes.name }}</span>
        <span id="description">{{ product.attributes.description }}</span>
        <span class="cost">{{ product.attributes.price }}</span>
      </div>
      <UNotifications />
    </NuxtLink>
    
</template>

<script setup>
import { toastInjectionKey } from 'vue-toastification';
import { useUserStore } from '../stores/counter.js';

const toast = useToast()
const {product} = defineProps(['product'])
const userStore = useUserStore();

const runtimeConfig = useRuntimeConfig()
const api = runtimeConfig.public.apiBase
const getMediaUrl = (filename) => {
  return `${api}${product.attributes.preview_image.data.attributes.formats.small.url}`;
};

const addToCart = async () => {
  if (userStore.user !== null && userStore.user !== undefined) {
    const token = userStore.token;
    const userId=  userStore.user.id;    
    try {
      const response = await fetch('http://localhost:1337/api/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:`Bearer ${token}`,
        },
        body: JSON.stringify({
          user: userId,
          product: product.id,
          quantity: 1,
        }),
      });
      console.log('this',typeof userId,typeof product.id);
      if (response.ok) {
        const responseData = await response.json();
        toast.add({
          title: 'added to cart',
          description: "Adding to your cart was successful",
        })       
      } else {
        console.error('Failed to add to cart', response.message);
        toast.add({
          title: 'Failed to add to cart',
          description: "Something went wrong when adding to your cart",
        })
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.add({
        title: 'Failed to add to cart',
        description: "Something went wrong when adding to your cart",
      })
    }    
  }else{
    toast.add({
      title: 'This action requires authentication',
      description: "Log in if you have an account with us or sign up  for free.",
    })
  }

};
</script>


<style scoped>
.product {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1%;
    /* background-color: white; */
    /* background-color: blue; */
    width: 29%;
    height: auto;
    /* border-radius: 20px; */
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
    background-color: orangered;
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