(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[4],{291:function(n,e,t){"use strict";e.a=t.p+"static/media/user.96156881.png"},293:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r=t(90);function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,o=!1,s=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(c){o=!0,s=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw s}}return t}}(n,e)||Object(r.a)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},298:function(n,e,t){n.exports={person:"Users_person__3aA72"}},299:function(n,e,t){n.exports={selectedPage:"Pagginator_selectedPage__1HJkp",page:"Pagginator_page__1Rgo8",pagginator:"Pagginator_pagginator__36OQg"}},302:function(n,e,t){"use strict";t.r(e);var r=t(47),o=t(48),s=t(50),i=t(49),u=t(0),c=t.n(u),a=t(14),l=t(10),p=t(122),g=t(91),f=t(5),h=t(13),d=t(298),b=t.n(d),j=t(291),v=t(1),w=function(n){var e=n.id,t=n.photos,r=n.name,o=n.status,s=n.followed,i=n.unfollowSuccessThunkAction,u=n.followSuccessThunkAction,c=n.isFollowingProgress;return Object(v.jsxs)("div",{className:b.a.person,children:[Object(v.jsx)(h.b,{to:"/profile/"+e,children:Object(v.jsx)("img",{src:t.small?t.small:j.a,alt:"persons photos"})}),Object(v.jsx)("div",{children:s?Object(v.jsx)("button",{disabled:c.some((function(n){return n===e})),onClick:function(){i(e)},children:"Unfollow"}):Object(v.jsx)("button",{disabled:c.some((function(n){return n===e})),onClick:function(){u(e)},children:"Follow"})}),Object(v.jsx)("div",{children:r}),Object(v.jsx)("div",{children:o}),Object(v.jsx)("div",{children:"country"}),Object(v.jsx)("div",{children:"city"})]},e)},P=t(293),y=t(299),O=t.n(y),m=function(n){for(var e=Math.ceil(n.usersCounts/n.pageSize),t=Object(u.useState)(1),r=Object(P.a)(t,2),o=r[0],s=r[1],i=(o-1)*n.portionUsers+1,c=o*n.portionUsers,a=[],l=1;l<=e;l++)a.push(l);return Object(v.jsxs)("div",{className:O.a.pagginator,children:[o>1&&Object(v.jsx)("button",{onClick:function(){return s(o-1)},children:"Prev"}),a.filter((function(n){return n>=i&&n<=c})).map((function(e){return Object(v.jsx)("span",{onClick:function(){return n.onPageChanged(e)},className:O.a.page+" "+(e===n.currentPage?O.a.selectedPage:""),children:e+" "})})),Object(v.jsx)("button",{onClick:function(){return s(o+1)},children:"Next"})]})},x=function(n){return Object(v.jsxs)("div",{children:[Object(v.jsx)(m,{portionUsers:n.portionUsers,usersCounts:n.usersCounts,pageSize:n.pageSize,onPageChanged:n.onPageChanged,currentPage:n.currentPage}),n.users.map((function(e){return Object(v.jsx)(w,Object(f.a)({id:e.id,photos:e.photos,name:e.name,status:e.status,followed:e.followed},n))}))]})};function k(n,e){return n===e}function S(n,e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}function A(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return typeof n})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return e}var C=function(n){for(var e=arguments.length,t=Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];var s=0,i=r.pop(),u=A(r),c=n.apply(void 0,[function(){return s++,i.apply(null,arguments)}].concat(t)),a=n((function(){for(var n=[],e=u.length,t=0;t<e;t++)n.push(u[t].apply(null,arguments));return c.apply(null,n)}));return a.resultFunc=i,a.dependencies=u,a.recomputations=function(){return s},a.resetRecomputations=function(){return s=0},a}}((function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k,t=null,r=null;return function(){return S(e,t,arguments)||(r=n.apply(null,arguments)),t=arguments,r}}));var F=C((function(n){return n.usersPage.users}),(function(n){return n.filter((function(n){return!0}))})),U=function(n){return n.usersPage.pageSize},T=function(n){return n.usersPage.portionUsers},_=function(n){return n.usersPage.usersCounts},z=function(n){return n.usersPage.currentPage},N=function(n){return n.usersPage.isFetching},J=function(n){return n.usersPage.isFollowingProgress},E=function(n){Object(s.a)(t,n);var e=Object(i.a)(t);function t(){var n;Object(r.a)(this,t);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(n=e.call.apply(e,[this].concat(s))).onPageChanged=function(e){n.props.getUsersThunkAction(e,n.props.pageSize)},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunkAction(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[this.props.isFetching?Object(v.jsx)(g.a,{}):null,Object(v.jsx)(x,{usersCounts:this.props.usersCounts,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,isFollowingProgress:this.props.isFollowingProgress,toggleFollowingProgress:this.props.toggleFollowingProgress,unfollowSuccessThunkAction:this.props.unfollowSuccessThunkAction,followSuccessThunkAction:this.props.followSuccessThunkAction,portionUsers:this.props.portionUsers})]})}}]),t}(c.a.Component);e.default=Object(l.d)(Object(a.b)((function(n){return{users:F(n),pageSize:U(n),usersCounts:_(n),currentPage:z(n),isFetching:N(n),isFollowingProgress:J(n),portionUsers:T(n)}}),{follow:p.b,unfollow:p.f,toggleFollowingProgress:p.e,getUsersThunkAction:p.d,unfollowSuccessThunkAction:p.g,followSuccessThunkAction:p.c}))(E)}}]);
//# sourceMappingURL=4.9a9b6a0f.chunk.js.map