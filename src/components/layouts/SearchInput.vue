<template>
  <div class="navbar-form navbar-left hidden-sm">
    <div class="form-group">
      <input
        v-model.trim="value"
        type="text"
        class="form-control search-input mac-style"
        placeholder="搜索"
        @keyup.enter="search"
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchInput',
    data() {
      return {
        value: '' // 搜索值
      }
    },
    methods: {
      search() {
        const value = this.value

        if (value !== '') {
          console.log(value)
        }
      }
    }
  }
</script>

<style scoped>
  .search-input { background-image: url(https://vuejscaffcdn.phphub.org/assets/images/icon-search.png)}
</style>
