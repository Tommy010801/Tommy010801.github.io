<template> 
    <div class=" top-0 p-3 flex justify-center gap-10 text-base font-sans font-semibold">
        <router-link 
            to="/" 
            class=" text-slate-50 border-solid border-2 rounded-full border-slate-50 py-1 px-3 bg-zinc-700 hover:bg-white-500 hover:text-neutral-700 hover:bg-slate-50 duration-500"
            >
            Home
        </router-link>

        <router-link 
            to="/karriere"
            class="text-slate-50 border-solid border-2 rounded-full border-slate-50 py-1 px-3 bg-zinc-700 hover:text-neutral-700 hover:bg-slate-50 duration-500"
            >
            Karriere
        </router-link> 

        <router-link 
            to="/projekte" class="text-slate-50 border-solid border-2 rounded-full border-slate-50 py-1 px-3 bg-zinc-700 hover:bg-slate-50 hover:text-neutral-700 duration-500"
            >
            Projekte
        </router-link> 

    </div>  
    <div>
        <router-view/>
    </div>
    <div>
        <CompFooter/>
    </div>
</template>

<script setup>

import CompFooter from './components/Footer.vue'

</script>
