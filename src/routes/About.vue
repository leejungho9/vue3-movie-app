<template>
  <div class="about">
    <div class="name">
      {{ name }}
    </div>
    <div> {{ email }}</div>
    <div> {{ phone }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    image() {
      return this.$store.state.about.image
    },
    name() {
      return this.$store.state.about.name
    },
    email() {
      return this.$store.state.about.email
    },
    phone() {
      return this.$store.state.about.phone
    }, 

  }
}
</script>

<style scoped lang="scss">
@import '~/scss/main';
.about {
  text-align : center;
  padding: 80px 20px;

  .name {
    font-size : 50px;
    color : $primary;
    font-family: 'Oswald' , 'sans-serif';
    margin-bottom: 20px;

  }
}
</style>