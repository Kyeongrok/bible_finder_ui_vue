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
        <button @click="crawlNaverShopping" class="btn btn-outline-success m2-3"
                type="button">조회</button>
      </div>
    </div>
    <div class="row">
      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">제품명</th>
          <th scope="col">가격</th>
          <th scope="col">카테고리</th>
          <th scope="col">링크</th>
        </tr>
        </thead>
        <tbody>
        <tr :key="i" v-for="(result, i) in searchResults">
          <td>{{result.name}}</td>
          <td>{{result.price}}</td>
          <td>
          <span class="badge bg-success m-1" :key="i" v-for="(v, i) in result.category">
          {{v}}</span>
          </td>
          <td><a :href="result.link" target="_blank">link</a></td>

        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "NaverShoppingCrawl",
  data(){
    return{
      keyword: '핸드백',
      searchResults:[],
      message: '이곳에 결과가 나옵니다.'
    }
  },
  methods: {
    crawlNaverShopping: function () {
      const keyword = this.keyword
      const addr = `https://jevf3cn1za.execute-api.ap-northeast-2.amazonaws.com/crawl/naver-shopping/${keyword}`
      fetch(addr)
        .then(res => {
          return res.json()
        }).then(data => {
          console.log(data)
          this.searchResults = []
          data.result.forEach(item=>{
            this.searchResults.push(item)
          })
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
