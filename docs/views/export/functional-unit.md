---
title: 常用功能组件
date: 2020-04-15
sidebar: "auto"
categories:
  - 更多
tags:
  - 扩展
---

::: tip
常用功能组件
:::

<!-- more -->

# 功能组件

### 打印

html2canvas 组件

安装：`npm install --save html2canvas`

简述：能够实现在用浏览器端直接对整个或部分页面进行截屏（渲染成一个Canvas图片）

思路：通过获取HTML的某个元素，然后生成Canvas，能让用户保存为图片。

```js
//过程：组件可传入要截屏的父容器dom;在.then()方法参数canvas中，可得到路径与设置图片格式
// html2canvas（dom节点，[配置对象]）
// toDataURL([type,encoderOptions]);type:可选 图片格式，默认为"image/png"；encoderOptions：可选 图片质量 取值范围 0~1,默认为0.92
//es6语法
html2canvas(document.getElementById("form-box")).then(function (canvas) {
    that.printImgUrl = canvas.toDataURL("image/jpeg");
});
//vue-优化语法
html2canvas(document.querySelector("#capture") {
  async: true
}).then(canvas => {
  document.body.appendChild(canvas)
});
//基本语法
html2canvas(document.body, {
  onrendered: function(canvas) {
    var url = canvas.toDataURL();//图片地址
    document.body.appendChild(canvas);
  },
  width: 300,
  height: 300
});
```

常见bug：生成的图片有白色边框、图片显示不出来、覆盖dom并出现闪动效果--百度解决。

### 导出

excel组件

安装：` npm install xlsx`

简述：将选中的数据导出 下载为xcel表格

```js
// params:导出的数据对象
//title：表格标题名称；key：标题key（与data里的key值对应）；data：表格数据；filename：文件名；autoWidth：自适应宽度；
const params = {
    title: [],
    key: [],
    data: this.data,
    autoWidth: true,
    filename: this.exportFilename
};
//下载表格
excel.export_array_to_excel(params);
```



### 地图绘制

vue-amap

安装：`npm install vue-amap --save`

简述：基于vue2.0和高德地图的地图组件

使用流程：

```js
//引入vue-amap
import AMap from 'vue-amap';
// Vue使用
Vue.use(AMap);
// 初始化加载
VueAMap.initAMapApiLoader({
  key: 'your amap key', // 高德key
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'], // 插件
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4', // SDK版本
  // uiVersion:'', // UI库版本
  // protocol:'https', // 引用协议
});

// 仅引入高德地图，部分实例化操作直接基于高德地图的sdk完成 ---可选的操作
lazyAMapApiLoaderInstance.load().then(() => {
  // your code ...
  this.map = new AMap.Map('amapContainer', {
    center: new AMap.LngLat(121.59996, 31.197646)
  });
});
-------vue代码部分-------
<template>
    <div class="amap-page-container">
      <el-amap vid="amapDemo"  :center="center" :amap-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
      </el-amap>
    </div>
</template>
import VueAMap from 'vue-amap'; // 导入地图组件，导入名避免与全局地图名冲突
// 创建地图实例
let amapManager = new VueAMap.AMapManager();
module.exports = {
      data: function() {
        return {
          amapManager,//地图管理对象
          zoom: 12,
          center: [121.59996, 31.197646],
        }
      }
}
---------SDK方式----------
// 1 导入相关组件 UI库 如
<base href="https://webapi.amap.com/ui/1.0/ui/geo/DistrictExplorer/examples/" />
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script type="text/javascript" src='https://webapi.amap.com/maps?v=1.4.15&key=${key}'></script>
<script src="https://webapi.amap.com/ui/1.0/main.js?v=1.0.11"></script>
// 2 html创建地图容器标签,并指明id
<div id="container"></div>
// 3 创建地图实例
var map = new AMap.Map('container', {
    cursor: 'default',
    center: [113.263471, 23.116969],// 地图中心点
    zoom: 9, // 地图显示层级
});
// 4 调用地图ui
AMapUI.loadUI(['geo/DistrictExplorer'], function (DistrictExplorer) {
    // 创建一个 DistrictExplorer 实例
    districtExplorer = new DistrictExplorer({
        map: map,// 指定地图实例
        eventSupport: true, //打开事件支持
    });
})
// 5 功能---镂空
// 参数：Array 第一项为显示的区域（全国）；第二项为镂空的区域（如 海珠区）；error 错误提示；areaNodes 镂空节点
districtExplorerDraw.loadMultiAreaNodes(Array,fun(error,areaNodes){
let polygon = new AMap.Polygon({
    bubble: true,
    lineJoin: 'round',
    strokeColor: 'red', //线颜色
    strokeOpacity: app._data.lineOpacity, //线透明度
    strokeWeight: 1, //线宽
    fillColor: 'black', //填充色
    fillOpacity: app._data.fillOpacity, //填充透明度
    map: map,
    path: path, // path 存镂空区域信息
    });
})
// 6 事件
// feature被点击 featureClick
districtExplorer.on('featureClick', function (e, feature) {
    map.getZoom() // 获取当前缩放级别
})
// 外部区域被点击 outsideClick
districtExplorer.on('outsideClick', function (e) {})
 //监听feature的hover事件
districtExplorer.on('featureMouseout featureMouseover', function (e, feature) {});
//监听鼠标在feature上滑动
 districtExplorer.on('featureMousemove', function (e, feature) {
    //更新提示位置
    tipMarker.setPosition(e.originalEvent.lnglat);
});
// 缩放控制
map.on('zoomend',fun(){});

// 区域绘制
//绘制子区域
districtExplorer.renderSubFeatures(areaNode, function (feature, i) {
    return{返回配置对象}
})
//绘制父区域
districtExplorer.renderParentFeature(areaNode, {绘制对象})
//清除已有的绘制内容
districtExplorer.clearFeaturePolygons();
//更新地图视野
map.setFitView(districtExplorer.getAllFeaturePolygons());
```

[百度地图离线网址](https://uksir.gitee.io/online/02-bdmap.html) 

### 图片压缩

插件：[图片压缩](https://tinypng.com/)

标签：<canvas>

### 图片懒加载

思路：判断图片距离页面顶部的距离如果小于视口高度和卷去的高度，则加载

```js
// html部分。。。
<img src="./images/default.png" alt="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg">
  <img src="./images/default.png" alt="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg">
  <img src="./images/default.png" alt=""  data-src="http://ww1.sinaimg.cn/large/006y8mN6gw1fa7kaed2hpj30sg0l9q54.jpg">
...
// js部分
  let imgNums=document.querySelectorAll('img')
  let timeouta
  let num=0
  lazyLoad()
	//节流函数，防止重复触发
  window.addEventListener('scroll',function(){
    if(timeouta){
      clearTimeout(timeouta)
      //注意定时器返回的是一个ID，所以这里清除定时器之后还要给变量重新赋值null
      timeouta=null
    }else{
      timeouta=setTimeout(function(){
       console.log(999);
       lazyLoad()
     },200)
    }
  })
  function lazyLoad(){
    if(num===imgNums.length) return
    // 获取可视化区域的高度
      let clienHeight=document.documentElement.clientWidth
      //获取滚动条距离顶部的距离
      let scroolTop=document.documentElement.scroolTop||document.body.scrollTop||0
      for (let i = 0; i < imgNums.length; i++) {
          //这里需要用getBoundingClientRect().top来获取图片距离顶部的距离，offsetTop获取的相对于父元素的，不正确
        if(imgNums[i].getBoundingClientRect().top<clienHeight+scroolTop){
            //getAttribute 获取标签的属性值
            //setAttribute 设置或者添加标签的属性值
          if(imgNums[i].getAttribute('src')=='./images/default.png'){
            imgNums[i].src=imgNums[i].getAttribute('data-src')
            num++
          }
        }
      }
  }
```



### iframe标签

简述：iframe元素会创建包含另外一个文档的内联框架（即行内框架）

兼容性：所有浏览器都支持 <iframe> 标签。 

对于不理解iframe的浏览器，可以把需要的文本放置在<iframe>和</iframe>之间。

##### 属性：

| 属性                                                         | 值                                                           | 描述                                                         |
| ------------------------------------------------------------ | :----------------------------------------------------------- | ------------------------------------------------------------ |
| [align](http://www.w3school.com.cn/tags/att_iframe_align.asp) | left,right,top,middle,bottom                                 | 不赞成使用。请使用样式代替。规定如何根据周围的元素来对齐此框架。 |
| [frameborder](http://www.w3school.com.cn/tags/att_iframe_frameborder.asp) | 10                                                           | 规定是否显示框架周围的边框。                                 |
| [height](http://www.w3school.com.cn/tags/att_iframe_height.asp) | *pixels* , *%*                                               | 规定 iframe 的高度。                                         |
| [width](http://www.w3school.com.cn/tags/att_iframe_width.asp) | *pixels* , *%*                                               | 定义 iframe 的宽度。                                         |
| [marginheight](http://www.w3school.com.cn/tags/att_iframe_marginheight.asp) | *pixels*                                                     | 定义 iframe 的顶部和底部的边距。                             |
| [marginwidth](http://www.w3school.com.cn/tags/att_iframe_marginwidth.asp) | *pixels*                                                     | 定义 iframe 的左侧和右侧的边距。                             |
| [name](http://www.w3school.com.cn/tags/att_iframe_name.asp)  | *frame_name*                                                 | 规定 iframe 的名称。                                         |
| [sandbox](http://www.w3school.com.cn/tags/att_iframe_sandbox.asp) | ""allow-formsallow-same-originallow-scriptsallow-top-navigation | 启用一系列对 <iframe> 中内容的额外限制。                     |
| [scrolling](http://www.w3school.com.cn/tags/att_iframe_scrolling.asp) | yesnoauto                                                    | 规定是否在 iframe 中显示滚动条。                             |
| [seamless](http://www.w3school.com.cn/tags/att_iframe_seamless.asp) | seamless                                                     | 规定 <iframe> 看上去像是包含文档的一部分。                   |
| [src](http://www.w3school.com.cn/tags/att_iframe_src.asp)    | *URL*                                                        | 规定在 iframe 中显示的文档的 URL。                           |
| [srcdoc](http://www.w3school.com.cn/tags/att_iframe_srcdoc.asp) | *HTML_code*                                                  | 规定在 <iframe> 中显示的页面的 HTML 内容。                   |
| [longdesc](http://www.w3school.com.cn/tags/att_iframe_longdesc.asp) | *URL*                                                        | 规定一个页面，该页面包含了有关 iframe 的较长描述。           |



<iframe> 标签支持 [HTML 中的全局属性](http://www.w3school.com.cn/tags/html_ref_standardattributes.asp)。 || HTML事件属性

##### HTML全局属性

| 属性                                                         | 描述                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------ |
| [accesskey](http://www.w3school.com.cn/tags/att_standard_accesskey.asp) | 规定激活元素的快捷键。                                 |
| [class](http://www.w3school.com.cn/tags/att_standard_class.asp) | 规定元素的一个或多个类名（引用样式表中的类）。         |
| [contenteditable](http://www.w3school.com.cn/tags/att_global_contenteditable.asp) | 规定元素内容是否可编辑。                               |
| [contextmenu](http://www.w3school.com.cn/tags/att_global_contextmenu.asp) | 规定元素的上下文菜单。上下文菜单在用户点击元素时显示。 |
| [data-*](http://www.w3school.com.cn/tags/att_global_data.asp) | 用于存储页面或应用程序的私有定制数据。                 |
| [dir](http://www.w3school.com.cn/tags/att_standard_dir.asp)  | 规定元素中内容的文本方向。                             |
| [draggable](http://www.w3school.com.cn/tags/att_global_draggable.asp) | 规定元素是否可拖动。                                   |
| [dropzone](http://www.w3school.com.cn/tags/att_global_dropzone.asp) | 规定在拖动被拖动数据时是否进行复制、移动或链接。       |
| [hidden](http://www.w3school.com.cn/tags/att_global_hidden.asp) | 规定元素仍未或不再相关。                               |
| [id](http://www.w3school.com.cn/tags/att_standard_id.asp)    | 规定元素的唯一 id。                                    |
| [lang](http://www.w3school.com.cn/tags/att_standard_lang.asp) | 规定元素内容的语言。                                   |
| [spellcheck](http://www.w3school.com.cn/tags/att_global_spellcheck.asp) | 规定是否对元素进行拼写和语法检查。                     |
| [style](http://www.w3school.com.cn/tags/att_standard_style.asp) | 规定元素的行内 CSS 样式。                              |
| [tabindex](http://www.w3school.com.cn/tags/att_standard_tabindex.asp) | 规定元素的 tab 键次序。                                |
| [title](http://www.w3school.com.cn/tags/att_standard_title.asp) | 规定有关元素的额外信息。                               |
| [translate](http://www.w3school.com.cn/tags/att_global_translate.asp) | 规定是否应该翻译元素内容。                             |

### vue.config.js   ---cli3.3↗

```js
/**
 * 配置该文件可以参考:
 * https://cli.vuejs.org/zh/config/#%E7%9B%AE%E6%A0%87%E6%B5%8F%E8%A7%88%E5%99%A8
 *
 */

// const url = 'http://yusui.natapp1.cc'
const url = 'http://192.168.1.9:9999'
// 基础路径，发布前修改这里,当前配置打包出来的资源都是相对路径
let publicPath = './';// 部署应用包时的基本 URL;'.'表示基本路径'http://yusui.natapp1.cc'
module.exports = {
  publicPath: publicPath,
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    // 忽略的打包文件
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT'
    })
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
    entry
      .add('classlist-polyfill')
      .end()
  },
  // 配置转发代理
  devServer: {
    host: '127.0.0.1',// 设置项目本地地址
    port:9999, // 设置项目本地地址端口
    proxy: {
      '/auth': {//路径：{option配置对象}
        target: url,//目标主机
        ws: true,//代理的 WebSockets
        pathRewrite: {//路径重写
          '^/auth': '/auth',// ^/旧路径:/重写路径
          '^/remove/path':'/path',// 删除基本路径
        },
        router: {
           // 当 request.headers.host == 'dev.localhost:3000',
           // 覆盖目标 'http://www.example.org' 到 'http://localhost:8000'
           'dev.localhost:3000': 'http://localhost:8000'
        }
      },
      '/admin': {// 基本配置。。。。
        target: url,
        ws: true,
        pathRewrite: {
          '^/admin': '/admin'
        }
      }
    }
  }
}
```

## 上传文件

### base64转blob对象

```js
// base64转blob
export function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}
```

### blob上传

```js
var formData = new FormData();
formData.append("file",$("#FileUpload")[0].files[0]);
formData.append("type",'typeContent')//附带其它参数
// 将formData作为data对象传过去
```

​	

### 导出文件流

##### 带headers方式

需要：js-file-download

1. `npm install js-file-download --save`

```js
// 2
// 2.1局部导入使用 --xxx.vue ---end
var fileDownload = require('js-file-download');
fileDownload(data, 'filename.csv');
// 2.2全局导入 --main.js
import fileDownload from 'js-file-download'
// 挂载全局使用的方法
Vue.prototype.fileDownload = fileDownload;
//3 
// 3.1直接发请求 ---end;
axios.get(`/skill/sprojectaudit/export?xlxsName=${query}`, { responseType: 'arraybuffer' })

//挂载到axios --axios.js
// 导出请求-携带headers
/**
 * @title export请求
 * @param {String} url 路径
 * @param {Object} params url参数
 * @param {Object} data 参数 --暂时仅支持params传参
 * @param {String} method 请求方式 默认 get
 * @returns {Promise}
 */
axios.askExport =  function ({ url: url, method: method, params: params, data: data }) {
  return axios(
    {
        method: method,            // 请求方式
        url: url,            // 请求地址
        params: params,
        responseType: 'arraybuffer',// 返回数据类型
    })
}
//4 封装请求 xxxapi.js
// 导出-文件流
export function getExport(query) {
  return request.askExport({
    url: '/skill/sprojectaudit/export',
    method: 'get',
    params: query
  })
}
//5 使用 xxx.vue
import {getExport} from 'xxxapi.js'
//发请求
let params = {xlxsName:this.approveForm.xlxsName}
getExport(params).then(res=>{
    let name = res.headers['content-disposition'].split('filename=')[1]
    let fileName = this.approveForm.xlsName+'.'+name.split('.')[1]//避免文件名含中文被转码
    this.fileDownload(res.data,fileName);
})
```

方式2

```js
// 导出文件流
  fetchExportBill(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url,data,{ responseType: 'arraybuffer'}).then(res => {
      //resolve(res)
      let blob = new Blob([res], {type: "application/vnd.ms-excel"}); 
　　let objectUrl = URL.createObjectURL(blob); 
　　 window.location.href = objectUrl; 
      }).catch(error => {
        if (data.Vue) {
          data.Vue.$message.error('系统异常');
        }
        reject(null, e);
      })
    })
  }
```

##### 补充：不带headers等验证方式

```js
let path = this.bashPath+getExport+'?xlxsName='+this.approveForm.xlxsName;
window.open(path,'_self')

```

##### 前端导出方式

```js
//前端表格导出--仅能导出当前表格数据 .exportCsv()--属于iview的api
//缺点：当导出数据过多，会很耗性能
this.$refs.exportTable.exportCsv({
  filename: "用户数据"，
//  columns,
//  data,
});
// 导出嵌套数据
// 理论来说只要把data里面object字段转成你要显示的内容字符串即可；如：
//data: this.data.map(v => ({...v, category: v.category.name})),
//出现过的问题：
// 1.导出的数据出现科学计数法问题（像电话号码，身份证号码，当数据大于15位后面的会用0替代。）
// 解决：在数字前加上制表符“\t”注意双引号，拼接字符串来实现；如：
// idNo = "\t"+v.idNo //身份证号码
// 2.导出数据乱码问题：原因是因为导出数据为UTF-8格式，而2007默认打开格式为ANSI。
// 解决：在进行打开前，进行一下转换就行。

```

### 文件流下载

```js
// 下载
// downloadUrl --下载接口url
download(){
    let link = document.createElement('a')
    link.setAttribute('download', this.Data.name+'.'+this.Data.suffix)//下载 文件名
    link.setAttribute('href', downloadUrl+this.Data.id)//下载 文件名
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()//执行下载
    URL.revokeObjectURL(link.href) //释放url
    document.body.removeChild(link)//释放标签
}

```



## echarts图表

```js
//echarts.vue ---部分
<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
/**
 * @title 图表组件
 * @param {Object} option 图表配置对象 
 * @param {String} className 自定义类名
 * @param {String} id 图表id
 * @param {String} height 图表高度 
 * @param {String} width 图表宽度 
 */
  import echarts from "echarts";

  export default {
    name: 'myChart',
    props: {
      className:{
        type:String,
        default:'',
      },
      id:{
        type:String,
        default:'myChart',
      },
      height:{
        type:String,
        default:'400px',
      },
      width:{
        type:String,
        default:'400px',
      },
      option:{
        type:Object,
        default:()=>{},
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    watch: {
      option:{
        handler(now,old){
          this.init();
        },
        deep:true,
      }
    },
    mounted(){
      this.init();
    },
    methods: {
      init(){
        this.$nextTick(()=>{
          // 基于准备好的dom，初始化echarts实例
          let myChart = echarts.init(document.getElementById(this.id))
          // 绘制图表
          let tempOption = {
            title: { text: '在Vue中使用echarts' },
            color:[], //该属性存在默认值
            toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫"]
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36]
                }
            ]
          }
          myChart.setOption(this.option,true);// 图表重新渲染数据--传多一个参数 true
          window.onresize = myChart.resize;//使图表自适应宽度！
          window.addEventListener('resize', function () {
                myChart.resize();
            });
        })
      }
    },
    // 初始化加载
    activated () {
      this.init();
    },
    // 实例销毁之前调用
    beforeDestroy(){
      
    },
  }
</script>
```

### 出现问题

值小于4会出现小数点---判断设置固定值

--容器宽度变化内容没有自适应

解决：`window.onresize = myChart.resize;`该行代码能使图表自适应宽度，但一个页面只能生效最后一个；

### v-charts

基于vue2.0和echarts封装的V-Charts 图表组件

1. 安装：`npm i v-charts -S`
2. 使用：

```js
// 1. 引入v-charts
// 全局引入
//--main.js
import VCharts from 'v-charts'
Vue.use(VCharts)

// --demo.vue
// html
// judge-width:该属性可控制图表宽高（自适应），布尔值
<ve-line ref="chartLine" judge-width :data="chart.data" :settings="chart.settings" :extend="extend"></ve-line>
//js
data () {
    return {
      chart:{
        settings:{// 配置项
          metrics: ['使用总数'],// 指定指标
          labelMap: {// 指定指标的别名
              '日期': '访问用户',
              '销售量': '下单用户'
          },
          dataType: {// 设置数据格式 dataType:饼图;yAxisType:折线图。'normal' （千分位）、'KMB' （kmb 格式）、percent （百分比格式）；
            '访问用户': 'KMB',
            '年龄': 'percent',
            '下单用户': 'normal'
          },
          yAxisType: ['0,0a'],// 值表示使用numerify格式
       // dimension 用于指定维度
          showLine: ['在线率'],
          axisSite: { right: ['在线率'] },
          yAxisType: ['normal', 'percent'],
          yAxisName: ['数值', '比率'],
        },
        legend:{
          // y: 'bottom',
          bottom:0,
          // show:false,
        },
        data:{
          columns: ['类型','数值'],
          rows: [
            { '类型': '使用总数', '数值': 1393,'在线率': 0.76 },
            { '类型': '在线总数', '数值': 1093,'在线率': 0.76 },
          ]
        },
        extend:{//内部属性进行单独的设置--series里面的属性
          //   series: {
        //     barWidth: 10,//设置条形宽度
            // barGap:'-100%',//设置条形重叠
        //   },
        // //等同于--map所有项
        //   'series.0.barWidth': 10,
        //   'series.1.barWidth': 10,
          series:{
            label: {
              show: true,
              position: "center",
              formatter: (v) => {
                if(v.name == "在线总数"){
                  return '在线率' + "\n" + v.percent + "%";
                }else{
                  return ''
                }
              },
              fontSize: 14,
              fontWeight: "bold",
              color: "#000"
            },
          }
        }
      },
    }
  }
}

// js---
this.$nextTick(() => {
    this.$refs.chartLine.echarts.resize();//需初始化加载
});
```

#### 补充

1. 将xAxis的type设置为value, 将yAxis的type设置为category即可实现横向显示；(标签为 vie-bar)

## xls表格

### xls文件转html

1. 使用 [OCR]( https://zhcn.109876543210.com/ ) 技术 将图片转xls实现表格初步排版
2. 表格文件调整编辑，另存为html文件，或 [在线xls转html](http://www.docpe.com/excel/excel-to-html.aspx)
3. 将css与html分别放入项目对应类型文件中，根据实际需求做调整即可【最好封装为组件再引用】

## 多层全屏功能

#### 思路

1. 层级Lv >1:
   1. 退出：判断存在进入全屏状态的层，并按层级退出
   2. 进入：判断并记录存在进入全屏状态的层，存在则退出再进入
2. 注意：
   1. 每次操作都需要更新相关层的进入状态！
   2. 全屏组件只能监听到最后执行的层的状态，当执行Esc退出全屏时，应对其他层的状态做更新

插件：vue-fullscreen

## 毛玻璃

详情参考 [毛玻璃](F:\文档文件\个人笔记\实践扩展\毛玻璃.html)

注意：容器使用ui组件栅格可能会失效

ie兼容问题：



## 补充

URI 和 URL

URI：统一资源标识符---服务器资源名；

URL：统一资源定位符---特定服务器上某资源的特定位置

