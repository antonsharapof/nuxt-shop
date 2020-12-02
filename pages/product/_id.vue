<template>
  <b-container class="product">
    
    <b-row class="product__main pt-sm-4">
      <!-- Preview -->
      <b-col class="product__main_preview col-12 col-sm-12 col-md-12 col-lg-2 d-none d-md-block">
          <div class="product__main_preview_item"
               v-for="(image, index) in product.gallery"
               :key="image.id"
               @click="choiseImg(index)">
            <b-img center :src="mediaUrl+image.image" class="mh-100 mw-100 pt-1"></b-img>
          </div>
      </b-col>
      <!-- Big image -->
      <b-col class="product__main_image col-12 col-sm-12 col-md-12 col-lg-5 order-1">
        <div class="product__main_image_item d-flex justify-content-center align-items-center">
          <b-img center :src="mediaUrl+product.gallery[imgNumber].image" class="mh-100 mw-100"></b-img>
          <b-icon icon="arrow-right-circle" class="product__main_image_item_arrow_right" @click="nextImg"></b-icon>
          <b-icon icon="arrow-left-circle" class="product__main_image_item_arrow_left" @click="prevImg"></b-icon>
        </div>
      </b-col>
      <!-- Product card -->
      <b-col class="product__main_cart col-12 col-sm-12 col-md-12 col-lg-5 order-3 pb-5">
        <b-container class="px-1">
          <h1 class="pt-2">{{product.name}}</h1>
          <p class="pt-2">
            {{product.description}}
          </p>
          <h2>Стоимость: {{product.price}}</h2>
          <!--<div class="product__main_cart_size pt-2">
            <h5 class="d-inline-block">Размер:</h5>
            <span>20x30</span>
            <span>30x45</span>
            <span>45x45</span>
          </div>-->
          <div class="product__main_cart_quantity d-inline-block pt-4">
            <h5 class="d-inline-block">Количество:</h5>
            <span @click="quantityMinus">-</span>
            <span>{{quantity}}</span>
            <span @click="quantityPlus">+</span>
          </div>
          <b-button squared variant="info" class="d-inline-block ml-3" @click="popup=!popup"><h6>Заказать</h6></b-button>
        </b-container>
      </b-col>
    </b-row>
    <popupBuy v-show="popup" @close_popup="popup=false" class="product_popup"/>
  </b-container>
</template>

<style lang="scss">
  .fi {
    height: 100%;
  }
  .product{
    &_popup{
            position: absolute;
            top: 50%;
            left: 50%;
            }
    &__main{
            &_preview{
              /*background-color: red;*/
              &_item{
                height: 10rem;
              }
            }
            &_image{
              /*background-color: blue;*/
              &_item{
                height: 30rem;
                &_arrow_right{
                  color: black;
                  font-size: 2rem;
                  position: absolute;
                  right: 1rem;
                }
                &_arrow_left{
                  color: black;
                  font-size: 2rem;
                  position: absolute;
                  left: 1rem;
                }
              }
            }
            &_cart{
              /*background-color: yellow;*/
              p {
                  font-family: Comic Sans MS, Comic Sans, cursive;
                }
              &_size{
                font-family: Comic Sans MS, Comic Sans, cursive;
                color: black;
                span{
                  border: solid black 1px;
                  padding: 0.2rem;
                }
              }
              &_quantity{
                font-size: 1.2rem;
                span:nth-child(3){
                  border: solid black 1px;
                  font-size: 1rem;
                  padding: 0.2rem;
                }
              }
            }
    }
  }

</style>

<script>
  import popupBuy from '@/components/product_card/popupBuy.vue';

  export default {
    validate({ params }) {
      // Must be a number
      return /^\d+$/.test(params.id)
    },
    components: {
      popupBuy,
    },
    data() {
      return {
        quantity: 1,
        imgNumber: 0,
        popup: false,
      }
    },
    computed: {
      id() {
        return this.$route.params.id
      },
      product() {
        return this.$store.state.product.product; 
      },
      mediaUrl() {
        return process.env.mediaUrl
      },
    },
    created() {
      this.getOneProduct();
    },
    methods: { 
      quantityPlus() {
        this.quantity += 1;
      },
      quantityMinus() {
        if (this.quantity > 1) {
          this.quantity -= 1;
        }
      },
      nextImg() {
        if (this.imgNumber < this.product.gallery.length - 1) {
          this.imgNumber += 1;
        }
        else {
          this.imgNumber = 0;
        } 
      },
      prevImg() {
        if (this.imgNumber > 0) {
          this.imgNumber -= 1;
        }
        else {
          this.imgNumber = this.product.gallery.length - 1;
        }
      },
      choiseImg(index) {
        this.imgNumber = index;
      },
      getOneProduct() {
        this.$store.dispatch('product/getOneProduct', this.id);
      },
    }
  }
</script>
