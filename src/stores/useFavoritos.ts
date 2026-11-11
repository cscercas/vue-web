import { characters, type Character } from "@/pages/simpsons/data";
import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref<Character[]>([
        characters.find(character => character.id === 0)!,
        characters.find(character => character.id === 4)!,
        characters.find(character => character.id === 6)!,
        characters.find(character => character.id === 1)!,
        characters.find(character => character.id === 2)!,

    ])

    return {
        favoritos,
        totalFavoritos : computed(() => favoritos.value.length),
    }
})