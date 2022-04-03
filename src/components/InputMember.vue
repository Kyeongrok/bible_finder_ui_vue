<template>
  <input type="text"
         class="form-control-sm m-1"
         @keyup="changeName"
         v-model="memberName"/>

</template>

<script>
export default {
  name: "InputMember",
  props: {
    name: String,
    idx: Number
  },
  data(){
    return{
      memberName:''
    }
  },
  methods: {
    clickBadge() {
      console.log(`${this.idx}번째 조원`)
      this.emitter.emit('BadgeMemberModified', {idx:this.idx, name:this.name})
    },
    changeName(event) {
      console.log(event.target.value)
      this.emitter.emit('BadgeMemberModified', {idx:this.idx, name:this.memberName})
    }
  },
  created() {
    this.memberName = this.name;
  }
}
</script>

<style scoped>

</style>
