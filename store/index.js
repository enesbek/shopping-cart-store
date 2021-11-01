// holds your root state
export const state = () => ({
    products: [
      {
        id: 0,
        name: "Samsung Galaxy A8 Spy Phone",
        image: "https://www.mobilitaria.com/wp-content/uploads/2019/10/Samsung-Galaxy-A8-Spy-Phone.jpg",
        price: "$340",
        count: 0,
      },
      {
        id: 1,
        name: "Asus Rog Phone",
        image: "https://i.gadgets360cdn.com/products/large/1543479620_635_asus_rog_phone_db.jpg",
        price: "$500",
        count: 0,
      },
      {
        id: 2,
        name: "Cat Phone",
        image: "https://productimages.hepsiburada.net/s/5/375/9679307833394.jpg",
        price: "$600",
        count: 0,
      },
    ],
  
    basket: []
  })
    
  export const actions = {
    addItem(context, id) {
      context.commit("ADD_Item", id);
    },
    
    removeItem(context, index) {
      context.commit("REMOVE_Item", index);
    },
  
    decreaseItem(context, id){
      context.commit("DECREASE_Item", id);
    },
  
    removeAll(context){
      context.commit("REMOVE_ALL");
    }
  }
    
  // contains your mutations
  export const mutations = {
    ADD_Item(state, id) {
      let product = state.basket.find((p) => p.id == id)
      if(product){
        product.count++;
      }
      else{
        state.basket.push({
          id: id,
          count: 1
          })
      }
    },
        
    REMOVE_Item(state, id) {
      state.basket = state.basket.filter((p) => p.id != id)
    },
  
    DECREASE_Item(state, id){
      let product = state.basket.find((p) => p.id == id)
      if(product){
        if(product.count-1 <= 0){
          state.basket = state.basket.filter((p) => p.id != id)
        }
        else{
          product.count--;
        }
      }
    },
  
    REMOVE_ALL(state){
      state.basket = []
    }
  }
    
  // your root getters
  export const getters = {
    products: (state) => state.products,
    basketFinder: (state) => (id) => {
      return state.products.find(p => p.id === id)
    },
    basket: (state) => state.basket,
  }