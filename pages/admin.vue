<template>
    <p>   {{ foo }}</p>
    <div>
        <AdminHeader></AdminHeader>
    </div>
    <div  class="container">
        <div class="products">
            <OrderComponent></OrderComponent>
            <OrderComponent></OrderComponent>
            <OrderComponent></OrderComponent>
        </div>
    </div>

</template>

<script setup>
const foo = user()
import AdminHeader from '../components/AdminHeader.vue';

</script>

<style scoped>
.container{
    width: 100%;
    display: flex;
    justify-content: center;
}

.products{
    margin-top: 20px;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    /* background-color: brown; */
}
.products > * {
    flex: 0 0 auto; 
    margin: auto;
    margin-top: 10px;
}
</style>