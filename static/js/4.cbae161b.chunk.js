(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[4],{392:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__2KAke",dialogItems:"Dialogs_dialogItems__1yKzJ",active:"Dialogs_active__1gZY0",dialog:"Dialogs_dialog__1n7hF",messages:"Dialogs_messages__2w6BJ",message:"Dialogs_message__3RY6Q",messageCreate:"Dialogs_messageCreate__2q2de"}},397:function(e,a,s){"use strict";s.r(a);var t=s(186),c=(s(0),s(392)),i=s.n(c),n=s(187),d=s(188),o=s(87),g=s(89),r=s(47),l=s(2),j=function(e){var a=e.img,s=e.id,t=e.name;return Object(l.jsxs)("div",{className:"".concat(i.a.dialog," ").concat(i.a.active),children:[Object(l.jsx)("img",{src:a,alt:"ava"}),Object(l.jsx)(r.c,{to:"/dialogs/"+s,children:t})]})},m=function(e){return Object(l.jsx)("div",{className:i.a.message,children:e.message})},u=Object(g.a)(40),b=Object(d.a)({form:"addMessageReduxForm"})((function(e){return Object(l.jsx)("form",{onSubmit:e.handleSubmit,children:Object(l.jsxs)("div",{className:i.a.messageCreate,children:[Object(l.jsx)(n.a,{component:o.b,placeholder:"Enter your message",name:"newMessageBody",validate:[g.b,u]}),Object(l.jsx)("button",{children:"Send"})]})})})),O=function(e){return Object(l.jsxs)("div",{className:i.a.dialogs,children:[Object(l.jsx)("div",{className:i.a.dialogItems,children:e.dialogsPage.DialogData.map((function(e){return Object(l.jsx)(j,{name:e.name,id:e.id,img:e.img})}))}),Object(l.jsxs)("div",{className:i.a.messages,children:[Object(l.jsx)("div",{children:e.dialogsPage.MessageData.map((function(e){return Object(l.jsx)(m,{message:e.message})}))}),Object(l.jsx)(b,{onSubmit:function(a){e.addMessage(a.newMessageBody)}})]})]})},h=s(15),_=s(1),x=s(12),f=s(19),v=["auth"],p=function(e){return{auth:e.auth.auth}};var D=function(e){return Object(h.b)(p)((function(a){var s=a.auth,t=Object(x.a)(a,v);return s?Object(l.jsx)(e,Object(_.a)({},t)):Object(l.jsx)(f.a,{to:"/auth"})}))},M=s(21);a.default=Object(M.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),{addMessage:t.a.addMessage}),D)(O)}}]);
//# sourceMappingURL=4.cbae161b.chunk.js.map