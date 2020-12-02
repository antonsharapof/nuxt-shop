export const state = () => ({
  categories: [],
  categoryProducts: [],
})

export const mutations = {
  set_categories: (state, categories) => {
    state.categories = categories
  },
  set_category: (state, category) => {
    state.categoryProducts = category;
  },
}

export const actions = {
  async getCategories(context) {
    const categories = await this.$axios.get(`http://localhost:8000/api/category/`);
    context.commit('set_categories', categories.data);
  },
  async getOneCategory(context, id) {
    const category = await this.$axios.get(`http://localhost:8000/api/category/${id}`);
    context.commit('set_category', category.data);
  }
}

export const getters = {
}
