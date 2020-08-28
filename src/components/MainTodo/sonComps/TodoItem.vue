<template>
  <div class="todo-item" :class="{completed: currentTodo.completed}">
    <!-- <div :class="['todo-item', currentTodo.completed ? 'completed' : '']"> -->
    <input type="checkbox" v-model="currentTodo.completed" />
    <label>{{currentTodo.content}}</label>
    <button @click="deleteTodo"></button>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      currentTodo: {
        type: Object,
      },
    },
    methods: {
      deleteTodo() {
        this.$emit('deleteTodo', this.currentTodo.id)
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~assets/css/theme.styl'
  @import '~assets/css/mixins.styl'

  .todo-item
    display: flex
    justify-content: space-between
    padding: 10px
    font-size: 24px
    font-weight: 100px
    border-top: 1px solid rgba(0, 0, 0, 0.1)

    &:hover
      button:after
        content: 'x'
        font-size: 24px
        color: $lightred

    &.completed
      label
        color: #d9d9d9
        text-decoration: line-through

    input
      width: 50px
      height: 30px
      cleanDefaultStyle()

      &:after
        content: url('~assets/img/unchecked.svg')

      &:checked:after
        content: url('~assets/img/checked.svg')

    label
      flex: 1
      transition: color 0.4s

    button
      width: 40px
      background-color: transparent
      cursor: pointer
      cleanDefaultStyle()
</style>