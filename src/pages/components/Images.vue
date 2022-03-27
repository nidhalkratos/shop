<template>
  <div class="flex ">
    <div class="w-full rounded overflow-hidden" >
        <img v-if="images" :src="images[selectedImageIndex].url"  class="w-full h-full object-cover">
    </div>
    <div class="flex-shrink-0 space-y-2">
        <div @click="selectedImageIndex = index" v-for="(image,index) in images" :key="index" :class="[ index == selectedImageIndex ? 'ring-green-500 ring-2' : '' ,'w-24 h-24 overflow-hidden  rounded']">
              <img :src="image.url" class="w-full h-full object-cover">
        </div>
    </div>
  </div>

</template>

<script>

export default {
    props:{
        images : Array
    },
    data(){
        return {
            selectedImageIndex : 0
        }
    }
}

</script>
