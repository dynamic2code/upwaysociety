<template>
    <div class="body">
        <div class="container">
            <div>
                <img src="@/assets/images/heart-line.png" alt="">                
            </div>
            <div id="controls" >
                <button @click="toggleSearch"> 
                    <img src="@/assets/images/search-line.png" alt="search">
                </button>
                <button @click="toggleHidden">
                    <img src="@/assets/images/menu-line.png" alt="menu">
                </button>
            </div>
        </div>
        <div id="search_bar" v-if="searchIsVisible">
            <form >
                <input type="search" name="name" id="" placeholder="Search">
            </form>
        </div>
        <div id="hidden" v-if="menuIsVisible">
            <NuxtLink to="/blogs">
                <span>Blogs</span>
            </NuxtLink>
            <NuxtLink to="/about">
                <span>About us</span>
            </NuxtLink>
            
            <NuxtLink to="/logIn">
                <span>log in</span>
            </NuxtLink>

            <NuxtLink to="/signUp">
                <span>sign up</span>
            </NuxtLink>
        </div>
    </div>
    <div class="body">
        <div class="container2">
            <NuxtLink to="/">
                <img src="@/assets/images/home-2-line.png" alt="home">
            </NuxtLink>
            <NuxtLink to="/cart">
                <img src="@/assets/images/shopping-cart-line.png" alt="cart">
            </NuxtLink>
            <NuxtLink to="/notification">
                <img src="@/assets/images/notification-2-line.png" alt="notification">
            </NuxtLink>
            <NuxtLink to="/myOrders">
                <img src="@/assets/images/truck-line.png" alt="myOrders">
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const searchIsVisible = ref(false);

const toggleSearch = () => {
    searchIsVisible.value = !searchIsVisible.value;
};
const menuIsVisible = ref(false);

const toggleHidden = () => {
    menuIsVisible.value = !menuIsVisible.value;
};
</script>

<style scoped>
.container{
    height: auto;
    /* background-color: aqua; */
    justify-content: space-between;
    align-items: center;
}
.container2{
    border-radius: 20px;
    background-color: orangered;
    display: flex;
}
.container2 >*{
    margin: 10px;
}
#controls{
    display: flex;
    justify-content: center;
    align-items: center;
}
#controls >*{
    margin: 10px;
}
img{
    height: 32px;
    width: 32px;
}
#hidden{
    position: absolute;
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 10px;
    right: 0;
    top: 42px;
}
#hidden >*{
    padding: 10px;
}
#search_bar{
    position: absolute;
    padding: 2%;
    width: 100px;
}
</style>