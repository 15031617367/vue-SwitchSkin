import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
        echThemeName:sessionStorage.getItem("echartTheme") || "essos", //echarts主题
        elementName:sessionStorage.getItem("elementtheme") || "static/elementThem2.css", //element主题
        htmlTheme:sessionStorage.getItem("htmlTheme") || "static/htmlTheme.css", //html主题


    },
    getters:{
        GEt_echThemeName:(state)=>{
            return state.echThemeName
        },
        Get_elementName:(state)=>{
            return state.elementName
        },
        Get_htmlThemeURl:(state)=>{
            return state.htmlTheme
        },

    }

})

export default store