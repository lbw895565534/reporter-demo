<template>
  <div class="tabbar">
    <ul class="tabbar-ul">        
      <li class="tabbar-li" v-for="tab in tabs" @click="select(tab.path)">                                  
        <Tab :txt="tab.name"></Tab>                              
      </li>     
    </ul>
    <div class="clear"></div>
    <div class="tabbar-content">
      <router-view></router-view>
    </div>
  </div>
  
</template>

<script>
  import Tab from './tab'
  export default {
    data() {
      return {
        tabs: [
          {'name': '柱状图', 'path': 'column'},
          {'name': '折线图', 'path': 'line'}, 
          {'name': '饼状图', 'path': 'pie'}
        ]
      }      
    },
    components: {
      Tab
    },
    methods: {
      select: function(pa) {
        console.log(pa);
        return this.$router.push( '/'+pa);
      }
    }
  }
</script>

<style>
  .tabbar {
    margin: 50px auto;
    width: 800px;
    height: auto;
  }
  .tabbar-ul {
    list-style: none;
  }
  .tabbar-li {    
    float: left;
    width: 100px;
    height: 45px;  
    box-sizing:border-box;   
    position: relative;
    z-index: 999;      
    cursor: pointer;
  }  
  .showborder {
    border: 2px solid #84CAF0;     
    border-bottom: 2px solid #fff; 
  }
  .tabbar-li:hover {   
    border: 2px solid #84CAF0;     
    border-bottom: 2px solid #fff; 
  }  
  .clear {
    clear: both;
  }
  .tabbar-content {
    width: 800px;
    height: 400px;  
    margin-top: -2px;            
    border: 2px solid rgb(218, 218, 218);    
  }
</style>