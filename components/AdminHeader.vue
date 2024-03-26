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
            <router-link to="/blogs">
                <span>Blogs</span>
            </router-link>
            <router-link to="/adminLogIn">
                <span>log in</span>
            </router-link>
        </div>
    </div>
    <div class="body">
        <div class="container2">
         
            <NuxtLink to="/admin">
                <img src="@/assets/images/truck-line.png" alt="orders">
            </NuxtLink>

            <NuxtLink to="/reports">
                <img src="@/assets/images/line-chart-fill.png" alt="home">
            </NuxtLink>

            <button @click="toggleAdd">
                <img src="@/assets/images/add-circle-line.png" alt="cart">
            </button>

            <NuxtLink to="/adminNotification">
                <img src="@/assets/images/notification-2-line.png" alt="notification">
            </NuxtLink>

            <NuxtLink to="/store">
                <img src="@/assets/images/store-2-line.png" alt="store">
            </NuxtLink>

            <NuxtLink to="/addBlog">
                <img src="@/assets/images/sticky-note-add-line.png" alt="add blog">
            </NuxtLink>
        </div>
    </div>

    <div id="add" v-if="addIsVisible">
        <AddProduct></AddProduct>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const addIsVisible = ref(false);

const toggleAdd = () => {
    addIsVisible.value = !addIsVisible.value;
};

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
    flex-direction: row;
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
#add{
    position: absolute;
    /* background-color: black; */
    width: 100%;
    z-index: 5;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>