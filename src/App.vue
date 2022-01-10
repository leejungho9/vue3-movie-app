<template>
  <Header />
  <RouterView /> <!--전역화 되어있는 컴포넌트-->
  <Footer />
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components : {
    Header,
    Footer
  },
}
</script>

<style lang ="scss">
@import "~/scss/main.scss";

</style>