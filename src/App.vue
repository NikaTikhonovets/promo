<template>
  <ListProfiles/>
</template>

<script>

import ListProfiles from "@/components/ListProfiles";

export default {
  name: 'App',
  components: {
    ListProfiles
  }
}
</script>

<style>
:root {
  --blue: #1e90ff;
  --white: #ffffff;
  --background-gray: #efefef;
  --hover-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  --green: #2ee399;
  --red: #f15c5c;
  --yellow: #fff565;
}

* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Comfortaa', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
