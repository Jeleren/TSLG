<template>
  <div class="main">
    <tslg_head/>
    <tslg_lunbo/>
    <main_image/>
    <tslg_footer/>
    <router-view/>
  </div>
</template>

<script>
  import tslg_head from '../components/body/tslg_header'
  import tslg_lunbo from './tslg_lunbo'
  import tslg_footer from '../components/body/tslg_footer'
  import main_image from '../views/main_image'
    export default {
      components: {
        tslg_lunbo,
        tslg_head,
        tslg_footer,
        main_image,
      },
      name: "tslg_main",
    }
</script>

<style lang="scss" scoped>
  @import "../styles/variables";
 .main{
   background: $bg;
 }
</style>
