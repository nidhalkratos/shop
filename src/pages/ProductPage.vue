<template>
    <div class="p-10">
        <div class="flex ">
          <div class="flex-1">
            <img class="w-full" :src="product.image?.url" />
          </div>
          
          <!-- Description  -->
          <div class="flex-1">
            <div class="flex justify-between font-semibold mt-12">
              <h1>{{product.title}}</h1>
              <h1><span v-if="product.price?.currency == 'USD'">$</span>{{product.price?.amount}}<span v-if="product.price?.currency == 'EUR'">€</span></h1>

            </div>
            <h1>5 stars</h1>

            <ColorPicker v-model="color" :colors="product.colors" />
            <SizeSelector v-model="size" />
            
            <div>
              <button class="bg-blue-500 p-2 rounded text-white">Add to cart</button>
            </div>

            <div>
              {{product.description}}
            </div>
          </div>
        </div>
        

    </div>
</template>

<script>
import axios from 'axios'
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
      //Send a request to the backend with the product id and retrieve all the product information

      let product = await axios.get('http://localhost:3000/product/' + id).then(resp => resp.data)

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