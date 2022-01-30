<template>
    <div>
        Todo: Show the product detail page here with the help of the product variable {{product.id}}

    </div>
</template>

<script>
export default {
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
      product : {}
    }
  }
}
</script>