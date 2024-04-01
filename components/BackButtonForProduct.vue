<template>
    <div class="body">
        <div class="container">
            <button @click="$router.back">
                <img src="@/assets/images/arrow-left-line.png" alt="Back">
            </button>
            <button @click="addToCart" id="love">
                <img src="@/assets/images/heart-line.png" alt="like">
            </button> 
        </div> 
    </div>
      
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .body{
    height: 100px;
    /* background-color: aqua; */
    align-items: center;
  }
  .container{
    justify-content: space-between;
  }

  button{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      /* background-color: white; */
      /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); */
      display: flex;
      justify-content: center;
      align-items: center;
  }
  button img{
      display: block;
      height: 100%;
      width: 100%;
  }
  </style>