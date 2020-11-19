<template>
  <div id="app" class="container">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .container {
    width: 80%;
    margin: 0 auto;  
    padding: 50px 0;
  }
</style>
