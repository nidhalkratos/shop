<template>
    <div>
        <h1>Color</h1>
        <div class="mt-4 flex space-x-4">
            <button @click="setColor(color)" v-for="color in colors" :key="color" :style="{backgroundColor : color}" :class="{'ring' : color == selectedColor}" class="w-10 h-10 rounded-full ring-black ring-offset-2"></button>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        colors : Array
    },
    data(){
        return {
            selectedColor : null,
        }
    },
    methods:{
        setColor(color){
            this.selectedColor = color;
            this.$emit('update:modelValue', color)
        }
    }
}
</script>