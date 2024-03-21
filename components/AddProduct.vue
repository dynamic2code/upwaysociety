<template>
    <div>
        <form @submit.prevent="submitForm">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Product name"v-model="formData.name" required>
        </div>

        <div>
            <label for="count">Count:</label>
            <input type="number" id="count" placeholder="number of units" v-model.number="formData.count" required>            
        </div>

        <div>
            <label for="price">Price:</label>
            <input type="number" id="price" placeholder="Price per unit" v-model.number="formData.price" required>            
        </div>

        <div>
            <label for="category">Category:</label>
            <select id="category" v-model="formData.category" required>
                <option value="">Select category</option>
                <!-- Populate options dynamically or hardcode them -->
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Children">Children</option>
            </select>            
        </div>

        <div>
            <label for="images">Images:</label>
            <input type="file" id="images" multiple @change="handleFileChange">              
        </div>
        
        <button type="submit">Add Product</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
name: '',
count: 0,
price: 0,
category: '',
images: []
});

const submitForm = () => {
// Submit form logic
console.log(formData.value);
};

const handleFileChange = (event) => {
// Handle file input change
const files = event.target.files;
// Store selected files in formData
formData.value.images = Array.from(files);
};
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 500px;
    height: 100%;
    background-color: orangered;
    padding: 20px;
    border-radius: 30px;
}
form >*{
    margin-top: 10px;
}

input{
    all: unset;
    background-color: azure;
}
button{
    width: 20%;
    height: auto;
    padding: 2%;
    border-radius: 30px;
    background-color: white;
}

@media (max-width: 728px) {
    form{
        width: 300px;
    }
    button{
        width: auto;
    }
}
</style>
  