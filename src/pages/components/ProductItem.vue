<template>
    <div class="border rounded p-2">
        <div class="w-full overflow-hidden h-56">
            <img class="object-cover w-full h-full" :src="product.image.url" />
        </div>
        <div class="flex justify-between">
            <div>
                <h1>{{product.title}}</h1>
                <!-- <h1>Black</h1> -->
            </div>
            <div>
                <h1><span v-if="product.price.currency == 'USD'">$</span>{{product.price.amount}}<span v-if="product.price.currency == 'EUR'">€</span></h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        product: Object
    }
}
</script>