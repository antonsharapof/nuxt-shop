<template>
  <b-container>
    <b-row>
    <b-col class="d-none d-sm-block col-sm-3">
      <p>
        <strong>Color:</strong>
        <div v-for="c in brand" class="color">
          <input type="checkbox" :id="c" v-model="choise_name" :value="c" class="custom-checkbox">
          <label :for="c">{{c}}</label>
        </div>
      <p>
        <strong>Color:</strong>
        <div v-for="c in color" class="color">
          <input type="checkbox" :id="c" v-model="choise_color" :value="c" class="custom-checkbox">
          <label :for="c">{{c}}</label>
        </div>
      </p>
      <p>
        <strong>Sort By:</strong> <select v-model="sortBy">
          <option value="name">Product Name</option>
          <option value="color">Color</option>
          <option value="price">Price</option>
        </select>
        <b-btn @click="asc = !asc">Order</b-btn>
      </p>
    </b-col>
    <b-col class="col-12 col-sm-9 d-flex justify-content-center flex-wrap">
        <SmallProductCard v-for="product in filter_products" v-bind:product="product" class="mx-2" />
    </b-col>
  </b-row>
  </b-container>
</template>

<script>
  import SmallProductCard from "@/components/category/smallProductCard.vue";
  import ProductFilter from "@/components/category/productFilter.vue";

  export default {
    validate({ params }) {
       //Must be a number
      return /^\d+$/.test(params.id)
    },
    components: {
      SmallProductCard,
      ProductFilter,
    },
    data() {
      return {
        name: 'Filter',
        choise_color: [],
        choise_name: [],
        sortBy: ['name'],
        asc: true,
      }
    },
    computed: {
      id() {
        return this.$route.params.id
      },
      products() {
        return this.$store.state.category.categoryProducts;
      },
      brand() {
        let a = new Set();
        this.products.filter(product => {
          return a.add(product.brand);
        })
        return a;
      },
      color() {
        let c = new Set();
        this.products.filter(product => {
          return c.add(product.color);
        })
        return c;
      },
      price() {
        let priceArray = this.products.map(product => {
          return product.price;
        })
        return {
          minPrice: Math.min(...priceArray),
          maxPrice: Math.max(...priceArray),
        }
      },
      filter_products() {
        return this.products.filter((product) => {
          return (this.choise_color.length === 0 || this.choise_color.includes(product.color)) &&
                 (this.choise_name.length === 0 || this.choise_name.includes(product.brand))
        }).sort((a, b) => {
          if (this.asc) {
            if (this.sortBy === 'price') {
              return a['price'] - b['price']
            } else {
              return a[this.sortBy].toString().localeCompare(b[this.sortBy].toString())
            }
          } else {
            if (this.sortBy === 'price') {
              return b['price'] - a['price']
            } else {
              return b[this.sortBy].toString().localeCompare(a[this.sortBy].toString())
            }
          }  
        })
      },
    },
    beforeMount() {
      this.getOneCategory();
    },
    methods: {
      getOneCategory() {
        this.$store.dispatch('category/getOneCategory', this.id);
      },
      ddd() {
        console.log(this.$store.state.category.categoryProducts);
      }
    }
  }

</script>


<style lang="scss">
  .custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

    /* для элемента label, связанного с .custom-checkbox */
    .custom-checkbox + label {
      display: inline-flex;
      align-items: center;
      user-select: none;
    }

      /* создание в label псевдоэлемента before со следующими стилями */
      .custom-checkbox + label::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 0.25em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
      }

    /* стили при наведении курсора на checkbox */
    .custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
      border-color: #b3d7ff;
    }

    /* стили для активного чекбокса (при нажатии на него) */
    .custom-checkbox:not(:disabled):active + label::before {
      background-color: #b3d7ff;
      border-color: #b3d7ff;
    }

    /* стили для чекбокса, находящегося в фокусе */
    .custom-checkbox:focus + label::before {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
    .custom-checkbox:focus:not(:checked) + label::before {
      border-color: #80bdff;
    }

    /* стили для чекбокса, находящегося в состоянии checked */
    .custom-checkbox:checked + label::before {
      border-color: #0b76ef;
      background-color: #0b76ef;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }

    /* стили для чекбокса, находящегося в состоянии disabled */
    .custom-checkbox:disabled + label::before {
      background-color: #e9ecef;
    }

</style>
