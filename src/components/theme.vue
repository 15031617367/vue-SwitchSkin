<template>
  <!-- 换肤 -->
  <div class="wrapper">
    <h1>{{GetEchsName}}</h1>
    <el-button type="primary" plain @click="switchFun">换肤测试</el-button>
    <echarts></echarts>

  </div>
</template>

<script>
import echarts from "../components/echarts"
import {mapGetters,mapActions} from "vuex"
export default {
  components:{
    echarts
  },
  props:{},
  data(){
    return {}
  },
  watch:{
    
  },
  computed:{
    /**vuex数据映射 */
    ...mapGetters({
      GetEchsName:'GEt_echThemeName',
      GetelementName:"Get_elementName",
      GethtmlTheme:"Get_htmlThemeURl",
    }),
  },
  created(){},
  mounted(){
    document.getElementById('styleTheme').href = this.GethtmlTheme;
    document.getElementById("elementTheme").href = this.GetelementName;
  },
  methods:{
    switchFun(){
      let styleDom = document.getElementById('styleTheme')
      let elemetDom = document.getElementById("elementTheme")
      //判断echarts主题的文件名称,在session中存取相对应的主题文件地址
      switch (this.GetEchsName) {
        case "essos":
          sessionStorage.setItem("echartTheme","dark");
          sessionStorage.setItem("elementtheme","static/elementThem.css");
          sessionStorage.setItem("htmlTheme","static/htmlTheme2.css");
                
          break;
        default:
          sessionStorage.setItem("echartTheme","essos");
          sessionStorage.setItem("elementtheme","static/elementThem2.css");
          sessionStorage.setItem("htmlTheme","static/htmlTheme.css"); 
          break;
      }
      location.reload()
    }
  },
}
</script>

<style scoped>

</style>