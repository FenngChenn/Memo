<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="what to do?"
      autofocus
      v-model="content"
      @keyup.enter="addTodo"
    />
    <todo-item
      v-for="(item, index) in todoData"
      :key="index"
      :current-todo="item"
      @deleteTodo="deleteCurrentTodo"
    ></todo-item>
  </div>
</template>

<script>
  import TodoItem from './sonComps/TodoItem.vue'

  let id = 0

  export default {
    name: 'MainTodo',
    components: {
      TodoItem,
    },
    data() {
      return {
        todoData: [],
        content: '',
      }
    },
    methods: {
      addTodo() {
        if (this.content === '') return

        this.todoData.unshift({
          id: id++,
          content: this.content,
          completed: false,
        })

        this.content = ''
      },
      deleteCurrentTodo(index) {
        // console.log(this.todoData.length - index - 1)
        let loc = this.todoData.length - index - 1
        this.todoData.map((item) => {
          if (item.id === index) {
            this.todoData.splice(loc, 1)
          }
        })
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .main-todo
    width: 600px
    margin: 0 auto
    background-color: #fff
    box-shadow: 0 0 5px #666

    .add-todo
      padding: 16px 16px 16px 36px
      width: 100%
      font-size: 24px
      font-weight: inherit
      font-family: inherit
      color: inherit
      border: none
      outline: none
      box-sizing: border-box
</style>