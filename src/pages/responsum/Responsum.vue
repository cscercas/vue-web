<template>

<RouterLink to="/" class="text-2xl ml-4">Home</RouterLink>

<div class="w-[800px] h-[800px] border-2 m-4 grid grid-cols-4 gap-4 grid-rows-3">
    
    <div class="bg-sky-500 col-span-3 p-4 flex flex-row-reverse items-end gap-4">
        <div class="bg-sky-200 w-18 h-full"></div>
        <div class="bg-white w-18 h-[60%] order-first"></div>
        <div class="bg-sky-200 w-18 h-[30%]"></div>
        <div class="bg-sky-800 w-18 h-full flex-1"></div>
    </div>

    <div class="bg-pink-500 row-span-3 p-4 flex flex-col justify-between items-center">
        <div class="bg-pink-200 w-[80%] h-16"></div>
        <div class="bg-pink-200 w-full h-[60%] p-3 grid grid-cols-2 grid-rows-3 gap-3">
            <div class="bg-pink-500 row-span-2"></div>
            <div class="bg-white"></div>
            <div class="bg-white"></div>
            <div class="bg-pink-500 col-span-2"></div>
        </div>
        <div class="bg-pink-200 w-[40%] h-16 self-end"></div>
    </div>

    <div class="bg-lime-500 row-span-2 flex flex-col-reverse flex-wrap gap-4 p-4">
        <div class="bg-lime-200 w-12 h-[20%]"></div>
        <div class="bg-lime-200 w-12 h-[20%]"></div>
        <div class="bg-white w-12 h-[20%] order-first"></div>
        <div class="bg-lime-200 w-12 h-[20%]"></div>
        <div class="bg-white w-12 h-[20%] order-first"></div>
        <div class="bg-lime-200 w-12 h-[20%]"></div>
    </div>

    <div class="bg-amber-400 col-span-2 p-4 grid grid-cols-3 grid-rows-2 gap-3">
       <div class="bg-amber-100 col-span-2"></div> 
       <div class="bg-white row-span-2"></div>
       <div class="bg-amber-100"></div>
       <div class="bg-amber-100"></div>
    </div>

    <div class="bg-violet-500 flex justify-center items-center">
        <div class="bg-violet-200 w-22 h-22 rounded-full"></div>
    </div>

    <div class="bg-teal-500 flex p-3 gap-3 flex-wrap content-center">
        <div class="bg-teal-200 w-10 h-10"></div>
        <div class="bg-teal-200 w-10 h-10"></div>
        <div class="bg-teal-200 w-10 h-10"></div>
        <div class="bg-teal-200 w-10 h-10"></div>
    </div>
    

</div>

</template>