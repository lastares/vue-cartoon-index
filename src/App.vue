<template>
  <div id="wrap">
    <TheHeader/>
    <div id="main-container" class="container main-container" style="margin-bottom: 100px;">
      <router-view/>
    </div>
    <TheFooter/>
    <el-tooltip placement="top" content="回到顶部">
      <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="0" transition-name="fade"/>
    </el-tooltip>
  </div>
  <!--<router-view/>-->
</template>

<script>
  import logoSrc from '@/assets/images/logo.png'
  import TheHeader from '@/components/layouts/TheHeader'
  import TheFooter from '@/components/layouts/TheFooter'
  import BackToTop from '@/components/layouts/BackToTop'


  export default {
    name: 'App',
    components: {
      TheHeader,
      TheFooter,
      BackToTop
    },
    data() {
      return {
        logoSrc: logoSrc,
        myBackToTopStyle: {
          right: '50px',
          bottom: '50px',
          width: '40px',
          height: '40px',
          borderRadius: '4px',
          lineHeight: '45px', // 请保持与高度一致以垂直居中
          background: '#e7eaf1'// 按钮的背景颜色
        }
      }
    },
    created() {
      if (this.$route.path === '/auth/login' || this.$route.path === '/auth/register') {
        this.is_visiable = false;
      }
      // console.log(this.$route.path)
    }
  }
</script>

<style lang="scss">
  $container-large-desktop: 1200px;
  $btn-primary-bg: #00b5ad;
  $btn-primary-border: #00b5ad;
  $label-primary-bg: #00b5ad;
  $pagination-active-bg: #00b5ad;
  $pagination-active-border: #00b5ad;
  $pagination-color: #00b5ad;
  $input-border-focus: #00b5ad;
  $link-color: #12c4c5;
  $link-hover-color: #22ddde;
  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
  $fa-font-path: "~font-awesome/fonts/";

  @import "~bootstrap-sass/assets/stylesheets/_bootstrap";
  @import "~font-awesome/scss/font-awesome";
  @import "./styles/main";
  @import "./styles/extra";
</style>
