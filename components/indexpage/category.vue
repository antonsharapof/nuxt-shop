<template>
  <b-container class="index_page_category">
    <h2>Категории</h2>
    <b-row>
      <b-col v-for="category in categoriesComputed" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <nuxt-link :to="`category/${category.id}`" style="text-decoration: none; color: inherit;">
          <div class="index_page_category_item d-flex flex-column align-items-center">
            <div class="index_page_category_item_box d-flex flex-column justify-content-center">
              <b-img :src="mediaUrl+category.image" class="mw-100 mh-100"></b-img>
            </div>
            <h4>{{ category.name }}</h4>
          </div>
        </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        categories: this.$store.state.category.categories,
      }
    },
    computed: {
      categoriesComputed() {
        return this.$store.state.category.categories;
      },
      mediaUrl() {
        return process.env.mediaUrl
      }
    },
    beforeMount() {
      this.getCategories();
    },
    methods: {
      getCategories() {
        this.$store.dispatch('category/getCategories');
      },
    }
  }
</script>

<style lang="scss">
  .index_page_category {
    font-family: Arial Black;
    color: #908d8d;
    .col{
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    &_item {
            height: 10rem;
            border: 1px solid lightgray;
            &:hover {
                      box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                    }
            &_box{
              height: 8rem;
            }
          }
  }

</style>
