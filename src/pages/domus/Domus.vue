<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useFavoritosStore } from '@/stores/useFavoritos';
import { Heart } from '@lucide/vue';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const dialogApertaEst = ref<boolean>(false)
const quaestio = ref<string>("")

const router = useRouter()

const cumKeyPressumEnter = (eventus: KeyboardEvent) => {
 if (eventus.key === "Enter") {
  const textusItinerans = quaestio.value.trim()

    if (textusItinerans.length > 0 && textusItinerans.endsWith("?")) {
      dialogApertaEst.value = false
      router.push({
        path: '/indecision',
        state: { quaestio: textusItinerans }
      })

    }
 }
}

const favoritosStore = useFavoritosStore()
const { totalFavoritos } = storeToRefs(favoritosStore)


</script>

<template>
  <div class="bg-domus-navy h-screen text-white font-sans text-center flex flex-col items-center justify-center gap-12 fixed w-screen overflow-hidden">
    
    <img class="absolute opacity-20" src="/imagines/tonitrui.png"/> 

    <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold pb-5 md:pb-20 z-10 transition-all">
      <span class="text-domus-cyan">Diseño</span> Web y 
      <br>
      Apps <span class="text-domus-cyan">Interactivas</span>
    </h1>

    <p class="text-lg md:text-2xl transition-all">
      Aprendiendo a crear aplicaciones web 
    </p>

<div class="scale-z-10">

  <Dialog
    :open="dialogApertaEst"
    @update:open="dialogApertaEst = $event"
  >
        <DialogTrigger as-child>
          <Button variant="domus" class="mr-2">
            Sí o No
          </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-106.25 bg-domus-navy text-white border-domus-cyan">
          <DialogHeader>
            <DialogTitle class="text-white">Pregúntame</DialogTitle>
            <DialogDescription class="text-gray-300">
              No sigas con tus dudas, yo te responderé SÍ o NO.
            </DialogDescription>
          </DialogHeader>
            <div class="mt-4">
              <Input 
              class="bg-domus-navy-input text-white placeholder:text-gray-400" placeholder="Escribe aquí tu pregunta..." 
              v-model="quaestio"
              @keydown="cumKeyPressumEnter"
              />
            </div>
        </DialogContent>
        </Dialog>
        <Button variant="domus" class="mr-2">
          <RouterLink to="/batman">Batman</RouterLink>
        </Button>
        <Button variant="domus" class="mr-2">
          <RouterLink to="/simpsons">Simpsons</RouterLink>
        </Button>
        <Button variant="domus" class="mr-2">
          <a href="https://www.upv.es">UPV</a>
        </Button>

        <Button variant="default" class="mr-2 bg-simpsons-red md:py-5 md:px-6 md:text-lg hover:bg-simpsons-red/80 transition-all">
          <RouterLink to="" class="flex items-center gap-2">
          <Heart class="w-5 h-5 fill-current" />
          Favoritos
          <span class="absolute -top-3 -right-2 w-6.5 h-6.5 bg-simpsons-yellow text-black text-base font-bold rounded-full flex items-center justify-center">
            {{ totalFavoritos }}
          </span>
          </RouterLink>
        </Button>

    </div>
  </div>
</template>
