(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3939],{3939:function(e,t,s){"use strict";s.r(t),s.d(t,{FooterSkeleton:function(){return g}});var o=s(9268),n=s(86006),a=s(48489),l=s.n(a),i=s(76394),r=s.n(i),c=s(21530),_=s(8038),d=s(23747),p=s(66628),h=s(69354),v=s(9238),x=s(99466);t.default=e=>{var t,s,a,i,v,g;let{params:m}=e,{checkAuthentication:f}=(0,x.J)(),u=(0,p.v9)(e=>e.homePagedata.cityName),y=(0,p.v9)(e=>e.homePagedata.isLogin),k=new Date().getFullYear(),j={contact:"080-66084700",time:"(09AM to 09PM)",go_to_top:"Go to top"},[N,w]=(0,n.useState)();(0,n.useEffect)(()=>{w(y)},[y]);let T=async()=>{let e=await f();w(e)};(0,n.useEffect)(()=>{T()},[N]);let C=[{head:"Categories",points:[{text:"All",link:"/".concat(u.replace(/\//g,"-").toLowerCase(),"/rent")},{text:"Home Furniture",link:"/".concat(u.replace(/\//g,"-").toLowerCase(),"/home-furniture-rental")},{text:"Appliances",link:"/".concat(u.replace(/\//g,"-").toLowerCase(),"/home-appliances-rental")},{text:"Workstations",link:"/".concat(u.replace(/\//g,"-").toLowerCase(),"/workstations")},{text:"Combos",link:"/".concat(u.replace(/\//g,"-").toLowerCase(),"/rental-packages")},{text:"Furniture Sale",link:"https://zior.in/"}]},{head:"Cityfurnish",points:[{text:"About US",link:"/pages/about"},{text:"Refer a Friend",link:N?"/referral":"/pages/refer-a-friend"},{text:"Career",link:"/pages/careers"},{text:"Contact US",link:"/pages/contact-us"}]},{head:"Information",points:[{text:"Blog",link:"https://cityfurnish.com/blog/"},{text:"FAQ",link:"/pages/faq"},{text:"Sample Rental Agreement",link:"/pages/rentalagreement"},{text:"Offers",link:"/pages/offers"},{text:"Benefits",link:"/pages/benefits"}]},{head:"Resources",points:[{text:"Privacy Policy",link:"/pages/privacy-policy"},{text:"Terms & Conditions",link:"/pages/terms-of-use"}]}],[S,b]=(0,n.useState)(C),[I,R]=(0,n.useState)([]),q=null===(s=(0,h.$W)("cityId"))||void 0===s?void 0:null===(t=s.toString())||void 0===t?void 0:t.replace(/"/g,""),F=parseFloat(q),{refetch:z}=(0,d.a)("category-content",_.z.categoryContent,"?cityId=".concat(F,"&categoryId=27"));return(0,n.useEffect)(()=>{"category"===m&&z().then(e=>{var t;R(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.data)}).catch(e=>console.log(e))},[]),(0,n.useEffect)(()=>{b(C)},[u]),(0,o.jsxs)("div",{className:l().footer_wrapper,children:[I.map((e,t)=>(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:l().head,children:e.cat_heading}),(0,o.jsx)("p",{className:l().desc,dangerouslySetInnerHTML:{__html:e.cat_desc}})]},t.toString())),(0,o.jsxs)("div",{className:l().pointers_div,children:[null==S?void 0:S.map((e,t)=>{var s;return(0,o.jsxs)("div",{className:l().head_wrapper,children:[(0,o.jsx)("h2",{className:"!text-[#222] ".concat(l().head),children:e.head}),(0,o.jsx)("div",{className:l().points_div,children:null==e?void 0:null===(s=e.points)||void 0===s?void 0:s.map((e,s)=>(0,o.jsx)("a",{href:"Refer a Friend"===e.text?N?"/referral":"/pages/refer-a-friend":e.link,"aria-label":e.text,target:"Furniture Sale"===e.text?"_blank":"_self",rel:"noopener  noreferrer",children:(0,o.jsx)("p",{className:l().points,onClick:()=>{(null==e?void 0:e.text)==="Workstations"?(0,h.qQ)("subCategory","Workstations"):(0,h.qQ)("subCategory","All")},children:null==e?void 0:e.text})},t.toString()))})]},t.toString())}),(0,o.jsxs)("div",{className:l().need_help_box,children:[(0,o.jsx)("h2",{className:"!text-[#222] ".concat(l().head),children:"Need Help"}),(0,o.jsxs)("div",{className:l().contact_div,children:[(0,o.jsx)(r(),{className:"".concat(l().phoneImg," pointer-events-none"),alt:"phone-icon",src:c.Oq.Phone,loading:"lazy"}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{className:l().contact,children:[" ",(0,o.jsx)("a",{href:"tel:".concat(j.contact),target:"_self",rel:"noopener  noreferrer",children:j.contact})]}),(0,o.jsx)("p",{className:l().time,children:j.time})]})]}),(0,o.jsx)("div",{className:l().social_media_icons_div,children:null===(i=c.Oq)||void 0===i?void 0:null===(a=i.social_media_icons)||void 0===a?void 0:a.map((e,t)=>(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener  noreferrer","aria-label":null==e?void 0:e.icon,children:(0,o.jsx)("img",{alt:null==e?void 0:e.icon,src:null==e?void 0:e.icon,className:"pointer-events-none",onClick:()=>console.log("item.link"),loading:"lazy"})},t.toString()))})]})]}),(0,o.jsx)("div",{className:l().line}),(0,o.jsxs)("div",{className:"xl:hidden",children:[(0,o.jsxs)("div",{className:l().contact_div,children:[(0,o.jsx)(r(),{className:"".concat(l().phoneImg," pointer-events-none"),alt:"phone-icon",src:c.Oq.Phone,loading:"lazy"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:l().contact,children:(0,o.jsx)("a",{href:"tel:".concat(j.contact),target:"_self",rel:"noopener  noreferrer",children:j.contact})}),(0,o.jsx)("p",{className:l().time,children:j.time})]})]}),(0,o.jsx)("div",{className:l().social_media_icons_div,children:null===(g=c.Oq)||void 0===g?void 0:null===(v=g.social_media_icons)||void 0===v?void 0:v.map((e,t)=>(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener  noreferrer","aria-label":null==e?void 0:e.icon,children:(0,o.jsx)("img",{alt:null==e?void 0:e.icon,src:null==e?void 0:e.icon,loading:"lazy",className:"pointer-events-none"})},t.toString()))})]}),(0,o.jsxs)("div",{className:l().copyRight_div,children:[(0,o.jsx)("p",{className:l().copyTxt,children:"\xa9 Copyright ".concat(k," Cityfurnish. All Rights Reserved.")}),(0,o.jsxs)("div",{className:l().goToTopDiv,onClick:e=>{e.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"})},children:[(0,o.jsx)(r(),{src:c.Oq.GoToTopIcon,alt:"go-to-top-icon",className:"".concat(l().goToTopIcon," pointer-events-none"),loading:"lazy"}),(0,o.jsx)("p",{className:l().goToTopTxt,children:j.go_to_top})]})]})]})};let g=()=>(0,o.jsxs)("div",{className:l().footer_wrapper_skeleton,children:[(0,o.jsx)("div",{className:l().skeleton_div_wrapper,children:[1,2,3,4,5,6].map(e=>(0,o.jsxs)("div",{className:l().pointers_div_skeleton,children:[(0,o.jsx)("div",{className:l().head_wrapper_skeleton,children:(0,o.jsx)(v.Z,{variant:"text",className:"w-full h-full"})}),[1,2,3,4].map(e=>(0,o.jsx)("div",{className:l().points_skeleton,children:(0,o.jsx)(v.Z,{variant:"text",className:"w-full h-full"})},e.toString()))]},e.toString()))}),(0,o.jsx)("div",{className:l().line}),(0,o.jsxs)("div",{className:l().copyRight_div_skeleton,children:[(0,o.jsx)("div",{className:l().copyright_skeleton,children:(0,o.jsx)(v.Z,{variant:"text",className:"w-full h-full"})}),(0,o.jsxs)("div",{className:l().goToTopDiv,children:[(0,o.jsx)(v.Z,{variant:"circular",width:25,height:25}),(0,o.jsx)(v.Z,{variant:"text",width:50,height:10})]})]})]})},48489:function(e){e.exports={footer_wrapper:"style_footer_wrapper__k6U1Q",head:"style_head__eD6X1",desc:"style_desc__BM3CO",pointers_div:"style_pointers_div__TfDME",points_div:"style_points_div__MBBaE",points:"style_points__KSanI",line:"style_line__SmPql",contact_div:"style_contact_div__t9EjJ",phoneImg:"style_phoneImg__vg5KA",contact:"style_contact__5GEOW",time:"style_time__FHDmz",social_media_icons_div:"style_social_media_icons_div__9ygw2",sm_icon:"style_sm_icon__g8znT",copyRight_div:"style_copyRight_div__cyIYp",copyTxt:"style_copyTxt__mnzSF",goToTopDiv:"style_goToTopDiv__x56bM",goToTopIcon:"style_goToTopIcon__6Rn8N",goToTopTxt:"style_goToTopTxt__wtq9t",head_wrapper:"style_head_wrapper___BJfD",need_help_box:"style_need_help_box__k90wx",footer_wrapper_skeleton:"style_footer_wrapper_skeleton__sLaLg",head_wrapper_skeleton:"style_head_wrapper_skeleton__kweUJ",pointers_div_skeleton:"style_pointers_div_skeleton__nTt7C",points_skeleton:"style_points_skeleton__tJ4MI",skeleton_div_wrapper:"style_skeleton_div_wrapper__oXYMk",copyright_skeleton:"style_copyright_skeleton__RqfQs",copyRight_div_skeleton:"style_copyRight_div_skeleton__Np_Bn"}}}]);