webpackJsonp([1],{0:function(e,t,n){n("A7k7"),e.exports=n("9LOt")},"9LOt":function(e,t){},A7k7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("zYko"),s=n.n(o);window.Vue=n("I3G/"),window.axios=n("mtWM"),Vue.use(s.a,{color:"#C0A062",failedColor:"#000000",thickness:"4px"}),Vue.component("navigation",n("gvsO")),Vue.component("lightbox",n("bsxG")),Vue.component("contact",n("PtKR")),new Vue({el:"#jeff",beforeCreate:function(){this.$Progress.start()},mounted:function(){var e=this;setTimeout(function(){e.$Progress.finish()},1500)}})},NiBo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("I4KV"),s=n.n(o);t.default={props:["image"],data:function(){return{index:null,images:[this.image]}},components:{gallery:s.a}}},PtKR:function(e,t,n){var o=n("VU/8")(n("vAbE"),null,!1,null,null,null);e.exports=o.exports},"VU/8":function(e,t){e.exports=function(e,t,n,o,s,r){var i,u=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,u=e.default);var c="function"==typeof u?u.options:u;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId=s);var l;if(r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):o&&(l=o),l){var f=c.functional,d=f?c.render:c.beforeCreate;f?(c._injectStyles=l,c.render=function(e,t){return l.call(t),d(e,t)}):c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:i,exports:u,options:c}}},bsxG:function(e,t,n){var o=n("VU/8")(n("NiBo"),null,!1,null,null,null);e.exports=o.exports},gvsO:function(e,t,n){var o=n("VU/8")(n("nqCT"),null,!1,null,null,null);e.exports=o.exports},nqCT:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open}}}},vAbE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{form:{name:"",email:"",subject:"",message:""},success:!1}},methods:{submit:function(){var e=this;axios.post("https://formspree.io/jfitz-maurice@comcast.net",this.form).then(function(t){"email sent"===t.data.success&&(e.reset(),e.success=!0)})},reset:function(){this.form.name="",this.form.email="",this.form.subject="",this.form.message=""}}}}},[0]);