<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">
                <router-link :to="'/product/' + product.id">{{product.title}}</router-link>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
  async mounted(){
    await this.load();
  },
  methods:{
    async load(){
      //Send a request to the backend and retrieve all the products (their names and ids)

      let products = [
          {
              id : 1,
              title : 'TV',
          },
          {
              id : 2,
              title : 'Microwave',
          },
      ];

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