<template>
  <div class="app">
    <div class="title">
      <NuxtLink to="/Cart" class="button">Go To Cart</NuxtLink>
    </div>

    <div class="products">
      <div v-for="product in $store.getters.products" :key="product.id"> 
        <img :src="product.image" class="image"/>
        {{ product.name }}
        <p class="text-3xl">{{ product.price }}</p>
        <button class="button" v-on:click="addItem(product.id)">Add To Cart</button> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
    addItem(id) {
      this.$store.dispatch("addItem", id);
    }
  }
  
}
</script>

<style>
.app{
  @apply font-sans items-center text-green-500;
}

.title{
  @apply m-5 text-3xl text-center;
}

.main{
  @apply min-h-screen grid grid-cols-3 gap-3 items-center text-center;
}

.products{
    @apply items-center text-black grid grid-cols-2 gap-2 h-1/2 m-20;
}

.image{
    @apply h-2/3 w-1/3 border;
}
</style>