<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          :class="{acitve: isMatch(nav.path)}"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
export default{
    data()  {
        return {
            navigations :  [
                {
                    name : 'Serach',
                    href : '/'
                },
                {
                    name : 'Movie',
                    href : '/movie/tt4520988',
                    path : /^\/movie/
                },
                {
                    name : 'About',
                    href : '/about',
                }
            ]
        }
    },
    components : {
      Logo
    },
    methods : {
      isMatch(path) {
        if(!path) return false
        console.log(this.$route)
        return path.test(this.$route.fullPath)
      }
    },
   }
</script>
<style scoped lang="scss">
  header {
    height: 70px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    position: relative;
    .logo {
      margin-right: 40px;
    }
  @include media-breakpoint-down(sm) {
    .nav {
      display : none;
    }
  }
}
</style>