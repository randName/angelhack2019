(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["room"],{"226d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{on:{change:function(e){return t.$emit("input",e)}},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}},[n("v-btn",{attrs:{large:""}},[n("v-icon",{attrs:{large:""}},[t._v("sentiment_very_dissatisfied")])],1),n("v-btn",{attrs:{large:""}},[n("v-icon",{attrs:{large:""}},[t._v("sentiment_dissatisfied")])],1),n("v-btn",{attrs:{large:""}},[n("v-icon",{attrs:{large:""}},[t._v("sentiment_satisfied")])],1),n("v-btn",{attrs:{large:""}},[n("v-icon",{attrs:{large:""}},[t._v("sentiment_very_satisfied")])],1)],1)},i=[],s={props:["value"],data:()=>({rating:null}),watch:{value(t){this.rating=t}}},r=s,o=n("2877"),l=n("6544"),u=n.n(l),c=n("8336"),d=(n("934c"),n("58db"),n("2b0e"));function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return d["default"].extend({name:"proxyable",model:{prop:t,event:e},props:h({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:h({},t,function(t){this.internalLazyValue=t})})}var m=p(),v=m,f=n("6a18"),g=n("58df"),b=n("d9bd"),y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},V=Object(g["a"])(v,f["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return y({},this.themeClasses)},selectedItems:function(){var t=this;return this.items.filter(function(e,n){return t.toggleMethod(t.getValue(e,n))})},selectedValues:function(){return Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:function(){this.$nextTick(this.updateItemsState)}},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(b["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t,e){this.updateInternalValue(this.getValue(t,e))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",function(){return e.onClick(t,n)}),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);var a=this.selectedValues.indexOf(n);if(!(a<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(function(t){return t!==n}):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=t?this.items.length-1:0;this.updateInternalValue(this.getValue(this.items[e],e))}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),a=n.findIndex(function(e){return e===t});this.mandatory&&a>-1&&n.length-1<1||null!=this.max&&a<0&&n.length+1>this.max||(a>-1?n.splice(a,1):n.push(t),this.internalValue=n)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",{staticClass:"v-item-group",class:this.classes},this.$slots.default)}}),x=(V.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),V.extend({name:"button-group",provide:function(){return{btnToggle:this}},props:{activeClass:{type:String,default:"v-btn--active"}},computed:{classes:function(){return V.options.computed.classes.call(this)}}})),_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},I=x.extend({name:"v-btn-toggle",props:{activeClass:{type:String,default:"v-btn--active"}},computed:{classes:function(){return _({},x.options.computed.classes.call(this),{"v-btn-toggle":!0,"v-btn-toggle--only-child":1===this.selectedItems.length,"v-btn-toggle--selected":this.selectedItems.length>0})}}}),w=n("132d"),C=Object(o["a"])(r,a,i,!1,null,null,null);e["a"]=C.exports;u()(C,{VBtn:c["a"],VBtnToggle:I,VIcon:w["a"]})},"3ab1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.room?n("v-container",{attrs:{"grid-list-md":"","align-center":"","justify-center":""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v("Room: "+t._s(t.room.name.toUpperCase()))])]),n("v-card-text",[t._v("\n          For each item below, please indicate how comfortable you are with discussing the topic.\n          "),n("blockquote",{staticClass:"blockquote"},[t._v("\n            "+t._s(t.responses[t.sample])+"\n          ")])]),n("v-card-actions",[n("v-spacer"),n("RatingBar",{model:{value:t.sample,callback:function(e){t.sample=e},expression:"sample"}}),n("v-spacer")],1)],1)],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.items,function(t){return n("v-flex",{key:t.id,attrs:{xs12:"",sm6:""}},[n("ItemCard",{attrs:{value:t}})],1)}),1),n("amplify-connect",{attrs:{subscription:t.responseSub,onSubscriptionMsg:t.subMsg}}),n("v-layout",{attrs:{row:"",wrap:""}},[t.ready&&-1!==t.vote?n("v-flex",{attrs:{xs12:""}},[n("ItemCard",{attrs:{value:t.items[t.vote],result:""}})],1):t._e()],1)],1):t._e()},i=[],s=n("6ff8"),r=n("226d");const o=['"I am uncomfortable with talking about this"','"I do not know if I am comfortable with this"','"I am OK with talking about this"','"I really want to talk about this"'];o[void 0]="Click on the sample responses to see what they mean";const l="subscription OnResponse {\n  onCreateResponse {\n    id\n    rating\n  },\n  onUpdateResponse {\n    id\n    rating\n  }\n}\n",u="query GetRoom($id: ID!) {\n  getRoom(id: $id) {\n    id\n    name\n    items {\n      items {\n        id\n        content\n        responses {\n          items {\n            id\n            rating\n          }\n        }\n      }\n    }\n  }\n}\n";var c={components:{ItemCard:s["a"],RatingBar:r["a"]},data:()=>({responses:o,room:null,sample:void 0}),computed:{rid(){return this.$route.params.id},items(){return this.room?this.room.items.items:[]},ready(){return!!this.room&&this.items.map(t=>t.responses.items.map(t=>t.rating)).flat().every(t=>t>-1)},vote(){if(!this.ready)return-1;const t=this.items.map(t=>t.responses.items.reduce((t,{rating:e})=>{return-1===t||0===e?-1:e+t},0));return t.indexOf(Math.max(...t))},responseSub(){return this.$Amplify.graphqlOperation(l)}},mounted(){this.getRoom()},methods:{async getRoom(){const{API:t,graphqlOperation:e}=this.$Amplify,{data:n}=await t.graphql(e(u,{id:this.rid}));this.room=n.getRoom},subMsg(t,{onCreateResponse:e,onUpdateResponse:n}){const a=e||n;this.items.forEach(t=>{const e=t.responses.items.map(t=>t.id).indexOf(a.id);-1!==e&&t.responses.items.splice(e,1,a)})}}},d=c,h=n("2877"),p=n("6544"),m=n.n(p),v=n("b0af"),f=n("99d9"),g=n("12b2"),b=n("a523"),y=n("0e8f"),V=n("a722"),x=n("9910"),_=Object(h["a"])(d,a,i,!1,null,null,null);e["default"]=_.exports;m()(_,{VCard:v["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:g["a"],VContainer:b["a"],VFlex:y["a"],VLayout:V["a"],VSpacer:x["a"]})},"58db":function(t,e,n){},"6ff8":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return void 0===t.rating?n("v-card",[n("v-card-title",[n("div",{staticClass:"headline"},[t._v(t._s(t.item.title))])]),t.item.image?n("v-img",{attrs:{src:t.item.image,contain:"",height:"200px"}}):t._e(),n("v-card-text",[t._v("\n    "+t._s(t.item.content)+"\n  ")]),n("v-card-actions",[n("v-spacer"),t.admin?n("v-btn",{on:{click:function(e){return t.$emit("add")}}},[t._v("\n      Room: "+t._s(t.value.room?t.value.room.name:"None")+"\n    ")]):t.result?t._e():n("div",[n("RatingBar",{on:{input:t.updateResponse},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}}),n("v-spacer")],1)],1)],1):t._e()},i=[],s=n("63fb"),r=n("226d"),o={components:{RatingBar:r["a"]},props:{value:Object,admin:Boolean,result:Boolean},data:()=>({rid:null,rating:void 0}),computed:{item(){return JSON.parse(this.value.content)}},created(){if(this.result)return;const{API:t,graphqlOperation:e}=this.$Amplify,n=this.value.id,a=this.$store.state.responses[n];void 0===a?t.graphql(e(s["b"],{input:{responseItemId:n,rating:-1}})).then(({data:t})=>{this.$store.commit("respond",{id:t.createResponse.id,responseItemId:n})}):this.rid=a},methods:{async updateResponse(){if(!this.rid)return;const{API:t,graphqlOperation:e}=this.$Amplify,n=void 0===this.rating?-1:this.rating,a={rating:n,id:this.rid};await t.graphql(e(s["e"],{input:a}))}}},l=o,u=n("2877"),c=n("6544"),d=n.n(c),h=n("8336"),p=n("b0af"),m=n("99d9"),v=n("12b2"),f=n("adda"),g=n("9910"),b=Object(u["a"])(l,a,i,!1,null,null,null);e["a"]=b.exports;d()(b,{VBtn:h["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:v["a"],VImg:f["a"],VSpacer:g["a"]})},"934c":function(t,e,n){}}]);