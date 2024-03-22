<template>
    <div>
        <HomeHeaderComponents/>
    </div>
    <div  class="container">
        <div class="products">
            <ProductComponent v-for="product in products" :key="product.id" :product="product"></ProductComponent>
        </div>
    </div>

</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const api = runtimeConfig.public.apiBase


const { data: products } = await useFetch('https://fakestoreapi.com/products')
// const { data: products } = await useFetch('http://localhost:1337/api/products')

// console.log(products);
</script>

<style scoped>
template{
    margin: 0;
    padding: 0;
}
.container{
    width: 100%;
    display: flex;
    /* justify-content: center; */
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
</style>