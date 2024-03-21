<template>
    <div class="order">
        <div id="image">
            <img src="@/assets/images/VATPAVE Mens Hawaiian Flamingo Shirts Casual Short Sleeve Button Down Shirt Summer Shirts __ Trendy.jpeg" alt="order image">
        </div>
        <div id="details">
            <span>To location</span>
            <span>order date</span>
        </div>
        <div id="action">
            <img src="@/assets/images/shopping-cart-line.png" alt="get order">
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>
.order {
    width: 100%;
    height: auto;
    padding: 2%;
    display: flex;
    align-items: center;
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
    background-color: orangered;
    border-radius: 20px;
    padding: 2%;
    cursor:cell;
}
</style>