<template>
  <div>
    <button class="button">{{text}}</button>
  </div>
</template>
<script>
export default {
  props: ['text'],
  data () {
    return {
    }
  }
}
</script>
<style lang="sass">
@import '../Style/StyleAll'
.button
  width: 100px
  height: 35px
  border-radius: 5px
  background: cornflowerblue
  border: none
  outline: none
  box-shadow: 3px 3px 5px gainsboro
  color: white
  font-family: Inglobal Arial
  font-size: 20px
</style>