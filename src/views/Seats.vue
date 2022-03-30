<template>
  <div class="container">
    <div class="row">

      <div class="col-md-4">
        <label for="cnt" class="form-label">인원 수</label>
        <input type="text" id="cnt" class="form-control me-2" v-bind:value=names.length>
      </div>
      <div class="col-md-4">
        <label for="startWeek" class="form-label">시작주</label>
        <input type="text" id="startWeek" class="form-control me-2" v-model="weeksFrom">
      </div>
      <div class="col-md-4">
        <label for="endWeek" class="form-label">끝주</label>
        <input type="text" id="endWeek" class="form-control me-2" v-model="weeksTo">
      </div>
    </div>
    <span :key="i" v-for="(name, i) in names">{{name}}</span>
    <br/>

    <input type="text" v-model="currentName" @keyup.enter="addNames" class="form-control me-2" ref="currentName">
    <button @click="addNames" class="btn btn-outline-success" type="button">+</button>
    <br/>
    <button @click="run" class="btn btn-outline-success">만들기</button>
    <b-table striped hover :items="results" />
  </div>
</template>

<script>
export default {
  name: "SeatsSep",
  data(){
    return{
      names:[],
      results:[],
      weeksFrom:1,
      weeksTo:40,
      currentName:"조원1",
    }
  },
  methods: {
    addNames: function () {
      if (this.currentName != ""){
        this.names.push(this.currentName)
        this.currentName = ""
      } else {
        alert("이름을 입력하세요.")
      }
    },
    run: function () {
      this.results.push(this.rndRange(this.names.length))
    },
    rndRange: (totalIndex) => {
      let randomIndexArray = []
      while (randomIndexArray.length < totalIndex){
        let randomNum = Math.floor(Math.random() * totalIndex)
        if (randomIndexArray.indexOf(randomNum) === -1) {
          randomIndexArray.push(randomNum)
        }
      }
      return randomIndexArray
    }
  },
  mounted() {
    this.$refs.currentName.focus()
  }
}
</script>

<style scoped>

</style>
