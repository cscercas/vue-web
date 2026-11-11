<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { type Character, characters } from './data';
import { CheckIcon, ChevronsUpDownIcon } from '@lucide/vue'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from 'cn'
import { Button } from '@/components/ui/button'


const route = useRoute()
const router = useRouter()

const character = ref<Character | undefined>(
    characters.find(char => char.id === Number(route.params.id))
)

const simpsons = characters.map(char => ({
    value: char.id.toString(),
    label: char.nomen
}))

const open = ref(false)
const value = ref(route.params.id?.toString())

watch(() => route.params.id, (newId) => {
    character.value = characters.find(char => char.id === Number(newId))
    value.value = newId?.toString() || ''
})

const selectCharacter = (characterId: string) => {
    value.value = characterId
    open.value = false
    router.push(`/simpsons/gallery/${ characterId }`)

}

const selectedLabel = computed(() => {
    if (!value.value) return 'Selecciona un personaje...'
    return simpsons.find((simpsons) => simpsons.value === value.value)?.label || 'Selecciona un personaje...'
})

</script>

<template>

    <Popover v-model:open="open">
        <PopoverTrigger as-child>
        <Button
            variant="outline"
            role="combobox"
            :aria-expanded="open"
            class="w-[200px] justify-between"
        >
            {{ selectedLabel }}
            <ChevronsUpDownIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
        </PopoverTrigger>
        <PopoverContent class="w-[200px] p-0">
            <Command>
                <CommandInput placeholder="Search framework..." />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            <CommandItem
                                    v-for="simpson in simpsons"
                                    :key="simpson.value"
                                    :value="simpson.value"
                                    @select="selectCharacter(simpson.value)"
                                >
                                    <CheckIcon
                                        :class="cn(
                                        'mr-2 h-4 w-4',
                                        value === simpson.value ? 'opacity-100' : 'opacity-0',
                                        )"
                                    />
                                    {{ simpson.label }}
                                </CommandItem>
                        </CommandGroup>
                    </CommandList>
            </Command>
        </PopoverContent>
    </Popover>

    <div 
        class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8"
        v-if="character"
    >
        <div>
            <h1 class="titulus-quote"> 
                {{ character.nomen }}
            </h1>

            <div class="info-quote">
                <p class="descriptione">
                    {{ character.descriptione }}
                </p>
                        
                <div class="arca-quote" @click="router.push('/simpsons/gallery')">
                    <p class="quote"> {{character.quote}}</p>
                </div>
            </div>
        </div>

        <figure class="figure-quote">
            <img :src="`/imagines/simpsons/${character.imago}`" alt="" />
        </figure>
    </div>
    
</template>


<style scoped>

.titulus-quote {
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 1.25rem;
}

@media (min-width: 1024px) {
  .titulus-quote {
    font-size: 3rem;
    line-height: 1;
  }
}

.arca-quote {
  background-color: rgb(239 68 68);
  padding: 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 48rem;
}
 
.quote {
  color: white;
  text-align: center;
  font-weight: 200;
  font-size: 1.8rem;
  line-height: 2.2rem;
  margin-bottom: 1.25rem; 
}
 
@media (min-width: 1024px) {
  .quote {
    font-size: 2.2rem;
    line-height: 2.5rem;
  }
}
 
.descriptione {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  max-width: 48rem;
}
 
@media (min-width: 1024px) {
  .descriptione {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}
 
@media (min-width: 1024px) {
  .info-quote {
    max-width: 48rem;
  }
}

.figure-quote {
  display: flex;
  justify-content: center;
  min-width: min-content;
}

.figure-quote > img {
  object-fit: contain;
}

</style>