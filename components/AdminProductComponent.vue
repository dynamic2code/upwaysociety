<template>
    <div class="product">
        <div>
            <div id="top">
                <button>
                    <img src="@/assets/images/add-fill.png" alt="">
                </button>
                <span class="cost">{{ product.attributes.count }}</span> 
                <button id="love">
                    <img src="@/assets/images/subtract-line.png" alt="like">
                </button>               
            </div>
            <img id="image" :src="getMediaUrl()"  alt="">
        </div>
        <div class="details">
            <span class="cost">{{ product.attributes.name }}</span>
            <span id="description">{{ product.attributes.description }}</span>
            <span class="cost">{{ product.attributes.price }}</span>
        </div>
    </div>
</template>

<script setup>
const {product} = defineProps(['product'])
// console.log(product)
const runtimeConfig = useRuntimeConfig()
const api = runtimeConfig.public.apiBase
const getMediaUrl = (filename) => {
  return `${api}${product.attributes.preview_image.data.attributes.formats.small.url}`;
};
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
    align-items: center;
}
#love{
    display: flex;
    padding: 2%;
    justify-content: center;
    align-items: center;
    /* background-color: orangered; */
    border-radius: 50%;
}
#top{
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    align-items: center;
    /* background-color: blue; */
    width: 100%;
}
#top .cost{
    background-color: orangered;
    padding: 2%;
    
}
@media (max-width: 728px) {
    .product {
        width: 45%;
    }
}
</style>