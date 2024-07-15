<template>
  <div>
    <Nav></Nav>
    <div class="container">
    <router-view></router-view>
  </div>
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
        Footer,

    }    
  }
</script>

<style scoped>

</style>