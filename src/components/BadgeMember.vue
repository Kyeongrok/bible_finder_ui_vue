<template>
  <input type="text" class="form-control-sm bg-success m-1" @click="clickBadge" :value="name"/>

</template>

<script>
export default {
  name: "BadgeMember",
  props: {
    name: String,
    idx: Number
  },
  methods: {
    clickBadge() {
      console.log(`${this.idx}번째 조원`)
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>
