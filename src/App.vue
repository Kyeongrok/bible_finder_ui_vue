<template>
  <div id='nav'>
    <router-link to="/">
      <button id="myButton" class="foo bar">성경찾기</button>
      </router-link>
    <router-link to="/about">
      <button id="about" class="foo bar">자리배치</button>
      </router-link>
  </div>
  <router-view />
</template>
<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

