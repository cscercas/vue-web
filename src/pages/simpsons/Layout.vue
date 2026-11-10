<script setup lang="ts">
import LogoSimpsons from '@/components/LogoSimpsons.vue';
import Button from '@/components/ui/button/Button.vue';




</script>

<template>
    <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <header class="bg-simpsons-yellow w-full border border-black">

            <div class="flex flex-col md:flex-row justify-between items-center p-3 mx-auto max-w-page md:px-20">
                <LogoSimpsons estilus="w-[8rem] h-auto" />
                <div class="flex gap-6 pt-3">
                    <RouterLink 
                    to="/simpsons/gallery"
                    active-class="font-bold"
                    >
                        Characters
                    </RouterLink>
                    <RouterLink 
                    active-class="font-bold"
                    to="/simpsons/about"
                    >
                        About
                    </RouterLink>
                    <Button variant="tertiarius" size="elongatis" class="bg-simpsons-red hover:bg-simpsons-yellow focus:bg-simpsons-yellow">
                        <RouterLink to="/">Exit</RouterLink>
                    </Button>
                </div>
        </div>

    </header>
     <main>
        <RouterView />
    </main>
    <footer class="bg-simpsons-yellow text-center py-6 w-full border border-black">
            <div>
                <strong>All Rights Reserved</strong> - Oh Lord Matt Groening - 1989-2027
            </div>

            <small>
                This app was done by Fernando Cordón
            </small>
    </footer>

    </div>

   
</template>


<style scoped>

</style>