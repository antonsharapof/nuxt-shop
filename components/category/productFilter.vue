<template>
  <div class="filter_color">
    <h3>{{name}}</h3>
    <h4>COLOR</h4>
    <div>
      <b-button v-for="c in color" @click="filterColor(c)">{{c}}</b-button>
    </div>
    <div class="filter_brand">
      <h4>BRAND</h4>
      <ul>
        <li v-for="b in brand" @click="filterBrands(b)">{{b}}</li>
      </ul>
    </div>
    <div class="filter_price">
      <h4>PRICE</h4>
      <ul>
        <li>{{price.minPrice}}--{{price.maxPrice}}</li>
      </ul>
    </div>
    <p>
      <strong>Size:</strong>
      black: <input type="checkbox" v-model="choise_color" value="black" />
      White: <input type="checkbox" v-model="choise_color" value="White" />
    </p>
    <b-btn @click="dfd">dfd</b-btn>
  </div>
</template>

<style lang="scss">

</style>

<script>
  export default {
    props: ['products'],
    data() {
      return {
        name: 'Filter',
        products: this.$store.state.product.products,
        choise_color: [],
      }
    },
    computed: {
      brand() {
        let a = new Set();
        this.products.filter(product => {
          return a.add(product.name);
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
          return this.choise_color.includes(product.color)
        })
      }
    },
    methods: {
      filterBrands(value) {
        this.$store.commit('product/filter_brands', value);
        console.log(this.$store.state.product.filterProducts);
      },
      filterColor(color) {
        this.$store.commit('product/set_color', color);
        this.$store.commit('product/filter_products');
      },
      dfd() {
        console.log(this.choise_color);
        console.log(this.products);
        console.log(this.filter_products);
      }
    }
  }

</script>
