(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-info-info"],{"0389":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"/* pages/info/info.wxss */uni-page-body[data-v-c52ba908]{background:#eee}#confirm[data-v-c52ba908]{background:#4199ff;width:100%;bottom:0\r\n\t/* position: fixed; */}.a[data-v-c52ba908]{position:fixed;bottom:0;width:100%}#stuinfo[data-v-c52ba908]{background:#fff;border-bottom:#eee;margin:%?1?%;font-size:%?28?%;padding:%?30?% 0}.time[data-v-c52ba908]{font-size:%?45?%;display:block;\r\n    /* float:left; */margin:%?10?%}#state[data-v-c52ba908]{\r\n    /* float:right;\r\n    font-size: 34rpx;\r\n    color: #4199ff; */margin-right:%?0?%;font-size:%?65?%;margin-left:%?15?%}#line[data-v-c52ba908]{margin-left:10px;margin-right:10px}#mid[data-v-c52ba908]{margin:%?30?%}body.?%PAGE?%[data-v-c52ba908]{background:#eee}",""])},"1d49":function(t,i,e){"use strict";e.r(i);var n=e("6396"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);i["default"]=a.a},"2c71":function(t,i,e){var n=e("0389");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("09e81594",n,!0,{sourceMap:!1,shadowMode:!1})},6396:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=getApp(),a={data:function(){return{hiddenName:!1,item:"已离校(当日返校)",color:"#4199ff",name:"",committime:"2020-10-10 08:35:08",gender:"男",number:"",major:"软件工程",reason:"购买生活物品",leaveday:"2020-10-10",leavestart:"2020-10-10 09:00:00",leaveend:"2020-10-10 20:00:00",returnday:"2020-10-11",reviewtime:"2020-10-09 14:21:10",reviewer:"张超"}},components:{},props:{},onLoad:function(){this.setData({name:n.globalData.name,number:n.globalData.number,committime:n.globalData.committime,gender:n.globalData.gender,major:n.globalData.major,reason:n.globalData.reason,leaveday:n.globalData.leaveday,leavestart:n.globalData.leavestart,leaveend:n.globalData.leaveend,reviewtime:n.globalData.reviewtime,reviewer:n.globalData.reviewer})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{returnschool:function(){this.setData({hiddenName:!this.hiddenName,item:"已返校(当日返校)",color:"#f3a630"}),uni.showToast({title:"提交成功",icon:"succes",duration:1e3,mask:!0})}}};i.default=a},a483:function(t,i,e){"use strict";e.r(i);var n=e("f25c"),a=e("1d49");for(var r in a)"default"!==r&&function(t){e.d(i,t,function(){return a[t]})}(r);e("f000");var o,s=e("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"c52ba908",null,!1,n["a"],o);i["default"]=u.exports},f000:function(t,i,e){"use strict";var n=e("2c71"),a=e.n(n);a.a},f25c:function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("div",{staticClass:"a"},[e("v-uni-button",{attrs:{type:"primary",id:"confirm",hidden:t.hiddenName},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.returnschool.apply(void 0,arguments)}}},[t._v("确定回校")])],1),e("v-uni-view",{attrs:{id:"upper"}},[e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-text",{attrs:{id:"line"}},[t._v("出校备案编号：000249088")])],1),e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-view",[e("v-uni-text",{attrs:{id:"state"}},[t._v("状态：")]),e("v-uni-text",{style:"color:"+t.color,attrs:{id:"state"}},[t._v(t._s(t.item))])],1)],1),e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-view",[e("v-uni-text",{staticClass:"time",attrs:{id:"line"}},[t._v("出校日期："+t._s(t.leaveday))])],1)],1),e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-text",{staticClass:"time",attrs:{id:"line"}},[t._v("出校起始时间："+t._s(t.leavestart))])],1),e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-text",{staticClass:"time",attrs:{id:"line"}},[t._v("出校结束时间："+t._s(t.leaveend))])],1),e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-text",{attrs:{id:"line"}},[t._v("提交时间："+t._s(t.committime))])],1),e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-text",{attrs:{id:"line"}},[t._v("姓名："+t._s(t.name))])],1),e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-text",{attrs:{id:"line"}},[t._v("学号："+t._s(t.number))])],1),e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-text",{attrs:{id:"line"}},[t._v("性别："+t._s(t.gender))])],1),e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-text",{attrs:{id:"line"}},[t._v("学院：天津师范大学")])],1),e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-text",{attrs:{id:"line"}},[t._v("专业："+t._s(t.major))])],1),e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-text",{attrs:{id:"line"}},[t._v("年级：")])],1),e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-text",{attrs:{id:"line"}},[t._v("出校事由："+t._s(t.reason))])],1)],1),e("v-uni-view",{attrs:{id:"mid"}}),e("v-uni-view",{attrs:{id:"upper"}},[e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-text",{attrs:{id:"line"}},[t._v("审核意见：同意，注意安全和疫情防护")])],1),e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-text",{attrs:{id:"line"}},[t._v("审核时间："+t._s(t.reviewtime))])],1),e("v-uni-view",{attrs:{id:"stuinfo"}},[e("v-uni-text",{attrs:{id:"line"}},[t._v("审核人姓名："+t._s(t.reviewer))])],1)],1)],1)},r=[];e.d(i,"b",function(){return a}),e.d(i,"c",function(){return r}),e.d(i,"a",function(){return n})}}]);