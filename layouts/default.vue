<template>
  <b-container fluid class="layout__main d-flex flex-column">
    <LayoutHeader />
    <b-container>
      <Nuxt />
    </b-container>
    <LayoutFooter class="layout__main_footer"/>
  </b-container>
</template>

<style lang="scss">
  html {
    position: relative;
    min-height: 100%;
  }
  .layout__main {
      min-height: 100%;
  }
  .layout__main_footer {
      position: absolute;
      bottom: -5rem;
      left: 0;
  }
  .nuxt_link {
    text-decoration: none;
    color: inherit;
  }

</style>

<script>
  import LayoutFooter from "@/components/layout/footer.vue"
  import LayoutHeader from "@/components/layout/header.vue"

  export default {
    name: 'index',
    components: {
      LayoutHeader,
      LayoutFooter,
    },
    data() {
      return {
        text: "",
        textarea: "",
      }
    },
    methods: {
    },
  }
</script>
