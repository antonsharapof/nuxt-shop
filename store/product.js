export const state = () => ({
  products: [
    {
      brand: 'Lada',
      name: 'Granta',
      price: 500000,
      color: 'Green',
    },
    {
      brand: 'Lada',
      name: '2101',
      price: 2,
      color: 'Yellow',
    },
    {
      brand: 'Lada',
      name: '2103',
      price: 10,
      color: 'Yellow',
    },
    {
      brand: 'Lada',
      name: 'Vesta',
      price: 1000000,
      color: 'Yellow',
    },
    {
      brand: 'Lada',
      name: 'Kalina',
      price: 400000,
      color: 'Black',
    },
    {
      brand: 'Lada',
      name: 'Niva',
      price: 1500000,
      color: 'White',
    },
    {
      brand: 'Lada',
      name: 'Vesta',
      price: 500000,
      color: 'White',
    },
    {
      brand: 'Lada',
      name: 'Granta',
      price: 500000,
      color: 'White',
    },
    {
      brand: 'Lada',
      name: 'Priora',
      price: '500000',
      color: 'Black',
    },
  ],
  product: {
    name: 'name',
    price: 3000,
    gallery: [{image: ''}],
  },
})

export const mutations = {
  set_product: (state, product) => {
    state.product = product;
  },
}

export const actions = {
  async getOneProduct(context, id) {
    const product = await this.$axios.get(`http://localhost:8000/api/product/${id}`);
    context.commit('set_product', product.data);
  },
}

