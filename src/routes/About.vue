<template>
  <div class="about">
    <fa
      class="icon"
      icon="laptop" />
    <div class="name">
      {{ name }}
    </div>
    <div> {{ email }}</div>
    <div> {{ phone }}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState('about', [
      'image',
      'name',
      'email',
      'phone'
    ])
  }
}
</script>

<style scoped lang="scss">
@import '~/scss/main';
.about {
  text-align : center;
  padding: 80px 20px;
  .icon {
    color : $primary;
    width: 100px;
    height: 100px;
  }
  .name {
    font-size : 50px;
    color : $primary;
    font-family: 'Oswald' , 'sans-serif';
    margin-bottom: 20px;

  }
}
</style>