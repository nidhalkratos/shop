<template>
    <div class="p-10">
        <div class="flex ">
          <div class="flex-1">
            <img class="w-full" src="https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$" />
          </div>
          
          <!-- Description  -->
          <div class="flex-1">
            <div class="flex justify-between font-semibold mt-12">
              <h1>Basic Tee</h1>
              <h1>$35</h1>
            </div>
            <h1>5 stars</h1>

            <ColorPicker v-model="color" :colors="['#ff0000', '#00ff00', '#0000ff']" />
            <SizeSelector v-model="size" />
            
            <div>
              <button class="bg-blue-500 p-2 rounded text-white">Add to cart</button>
            </div>

            <div>
              Deserunt ut elit fugiat enim veniam nisi occaecat in velit. Enim excepteur deserunt ipsum ex tempor do esse sint ea minim pariatur exercitation anim commodo. Aliqua consectetur Lorem et sint officia. Occaecat aliquip anim esse incididunt id cupidatat irure. Nisi tempor labore non et cupidatat enim nulla esse nulla elit. Culpa id amet laborum ad qui est cillum eu culpa sit eiusmod.
            </div>
          </div>
        </div>
        

    </div>
</template>

<script>
import ColorPicker from './components/ColorPicker.vue'
import SizeSelector from './components/SizeSelector.vue'
export default {
  components:{
    ColorPicker,
    SizeSelector
  },
  async mounted(){
    let productId = this.$route.params.id
    await this.load(productId);
  },
  methods:{
    async load(id){
      console.log(id);
      //Send a request to the backend with the product id and retrieve all the product information

      let product = {
        id  : id, 
        title : 'TV'
      };

      this.product = product
    },  
  },
  
  data(){
    return {
      product : {},
      color : null,
      size : null
    }
  }
}
</script>