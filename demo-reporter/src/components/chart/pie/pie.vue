<template>
  <div class="column" ref="myPie">
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    props: {

    },
    data() {
      return {
        pie: null,
        data: this.genData()
      }
    },
    mounted() {
      this.initPie();
    },
    methods: {
      initPie() {
        this.pie = echarts.init(this.$refs.myPie);
        // 把配置和数据放这里
        this.pie.setOption({          
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: this.data.legendData,
            selected: this.data.selected
          },
          series: [{
            name: '姓名',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: this.data.seriesData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        })
      },
      genData() {
        var nameList = ['赵', '钱', '孙', '李', '周'];
        var valueList = [10, 20, 30, 30, 10];
        var legendData = [];
        var seriesData = [];
        var selected = {};
        for (var i = 0; i < 10; i++) {          
          legendData.push(nameList[i]);
          seriesData.push({
            name: nameList[i],
            value: valueList[i]
          });
          selected[name] = i < 5;
        }

        return {
          legendData: legendData,
          seriesData: seriesData,
          selected: selected
        };

        function makeWord(max, min) {
          var nameLen = Math.ceil(Math.random() * max + min);
          var name = [];
          for (var i = 0; i < nameLen; i++) {
            name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
          }
          return name.join('');
        }
      }
    }
  }

</script>
<style>
  .column {
    width: 100%;
    height: 100%;
  }

</style>
