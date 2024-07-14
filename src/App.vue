<template>
  <div>
    <Nav></Nav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
  export default {
    name: 'App',
    components: {
        Nav,
        Footer
    }    
  }
</script>

<style scoped>

</style>