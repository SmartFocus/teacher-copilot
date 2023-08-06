<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}
</style>