<template>
  <b-containers 
               class="main_banner">
               <!--:style="{'background-image': 'url(' + require('@/assets/img/index_banner/bg.png') + ')' }"-->
    <b-row align-v="center" class="main_banner_row">
      <b-col sm="12" md="6" class="main_banner_text">
        <h1>Интернет-магазин сумок и аксессуаров</h1>
        <h5>Добро пожаловать в наш интернет-магазин! На сайте вы можете заказать и купить сумки и аксессуары некоторых брендов, которые вы с трудом встретите в других интернет магазинах или торговых центрах, что немало важно для многих покупателей.</h5>
      </b-col>
      <b-col sm="12" md="6" class="main_banner_img d-flex justify-content-end align-items-center">
        <b-img src="@/assets/img/index_banner/bag.png"  class="main_banner_img_item d-none d-md-block"/>
      </b-col>
    </b-row>
  </b-containers>
</template>

<style lang="scss">
  .main_banner {

    &_text{
        h1{
              font-family: Arial Black;
        }
        h5{
            font-family: Lucida Sans Unicode;
        }
    }
    &_img{
      &_item {
        height: 25rem;
      }
    }
  }
  

</style>
