<script setup lang="ts">
import { useRouter } from 'vue-router';


const quaestio = history.state.quaestio as string || 'No hay pregunta'

const router = useRouter()

</script>

<template>
    <div class="text-center"> 
        <img class="h-screen w-screen absolute top-0 left-0 object-cover" src="/imagines/github.jpg" alt="" />
        <div class="absolute w-screen h-screen top-0 left-0 bg-black opacity-40"></div>

        <div class="relative mt-45">
            <p class="text-4xl text-white font-medium mt-14">{{ quaestio }}</p> 
            <p class="text-6xl text-white font-bold mt-60"> Sí </p> 
            <button 
                @click="router.push('/')"
                class="fixed top-5 right-5 w-12 h-12 bg-gray-700 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
                <span class="text-xl text-gray-300"> ➔ </span>
            </button>
        </div>
    </div>
</template>