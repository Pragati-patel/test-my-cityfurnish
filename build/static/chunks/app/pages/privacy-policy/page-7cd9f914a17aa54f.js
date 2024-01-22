(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1365],{13902:function(e,t,i){"use strict";var a=i(86006),r=i(46750),n=i(40431),s=i(70184),l=i(90300),o=i(10854),c=i(86979),_=i.n(c),d=a.createContext(),p={initialChunks:{}},u="PENDING",h="REJECTED",y=function(e){var t=function(t){return a.createElement(d.Consumer,null,function(i){return a.createElement(e,Object.assign({__chunkExtractor:i},t))})};return e.displayName&&(t.displayName=e.displayName+"WithChunkExtractor"),t},f=function(e){return e};function v(e){var t=e.defaultResolveComponent,i=void 0===t?f:t,c=e.render,d=e.onLoad;function v(e,t){void 0===t&&(t={});var f="function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e,v={};function m(e){return t.cacheKey?t.cacheKey(e):f.resolve?f.resolve(e):"static"}function x(e,a,r){var n=t.resolveComponent?t.resolveComponent(e,a):i(e);if(t.resolveComponent&&!(0,o.isValidElementType)(n))throw Error("resolveComponent returned something that is not a React component!");return _()(r,n,{preload:!0}),n}var N=function(e){var t=m(e),i=v[t];return i&&i.status!==h||((i=f.requireAsync(e)).status=u,v[t]=i,i.then(function(){i.status="RESOLVED"},function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:f.resolve(e),chunkName:f.chunkName(e),error:t?t.message:t}),i.status=h})),i},g=y(function(e){function i(i){var a;return((a=e.call(this,i)||this).state={result:null,error:null,loading:!0,cacheKey:m(i)},!function(e,t){if(!e){var i=Error("loadable: "+t);throw i.framesToPop=1,i.name="Invariant Violation",i}}(!i.__chunkExtractor||f.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),i.__chunkExtractor)?(!1===t.ssr||(f.requireAsync(i).catch(function(){return null}),a.loadSync(),i.__chunkExtractor.addChunk(f.chunkName(i))),(0,s.Z)(a)):(!1!==t.ssr&&(f.isReady&&f.isReady(i)||f.chunkName&&p.initialChunks[f.chunkName(i)])&&a.loadSync(),a)}(0,l.Z)(i,e),i.getDerivedStateFromProps=function(e,t){var i=m(e);return(0,n.Z)({},t,{cacheKey:i,loading:t.loading||t.cacheKey!==i})};var a=i.prototype;return a.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===h&&this.setCache(),this.state.loading&&this.loadAsync()},a.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},a.componentWillUnmount=function(){this.mounted=!1},a.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},a.getCacheKey=function(){return m(this.props)},a.getCache=function(){return v[this.getCacheKey()]},a.setCache=function(e){void 0===e&&(e=void 0),v[this.getCacheKey()]=e},a.triggerOnLoad=function(){var e=this;d&&setTimeout(function(){d(e.state.result,e.props)})},a.loadSync=function(){if(this.state.loading)try{var e=f.requireSync(this.props),t=x(e,this.props,j);this.state.result=t,this.state.loading=!1}catch(e){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:f.resolve(this.props),chunkName:f.chunkName(this.props),error:e?e.message:e}),this.state.error=e}},a.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then(function(t){var i=x(t,e.props,j);e.safeSetState({result:i,loading:!1},function(){return e.triggerOnLoad()})}).catch(function(t){return e.safeSetState({error:t,loading:!1})}),t},a.resolveAsync=function(){var e=this.props;return N((e.__chunkExtractor,e.forwardedRef,(0,r.Z)(e,["__chunkExtractor","forwardedRef"])))},a.render=function(){var e=this.props,i=e.forwardedRef,a=e.fallback,s=(e.__chunkExtractor,(0,r.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),l=this.state,o=l.error,_=l.loading,d=l.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===u)throw this.loadAsync();if(o)throw o;var p=a||t.fallback||null;return _?p:c({fallback:p,result:d,options:t,props:(0,n.Z)({},s,{ref:i})})},i}(a.Component)),j=a.forwardRef(function(e,t){return a.createElement(g,Object.assign({forwardedRef:t},e))});return j.displayName="Loadable",j.preload=function(e){j.load(e)},j.load=function(e){return N(e)},j}return{loadable:v,lazy:function(e,t){return v(e,(0,n.Z)({},t,{suspense:!0}))}}}var m=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,i=e.props;return a.createElement(t,i)}}),x=m.loadable,N=m.lazy,g=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,i=e.props;return i.children?i.children(t):null}}),j=g.loadable,k=g.lazy;x.lib=j,N.lib=k,t.ZP=x},77356:function(e,t,i){Promise.resolve().then(i.bind(i,84462))},84462:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var a=i(9268);i(86006);var r=i(18160),n=i(36945),s=i(64114),l=i(84285),o=i.n(l),c=i(21530),_=i(71896),d=i(56008),p=()=>{var e,t;let i=(0,d.useRouter)();return(0,a.jsxs)("div",{className:o().wrapper,children:[(0,a.jsx)("div",{className:o().container,children:(0,a.jsxs)("ul",{className:o().listings,children:[(0,a.jsxs)("li",{className:o().list,children:[(0,a.jsx)("a",{href:"/",className:o().route_text,onClick:()=>{i.push("/")},children:"Home"}),(0,a.jsx)(c.Xs,{size:12,color:"#71717A"})]}),(0,a.jsx)("li",{className:o().list,children:(0,a.jsx)("p",{className:"".concat(o().route_text," !font-medium "),children:"Privacy Policy"})})]})}),(0,a.jsx)("h1",{className:"".concat(o().heading_container," !tracking-[-0.48px]"),children:"Privacy Policy"}),(0,a.jsx)("div",{className:o().details,children:(0,a.jsxs)("div",{className:o().privacy_policy_detail_text,children:[_.privacy_policy.para_1.firts_part,(0,a.jsx)("a",{className:o().privacy_policy_detail_link,href:_.privacy_policy.para_1.link_part,children:_.privacy_policy.para_1.link_part}),_.privacy_policy.para_1.last_part]})}),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:o().privacy_policy_detail_text,children:['This Privacy Policy covers the information for Cityfurnish India Private Limited("Cityfurnish" and/or "We") collects from the user(s) ("User(s)" and/or "You") of',(0,a.jsx)("a",{className:o().privacy_policy_detail_link,href:_.privacy_policy.para_2.first_link,children:_.privacy_policy.para_2.first_link}),(0,a.jsx)("span",{className:"px-1",children:'("website")'}),_.privacy_policy.para_2.second_part,(0,a.jsx)("a",{className:o().privacy_policy_detail_link,href:_.privacy_policy.para_2.second_link,children:_.privacy_policy.para_2.second_link}),_.privacy_policy.para_2.last_part]})}),(0,a.jsxs)("div",{className:o().details_principles,children:[(0,a.jsx)("h2",{className:o().privacy_policy_detail_heading,children:_.privacy_policy.principles.heading}),null===(e=_.privacy_policy.principles.points)||void 0===e?void 0:e.map((e,t)=>(0,a.jsx)("li",{className:o().privacy_policy_detail_point,children:e},t.toString()))]}),(0,a.jsxs)("div",{className:o().details_information_collection,children:[(0,a.jsx)("h2",{className:o().privacy_policy_detail_heading,children:_.privacy_policy.information_collection.heading}),(0,a.jsx)("p",{className:"".concat(o().privacy_policy_detail_text," lg:mt-4 mt-3 mb-4"),children:_.privacy_policy.information_collection.subheading}),null===(t=_.privacy_policy.information_collection.points)||void 0===t?void 0:t.map((e,t)=>(0,a.jsxs)("div",{className:o().list_point,children:[(0,a.jsx)("div",{className:" mt-2 mr-2",children:(0,a.jsx)("p",{className:o().dot})}),(0,a.jsx)("div",{className:o().privacy_policy_detail_text,children:e},t.toString())]},t.toString()))]}),(0,a.jsx)("div",{children:(0,a.jsxs)("p",{className:o().privacy_policy_detail_text,children:[_.privacy_policy.para_3.firts_part,'("Cityfurnish Entities") and its joint ventures.']})}),(0,a.jsx)("div",{className:o().details_fourth,children:(0,a.jsxs)("p",{className:o().privacy_policy_detail_text,children:[_.privacy_policy.para_4.firts_part,(0,a.jsxs)("a",{href:"mailto:hello@cityfurnish.com",className:o().privacy_policy_detail_link,children:["hello@cityfurnish.com"," "]})]})}),(0,a.jsx)("div",{className:o().last_details,children:(0,a.jsxs)("p",{className:o().privacy_policy_detail_text,children:[_.privacy_policy.para_5.firts_part,'("Platform")',_.privacy_policy.para_5.second_part,'("Delivery"),',_.privacy_policy.para_5.third_part]})})]})},u=i(3939),h=i(13902);let y=(0,h.ZP)(()=>Promise.resolve().then(i.bind(i,3939)),{fallback:(0,a.jsx)(u.FooterSkeleton,{})});var f=function(){return(0,a.jsxs)("div",{className:"large_layout",children:[(0,a.jsx)(r.Z,{}),(0,a.jsx)(n.Z,{}),(0,a.jsx)(s.Z,{}),(0,a.jsx)(p,{}),(0,a.jsx)(y,{})]})}},84285:function(e){e.exports={wrapper:"style_wrapper__6EjA0",container:"style_container__FUd9j",listings:"style_listings__RAtqj",list:"style_list__HCsyu",route_text:"style_route_text__Hl6mu",heading_container:"style_heading_container__Pv08I",privacy_policy_detail_text:"style_privacy_policy_detail_text__MbgMC",privacy_policy_detail_link:"style_privacy_policy_detail_link__b4x53",details:"style_details__rCTza",privacy_policy_detail_heading:"style_privacy_policy_detail_heading__yRzUJ",privacy_policy_detail_point:"style_privacy_policy_detail_point__vAtAy",last_details:"style_last_details__ogQQL",details_fourth:"style_details_fourth___14gU",details_information_collection:"style_details_information_collection__TY5Kz",details_principles:"style_details_principles__J__pv",dot:"style_dot__bYb6U",list_point:"style_list_point__jRxho"}},70184:function(e,t,i){"use strict";function a(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}i.d(t,{Z:function(){return a}})}},function(e){e.O(0,[3791,3287,2775,5625,5639,6680,4947,3296,8121,372,9173,1524,8166,5852,6738,6877,6130,7557,261,8372,2329,5400,1053,3939,9253,2961,1744],function(){return e(e.s=77356)}),_N_E=e.O()}]);