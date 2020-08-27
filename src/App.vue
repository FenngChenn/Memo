<template>
  <div>
    <main-header></main-header>
    <main-todo></main-todo>
  </div>
</template>

<script>
  // 在vue文件中只能在script标签中引入.styl文件，如果还需要写stylus代码，在下方style标签中添加，并且
  // 在标签中要加入lang="stylus"的说明
  import 'assets/css/global.styl'
  import MainHeader from './components/MainHeader.vue'
  import MainTodo from './components/MainTodo/MainTodo.vue'

  export default {
    name: 'App',
    components: {
      MainHeader,
      MainTodo,
    },
  }
</script>

<style lang="stylus" scoped></style>