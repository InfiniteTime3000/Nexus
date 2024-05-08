<script setup>
  import Sidebar from '../components/Sidebar.vue';

</script>

<template>
    <div class="foundation h-screen w-full flex justify-between">
        <Sidebar/>
    
        <div class="main-panel flex flex-col justify-evenly ml-[20%] w-[80%] h-[165%] my-auto">
            <div class="top-level">
                <h1 class="text-xl">Overview</h1>
                <br>
                <div class="w-[95%] rounded border p-3">
                    <h1>Business Name</h1>
                    <span class="text-sm text-gray-300">#2213179695197043</span>
                </div>
            </div>


            <div class="employees-ref h-[220px]">
                <RouterLink :to="{name: 'employees'}">
                    <a>Your team <i class="fa-solid fa-angle-right text-xs"></i></a>
                </RouterLink>
                <div class="divider h-[1px] border border-[#393E46] w-[95%] mt-2 mb-2"></div>

                <div class="flex w-[95%] h-[90%] bg-yellow-700">
                    <div class="card">
                        
                    </div>
                </div>
            </div>

            <div class="ongoing-task h-[220px]">
                <RouterLink :to="{name: 'schedule'}">
                    <a>On-going Tasks <i class="fa-solid fa-angle-right text-xs"></i></a>
                </RouterLink>
                <div class="divider h-[1px] border border-[#393E46] w-[95%] mt-2 mb-2"></div>

                <div class="flex w-[95%] h-[90%] bg-yellow-700">
                    <div class="cards"></div>
                    <div class="cards"></div>
                    <div class="cards"></div>
                    <div class="cards"></div>
                </div>
            </div>

            <div class="analytics h-[220px]">
                <RouterLink :to="{name: 'schedule'}">
                    <a>Analytics <i class="fa-solid fa-angle-right text-xs"></i></a>
                </RouterLink>
                <div class="divider h-[1px] border border-[#393E46] w-[95%] mt-2 mb-2"></div>

                <div class="flex w-[95%] h-[90%] bg-yellow-700">
                    <div class="cards"></div>
                    <div class="cards"></div>
                    <div class="cards"></div>
                    <div class="cards"></div>
                </div>
            </div>
        </div>
    </div>
</template>