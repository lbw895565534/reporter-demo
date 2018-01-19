<template>
  <div class="tab">
    <span>{{ txt }}</span>
  </div>
</template>

<script>
  export default {
    props: ['txt']
  }
</script>

<style>
  .tab {
    width: 100%;
    height: 100%;
    line-height: 45px;   
    text-align: center; 
  }
</style>