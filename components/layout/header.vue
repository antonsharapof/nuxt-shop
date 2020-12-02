<template>
  <header class="sticky-top">
    <b-container fluid class="layout__header  d-none d-sm-none d-md-block">
      <b-row align-v="center" class="layout__header-row">
        <b-col class="pl-5">
          <nuxt-link to="/">
            <b-img fluid class="header__logo" src="@/assets/img/logo/MyBag.svg" alt="Image 1"></b-img>
          </nuxt-link>
        </b-col>
        <b-col class="d-flex flex-row justify-content-center header__link">
          <b href="#foo" class="px-2 text-dark">Customize</b>
          <b href="#foo" class="px-2">Category</b>
          <b href="#foo" class="px-2">Delivery</b>
          <b href="#foo" class="px-2">About us</b>
        </b-col>
        <b-col class="d-flex flex-row justify-content-end pr-5">
          <b-link href="#foo" disabled class="pr-2"><div class="header__cart_button"><b-icon icon="cart4"></b-icon></div></b-link>
          <b-link href="#foo" disabled><div class="header__cart_button"><b-icon icon="door-open"></b-icon></div></b-link>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="layout__header  d-block d-sm-block d-md-none">
      <b-row align-v="center" class="layout__header-row">
        <b-col>
          <nuxt-link to="/">
            <b-img fluid class="header__logo" src="@/assets/img/logo/MyBag.svg" alt="Image 1"></b-img>
          </nuxt-link>
        </b-col>
        <b-col class="d-flex flex-row justify-content-center">
          <div v-b-toggle.sidebar-variant class="header__menu_button"><b-icon icon="menu-button-wide"></b-icon></div>
        </b-col>
        <b-col class="d-flex flex-row-reverse">
          <div class="header__cart_button"><b-icon icon="cart4"></b-icon></div>
        </b-col>
      </b-row>
    </b-container>

    <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
      <div class="px-3 py-2">
        <b-link href="#foo" disabled class="sidebar__link px-2 py-3 d-block" >Customize</b-link>
        <b-link href="#foo" disabled class="sidebar__link px-2 py-3 d-block">Category</b-link>
        <b-link href="#foo" disabled class="sidebar__link px-2 py-3 d-block">Delivery</b-link>
        <b-link href="#foo" disabled class="sidebar__link px-2 py-3 d-block">About us</b-link>
      </div>
    </b-sidebar>
  </header>
</template>

<style lang="scss">
  .container-fluid{
    padding-left: 0;
    padding-right: 0;
  }
  .container {
    padding-left: 0;
    padding-right: 0;
  }
  .layout__header {
    height: 4rem;
    background-color: rgb(244, 248, 250);
    opacity: 0.85;
    &-row{
           height: 100%;
         }
  }
  .header__logo{
    height: 2rem;
  }
  .sidebar__link {

  }
  .header__cart_button {
    color: #322c2c;
    font-size: 1.5rem;
  }
  .header__menu_button {
    color: #322c2c;
    font-size: 1.5rem;
  }
  .header__link {
    font-family: Franklin Gothic Medium;
    font-size: 1rem;
    color: dimgrey !important;
  }
</style>
