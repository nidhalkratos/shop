<template>
    <div class=" flex items-center justify-between mt-2" >
          
            <div class="flex items-center" > 
              <img src="/image/ipm.png" class="lazyloaded" style="width: 72px; height: 42px;"/>
              <h1 class="font-bold text-xl cursor-pointer text-white">My Store</h1>
            </div>

            <div class="flex justify-center">
              <div class="flex" >
                <u class="font-bold hover:bg-indigo-600 cursor-pointer px-2  text-white" >Home</u>
                <u class=" font-bold hover:bg-indigo-600 cursor-pointer px-2 ml-4 text-white" >Subscription</u>
                <u class=" font-bold hover:bg-indigo-600 cursor-pointer px-2 ml-4 text-white" >Shop</u>
                <u class=" font-bold hover:bg-indigo-600 cursor-pointer px-2 ml-4 text-white" >Contact</u>
              </div>

              <div class="flex items-center ml-8">
                <input type="text" id="site-search"  class="bg-gray-200 rounded-full border-solid border-2 border-white" placeholder="what are you looking for...">
              
                <div class=" cursor-pointer p-2 items-center h-6 w-18 flex text-white ml-2 rounded-full" style="background-color:#fb7253">
                
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" stroke-cyan-500 hover:stroke-cyan-700 bi bi-search-heart-fill" viewBox="0 0 16 16">
                  <path d="M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
                  </svg>
                  <button class="ml-2" >Search</button>
               </div>
              </div>
            </div>
           <div class="flex justify-center px-2 ">

            <div class=" items-center bg-indigo-600 rounded flex px-2 hover:bg-indigo-700" >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path fill="#FFFDFA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <button class="px-2 font-bold cursor-pointer text-white" >Login</button>
            </div>

            <button class="ml-2 bg-indigo-600 text-white px-2 font-bold cursor-pointer rounded hover:bg-indigo-700 " >Register</button>
          </div>
          
         </div>
         <hr class="mt-2">
</template>

<script>

export default {

}
</script>
