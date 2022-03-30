<template>
  <div class="container">
    <TopMenu />
    <router-view />
  </div>

</template>
<script>

import TopMenu from "@/components/TopMenu";
export default {
  name: 'App',
  components: {
    TopMenu
  }
}
</script>

