import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],
  }),

//   getters: {
//     // Getter to retrieve all products in the cart
//     getProducts(state){
//         return this.products
//     },
//     productCount(state) {
//         return this.products.length;
//       },
//   },

  actions: {
    // Action to add a product to the cart
    addToCart(product) {
      this.products.push({
        id: product.id,
        name: product.attributes.name,
        details: product.attributes.description,
        price: product.attributes.price,
        quantity: 1,
        previewImage: product.attributes.preview_image.data.attributes.formats.small.url,
        isSelected: false,
      });
    },

    // Action to remove a product from the cart
    removeFromCart(productId) {
      this.products = this.products.filter((product) => product.id !== productId);
    },

    // Action to update the selection status of a product
    toggleSelection(productId) {
      const productIndex = this.products.findIndex((product) => product.id === productId);
      if (productIndex !== -1) {
        this.products[productIndex].isSelected = !this.products[productIndex].isSelected;
      }
    },
  },
});