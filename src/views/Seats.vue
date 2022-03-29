<template>
  <div>
    <div>인원 수:{{names.length}} 시작주:<input type="text" v-model="weeksFrom"> 끝주:<input type="text" v-model="weeksTo"></div>
    <span :key="i" v-for="(name, i) in names">{{name}}</span>
    <br/>
    <input type="text" v-model="currentName">
    <button @click="addNames">+</button>
    <br/>
    <button @click="run">만들기</button>
    <table>
      <tr :key="i" v-for="(result, i) in results">
        <td>{{i+1}}</td>
        <td>{{result}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "SeatsSep",
  data(){
    return{
      input: '롬5:1',
      names:[],
      results:[],
      weeksFrom:1,
      weeksTo:40,
      currentName:"",
      message: '이곳에 결과가 나옵니다.'
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
  }
}
</script>

<style scoped>

</style>
