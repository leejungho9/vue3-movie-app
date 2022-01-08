<template>
  <Header />
  <RouterView /> <!--전역화 되어있는 컴포넌트-->
</template>

<script>
import Header from '~/components/Header'

export default {
  components : {
    Header
  },
}
</script>

<style lang ="scss">
@import "~/scss/main.scss";

</style>