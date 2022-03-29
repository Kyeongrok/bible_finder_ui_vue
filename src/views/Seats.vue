<template>
  <div>
    <p :key="i" v-for="(name, i) in names">{{name}}</p>
    <input type="text">
    <button @click="addNames">+</button>
    <button>만들기</button>
  </div>
</template>

<script>
export default {
  name: "SeatsSep",
  data(){
    return{
      input: '롬5:1',
      names:[],
      message: '이곳에 결과가 나옵니다.'
    }
  },
  methods: {
    addNames: function () {
      this.names.push("김경록")
    }
  }
}
</script>

<style scoped>

</style>
