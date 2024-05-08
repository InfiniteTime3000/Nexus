<script setup>
    import router from '@/router';
    import { supabase } from '/src/lib/supabase.js'

    async function logout() {
        try {
            const { error } = await supabase.auth.signOut().then(() => {
                router.go('/')
            })

            if (error) throw error;
        } catch (error) {
            alert(error.error_description || error.message);
        }
    }
</script>

<template>
    <div class="fixed sidebar h-full w-[15%] flex flex-col border-r-2 border-[#393E46] justify-evenly items-center">
        <div class="sidebar-start flex justify-center items-center w-full">
            <RouterLink :to="{name: 'dashboard'}">
                <h1 class="logo text-[#00ADB5] font-bold text-xl">Nexus</h1>
            </RouterLink>
        </div>

        <div class="sidebar-middle text-sm w-full justify-center h-[65%] items-center flex">
            <ul class="nav-center flex flex-col w-full h-[90%] items-center justify-evenly">
                <li class="w-[80%] h-10 rounded cursor-pointer flex items-center hover:bg-[#00ADB5]/50">
                    <RouterLink :to="{name: 'dashboard'}">
                        <i class="ml-8 mr-4 fa-solid fa-calendar-days"></i>
                        Overview
                    </RouterLink>
                </li>

                <li class="w-[80%] h-10 rounded cursor-pointer flex items-center hover:bg-[#00ADB5]/50">
                    <RouterLink :to="{name: 'schedule'}">
                        <i class="ml-8 mr-4 fa-solid fa-calendar-days"></i>
                        Schedule
                    </RouterLink>
                </li>

                <li class="w-[80%] h-10 rounded cursor-pointer flex items-center hover:bg-[#00ADB5]/50">
                    <RouterLink :to="{name: 'comms'}">
                        <i class="ml-8 mr-4 fa-solid fa-comments"></i>
                        Comms
                    </RouterLink>
                </li>
                
                <li class="w-[80%] h-10 rounded cursor-pointer flex items-center hover:bg-[#00ADB5]/50">
                    <RouterLink :to="{name: 'employees'}">
                        <i class="ml-8 mr-4 fa-solid fa-users"></i>
                        Employees
                    </RouterLink>
                </li>
                
                <li class="w-[80%] h-10 rounded cursor-pointer flex items-center hover:bg-[#00ADB5]/50">
                    <RouterLink>
                        <i class="ml-8 mr-4 fa-solid fa-chart-simple"></i>
                        Analytics
                    </RouterLink>
                </li>
                
                <li class="w-[80%] h-10 rounded cursor-pointer flex items-center hover:bg-[#00ADB5]/50">
                    <RouterLink>
                        <i class="ml-8 mr-4 fa-solid fa-compass"></i>
                        Explore
                    </RouterLink>
                </li>
            </ul>
        </div>

        <div class="divider h-[1px] border border-[#393E46] w-[80%] mx-auto mb-[2%]"></div>

        <div class="sidebar-end text-sm w-full justify-between flex-col h-[13%] items-center flex">
            <div class="w-[80%] h-10 rounded cursor-pointer flex items-center hover:bg-[#00ADB5]/50"><i class="ml-8 mr-4 fa-solid fa-gear"></i> Settings</div>

            <div class="text-red-600 w-[80%] h-9 rounded cursor-pointer flex items-center" @click="logout"><i class="ml-8 mr-4 fa-solid fa-right-from-bracket"></i> Logout</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>