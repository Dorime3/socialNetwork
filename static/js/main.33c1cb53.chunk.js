(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(30),a=n(5),c={MessageData:[{message:"HI",id:"1"},{message:"How are you?",id:"2"},{message:"YO",id:"3"}],DialogData:[{name:"Rodion",id:"1",img:"https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg"},{name:"Artem",id:"2",img:"https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg"},{name:"Vlad",id:"3",img:"https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg"},{name:"Sasha",id:"4",img:"https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg"},{name:"Yulia",id:"5",img:"https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg"},{name:"Kamilla",id:"6",img:"https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg"}]},i=function(e){return{type:"SEND-MESSAGE",messageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n={message:t.messageBody,id:4},i=Object(a.a)(Object(a.a)({},e),{},{MessageData:[].concat(Object(r.a)(e.MessageData),[n])});return i;default:return e}}},122:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"f",(function(){return l})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"c",(function(){return m}));var r=n(9),a=n.n(r),c=n(19),i=n(30),s=n(5),u=n(21),o={users:[],pageSize:10,portionUsers:25,usersCounts:0,currentPage:1,isFetching:!1,isFollowingProgress:[]},d=function(e){return{type:"FOLLOW",id:e}},l=function(e){return{type:"UNFOLLOW",id:e}},f=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},b=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},j=function(e,t){return{type:"TOGGLE_FOLLOWING_PROGRESS",isFetching:e,id:t}},p=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(b(!0)),r(f(e)),n.next=4,u.c.getUsers(e,t);case 4:c=n.sent,r(b(!1)),r({type:"SET-USERS",users:c.items}),r({type:"USERS_COUNTS",usersCounts:c.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},O=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&(t(j(!1,n)),t(c(n)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(n,e,u.c.userUnfollow,l);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(n,e,u.c.userFollow,d);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(s.a)(Object(s.a)({},e),{},{users:Object(i.a)(t.users)});case"SET_CURRENT_PAGE":return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case"USERS_COUNTS":return Object(s.a)(Object(s.a)({},e),{},{usersCounts:t.usersCounts});case"TOGGLE_IS_FETCHING":return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_FOLLOWING_PROGRESS":return Object(s.a)(Object(s.a)({},e),{},{isFollowingProgress:t.isFetching?[].concat(Object(i.a)(e.isFollowingProgress),[t.id]):e.isFollowingProgress.filter((function(e){return e!=t.id}))});default:return e}}},128:function(e,t,n){e.exports={summaryError:"Login_summaryError__1_Nyg"}},161:function(e,t,n){},162:function(e,t,n){},20:function(e,t,n){e.exports={nav:"Navbar_nav__zCxlo",item:"Navbar_item__3tBjH",active:"Navbar_active__2cqTt",friend:"Navbar_friend__2vK_f"}},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(127),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"c8f4bb25-94f1-4ddf-880b-405bea8616e0"}}),c={userUnfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},userFollow:function(e){return a.post("follow/".concat(e),{}).then((function(e){return e.data}))},getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},i={getProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("/profile/status/".concat(e))},setStatus:function(e){return a.put("/profile/status",{status:e})}},s={authMe:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},290:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,300)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},a=n(0),c=n.n(a),i=n(60),s=n.n(i),u=(n(161),n(47)),o=n(48),d=n(50),l=n(49),f=(n(162),n(11)),b=n(13),j=n(20),p=n.n(j),O=n(64),h=n.n(O),m=n(1),g=function(e){return Object(m.jsxs)("div",{className:h.a.friendItem,children:[Object(m.jsx)("img",{src:e.avatar,alt:"ava"}),Object(m.jsx)("a",{children:e.name})]})},v=function(e){var t=e.friends.map((function(e){return Object(m.jsx)(g,{name:e.name,avatar:e.avatar})}));return Object(m.jsx)("div",{className:h.a.friendsBlock,children:t})},x=n(14),_=function(e){return Object(m.jsxs)("nav",{className:p.a.nav,children:[Object(m.jsx)("div",{className:p.a.item,children:Object(m.jsx)(b.b,{to:"/profile",activeClassName:p.a.active,children:"Profile"})}),Object(m.jsx)("div",{className:p.a.item,children:Object(m.jsx)(b.b,{to:"/dialogs",activeClassName:p.a.active,children:"Messages"})}),Object(m.jsx)("div",{className:p.a.item,children:Object(m.jsx)(b.b,{to:"/users",activeClassName:p.a.active,children:"Users"})}),Object(m.jsx)("div",{className:p.a.item,children:Object(m.jsx)(b.b,{to:"/#",children:"News"})}),Object(m.jsx)("div",{className:p.a.item,children:Object(m.jsx)(b.b,{to:"/#",children:"Music"})}),Object(m.jsx)("div",{className:p.a.item,children:Object(m.jsx)(b.b,{to:"/#",children:"Settings"})}),Object(m.jsxs)("div",{className:p.a.item,children:[Object(m.jsx)(b.b,{to:"#",children:"Friends"}),Object(m.jsx)(v,{friends:e.friends})]})]})},S=Object(x.b)((function(e){return{friends:e.sidebar.friends}}),(function(e){return{}}))(_),E=n(5),w=n(9),y=n.n(w),P=n(19),k=n(21),N=n(51),C={userId:null,email:null,login:null,auth:!1},T=function(e,t,n,r){return{type:"SET_USER_DATA",data:{userId:e,email:t,login:n,auth:r}}},F=function(){return function(){var e=Object(P.a)(y.a.mark((function e(t){var n,r,a,c,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.authMe();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,c=r.email,i=r.login,t(T(a,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(E.a)(Object(E.a)({},e),t.data);default:return e}},I=n(85),D=n.n(I),U=function(e){return Object(m.jsxs)("header",{className:D.a.header,children:[Object(m.jsx)("img",{src:"https://logonoid.com/images/human-rights-logo.png"}),Object(m.jsx)("div",{className:D.a.login,children:e.data.auth?Object(m.jsxs)("div",{children:[Object(m.jsx)("a",{href:"#",children:e.data.email})," ",Object(m.jsx)("button",{onClick:e.logoutMe,children:"Logout"})," "]}):Object(m.jsx)(b.b,{to:"/auth",children:"Login"})})]})},R=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)(U,Object(E.a)({},this.props))}}]),n}(c.a.Component),A=Object(x.b)((function(e){return{data:e.auth}}),{logoutMe:function(){return function(){var e=Object(P.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.logout();case 2:0===e.sent.data.resultCode&&t(T(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(R),z=n(123),M=n(124),G=n(61),B=n(62),H=n(128),W=n.n(H),K=Object(G.a)(30),Z=Object(M.a)({form:"loginForm"})((function(e){var t=e.handleSubmit,n=e.error;return Object(m.jsxs)("form",{onSubmit:t,children:[Object(m.jsx)("div",{children:Object(m.jsx)(z.a,{name:"email",component:B.a,placeholder:"Login",validate:[G.b,K]})}),Object(m.jsx)("div",{children:Object(m.jsx)(z.a,{name:"password",component:B.a,placeholder:"Password",validate:[G.b],type:"password"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)(z.a,{name:"rememberMe",component:B.a,type:"checkbox"})," remember me"]}),n&&Object(m.jsx)("div",{className:W.a.summaryError,children:n}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"Login"})})]})})),J=Object(x.b)((function(e){return{isAuth:e.auth.auth}}),{loginMe:function(e,t,n){return function(){var r=Object(P.a)(y.a.mark((function r(a){var c,i;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,k.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(F()):(i=Object(N.a)("loginForm",{_error:c.data.messages[0]}),a(i));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(m.jsx)(f.a,{to:"/profile"}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsx)(Z,{onSubmit:function(t){e.loginMe(t.email,t.password,t.rememberMe)}})]})})),X=n(10),Y={inizialized:!1},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIZIALIZED_APP":return Object(E.a)(Object(E.a)({},e),{},{inizialized:!0});default:return e}},V=n(91),Q=n(89),$=n(121),ee={friends:[{name:"Serega",avatar:"https://tattoo-stickers.ru/34939-thickbox_default/nichosi.jpg"},{name:"Semen",avatar:"https://tattoo-stickers.ru/34939-thickbox_default/nichosi.jpg"},{name:"Masha",avatar:"https://tattoo-stickers.ru/34939-thickbox_default/nichosi.jpg"}]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=Object(E.a)({},e);return t},ne=n(122),re=n(131),ae=n(125),ce=Object(X.c)({profilePage:Q.b,dialogsPage:$.b,sidebar:te,usersPage:ne.a,auth:L,form:ae.a,app:q}),ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,se=Object(X.e)(ce,ie(Object(X.a)(re.a))),ue=function(e){return function(t){return Object(m.jsx)(c.a.Suspense,{fallback:Object(m.jsx)("div",{children:"Loading..."}),children:Object(m.jsx)(e,Object(E.a)({},t))})}},oe=c.a.lazy((function(){return n.e(3).then(n.bind(null,301))})),de=c.a.lazy((function(){return n.e(5).then(n.bind(null,303))})),le=c.a.lazy((function(){return n.e(4).then(n.bind(null,302))})),fe=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.inizializedApp()}},{key:"render",value:function(){return this.props.inizialized?Object(m.jsxs)("div",{className:"app-wrapper",children:[Object(m.jsx)(A,{}),Object(m.jsx)(S,{}),Object(m.jsxs)("div",{className:"app-wrapper-content",children:[Object(m.jsx)(f.b,{path:"/profile/:userId?",render:ue(oe)}),Object(m.jsx)(f.b,{path:"/dialogs",render:ue(de)}),Object(m.jsx)(f.b,{path:"/users",render:ue(le)}),Object(m.jsx)(f.b,{path:"/auth",render:function(){return Object(m.jsx)(J,{})}})]})]}):Object(m.jsx)(V.a,{})}}]),n}(c.a.Component),be=Object(X.d)(Object(x.b)((function(e){return{inizialized:e.app.inizialized}}),{inizializedApp:function(){return function(e){var t=e(F());Promise.all([t]).then((function(){return e({type:"INIZIALIZED_APP"})}))}}}))(fe),je=function(){return Object(m.jsx)(b.a,{children:Object(m.jsx)(x.a,{store:se,children:Object(m.jsx)(be,{})})})};s.a.render(Object(m.jsx)(je,{}),document.getElementById("root")),r()},61:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"this field is required"},a=function(e){return function(t){if(t.length>e)return"this field consists more then ".concat(e," symbols")}}},62:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return o}));var r=n(5),a=(n(0),n(86)),c=n.n(a),i=n(1),s=function(e){return function(t){var n=t.meta.touched&&t.meta.error;return Object(i.jsxs)("div",{className:c.a.formControl+" "+(n?c.a.error:""),children:[Object(i.jsx)("div",{children:Object(i.jsx)(e,Object(r.a)(Object(r.a)({},t.input),t))}),n&&Object(i.jsx)("span",{children:t.meta.error})]})}},u=s("textarea"),o=s("input")},64:function(e,t,n){e.exports={friendsBlock:"Friend_friendsBlock__3P7LE",friendItem:"Friend_friendItem__322Wy"}},85:function(e,t,n){e.exports={header:"Header_header__12PQl",login:"Header_login__1JKkX"}},86:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3h0_a",error:"FormsControls_error__3Ho4e"}},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"f",(function(){return b})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return p}));var r=n(9),a=n.n(r),c=n(19),i=n(30),s=n(5),u=n(21),o={PostData:[{id:1,message:"Hi, how are you?",likesCount:"12 likes"},{id:2,message:"It's my first post",likesCount:"0 likes"},{id:3,message:"Blabla",likesCount:"0 likes"},{id:4,message:"Blabla",likesCount:"0 likes"}],userProfile:null,status:""},d=function(e){return{type:"ADD-POST",newMessagePost:e}},l=function(e){return{type:"SET_USER_STATUS",status:e}},f=function(e){return{type:"DELETE_POST",postId:e}},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(l(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.setStatus(e);case 2:0===t.sent.data.resultCode&&n(l(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newMessagePost,likesCount:"0 likes"},r=Object(s.a)(Object(s.a)({},e),{},{PostData:[].concat(Object(i.a)(e.PostData),[n])});return r;case"SET_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{userProfile:t.profile});case"SET_USER_STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"DELETE_POST":return Object(s.a)(Object(s.a)({},e),{},{PostData:Object(i.a)(e.PostData).filter((function(e){return e.id!==t.postId}))});default:return e}}},91:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.af2ae354.svg",a=n(1);t.a=function(){return Object(a.jsx)("div",{style:{width:"400px"},children:Object(a.jsx)("img",{src:r,alt:"preloader"})})}}},[[290,1,2]]]);
//# sourceMappingURL=main.33c1cb53.chunk.js.map