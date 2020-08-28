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
      v-for="(item, index) in filterData"
      :key="index"
      :current-todo="item"
      @deleteTodo="deleteCurrentTodo"
    ></todo-item>
    <todo-info
      :total-todo="unfinished"
      @toggleState="toggleState"
      @clearCompleted="clearCompleted"
    ></todo-info>
  </div>
</template>

<script>
  import TodoItem from './sonComps/TodoItem.vue'
  import TodoInfo from './sonComps/TodoInfo.vue'

  let id = 0

  export default {
    name: 'MainTodo',
    components: {
      TodoItem,
      TodoInfo,
    },
    data() {
      return {
        todoData: [],
        content: '',
        unfinished: 0,
        checkedState: 'all',
      }
    },
    watch: {
      todoData: {
        deep: true,
        handler() {
          this.unfinished = this.todoData.filter(
            (item) => item.completed === false
          ).length
        },
      },
    },
    computed: {
      filterData() {
        switch (this.checkedState) {
          case 'all':
            return this.todoData
            break
          case 'active':
            return this.todoData.filter((item) => item.completed === false)
            break
          case 'completed':
            return this.todoData.filter((item) => item.completed === true)
            break
        }
      },
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
        // 找到当前删除的item在数组中的下标
        let deleteIndex = this.todoData.findIndex((item) => {
          return item.id === index
        })
        this.todoData.splice(deleteIndex, 1)
      },
      toggleState(state) {
        this.checkedState = state
      },
      clearCompleted() {
        this.todoData = this.todoData.filter((item) => item.completed == false)
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