<template>
  <b-container>
    <b-row>
      <div class="category_card" v-for="n in 30">
      <h3 class="category_card_title">Name {{n}}</h3>
      </div>
    </b-row>
  </b-container>
</template>

<style lang="scss">
  .category_card {
    height: 12rem;
    width: 10rem;
    background-color: aquamarine;
    margin: 1rem;
    position: relative;
    &_title {
      position: absolute;
      top: 1rem;
      left: 1rem;
      color: #3175ad;
      font-size: large;
    }
  }
</style>
