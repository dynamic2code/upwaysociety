<template>
    <div class="order">
        <div id="image">
            <img src="@/assets/images/VATPAVE Mens Hawaiian Flamingo Shirts Casual Short Sleeve Button Down Shirt Summer Shirts __ Trendy.jpeg" alt="order image">
        </div>
        <div id="details">
            <span class="cost">Red Flamingo shirt</span>
            <span>details</span>
            <span class="cost">Prize: 350 ksh</span>
        </div>
        <div id="action">
            <button id="tick">

            </button>
            <button>
                <img src="@/assets/images/delete-bin-line.png" alt="bin">
            </button>
            
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
    /* background-color: orangered; */
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#action >*{
    margin: 5%;
}
#tick{
    /* background-color: orangered; */
    border-radius: 20px;
    /* padding: 2%; */
    height: 40px;
    width: 40px;
    cursor:cell;
    border: 3px solid black;
}
</style>