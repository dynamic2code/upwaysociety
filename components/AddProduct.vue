<template>
    <div>
        <form @submit.prevent="submitForm">
        <div>
            <label for="pname">Name:</label>
            <input type="text" id="pname" placeholder="Product name" v-model="pname" required>
        </div>

        <div>
            <label for="name">Description:</label>
            <input type="text" id="description" placeholder="Product description" v-model="description" required>
        </div>

        <div>
            <label for="count">Count:</label>
            <input type="number" id="count" placeholder="number of units" v-model.number="count" required>            
        </div>

        <div>
            <label for="price">Price:</label>
            <input type="number" id="price" placeholder="Price per unit" v-model.number="price" required>            
        </div>

        <div>
            <label for="category">Category:</label>
            <select id="category" v-model="category" required>
                <option value="">Select category</option>
                <!-- Populate options dynamically or hardcode them -->
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Children">Children</option>
            </select>            
        </div>

        <div>
            <label for="preview_image">Preview Image:</label>
            <input type="file" id="preview_image" multiple @change="handlePreviewImageChange">              
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

const pname = ref('');
const description = ref('');
const count = ref(0);
const price = ref(0);
const category = ref('');
const previewImages = ref([]);
const productImages = ref([]);

const submitForm = async () => {
    try {
        const requestData = {
            name: pname.value,
            description: description.value,
            count: count.value,
            price: price.value,
            category: category.value
        };

        const formData = new FormData();
        formData.append('data', JSON.stringify(requestData));

        // Append preview images
        for (const image of previewImages.value) {
            formData.append('preview_image', image);
        }

        // Append product images
        for (const image of productImages.value) {
            formData.append('images', image);
        }

        const responseMainData = await fetch('http://localhost:1337/api/products', {
            method: 'POST',
            body: JSON.stringify(requestData),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        
        const responseData = await responseMainData.json();
        console.log('Response for main data:', responseData);

        const responseImages = await fetch('http://localhost:1337/upload/', {
            method: 'POST',
            body: formData,
        });

        if (!responseImages.ok) {
            throw new Error(`HTTP error! status: ${responseImages.status}`);
        }

        console.log('Images uploaded successfully');
    } catch (error) {
        console.error('Error adding product:', error);
    }
};

const handlePreviewImageChange = (event) => {
    previewImages.value = Array.from(event.target.files);
};

const handleFileChange = (event) => {
    productImages.value = Array.from(event.target.files);
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
  