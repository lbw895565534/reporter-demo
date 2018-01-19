<template>
  <div class="home">
    <Sidebar></Sidebar>
    <div class="content">
        <Tabbar></Tabbar>
    </div>
    
  </div>
  
</template>

<script>
  import Tabbar from './tabbar/tabbar'
  import Sidebar from './sidebar/sidebar'
  export default {
    components: {
      Tabbar, Sidebar
    }
  }
</script>
<style>
  * {padding: 0; margin: 0;}
  .home {width: 100%; height: 100%; min-width: 1200px; min-height: 968px}
  .content {width: auto; height: 100%;}
</style>