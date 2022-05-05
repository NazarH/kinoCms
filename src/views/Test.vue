<template>
<user-list></user-list>
</template>

<script scoped>

import UserList from '../components/user-list.vue'

export default {
    components:{
      UserList
    },
}

</script>

<style scoped>
.content-wrapper{
  background-color: #DCDCDC;
  min-height: 100%;
}

.content-wrapper>h3{
  text-align: center;
  padding-top: 25px;
  padding-bottom: 15px;
}
</style>