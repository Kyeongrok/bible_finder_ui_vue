const plugins = {

  install(Vue) {
    Vue.prototype.$get_api_host = () => {
      window.location.hostname;
      if (process.env.NODE_ENV === 'local'){
        return 'http://ec2-3-37-174-60.ap-northeast-2.compute.amazonaws.com:30001'
      } else {
        return ''      // Else, return the original string.
      }
    };
    Vue.prototype.$call_api = (url, callback) => {
      fetch(url).then(res => {
        if(res.ok){
          return res.json()
        } else{
          throw new Error('error has occurred')
        }
        })
        .then(data => {
          callback(data)
        })
        .catch((error) =>{
          console.log(error)
        })
    };
  },
}
export default plugins
