webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},r,!1,function(t){n("gsu9")},null,null).exports,a=n("/ocq"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movies"},[n("h1",[t._v("영화 목록")]),t._v(" "),t._l(t.movies,function(e){return n("div",{staticClass:"movie"},[n("img",{staticClass:"poster",attrs:{src:e.poster}}),t._v(" "),n("div",[n("p",[t._v(t._s(e.name))]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("router-link",{attrs:{to:{name:"show",params:{id:e.id}}}},[t._v("더보기")])],1)])])})],2)},staticRenderFns:[]};var c=n("VU/8")({created:function(){var t=this;this.$http.get("/api/movies").then(function(e){t.movies=e.data})},data:function(){return{movies:[]}}},o,!1,function(t){n("zyFe")},null,null).exports,u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("상세 내용")]),t._v(" "),n("img",{attrs:{src:this.movie[0].poster}}),t._v(" "),n("h2",[t._v(t._s(this.movie[0].name))]),t._v(" "),n("p",[t._v(t._s(this.movie[0].director))])])},staticRenderFns:[]},v=n("VU/8")({created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/movies/"+e).then(function(e){t.movie=e.data})},data:function(){return{movie:[]}}},u,!1,null,null,null).exports;i.a.use(a.a);var p=new a.a({mode:"history",routes:[{path:"/",name:"index",component:c},{path:"/:id",name:"show",component:v}]}),l=n("mtWM"),m=n.n(l);i.a.prototype.$http=m.a,i.a.config.productionTip=!1,new i.a({el:"#app",router:p,components:{App:s},template:"<App/>"})},gsu9:function(t,e){},zyFe:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4f6056c46c4870e14284.js.map