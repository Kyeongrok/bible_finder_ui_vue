var app5 = new Vue({
  el: '#app-5',
  data: {
    input: '롬5:1',
    history:[],
    message: '이곳에 결과가 나옵니다.'
  },
  methods: {
    reverseMessage: function () {
        const input = this.input
        fetch('https://2kstde4150.execute-api.ap-northeast-1.amazonaws.com/dev/v1/find/single/'+input)
        .then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
            this.history.push({'text':data['text'], 'index':data['index']})
            this.message = data['text']
        })
    //   this.message = this.message.split('').reverse().join('')
    // 
    }
  }
})