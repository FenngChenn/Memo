<template>
  <div class="todo-info">
    <span class="total">{{totalTodo}} item left.</span>
    <div class="tabs">
      <a
        v-for="(item, index) in states"
        :key="index"
        @click="changeState(item)"
        :class="(item === currentState) ? 'actived' : ''"
      >{{item}}</a>
    </div>
    <button class="clear" @click="clearCompleted">Clear completed</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoInfo',
    data() {
      return {
        states: ['all', 'active', 'completed'],
        currentState: '',
      }
    },
    props: {
      totalTodo: {
        type: Number,
      },
    },
    methods: {
      changeState(item) {
        this.currentState = item
        this.$emit('toggleState', item)
      },
      clearCompleted() {
        this.$emit('clearCompleted')
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~assets/css/theme.styl'
  @import '~assets/css/mixins.styl'

  .todo-info
    display: flex
    justify-content: space-between
    font-weight: 400
    padding: 5px 10px
    line-height: 30px
    border-top: 1px solid rgba(0, 0, 0, 0.1)

    .total
      color: $red

    .tabs
      display: flex
      justify-content: space-between
      width: 200px

      a
        // border: 1px solid $lightred
        // border-radius: 5px
        // padding: 0 5px
        primaryBorderBtn()

        &.actived
          primaryBtn()

    .clear
      infoBtn()
</style>