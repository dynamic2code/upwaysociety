<template>
    <div class="product">
        <div>
            <div id="top">
                <button>
                    <img src="@/assets/images/add-fill.png" alt="">
                </button>
                <span class="cost">Units: 20</span> 
                <button id="love">
                    <img src="@/assets/images/subtract-line.png" alt="like">
                </button>               
            </div>

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