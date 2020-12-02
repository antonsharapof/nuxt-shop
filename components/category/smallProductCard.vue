<template>
  <div class="small_product_card">
    <nuxt-link :to="`/product/${product.id}`" style="text-decoration: none; color: inherit;">
      <div class="small_product_card_img d-flex flex-column justify-content-center">
        <b-img :src="mediaUrl+product.gallery[0].image" class="mw-100 mh-100" center></b-img>
      </div>
      <div class="small_product_card_title">
        <p class="small_product_card_title_name">{{product.brand}} {{product.name}}</p>
        <p class="small_product_card_title_cost">{{product.price}}    {{product.color}}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<style lang="scss">
  .small_product_card {
    width: 12rem;
    height: 25rem;
    &_img{
      height: 15rem;
    }
    &_title {
      &_name {
        font-size: x-large;
        font-weight: 700;
      }
      &_cost {
        margin-top: -1rem;
        font-size: larger;
        font-weight: 500;
      }
    }
  }
</style>

<script>
  export default {
    props: ['product'],
    computed: {
      mediaUrl() {
        return process.env.mediaUrl;
      },
      url() {
        return process.env.url;
      }

    },
  }

</script>
