webpackJsonp([5],{162:function(t,e,i){var n=i(64)(i(220),i(235),null,null,null);t.exports=n.exports},207:function(t,e,i){"use strict";var n=i(27);e.a={methods:{select:function(t){var e=n.Alert.create({enter:"bounceInRight",leave:"bounceOutRight",html:"Editing "+this.label+": "+t.name,position:"top-right",color:"positive",icon:"edit",dismissable:!1}),i=void 0;i=setTimeout(function(){e.dismiss(),clearInterval(i)},3e3),this.$router.push({name:"admin-"+this.label.toLowerCase(),params:{id:t.id}})}}}},220:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(207);e.default={name:"admin-products",mixins:[n.a],data:function(){return{label:"Product"}}}},235:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"padding-bottom":"100px"}},[i("q-btn",{staticClass:"z-absolute fixed-bottom-right",staticStyle:{bottom:"18px",right:"18px"},attrs:{round:"round",color:"secondary",big:"big"},on:{click:function(e){t.$router.push({name:"admin-product",params:{id:"add"}})}}},[i("q-icon",{attrs:{name:"add"}})],1),i("products",{on:{select:t.select}})],1)},staticRenderFns:[]}}});