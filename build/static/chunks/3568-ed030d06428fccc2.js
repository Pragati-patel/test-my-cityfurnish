(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3568],{93214:function(e,a,s){"use strict";var t=s(9268);s(86006);var l=s(24069),r=s.n(l),i=s(21530),n=s(56008);a.Z=e=>{let{isHalfYearly:a,item:s,plans:l}=e,c=(0,n.useRouter)();return(0,t.jsxs)("div",{className:r().card,onClick:()=>c.push("/choose-products/".concat(s.id,"/").concat(a?6:12)),children:[(0,t.jsx)("p",{className:r().card_head,children:s.product_name}),(0,t.jsx)("p",{className:r().card_desc,children:s.description}),(0,t.jsxs)("p",{className:r().card_offer,children:[l.slots[s.id].length," products @ just"]}),(0,t.jsxs)("p",{className:r().card_price,children:[(0,t.jsx)("span",{className:r().rupeeIcon,children:"₹"}),s.attr_price,"/mo"]}),(0,t.jsx)("button",{className:r().btn,children:"Select plan"}),s.product_label&&(0,t.jsxs)("div",{className:r().tag,children:[(0,t.jsx)("img",{src:"".concat(i.JH+"popular-icon.svg"),className:r().leaf_icon,loading:"lazy",alt:"LeafIcon"}),s.product_label]})]})}},42035:function(e,a,s){"use strict";s.d(a,{Z:function(){return M}});var t=s(9268),l=s(86006),r=s(40269),i=s.n(r),n=s(76394),c=s.n(n),o=s(21530),d=s(23002),_=s(8038),h=s(23747),p=s(37610),u=s(66628),v=s(98313),m=s(56008),g=s(69354),f=s(24214),x=s(90490),y=s(46285),j=s(23850),N=s(67732),w=s.n(N),k=s(71896),b=s(99466),C=e=>{var a,s,r;let{toggleDrawer:i,open:n,toggleLoginModal:c,setClick:d}=e,{checkAuthentication:h}=(0,b.J)(),p=(0,m.useRouter)(),v=(0,u.v9)(e=>e.homePagedata.isLogin),g=(0,u.v9)(e=>{var a;return null==e?void 0:null===(a=e.citymax)||void 0===a?void 0:a.isHalfYearly}),[y,N]=(0,l.useState)(),[C,I]=(0,l.useState)();(0,l.useEffect)(()=>{I(v)},[v]);let z=()=>{f.Z.get(x.v2+_.z.cityMaxPage.getAllPlans).then(e=>{var a;N(null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.data)}).catch(e=>console.log(e))};(0,l.useEffect)(()=>{z()},[]);let L=async()=>{let e=await h();I(e)};return(0,l.useEffect)(()=>{L()},[C]),(0,t.jsx)(j.Z,{anchor:"left",open:n,onClose:i,classes:{paper:w().customDrawer},children:(0,t.jsxs)("div",{className:"".concat(w().drawer_wrapper," "),children:[(0,t.jsx)("div",{onClick:i,className:w().close_icon,children:(0,t.jsx)(o.x8,{color:"#45454A",size:20})}),(0,t.jsx)("img",{className:w().logo,src:"".concat(o.JH+"citymax_final.svg")}),(0,t.jsxs)("div",{className:w().content_wrapper,children:[(0,t.jsx)("div",{className:w().map_wrapper,children:null==y?void 0:null===(a=y.citymax_plans)||void 0===a?void 0:a.filter(e=>g?"6 Months"===e.attr_name:"12 Months"===e.attr_name).map((e,a)=>(0,t.jsx)("div",{onClick:()=>p.push("/choose-products/".concat(e.id,"/").concat(g?6:12)),className:w().map_item,children:e.product_name},a))}),(0,t.jsx)("div",{className:w().line}),(0,t.jsx)("div",{className:w().map_wrapper,children:null===(s=k.landing_page.header.menuList2)||void 0===s?void 0:s.map((e,a)=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("a",{href:e.link,target:0===a?"_blank":"_self",rel:"noreferrer",className:w().map_item,children:e.item},a.toString())}))}),(0,t.jsx)("div",{className:w().line}),(0,t.jsx)("div",{className:w().map_wrapper,children:null===(r=k.landing_page.header.menuList3)||void 0===r?void 0:r.map((e,a)=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("a",{className:w().map_item,target:0===a?"_blank":"_self",rel:"noreferrer",onClick:()=>{C?p.push("/usersettings"):(i(),d("profile"),c(!0))},href:3===a?C&&"/usersettings":e.link,children:null==e?void 0:e.item},a.toString()),2===a&&(0,t.jsx)("div",{className:"".concat(w().line," mt-4")})]}))}),(0,t.jsx)("a",{href:"/",target:"_blank",className:"cursor-pointer",children:(0,t.jsxs)("div",{className:w().button,children:[(0,t.jsx)("p",{className:w().back_txt,children:"Back to Cityfurnish"}),(0,t.jsx)("img",{src:"".concat(o.JH+"home-cityfurnish.svg"),className:w().home_icon})]})})]})]})})};s(59648);var I=s(35397),z=s(78494),L=s(98444),P=s(86046),M=e=>{var a,s;let{zIndex:r}=e,{checkAuthentication:n}=(0,b.J)(),j=(0,l.useRef)(null),N=(0,u.I0)(),w=(0,m.useRouter)(),k=(0,u.v9)(e=>e.order.isModalOpen),{cityList:M}=(0,v.CG)(e=>e.homePagedata),{refetch:E}=(0,h.a)("city-list",_.z.cityList),{refetch:Z}=(0,h.a)("trending-search",_.z.trendingSearchConstants),{refetch:S}=(0,h.a)("sideBarMenuLists",_.z.sidebarMenuLists),D=(0,u.v9)(e=>e.homePagedata),[q,J]=l.useState(!1),R=(0,u.v9)(e=>e.categoryPageData),U=null==R?void 0:null===(a=R.savedProducts)||void 0===a?void 0:a.length,[H,K]=(0,l.useState)(!1),[Q,B]=(0,l.useState)(),[F,O]=(0,l.useState)(!1),[$,V]=(0,l.useState)(),[Y,A]=(0,l.useState)(),[T,W]=(0,l.useState)(!1),X=(0,y.pe)((0,g.$o)("_ga")),G=(0,y.qW)((0,g.$o)("tempUserID"));(0,l.useEffect)(()=>{B(D.isLogin)},[D.isLogin]),console.log(Q,D.isLogin,"huh");let ee=e=>{N((0,p.V)(e)),O(e)},ea=(0,g.$o)("cityId");ea||(0,g.qQ)("cityId",46),(0,l.useEffect)(()=>{let e=(0,g.$o)("cityId")||46;E().then(a=>{var s,t,l;if(e){let s=a.data.data.find(a=>(null==a?void 0:a.id)===e).list_value;N((0,p._6)(s))}N((0,p.Y5)(null==a?void 0:null===(s=a.data)||void 0===s?void 0:s.data)),N((0,p.E8)(null==a?void 0:null===(l=a.data)||void 0===l?void 0:null===(t=l.data[0])||void 0===t?void 0:t.id))}).catch(e=>console.log(e)),Z().then(e=>{}).catch(e=>console.log(e)),S().then(e=>{var a;N((0,p.vB)(null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.data))}),(null==D?void 0:D.category.length)||f.Z.get(x.v2+_.z.category).then(e=>{var a;N((0,p.i8)(null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.data))}).catch(e=>{console.log(e),N((0,p.i8)([]))})},[]);let es=(0,u.v9)(e=>e.cartPageData.cartItems.length),et=e=>{f.Z.get(x.v2+_.z.savedItems+"?cityId=".concat(ea,"&userId=").concat(e)).then(e=>{var a,s;N((0,z.tA)(null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.data));let t=null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.data.map(e=>null==e?void 0:e.id);N((0,z._L)(t))}).catch(e=>console.log(e))},el=async()=>{let e=await n();!0===e?B(!0):B(!1);let a=e?X:G;er(a),et(a)},er=e=>{f.Z.get(x.v2+_.z.addToCart.fetchCartItems(ea,e)).then(e=>{var a;N((0,p.fq)(null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.data)),N((0,p.hk)(!0))}).catch(e=>{console.log(e),N((0,p.hk)(!0))})};(0,l.useEffect)(()=>{el()},[Q]),(0,l.useEffect)(()=>{function e(e){j.current&&!j.current.contains(e.target)&&J(!1)}return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]);let ei={userId:null!=X?X:"",tempUserId:(0,y.qW)((0,g.$o)("tempUserID"))};(0,l.useEffect)(()=>{f.Z.post(x.v2+_.z.sessionUserUrl,ei).then(e=>{var a,s,t,l,r,i;if(X){localStorage.removeItem("user_id");let r=(0,y.HI)(null==e?void 0:null===(s=e.data)||void 0===s?void 0:null===(a=s.data)||void 0===a?void 0:a.userId);(0,g.qQ)("_ga",r),(0,g.qQ)("user_name",null==e?void 0:null===(l=e.data)||void 0===l?void 0:null===(t=l.data)||void 0===t?void 0:t.userName)}else(0,g.qQ)("tempUserID",(0,y.FT)(null==e?void 0:null===(i=e.data)||void 0===i?void 0:null===(r=i.data)||void 0===r?void 0:r.tempUserId))}).catch(e=>console.log(e))},[]);let en=()=>{K(!H)},ec=e=>{console.log("inn"),N((0,p.V)(e)),W(e)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I.Z,{closeModal:()=>ee(!1),isModalOpen:F,setIsLogin:e=>{B(e)},handleChangeRoute:()=>{"profile"===$?w.push("/usersettings"):"wishlist"===$&&w.push("/wishlist")}}),(0,t.jsx)(P.Z,{isModalOpen:T,closeModal:()=>ec(!1),userId:Q?X:G,city:Y}),(0,t.jsx)("div",{className:"".concat(k&&"!z-0"," ").concat(i().main),children:(0,t.jsxs)("div",{className:i().header_wrapper,children:[(0,t.jsxs)("div",{className:i().header_left_wrapper,children:[(0,t.jsx)("div",{onClick:en,children:(0,t.jsx)(c(),{src:o.PJ.Menu,alt:"menu-icon",className:i().hamburger_icon,loading:"lazy"})}),H&&(0,t.jsx)(C,{open:H,toggleDrawer:en,toggleLoginModal:e=>ee(e),setClick:e=>V(e)}),(0,t.jsx)("a",{href:"/citymax",onClick:e=>{e.preventDefault()},children:(0,t.jsx)("div",{className:i().logo,onClick:()=>w.push("/citymax"),children:(0,t.jsx)("img",{src:"https://d3juy0zp6vqec8.cloudfront.net/images/citymax_logo.png",alt:"CityMax"})})}),(0,t.jsx)("div",{className:i().header_city_wrapper,children:(0,t.jsx)("div",{className:i().header_city_name,children:(0,t.jsx)(d.Z,{Cities:M,DrawerName:"cities",toggleEmptyCartModal:ec,setCity:e=>A(e)})})}),(0,t.jsx)("a",{href:"/",target:"_blank",children:(0,t.jsxs)("div",{className:i().cityfurnish_wrapper,children:[(0,t.jsx)("img",{src:"".concat(o.JH+"home-cityfurnish.svg"),className:i().home_icon,alt:"cityfurnish"}),(0,t.jsx)("p",{className:i().cityfurnish_txt,children:"cityfurnish"})]})})]}),(0,t.jsx)("div",{className:i().header_right_wrapper,children:(0,t.jsxs)("div",{className:i().wishlist_link_wrapper,children:[(0,t.jsxs)("a",{href:Q&&"/wishlist",onClick:()=>{V("wishlist"),Q?w.push("/wishlist"):ee(!0)},children:[(0,t.jsx)("div",{className:"w-100 h-100 absolute z-10"}),(0,t.jsxs)("div",{className:"".concat(i().header_favorite_container," relative z-[-1]"),children:[(0,t.jsx)(c(),{src:o.PJ.Favorite,alt:"favorite",className:i().header_favorite,loading:"lazy"}),(null==R?void 0:null===(s=R.savedProducts)||void 0===s?void 0:s.length)>0&&(0,t.jsx)("div",{className:i().cart_badge,children:U})]})]}),(0,t.jsx)("div",{className:i().cart_link_wrapper,children:(0,t.jsxs)("a",{href:"/cart",children:[(0,t.jsx)("div",{className:"w-100 h-100 absolute z-10 cursor-pointer",onClick:()=>w.push("/cart")}),(0,t.jsx)(c(),{src:o.PJ.shoppingCard,alt:"shopping-card-icon",loading:"lazy",className:"".concat(i().header_shopping_card," relative z-[-1]")}),es>0&&(0,t.jsx)("div",{className:i().cart_badge,children:es})]})}),(0,t.jsx)("div",{className:"pt-[14px]  pb-[16px] cursor-pointer  ".concat(i().test),onMouseLeave:()=>{J(!1)},children:(0,t.jsx)("a",{onClick:()=>{V("profile"),Q?w.push("/usersettings"):ee(!0)},href:Q&&"/usersettings",rel:"noopner noreferrer",target:"_self","aria-label":"profile",children:(0,t.jsx)("div",{className:"relative z-20",onMouseEnter:e=>{e.preventDefault(),e.stopPropagation(),Q&&J(!0)},children:(0,t.jsx)(c(),{src:o.PJ.Profile,alt:"profile-icon",loading:"lazy",className:"".concat(i().header_profile_icon," relative z-10 pointer-events-none"),onClick:e=>e.preventDefault(),"aria-disabled":!0})})})}),null!==(0,y.pe)((0,g.$o)("_ga"))&&q&&(0,t.jsx)("div",{className:"pt-[14px]",onMouseEnter:()=>{J(!0)},children:(0,t.jsx)(L.Z,{setShowProfileDropdown:J})})]})})]})}),(0,t.jsx)("div",{className:i().end_line})]})}},24069:function(e){e.exports={card:"styles_card__7KdVn",card_head:"styles_card_head__PNgD8",card_desc:"styles_card_desc__hozaR",card_offer:"styles_card_offer__oP7_i",card_price:"styles_card_price__lPmBQ",rupeeIcon:"styles_rupeeIcon__7MOoO",btn:"styles_btn__J1UHa",tag:"styles_tag__qs_iL",leaf_icon:"styles_leaf_icon__tr6BY"}},67732:function(e){e.exports={customDrawer:"styles_customDrawer__uq5yf",close_icon:"styles_close_icon__C1tBI",drawer_wrapper:"styles_drawer_wrapper__evI_x",logo:"styles_logo__YQIgZ",content_wrapper:"styles_content_wrapper__MlEez",map_wrapper:"styles_map_wrapper__vZZFL",map_item:"styles_map_item__LdUsQ",line:"styles_line__Ck283",button:"styles_button___hgRX",home_icon:"styles_home_icon__7fXWK"}},40269:function(e){e.exports={main:"style_main__ejTX_",header_wrapper:"style_header_wrapper__tXzn4",hamburger_icon:"style_hamburger_icon__kJ4KV",logo:"style_logo__xZysd",home_icon:"style_home_icon__R64jY",cityfurnish_wrapper:"style_cityfurnish_wrapper__NSRqU",cityfurnish_txt:"style_cityfurnish_txt__woC6P",header_left_wrapper:"style_header_left_wrapper__pcx47",header_right_wrapper:"style_header_right_wrapper__uW6Ii",header_city_wrapper:"style_header_city_wrapper__pjT__",header_city_name:"style_header_city_name__CRPb5",header_favorite:"style_header_favorite__ZHlE0",header_shopping_card:"style_header_shopping_card__9iZ9b",cart_badge:"style_cart_badge__E8iMz",header_profile_icon:"style_header_profile_icon__L__nm",header_favorite_container:"style_header_favorite_container__s_KKl",header_favorite_count:"style_header_favorite_count__4GrcV",wishlist_link_wrapper:"style_wishlist_link_wrapper__ftqNK",cart_link_wrapper:"style_cart_link_wrapper__ImKoA",end_line:"style_end_line__Omdd_"}}}]);