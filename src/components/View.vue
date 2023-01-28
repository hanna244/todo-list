<template>
  <ul class="list_wrapper">
    <li>{{ props.todos[0] }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    todos: ['공부하기'],
  },
}
</script>

<style scoped>
.list_wrapper li {
  color: #fff;
}
</style>
