<template>
    <div>
        <HomeHeaderComponents/>
    </div>
    <div  class="body">
        <div class="container">
            <ProductComponent v-for="product in products" :key="product.id" :product="product"></ProductComponent>
        </div>
    </div>

</template>

<script setup>
// const runtimeConfig = useRuntimeConfig()
// const api = runtimeConfig.public.apiBase

// const { data: products } = await useFetch('https://fakestoreapi.com/products')
// const { data: products } = await useFetch('http://localhost:1337/api/products')

const products = ref([])

const fetchProducts = async () => {
  try {
    const response = await fetch('http://localhost:1337/api/products?populate=*', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const responseData = await response.json();

      // Check if the 'data' property exists in the response
      if ('data' in responseData) {
        const { data } = responseData;

        // Update the spots ref with the processed spot data
        products.value = data;

      } else {
        console.error('Invalid API response: Missing "data" property');
      }
    } else {
      console.error('Request failed:', response.statusText);
    }
  } catch (error) {
    // ... error handling
  }
};

// console.log(products);

onMounted(() => {
    fetchProducts();
});
</script>

<style scoped>
template{
    margin: 0;
    padding: 0;
}
.container{
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    /* background-color: black; */
    flex-wrap: wrap;
    margin-top: 20px;
}

.container >* {
    flex: 0 0 auto; 
    margin: 10px;
    margin-top: 10px;
}
@media (max-width: 728px) {
    .container >*{
      margin: 10px;
    }
}
</style>