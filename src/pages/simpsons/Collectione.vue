<script setup lang="ts">

import { Card, CardContent } from '@/components/ui/card'
import { characters } from './data';
import { ref } from 'vue';

const listaSimpsons = ref( characters.slice(0, 6) )

</script>

<template>
    <div class="flex flex-col items-center gap-8 w-full max-w-page my-8 mx-auto">
      <div class="text-center">
        <h1 class="font-bold text-xl lg:text-5xl mb-5">
        The Simpsons Quote App
        </h1>
        <p class="mb-5">Click on the quote of your favorite character</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
      <Card 
        class="cursor-pointer w-[220px] h-[240px] hover:bg-simpsons-red hover:text-white transition-colors"
        v-for="character in listaSimpsons"
        key="i"
      >
        <CardContent class="flex flex-col items-center gap-1 w-full px-0">
          <img 
          :src="`/imagines/simpsons/${ character.imago }`" 
          class="w-48 h-42 object-cover object-top mt-2 bg-simpsons-yellow border border-black rounded-t-md"
          />
          <h2 class="font-medium text-lg">{{ character.nomen }}</h2>
        </CardContent>
      </Card>
      
      </div>
      
    </div>
</template>


<style scoped>

</style>