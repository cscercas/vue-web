<script setup lang="ts">
import { getYesNo, type YesNoTipus } from '@/actions/getYesNo.actio';
import { Loader2 } from '@lucide/vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';


const quaestio = history.state.quaestio as string || 'No hay pregunta'

const router = useRouter()

const yesNo = ref<YesNoTipus>({
    answer: '',
    image: ''
})

const estLoading = ref<boolean>(true)

onMounted(async () => {
    try {
        const responsum = await getYesNo()
        yesNo.value = responsum
        estLoading.value = false
    } catch (error) {
        console.log(error)
        estLoading.value = false
    }
})

</script>

<template>
    <div class="text-center"> 
        <div v-if="estLoading">
          <img class="h-screen w-screen absolute top-0 left-0 object-cover" src="/imagines/github.jpg" alt="" />
             <div class="absolute w-screen h-screen top-0 left-0 bg-black opacity-40"></div>

                 <div class="relative mt-45">
                    <p class="text-4xl text-white font-medium mt-14">{{ quaestio }}</p> 

                        <div class="flex items-center justify-center mt-60">
                            <Loader2 class="w-18 h-18 text-white animate-spin" />
                        </div>
                 </div>
        </div>

        <div v-else>
            <img v-if="yesNo.image === ''" class="h-screen w-screen absolute top-0 left-0 object-cover" />
            <img v-else class="h-screen w-screen absolute top-0 left-0 object-cover" :src="yesNo.image" />

            <div class="relative mt-45">
             <p class="text-4xl text-white font-medium mt-14">{{ quaestio }}</p> 
             <p class="text-7xl text-white font-bold mt-60"> 
                {{ yesNo.answer === 'yes' ? 'Sí!' : 'No!' }}
            </p> 
            <button 
                 @click="router.push('/')"
                 class="fixed top-5 right-5 w-12 h-12 bg-gray-700 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
                <span class="text-xl text-gray-300"> ➔ </span>
            </button>
            
            </div>

        </div>

    </div>
</template>
