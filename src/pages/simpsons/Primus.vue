<script setup lang="ts">
import LogoSimpsons from '@/components/LogoSimpsons.vue';
import { Button } from '@/components/ui/button';
import { useFavoritosStore } from '@/stores/useFavoritos';
import { Heart } from '@lucide/vue';
import { storeToRefs } from 'pinia';

const favoritosStore = useFavoritosStore()

const { totalFavoritos } = storeToRefs(favoritosStore)

</script>

<template>
 <div class="bg-simpsons-yellow min-h-screen text-center p-4 flex flex-col items-center justify-center">

    <LogoSimpsons estilus="w-[24rem] sm:w-[35rem]" />

	<h1 class="text-xl my-1 font-medium">
    	Discover some of the most amazing Quotes from The Simpsons
	</h1>
	<div>
    	<strong>This is an unofficial app (even though it looks so cool!)</strong>
	</div>
	<div className="mt-8 flex gap-5 justify-center items-center">
		<Button variant="tertiarius" size="elongatis">
      		<RouterLink to="/">Exit</RouterLink>
    	</Button>
    	<Button variant="tertiarius" size="elongatis">
      		<RouterLink to="/simpsons/about">Enter</RouterLink>
    	</Button>
		<div class="flex items-center gap-2 text-black">
			<Heart class="w-7 h-7 fill-simpsons-red text-simpsons-red" />
			<span>
				{{ totalFavoritos }}
			</span>
		</div>
	</div>

    <div class="flex gap-12">
        <img class="object-contain hidden md:block" src="/imagines/simpsons/bart.png" width="200"/>
        <img class="object-contain mt-20 hidden md:block" src="/imagines/simpsons/homer.png" width="195"/>
        <img class="object-contain mt-12 md:mt-0" src="/imagines/simpsons/moe.png" width="220"/>
    </div>

 </div>
</template>