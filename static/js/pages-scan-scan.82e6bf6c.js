(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-scan-scan"],{3561:function(n,t,e){"use strict";e.r(t);var i=e("87da"),a=e("405c");for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);e("4af5");var r,c=e("f0c5"),d=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"f1f1662c",null,!1,i["a"],r);t["default"]=d.exports},"405c":function(n,t,e){"use strict";e.r(t);var i=e("e082"),a=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);t["default"]=a.a},"4af5":function(n,t,e){"use strict";var i=e("f07b"),a=e.n(i);a.a},"87da":function(n,t,e){"use strict";var i,a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-view",[e("v-uni-button",{attrs:{type:"primary",id:"btn"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.scanCode2.apply(void 0,arguments)}}},[n._v("出校扫码")]),e("v-uni-view",{attrs:{id:"bd"}}),e("v-uni-button",{attrs:{type:"primary",id:"btn"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.scanCode.apply(void 0,arguments)}}},[n._v("入校扫码")]),e("v-uni-view",{attrs:{id:"bd"}}),e("v-uni-view",{attrs:{id:"bd"}}),e("v-uni-navigator",{attrs:{url:"../input/input",id:"tijiao"}},[n._v("输入个人信息")])],1),e("v-uni-view",{attrs:{id:"bd"}}),e("v-uni-view",{attrs:{id:"bd"}}),e("v-uni-view",{attrs:{id:"notice"}},[n._v("出校和回校")]),e("v-uni-view",{attrs:{id:"notice"}},[n._v("！！前都需要填写个人信息并提交,再进行扫码！！")]),e("v-uni-view",{attrs:{id:"notice"}},[n._v("！！使用前先随便扫一个码检测是否显示正常！！")]),e("v-uni-view",{attrs:{id:"bd"}}),e("v-uni-view",{attrs:{id:"notice"}},[n._v("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -")]),e("v-uni-view",{attrs:{id:"notice"}},[n._v("❤ C'est une application dédiée à F. ❤")]),e("v-uni-view",{attrs:{id:"notice"}},[n._v("Have fun")]),e("v-uni-view",{attrs:{id:"notice"}},[n._v("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -")]),e("v-uni-button",{attrs:{type:"default",id:"down"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.sendredirect.apply(void 0,arguments)}}},[n._v("跳转(开发调试用，勿点)")])],1)},o=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return o}),e.d(t,"a",function(){return i})},b58f:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"/* pages/scan/scan.wxss */uni-page-body[data-v-f1f1662c]{background:#eee}#tijiao[data-v-f1f1662c]{border:solid #000 %?1?%;margin:%?10?%;text-align:center}#inp[data-v-f1f1662c]{margin-left:2px;margin-right:2px;font-size:%?28?%;padding:%?5?% 0}#bd[data-v-f1f1662c]{margin:50px}#btn[data-v-f1f1662c]{\r\n  /* width: 100%; */\r\n\r\n  /* display: flex; */-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}uni-navigator[data-v-f1f1662c]{width:100%;height:%?100?%;line-height:%?100?%;border-bottom:%?1?% solid #000;color:#000;background-color:#fff;padding:%?10?% 0;margin-left:10px;margin-right:10px;font-size:18px}#down[data-v-f1f1662c]{background:#fff;width:100%;bottom:%?0?%;position:fixed}#notice[data-v-f1f1662c]{color:#000;font-size:%?20?%;text-align:center}#notice1[data-v-f1f1662c]{color:red;font-size:%?50?%;text-align:center}#down1[data-v-f1f1662c]{background:#eee;bottom:%?100?%;float:right;position:fixed}body.?%PAGE?%[data-v-f1f1662c]{background:#eee}",""])},e082:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=getApp(),a={data:function(){return{name:"",gender:""}},components:{},props:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{formSubmit:function(n){console.log("form发生了submit事件，携带数据为：",n.detail.value);var t=n.detail.value,e=t.name,a=t.gender,o=t.number,r=t.major,c=t.reason,d=t.leaveday,u=t.leavestart,f=t.leaveend,s=t.reviewtime,v=t.reviewer;""!=e&&(i.globalData.name=e),""!=a&&(i.globalData.gender=a),""!=r&&(i.globalData.major=r),""!=c&&(i.globalData.reason=c),""!=d&&(i.globalData.leaveday=d),""!=u&&(i.globalData.leavestart=u),""!=o&&(i.globalData.number=o),""!=f&&(i.globalData.leaveend=f),""!=v&&(i.globalData.reviewer=v),""!=s&&(i.globalData.reviewtime=s)},scanCode:function(){uni.scanCode({success:function(n){uni.redirectTo({url:"/pages/info/info"})}})},scanCode2:function(){uni.scanCode({success:function(n){uni.redirectTo({url:"/pages/info2/info2"})}})},sendredirect:function(){uni.redirectTo({url:"/pages/info/info"})}}};t.default=a},f07b:function(n,t,e){var i=e("b58f");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("3d26a3ac",i,!0,{sourceMap:!1,shadowMode:!1})}}]);