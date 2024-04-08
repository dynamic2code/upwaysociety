<template>
    <div>
        <form @submit.prevent="submitForm">
            <div>
                <span>Pay Ksh: {{ total_cost }}</span>
            </div>
        <div>
            <label for="pname">Location To be delivered to:</label>
            <input type="text" id="location" placeholder="Your location" v-model="location" required>
        </div>

        <div>
            <label for="price">Phone number:</label>
            <input type="text" id="Phone_number" placeholder="Your mpesa phone number" v-model.number="phone_number" required>            
        </div>
        
        <button type="submit">Pay</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '../stores/carts.js';
import { useUserStore } from '../stores/counter.js';

const cartStore = useCartStore();

const total_cost = computed(() => {
    return cartStore.totalPriceOfSelectedProducts;
});


const userStore = useUserStore();

const token = userStore.token;
const userId=  userStore.user.id;

const location = ref('');
const phone_number = ref('');
const total = total_cost
const oder = cartStore.selectedProductIds;

console.log(oder);

const submitForm = async () => {
    try {
        const phoneNumberString = phone_number.value.toString();

        const responseMainData = await fetch('http://localhost:1337/api/my-orders?populate=*', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`,
            },
            body: JSON.stringify({
                data: {
                user: userId,
                products: oder,
                Location: location.value,
                phone: phoneNumberString,
                total_cost: total.value,
                }
            }),
        });
        
        const responseData = await responseMainData.json();
        console.log('Response for main data:', responseData);

    } catch (error) {
        console.error('Error placing  oder:', error);
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