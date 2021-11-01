<template>
  <div class="cart">
    <div class="title-cart">
      <NuxtLink to="/" class="button">Go To Home</NuxtLink><br>
    </div>

    <div class="products">
      <div v-for="product in getProductsFromBasket()" :key="product.id" > 
        
          <img :src="product.image" class="image"/>
          {{ product.name }}
          <p class="text-3xl">{{ product.price }}</p>
          <span>Quantity: {{ product.count }} 
          <button @click="increase(product.id)" class="button m-2">+</button>
          <button @click="decrease(product.id)" class="button m-2">-</button></span><br>
          <button class="button" v-on:click="removeItem(product.id)">Remove</button>
        
      </div>
    </div>
    <button @click="removeAll()" class="ml-20">REMOVE ALL</button>
  </div>
</template>

<script>
export default {
  name: 'cart',

  methods: {
    removeItem(id) {
      this.$store.dispatch("removeItem", id);
    },
    increase(id) {
      this.$store.dispatch("addItem", id);
    },
    decrease(id) {
      this.$store.dispatch("decreaseItem", id);
    },
    removeAll(){
      this.$store.dispatch("removeAll");
    },

    getProductsFromBasket() {
        let basket = this.$store.getters.basket;
        return basket.map((p) => {
            let basketProduct = this.$store.getters.basketFinder(p.id)
            return {
                ...basketProduct, 
                count: p.count
            }
        })
    }
  }
}
</script>

<style>
.cart{
  @apply font-sans items-center text-green-500;
}

.title-cart{
  @apply m-5 text-3xl text-center;
}

.main{
  @apply min-h-screen grid grid-cols-3 gap-3 items-center text-center;
}

.products{
  @apply items-center text-black grid grid-cols-2 gap-2 h-1/2 m-20;
}

.button{
  @apply border border-black;
}

.image{
  @apply h-2/3 w-1/3 border;
}
</style>