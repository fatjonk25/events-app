<template>
  <div id="app">
    <Header></Header>
    <div class="container">
        <router-view />
    </div>
    <Footer></Footer>
    
  </div>
</template>

<script>
import Header from './components/SiteHeader.vue'
import Footer from './components/Footer.vue'


export default {
  name:'app',
  components: {
    Header,
    Footer
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
}

.container {
  width: 1200px;
  margin: 50px auto;
}
</style>
