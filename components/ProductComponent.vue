<template>
    <div class="product">
        <div>
            <button id="love">
                <img src="@/assets/images/heart-line.png" alt="like">
            </button>
            <img id="image" :src="product.image" alt="">
        </div>
        <div class="details">
            <span class="cost">{{ product.title }}</span>
            <span id="description">{{ product.description }}</span>
            <span class="cost" >{{ product.price }}</span>
        </div>
    </div>
</template>

<script setup>
const {product} = defineProps(['product'])
</script>


<style scoped>
.product {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1%;
    background-color: white;
    width: 26%;
    height: auto;
    border-radius: 20px;
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
    }
}
</style>