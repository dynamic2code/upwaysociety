import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],
  }),

  getters: {
    // Getter to retrieve all products in the cart
    // Calculate total price of selected products
    totalPriceOfSelectedProducts(state) {
      return state.products.reduce((total, product) => {
        if (product.isSelected) {
          return total + product.price * product.quantity;
        }
        return total;
      }, 0);
    },

    // Create a list of product IDs for selected products
    selectedProductIds(state) {
      const selectedProducts = state.products.filter(product => product.isSelected);
      return selectedProducts.map(product => product.id);
    }
  },

  actions: {
    // Action to add a product to the cart
    addToCart(product) {
      // Check if the product with the same ID already exists in the cart
      const existingProduct = this.products.find(p => p.id === product.id);
      if (existingProduct) {
        // If the product already exists, you can either prevent adding the duplicate product altogether
        // or update the quantity of the existing product instead
        // For example, you can update the quantity of the existing product like this:
        existingProduct.quantity++;
      } else {
        // If the product does not exist, add it to the cart
        this.products.push({
          id: product.id,
          name: product.attributes.name,
          details: product.attributes.description,
          price: product.attributes.prize,
          quantity: 1,
          previewImage: product.attributes.preview_image.data.attributes.formats.small.url,
          isSelected: false,
        });
      }
    },

    // Action to add quantity to a product
    addQuantity(productId) {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        product.quantity++;
      }
    },

    // Action to remove quantity from a product
    removeQuantity(productId) {
      const product = this.products.find(p => p.id === productId);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
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
