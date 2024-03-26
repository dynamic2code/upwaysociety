<template>
    <BackButton></BackButton>
 
    <div class="body">
        <div class="container">
            <span class="title">Get back to your account to enjoy our store</span>   
            <form @submit.prevent="signup">
            <input type="email" id="email" v-model="email" placeholder="email" required />
            <input type="password" id="password" v-model="password" placeholder="password" required />
            <button class="callToAction" type="submit">Log in</button>
            </form>
        </div>        
    </div>

</template>

<script setup>
import { useUserStore } from '../stores/counter.js';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');


const signup = async () => {
  try {
    const response = await fetch('http://localhost:1337/api/auth/local/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: email.value,
        password: password.value,
      }),
    });
    if (response.ok) {
      const responseData = await response.json();
      // console.log('User profile', responseData.user);
      // console.log('User token', responseData.jwt);
      const userStore = useUserStore();
      userStore.setUser( responseData.user);
      useUserStore().setTokens(responseData.jwt); 
      useUserStore().setAuth()
      router.push('/');
      
    } else {
      console.error('Failed to fetch authentication token:', response.statusText);
      // Handle the failure scenario, e.g., display an error message
    }
  } catch (error) {
    console.error('Error signing up:', error);
  }
};

</script>

<style scoped>
.container{
    flex-direction: column;
    /* background-color: blue; */
    justify-content: center;
    height: 400px;
    align-items: center;
}
form{
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
}
form >*{
    margin: 10px;
}
input{
  all: unset;
  width: 90%;
  height: 50px;
  margin: 2%;
  padding-left: 3%;
  /* background-color: aliceblue; */
  border-radius: 10px;
  border: 1px solid #000;
}
button{
    width: 20%;
    height: auto;
    padding: 2%;
    border-radius: 30px;
    background-color: orangered;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media (max-width: 728px) {
    form{
        width: 100%;
    }
}
</style>