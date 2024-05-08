<script setup>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';

  import {ref} from "vue";
  import router from '@/router';

  import { supabase } from '/src/lib/supabase.js'

  var progress = ref(0);

  const formTabs = ["Account", "Business Details", "Documents"]

  var formData = []

  function collectData() {
    document.querySelectorAll('input').forEach((el) => {
      formData.push(el.value)
    })
  }

  var busiID = ref();

  const nextProgress = () => {
    collectData()
    if (progress.value != 2) {
      progress.value++;
    }
  }

  const prevProgress = () => {
    if (progress.value != 0) {
      progress.value--;
    }
  };

  async function signup() {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData[0],
        password: formData[1],
      })
      
      busiID = data.id;
      
      await supabase.from('Users').insert({id: data.id, type: formData[3]})

      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    }
  }

  async function fileUpload(event) {
    const file = event.target.files[0]
    await supabase.storage.from('Documents').upload(`${busiID}-${event.target.files[0].name}`, avatarFile)
  }
</script>

<template>
  <Navbar/>

  <br>

  <section class="signup-section w-[90%] flex item-center justify-evenly h-[600px] mx-auto">

    <div class="w-[80%] h-full flex flex-col justify-evenly items-center rounded-lg shadow-[0_0_5px_#2e3642] ">
      <h2 class="text-xl">Create your profile</h2>

      <div class="progress-indicator w-[90%]">
        <div class="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
            <ol class="relative z-10 flex justify-between text-sm font-medium text-gray-500">
              <li class="flex items-center gap-2 bg-[#222831] p-2">
                <span class="size-6 rounded-full text-center text-[10px]/6 font-bold" v-bind:class="progress==0 ? 'bg-[#00ADB5] text-white' : 'bg-gray-100'">1</span>
                <span class="hidden sm:block" v-bind:class="progress==0 ? 'text-white' : ''">Account</span>
              </li>

              <li class="flex items-center gap-2 bg-[#222831] p-2">
                <span class="size-6 rounded-full text-center text-[10px]/6 font-bold" v-bind:class="progress==1 ? 'bg-[#00ADB5] text-white' : 'bg-gray-100'">2</span>
                <span class="hidden sm:block" v-bind:class="progress==1 ? 'text-white' : ''">Details</span>
              </li>

              <li class="flex items-center gap-2 bg-[#222831] p-2">
                <span class="size-6 rounded-full text-center text-[10px]/6 font-bold" v-bind:class="progress==2 ? 'bg-[#00ADB5] text-white' : 'bg-gray-100'">3</span>
                <span class="hidden sm:block" v-bind:class="progress==2 ? 'text-white' : ''">Documents</span>
              </li>
            </ol>
          </div>
      </div>

      <div class="divider h-[1px] border border-[#393E46] w-[90%] mx-auto"></div>

      <div class="w-[90%] flex flex-col justify-between h-[55%]">
        <div>
          <h3 class="font-bold text-2xl text-[#00ADB5]">{{ formTabs[progress] }}</h3>
          <span class="text-sm text-gray-200">Please provide details to register your business with us</span>
        </div>

        <div class="w-full h-[75%] flex flex-col justify-evenly" v-if="progress==0">
          <div class="w-full flex items-center justify-between">
            <label>Email</label>
            <input type="email" id="email" class="text-sm pl-2 outline-none w-[55%] text-black rounded h-9 border-2 border-[#eee]">
          </div>

          <div class="w-full flex items-center justify-between">
            <label>Password</label>
            <input type="password" id="password" class="text-sm pl-2 outline-none w-[55%] text-black rounded h-9 border-2 border-[#eee]">
          </div>

          <div class="w-full flex items-center justify-between">
            <label>Phone #</label>
            <input type="text" class="text-sm pl-2 outline-none w-[55%] text-black rounded h-9 border-2 border-[#eee]">
          </div>

          <div class="w-full flex items-center justify-between">
            <label name="type">Type</label>
            <select name="type" class="text-sm pl-2 outline-none w-[55%] text-black rounded h-9 border-2 border-[#eee]">
              <option value="businessman">Businessman</option>
              <option value="employee">Employee</option>
            </select>
          </div>
        </div>

        <div class="w-full h-[75%] flex flex-col justify-evenly" v-if="progress==1">
          <div class="w-full flex items-center justify-between">
            <label>Name</label>
            <input type="email" class="text-sm pl-2 outline-none w-[55%] text-black rounded h-9 border-2 border-[#eee]">
          </div>

          <div class="w-full flex items-center justify-between">
            <label>Type</label>
            <input type="password" class="text-sm pl-2 outline-none w-[55%] text-black rounded h-9 border-2 border-[#eee]">
          </div>

          <div class="w-full flex items-center justify-between">
            <label>Contact</label>
            <input type="text" class="text-sm pl-2 outline-none w-[55%] text-black rounded h-9 border-2 border-[#eee]">
          </div>

          <div class="w-full flex items-center justify-between">
            <label name="type">GST #</label>
            <input type="text" class="text-sm pl-2 outline-none w-[55%] text-black rounded h-9 border-2 border-[#eee]">
          </div>
        </div>

        <div class="w-full h-[75%] flex flex-col justify-evenly" v-if="progress==2">
          <div class="w-full flex items-center justify-between">
            <label>Proof of identity</label>
            <input @change="file" class="block w-[55%] text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file">
          </div>

          <div class="w-full flex items-center justify-between">
            <label>Proof of ownership</label>
            <input class="block w-[55%] text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file">
          </div>

          <div class="w-full flex items-center justify-between">
            <label>Proof of residency</label>
            <input class="block w-[55%] text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file">
          </div>
        </div>
      </div>

      <div class="w-[90%] flex items-center" v-bind:class="progress!=0 ? 'justify-between' : 'justify-end'">
        <div class="flex items-center w-[70px] cursor-pointer justify-between" v-if="progress!=0" @click="prevProgress">
          <i class="fa-solid fa-chevron-left fa-xs"></i>
          <span class="text-sm">Previous</span>
        </div>

        <button v-if="progress!=2" class="flex justify-evenly items-center bg-[#00ADB5] w-20 h-9 rounded-lg" @click="nextProgress">
          <span class="text-sm">Next</span>
          <i class="fa-solid fa-xs fa-chevron-right"></i>
        </button>

        <button v-if="progress==2" id="signup-btn" class="flex justify-evenly items-center bg-[#00ADB5] w-20 h-9 rounded-lg" @click="signup">
          <span class="text-sm">Signup</span>
        </button>
      </div>
    </div>
  
  </section>

  <br>

  <Footer/>
</template>