<template>
    <div>
        <form @submit.prevent="submitForm">
        <div>
            <label for="pname">Location To be delivered to:</label>
            <input type="text" id="location" placeholder="Your location" v-model="location" required>
        </div>

        <div>
            <label for="price">Phone number:</label>
            <input type="number" id="Phone_number" placeholder="Your mpesa phone number" v-model.number="phone_number" required>            
        </div>
        
        <button type="submit">Pay</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const location = ref('');
const phone_number = ref('');
// const count = ref(0);
// const price = ref(0);
// const category = ref('');
// const previewImages = ref([]);
// const productImages = ref([]);

const submitForm = async () => {
    try {
        const requestData = {
            location: location.value,
            phone: phone_number.value,
            // count: count.value,
            // price: price.value,
            // category: category.value
        };

        const formData = new FormData();
        formData.append('data', JSON.stringify(requestData));

        const responseMainData = await fetch('http://localhost:1337/api/products', {
            method: 'POST',
            body: JSON.stringify(requestData),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        
        const responseData = await responseMainData.json();
        console.log('Response for main data:', responseData);

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
    display: flex;
    align-items: center;
    justify-content: center;
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