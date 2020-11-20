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
  html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

​img {
  max-width: 100%;
  display: block;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

p {
  margin: 0;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

button:hover {
  cursor: pointer;
}

button:focus {
  outline: none;
}

input:focus,
input:active,
button:active,
button:focus {
  outline: none;
}

button:disabled,
button[disabled] {
  background-color: #cccccc;
  color: #fff;
}

.container {
  width: 80%;
  margin: 0 auto;  
  padding: 50px 0;
}
</style>
