<template>
    <div class="product">
        <div>
            <button id="love">
                <img src="@/assets/images/heart-line.png" alt="like">
            </button>
            <img id="image" src="@/assets/images/VATPAVE Mens Hawaiian Flamingo Shirts Casual Short Sleeve Button Down Shirt Summer Shirts __ Trendy.jpeg" alt="">
        </div>
        <div class="details">
            <span class="cost">Red Flamingo shirt</span>
            <span class="cost" >Prize: 350 ksh</span>
        </div>
    </div>
</template>

<script setup>
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
    position: absolute;
    right: 0;
    display: flex;
    padding: 2%;
    justify-content: center;
    align-items: center;
    background-color: orangered;
    border-radius: 50%;
}

@media (max-width: 728px) {
    .product {
        width: 45%;
    }
}
</style>