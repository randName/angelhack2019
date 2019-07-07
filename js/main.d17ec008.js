(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main"],{cd56:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{"align-center":"","justify-center":""}},[e("v-layout",{attrs:{row:""}},[e("v-spacer"),e("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[e("v-card",{staticClass:"text-xs-center"},[e("v-card-title",{attrs:{"primary-title":""}},[e("div",{staticClass:"headline"},[t._v("Welcome!")])]),e("v-card-text",[t._v("\n          Please start by creating or joining a room.\n          "),e("v-container",[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Room Code",mask:"AAAAA","error-messages":t.errors},on:{change:function(a){t.errors=[]}},model:{value:t.roomCode,callback:function(a){t.roomCode=a},expression:"roomCode"}})],1)],1)],1)],1),e("v-card-actions",[e("amplify-connect",{attrs:{mutation:t.createRoom},on:{done:t.created},scopedSlots:t._u([{key:"default",fn:function(a){var o=a.loading,r=a.mutate;a.errors;return[e("v-btn",{attrs:{disabled:o},on:{click:r}},[t._v("\n                Create Room\n              ")])]}}])}),e("v-spacer"),e("v-btn",{attrs:{primary:""},on:{click:t.joinRoom}},[t._v("\n            Join Room\n          ")])],1)],1)],1),e("v-spacer")],1)],1)},r=[],n=e("0306"),s=e("63fb"),i={data:()=>({errors:[],roomCode:null}),computed:{createRoom(){return this.$Amplify.graphqlOperation(s["c"],this.randomRoom())}},methods:{async joinRoom(){const{API:t,graphqlOperation:a}=this.$Amplify,e={name:{eq:this.roomCode.toLowerCase()}},o=await t.graphql(a(n["b"],{filter:e})),r=o.data.listRooms.items;r.length<1?this.errors=["No such room"]:this.enterRoom(r[0])},randomRoom(){return{input:{name:Math.random().toString(36).replace(/[^a-z]+/g,"").slice(0,5)}}},async created({data:t}){const{API:a,graphqlOperation:e}=this.$Amplify,o=t.createRoom.id,r=await a.graphql(e(n["a"]));await Promise.all(r.data.listItems.items.map(t=>{const r={id:t.id,itemRoomId:o};return a.graphql(e(s["d"],{input:r}))})),this.enterRoom(t.createRoom)},enterRoom({id:t}){this.$router.push({name:"Room",params:{id:t}})}}},c=i,l=e("2877"),m=e("6544"),d=e.n(m),p=e("8336"),u=e("b0af"),v=e("99d9"),h=e("12b2"),f=e("a523"),R=e("0e8f"),g=e("a722"),C=e("9910"),b=e("2677"),y=Object(l["a"])(c,o,r,!1,null,null,null);a["default"]=y.exports;d()(y,{VBtn:p["a"],VCard:u["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:h["a"],VContainer:f["a"],VFlex:R["a"],VLayout:g["a"],VSpacer:C["a"],VTextField:b["a"]})}}]);