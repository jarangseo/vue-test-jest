<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="confirm">Button</button>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      'testNumber': 1
    }
  },
  methods: {
    confirm () {
      this.testNumber += 1
    }
  }
}
</script>