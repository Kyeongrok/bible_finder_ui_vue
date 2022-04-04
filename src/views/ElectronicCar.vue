
<template>
  <div class="container">

    <div class="row">
      <div class="col-md-5">
        <div class="input-group mb-2">
          <span class="input-group-text" id="basic-addon1">키워드</span>
          <input type="text" class="form-control" placeholder="검색할 키워드를 입력해주세요"
                 v-model="keyword" ref="currentName"
                 aria-label="Username" aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="col-md-3">
        시도	지역구분	접수방법	민간공고대수	접수대수	출고대수	출고잔여대수	최대 보조금(만원)/승용	최대 보조금(만원)/초소형	최대 보조금(만원)/화물	최대 보조금(만원)/버스	비고
      </div>
    </div>
    <div class="row">
      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">시도</th>
          <th scope="col">지역구분</th>
          <th scope="col">접수방법</th>
          <th scope="col">민간공고대수</th>
        </tr>
        </thead>
        <tbody>
        <tr :key="i" v-for="(item, i) in searchResults">
          <td>{{item['민간공고대수']}}</td>
          <td>{{item}}</td>
          <td>
          </td>
          <td></td>

        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ElectronicCar",
  data(){
    return{
      searchResults:[]
    }
  },
  methods:{
    crawlNaverShopping: function () {
      const url = 'https://api.odcloud.kr/api/15039172/v1/uddi:30352622-49f8-4856-8bcd-c671c10cc251_201909191317?page=1&perPage=100&serviceKey=v8R92DMtagXwEBkXpUTDVeMnGRfqgBxl5hLAo7ZiHza6nYFzFfTmCbCxhaQ%2BtAcxai0C02ae8APsMciGrKd5xg%3D%3D';
      fetch(url)
          .then(res => {
            return res.json()
          }).then(data => {
        console.log(data.data)
        this.searchResults = data.data

      })
    }
  },
  created() {
    this.crawlNaverShopping()
  }
}
</script>

<style scoped>

</style>
