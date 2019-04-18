<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="toggleNav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <router-link to="/" class="navbar-brand">
          <!--<span class="title">{{ logo.title }}</span>-->
          <img :src="logo.src" :alt="logo.title">
        </router-link>
      </div>

      <div id="top-navbar-collapse" :class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]">
        <ul class="nav navbar-nav">
          <li class="nav-test" ref="nav" v-for="(item, index) in navList" :class="{ active: index === activeNavIndex }">
            <router-link v-if="index === 0" :to="'/'" @click.native="changeNavIndex(index)">{{ item.title }}</router-link>
            <router-link v-else-if="index === 5" :to="'/category/special'" @click.native="changeNavIndex(index)">{{ item.title }}</router-link>
            <router-link v-else :to="'/category/' + item.id" @click.native="changeNavIndex(index)">{{ item.title }}</router-link>
          </li>
        </ul>

        <!-- 入口组件 -->
        <div class="navbar-right">
          <SearchInput/>
          <TheEntry/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import logoSrc from '@/assets/images/logo.png';
  import TheEntry from '@/components/layouts/TheEntry'
  import SearchInput from '@/components/layouts/SearchInput'



  export default {
    name: 'TheHeader',
    components: {
      TheEntry,
      SearchInput
    },

    data() {
      return {
        logo: {
          src: logoSrc,
          title: '灵尘动漫logo'
        },
        activeNavIndex: 0,
        navList: [
          {id: 0, title: '首页'},
          {id: 1, title: '番剧'},
          {id: 2, title: '游戏'},
          {id: 3, title: '音乐'},
          {id: 4, title: '美图'},
          {id: 5, title: '另类'},
        ],
        showCollapsedNav: false
      }
    },

    beforeCreate() {
      this.uploadsUrl = 'https://vuejscaffcdn.phphub.org/uploads/'
    },
    created() {

      // if()

    },
    methods: {
      changeNavIndex(index) {
        this.activeNavIndex = index
      },
      toggleNav() {
        this.showCollapsedNav = !this.showCollapsedNav
      }

    }
  }
</script>

<style lang="scss">
  .navbar-default .navbar-nav > .active > a { background: rgba(0,0,0,.03);}
</style>
