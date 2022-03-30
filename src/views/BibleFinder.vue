<template>
  <img alt="Vue logo" src="../assets/images.jpeg">
  <div class="row">
    <h1>성경 찾기 앱</h1>
    <p>
      사용 방법 : 원하는 주소를 입력한 후 '검색'버튼을 누르세요.
    </p>
    <h3>이곳에 결과가 출력 됩니다.</h3>
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">내용</th>
      </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(result, i) in history">
          <td>{{result.index}}</td>
          <td>{{result.text}}</td>
        </tr>
      </tbody>
    </table>

  </div>
  <div class="row">
    <form class="d-flex">
      <input class="form-control me-2" type="search" v-model="input" placeholder="Search" aria-label="Search">
      <button @click="reverseMessage" class="btn btn-outline-success" type="button">Search</button>
    </form>
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
      input: '롬5:1',
      history:[],
      message: '이곳에 결과가 나옵니다.'
    }
  },
  methods: {
    reverseMessage: function () {
      const input = this.input
      fetch('https://2kstde4150.execute-api.ap-northeast-1.amazonaws.com/dev/v1/find/single/'+input)
        .then(res => {
          return res.json()
        }).then(data => {
        console.log(data)
        this.history.push(data)
        this.message = data['text']
      })
      //   this.message = this.message.split('').reverse().join('')
      //
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
