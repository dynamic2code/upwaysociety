<template>
    <!-- <span>product id: {{ $route.params.id }}</span> -->
    <!-- <span>{{ product }}</span> -->
    <BackButtonForProduct></BackButtonForProduct>
    <div class="body">
           
        <div class="container">
            <div>               
                <img src="@/assets/images/VATPAVE Mens Hawaiian Flamingo Shirts Casual Short Sleeve Button Down Shirt Summer Shirts __ Trendy.jpeg" alt="">
            </div>

            <div class="side_show">
                <button>
                    <img class="side_img"src="@/assets/images/VATPAVE Mens Hawaiian Flamingo Shirts Casual Short Sleeve Button Down Shirt Summer Shirts __ Trendy.jpeg" alt="">                    
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
// console.log(route.params)
const product = ref([])

const fetchProduct = async () => {
  try {
    const response = await fetch(`http://localhost:1337/api/products/${route.params.id}`);
    if (response.ok) {
      const data = await response.json();
      product.value = data; // Assuming the response is an array of products
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
</script>

<style scoped>
.body{
    /* background-color: blue; */
    /* height: 100vh;
    flex-direction: column;     */
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
    background-color: orangered;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 3;
    transition: background-color 0.3s ease;
    border-radius: 20px;
    padding: 1%;
}
.side_show >*{
    margin-top: 10px;
    margin-bottom: 10px;
}
.side_img{
    width: 50px;
    height: 50px;
    border-radius: 20px;

}

.side_img:hover{
    border: 2px solid black;
}
</style>