<template>
    <div>
        <ul class="grid grid-cols-4 gap-4">
            <li v-for="product in products" :key="product.id"> 
                <router-link :to="'/product/' + product.id">
                  <ProductItem :product="product" />
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
import ProductItem from './components/ProductItem.vue'
import axios from 'axios';
export default {
  components:{
    ProductItem
  },
  async mounted(){
    await this.load();
  },
  methods:{
    async load(){
      //Send a request to the backend and retrieve all the products (their names and ids)

      let products = await axios.get('http://localhost:3000/products').then((resp) => resp.data)
      

      this.products = products
    },  
  },
  
  data(){
    return {
      products : []
    }
  }
}
</script>