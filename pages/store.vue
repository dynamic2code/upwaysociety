<template>
    <div>
        <AdminHeader></AdminHeader>
    </div>
    <div  class="container">
        <div class="products">
            <AdminProductComponent></AdminProductComponent>
            <AdminProductComponent></AdminProductComponent>
            <AdminProductComponent></AdminProductComponent>
            <AdminProductComponent></AdminProductComponent>
            <AdminProductComponent></AdminProductComponent>
            <AdminProductComponent></AdminProductComponent>

        </div>
    </div>

</template>

<script setup>
</script>

<style scoped>
template{
    margin: 0;
    padding: 0;
}
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