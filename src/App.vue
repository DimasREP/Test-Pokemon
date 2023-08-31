<template>
  <div id="nav">
    <Navbar />
<router-view/>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Navbar from './components/NavbarComponent.vue'
// import Footer from './components/FooterComponent.vue'
</script>