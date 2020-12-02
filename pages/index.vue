<template>
  <b-container fluid>
    <IndexBanner class="mt-2"/>
    <IndexCategory class="mt-5"/>
  </b-container>
</template>

<script>
  import IndexBanner from "@/components/indexpage/banner.vue";
  import IndexCategory from "@/components/indexpage/category.vue";

 export default {
    components: {
      IndexBanner,
      IndexCategory,
    }
  }

</script>

