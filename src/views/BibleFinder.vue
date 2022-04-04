<template>
  <img alt="Vue logo" src="../assets/images.jpeg">
  <div class="row">
    <h1>성경 찾기 앱</h1>
    <p>
      사용 방법 : 원하는 주소를 입력한 후 '검색'버튼을 누르세요. ex)롬5:1-2, 롬5:1
    </p>
    <div class="row">
      <div class="col-md-2">
        마지막 검색: <button class="btn-dark">{{this.history}}</button>
      </div>
    </div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">내용</th>
      </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(result, i) in searchResults">
          <td>{{result.index}}</td>
          <td>{{result.text}}</td>
        </tr>
      </tbody>
    </table>

  </div>
  <div class="row">
    <div class="col-md-3">
      <input class="form-control me-2" type="search" @keyup.enter="reverseMessage" v-model="input" placeholder="Search" aria-label="Search">
    </div>
    <div class="col-md-3">
      <button @click="reverseMessage" class="btn btn-outline-success" type="button">검색</button>
      <button @click="empty" class="btn btn-outline-primary" type="button">초기화</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      input: '롬5:1-5',
      searchResults:[],
      history:[],
    }
  },
  methods: {
    empty: function () {
      this.searchResults = []
      this.input = ''
    },
    reverseMessage: function () {
      const input = this.input
      const bibleAddrRe = new RegExp('[가-힣]{1,2}[0-9]{1,3}:[0-9]{1,3}-[0-9]{1,3}', 'g');
      if (input.search(bibleAddrRe) >= 0) {
        const addr = `https://2kstde4150.execute-api.ap-northeast-1.amazonaws.com/dev/v1/bible/between/${input}`
        fetch(addr)
          .then(res => {
            return res.json()
          }).then(data => {
            console.log(data)
            data.forEach(item=>{
              this.searchResults.push(item)
            })
            this.$cookies.set('data', input)
            this.setHistoryFromCookie()
        })
      } else{
        fetch('https://jxkjd9ecxh.execute-api.ap-northeast-2.amazonaws.com/dev/v1/find/single/'+input)
          .then(res => {
            return res.json()
          }).then(data => {
            console.log(data)
            this.searchResults.push(data)
            this.$cookies.set('data', input)
            this.setHistoryFromCookie()
        })
      }
      this.input = ''

    },
    findBetween: function () {
      const addr = `https://2kstde4150.execute-api.ap-northeast-1.amazonaws.com/dev/v1/find/between?book=%EC%B0%BD&chapter=1&verseFrom=1&verseTo=2`
      console.log(addr)
    },
    setHistoryFromCookie: function() {
      this.history=[];
      const cookie = this.$cookies.get('data')
      this.history.push(cookie)
    }
  },
  created() {
    this.reverseMessage();
    const dr = {'recentUrl':window.location.href, 'preUrl':document.referrer}
    // 이전 방문 페이지, 현재 방문 페이지 메세지 보내기
    fetch(`https://api.telegram.org/bot281761192:AAE7h61HIio8eviXggpssYHrJJ58nHWT32A/sendMessage?chat_id=173075344&text=${JSON.stringify(dr)}`)
      .then(res => {
        return res.json()
      }).then(data => {
        console.log(data)
    })
  },
  mounted() {
    this.setHistoryFromCookie()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
