<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">SimonEasy</router-link>
      <router-link to="/SimonMiddle">SimonMiddle</router-link>
      <router-link to="/SimonDifficult">SimonDifficult</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-left: 15px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
