<template>
  <footer>
    <Logo />
    <a 
      href="https://github.com/leejungho9"
      target="_blank">
      (c){{ new Date().getFullYear() }} JUNGHO
    </a>
    <footer>
    </footer>
  </footer>
</template>


<script>
import Logo from '~/components/Logo'
export default {
  components: {
      Logo
  }
}
</script>

<style scoped lang="scss">
footer {
    padding:  70px 0;
    text-align:  center;
    opacity: .3;
    .logo {
        display: block;
        margin-bottom: 4px;
    }
}
</style>