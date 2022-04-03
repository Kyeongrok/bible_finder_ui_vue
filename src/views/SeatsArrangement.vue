<template>
  <div class="container">

    <div class="row">
      사용방법 : 인원수를 입력하고 '조회'버튼을 누르세요.
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">인원수</span>
          <input type="text" class="form-control" placeholder="인원수"
                 @change="init"
                 v-model="total" ref="currentName"
                 aria-label="Username" aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="col-md-3">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon2">시작주</span>
          <input type="text" id="startWeek" class="form-control me-2" v-model="weeksFrom"
                 aria-label="Username" aria-describedby="basic-addon2">
        </div>
      </div>
      <div class="col-md-3">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">끝주</span>
          <input type="text" id="endWeek" class="form-control me-2" v-model="weeksTo"
                 aria-label="Username" aria-describedby="basic-addon2">
        </div>
      </div>
      <div class="col-md-3">
        <button @click="init" class="btn btn-outline-success m2-3"
                type="button">조회</button>
      </div>
    </div>
    <!-- 뱃지 영역-->
    <BadgeMember :name="name" :idx="i" :key="i" v-for="(name, i) in names"/>
    <!-- 자리배치 결과 출력-->
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">내용</th>
      </tr>
      </thead>
      <tbody>
      <tr :key="i" v-for="(result, i) in results">
        <td>{{i+1}}주차</td>
        <td>
          <span class="badge bg-success m-1" :key="i" v-for="(v, i) in result">
          {{names[v]}}</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BadgeMember from "@/components/BadgeMember";
export default {
  name: "SeatsSep",
  components: {BadgeMember},
  data(){
    return{
      names:[],
      results:[],
      total:9,
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
    init: function () {
      // total만큼 name push하기
      this.names = []
      for (let i = 0; i < this.total; i += 1) {
        this.names.push(`${"조원"}${i+1}`)
      }
      this.run()
    },
    run: function () {
      this.results = []
      for (let i = this.weeksFrom; i <= this.weeksTo; i += 1) {
        this.results.push(this.rndRange(this.total))
      }
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
  created() {
    this.init()
  },
  mounted() {

    this.$refs.currentName.focus()
  }
}
</script>

<style scoped>

</style>
