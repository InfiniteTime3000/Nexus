<script setup>
  import { supabase } from '/src/lib/supabase.js'
  import { ref } from "vue";

  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';

  import router from '@/router/';

  const email = ref("");
  const password = ref("");

  async function login() {
    document.getElementById('login-btn').classList.add('animate-spin')
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      }).then(() => {
        router.push('/dashboard')
      })

      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    }
  }
</script>

<template>
  <Navbar/>

  <br>

  <section class="login-section w-[90%] flex item-center justify-evenly h-[500px] mx-auto">
    <div class="left-panel w-[45%] h-full flex flex-col justify-evenly rounded-lg shadow-[0_0_10px_#2e3642] ">
      <div class="flex flex-col items-center justify-center">
        <h1 class="font-bold text-2xl text-[#00ADB5]">Welcome back</h1>
        <span class="text-sm text-gray-200">Please enter your details to sign in</span>
      </div>

      <div class="w-[75%] flex flex-col item-center justify-evenly mx-auto">
        <div>
          <label for="email" class="text-lg">E-mail Address</label>
          <input type="email" placeholder="Enter your email" name="email" v-model="email" class="text-sm pl-2 outline-none w-[100%] text-black rounded h-11 border-2 border-[#eee] my-3">
        </div>

        <div>
          <label for="pass" class="text-lg">Password</label>
          <input type="password" name="pass" placeholder="Enter your password" v-model="password" class="text-sm pl-2 outline-none w-[100%] text-black rounded h-11 my-3">
        </div>

        <div class="my-2">
          <div class="flex w-full justify-between item-center">
            <div class="flex w-[35%] justify-evenly">
              <input type="checkbox" name="rem-me">
              <label for="rem-me">Remember me</label>
            </div>

            <a class="underline cursor-pointer">Forgot password?</a>
          </div>
        </div>

        <button id="login-btn" class="signin-btn mt-2 text-center bg-[#00ADB5] mb-3 h-10 text-lg rounded-lg" @click="login">
          Log in
        </button>

        <span class="text-sm mx-auto">Don't have an account yet? <RouterLink :to="{name: 'signup'}"><a class="font-bold">Sign up</a></RouterLink></span>
      </div>
    </div>

    <div class="v-divider h-[85%] my-auto border border-[#393E46] w-[1px] mx-auto"></div>

    <div class="right-panel w-[45%] h-[500px] flex flex-col bg-[url(/src/assets/Imgs/skyrocket.svg)] backdrop-blur-smbg-bottom bg-no-repeat justify-evenly">
      <div class="flex flex-col items-center justify-evenly h-full backdrop-blur-sm bg-[#00ADB5]/60 rounded-lg">
        <h1 class="font-bold text-2xl">Other options</h1>
        <div class="flex flex-col items-center justify-evenly h-[80%] w-full">
          <div class="flex justify-evenly items-center w-[40%] cursor-pointer h-14 rounded-lg border">
            <img src="/src/assets/Imgs/google.svg" class="w-5">
            Login with Google
          </div>
          <div class="flex justify-evenly items-center w-[40%] cursor-pointer h-14 rounded-lg border">
            <img src="/src/assets/Imgs/microsoft.svg" class="w-5">
            Login with Microsoft
          </div>
          <div class="flex justify-evenly items-center w-[40%] cursor-pointer h-14 rounded-lg border">
            <img src="/src/assets/Imgs/apple.svg" class="w-5">
            Login with Apple
          </div>
        </div>
      </div>
    </div>
  </section>

  <br>

  <Footer/>
</template>