<template>
    <BackButtonForProduct :product="product.attributes.name"></BackButtonForProduct>
    <div class="body">
           
        <div class="container">
            <div>               
                <img id="image" :src="getMediaUrl()"  alt=""> 
            </div>

            <div class="side_show">
                <button>
                    <img class="side_img"src="@/assets/images/VATPAVE Mens Hawaiian Flamingo Shirts Casual Short Sleeve Button Down Shirt Summer Shirts __ Trendy.jpeg" alt="">                    
                </button>
            </div>
        </div>

        <div class="container">
            <span>{{ product.attributes.description }}</span>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

const product = ref([]);

const getMediaUrl = (filename) => {
  if (product.value.attributes && product.value.attributes.preview_image) {
    return `${api}${product.value.attributes.preview_image.data.attributes.formats.small.url}`;
  } else {
    return ''; // Return a default image URL or handle the case when product data is not available
  }
};

const fetchProduct = async () => {
  try {
    const response = await fetch(`http://localhost:1337/api/products/${route.params.id}?populate=*`);
    if (response.ok) {
      const responseData = await response.json();
      if ('data' in responseData) {
        const { data } = responseData;
        // Update the product value
        product.value = data;
      } else {
        console.error('Invalid API response: Missing "data" property');
      }
    } else {
      console.error('Failed to fetch product:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching product:', error);
  }
};

onMounted(() => {
  fetchProduct();
});

// Watch for changes to the product value
watch(product, () => {
  // Call getMediaUrl when the product data is available
  const imageUrl = getMediaUrl();
  console.log('Image URL:', imageUrl);
});
</script>

<style scoped>
.body{
    flex-direction: column;
}
.container{
    /* background-color: black; */
    justify-content: center;
    align-items: center;

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
.side_show{
    position: absolute;
    right: 20px;
    width: auto;
    height: auto;
    /* background-color: orangered; */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 3;
    transition: background-color 0.3s ease;
    /* border-radius: 20px; */
    padding: 1%;
}
.side_show >*{
    margin-top: 10px;
    margin-bottom: 10px;
}
.side_img{
    width: 200px;
    height: 200px;
    border-radius: 0px;

}

.side_img:hover{
    border: 2px solid black;
}
</style>