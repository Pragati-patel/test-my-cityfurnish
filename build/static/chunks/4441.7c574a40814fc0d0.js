(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4441],{64441:function(e,t,n){"use strict";n.r(t);var o=n(9268),l=n(86006),a=n(66954),i=n.n(a),r=n(21530),s=n(76394),c=n.n(s),u=n(8522),d=n(8038),p=n(66628),v=n(37610),h=n(23747),f=n(48136),y=n(72852),m=n(69354),b=n(24214),_=n(90490);t.default=()=>{var e,t,n,a,s,g;let{reviews:k}=(0,p.v9)(e=>e.homePagedata),j="from ".concat(null==k?void 0:null===(t=k[0])||void 0===t?void 0:null===(e=t.fc_google_location_data[0])||void 0===e?void 0:e.total_review," customers"),[x,S]=l.useState(""),w=null===(a=localStorage.getItem("cityId"))||void 0===a?void 0:null===(n=a.toString())||void 0===n?void 0:n.replace(/"/g,""),E=parseFloat(w),{refetch:C}=(0,h.a)("google-reviews",d.z.googleReviews,"?cityId=".concat(E)),N=(0,p.I0)();(0,l.useEffect)(()=>{C().then(e=>{var t;N((0,v.GK)(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.data))}).catch(e=>console.log(e))},[E]),(0,l.useEffect)(()=>{b.Z.get(_.v2+d.z.googleReviewsLinks((0,m.$o)("cityId"))).then(e=>{var t,n;S(null==e?void 0:null===(n=e.data)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.newReviewUri)}).catch(e=>console.log(e))},[(0,m.$o)("cityId")]);let M=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e,t;let n=M.current;if(!n)return;let o=!1,l=function(l){o=!0,e=l.pageX-n.offsetLeft,t=n.scrollLeft},a=function(){o=!1};return n.addEventListener("mousemove",l=>{if(l.preventDefault(),!o)return;let a=l.pageX-n.offsetLeft,i=a-e;n.scrollLeft=t-i}),n.addEventListener("mousedown",l,!1),n.addEventListener("mouseup",a,!1),n.addEventListener("mouseleave",a,!1),()=>{n.removeEventListener("mousemove",l=>{if(l.preventDefault(),!o)return;let a=l.pageX-n.offsetLeft,i=a-e;n.scrollLeft=t-i}),n.removeEventListener("mousedown",l),n.removeEventListener("mouseup",a),n.removeEventListener("mouseleave",a)}},[]),(0,o.jsxs)("div",{className:i().wrapper,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:i().head,children:"See what people are saying"}),(0,o.jsxs)("div",{className:i().upper_div,children:[(0,o.jsxs)("h3",{className:i().rating_div,children:[null==k?void 0:null===(g=k[0])||void 0===g?void 0:null===(s=g.fc_google_location_data[0])||void 0===s?void 0:s.average_review,(0,o.jsx)("span",{className:i().star,children:(0,o.jsx)(r.ep,{color:"#FFCB45",size:24})}),"rating"]}),(0,o.jsx)("a",{href:x,target:"_blank",rel:"noreferrer",children:(0,o.jsx)(c(),{src:u.Pr.editIcon,alt:"editIcon",className:i().editIcon,loading:"lazy"})}),(0,o.jsx)("a",{href:x,target:"_blank",rel:"noreferrer",className:i().editlink,children:(0,o.jsxs)("div",{className:i().editBtn,children:[(0,o.jsx)(r.dY,{size:25}),(0,o.jsx)("p",{className:"text-[#222] font-medium",children:"Write a review"})]})})]}),(0,o.jsx)("h3",{className:i().subhead,children:j})]}),(0,o.jsx)("div",{className:i().card_wrapper,ref:M,children:null==k?void 0:k.map((e,t)=>{var n;return(0,o.jsxs)("div",{className:"".concat(i().card," ").concat(t===(null==k?void 0:k.length)-1&&"mr-[16px]"),children:[(0,o.jsxs)("div",{className:i().row,children:[(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"https://d3juy0zp6vqec8.cloudfront.net/images/google_review/".concat(null==e?void 0:e.user_image),alt:"profile-pic",className:"".concat(i().img," pointer-events-none"),loading:"lazy"})}),(0,o.jsxs)("div",{className:"ml-3 mr-7",children:[(0,o.jsx)("h3",{className:i().name,children:null==e?void 0:e.user_name}),(0,o.jsx)("div",{className:"flex gap-2",children:(0,o.jsx)(y.Z,{stop:5,emptySymbol:(0,o.jsx)(f.kRm,{size:16,color:"#fff",className:"mr-1"}),fullSymbol:(0,o.jsx)(f.kRm,{size:16,color:"#FFCB45",className:"mr-1"}),initialRating:null==e?void 0:null===(n=e.fc_google_location_data[0])||void 0===n?void 0:n.average_review,readonly:!0})})]})]}),(0,o.jsx)(r._8,{color:"#5391F7",size:30})]}),(0,o.jsx)("div",{className:i().content,children:(0,o.jsx)("p",{className:i().contentP,children:null==e?void 0:e.comment})})]},t.toString())})})]})}},66954:function(e){e.exports={wrapper:"style_wrapper__T8Qwr",head:"style_head__HJx9H",rating_div:"style_rating_div__sx4JH",star:"style_star__LW6Ym",upper_div:"style_upper_div__bQ4Bs",editIcon:"style_editIcon__xCMJt",subhead:"style_subhead__suz6e",card_wrapper:"style_card_wrapper__r5Sa_",card:"style_card__VQvIF",img:"style_img__foXSs",row:"style_row__zUZUp",content:"style_content__b3dhv",contentP:"style_contentP__prV0a",editBtn:"style_editBtn__d0eIG",editlink:"style_editlink__nG4_B"}},72852:function(e,t,n){"use strict";var o=n(86006);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){s(e,t,n[t])})}return e}function d(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return t&&("object"==typeof t||"function"==typeof t)?t:h(e)}var y={display:"inline-block",borderRadius:"50%",border:"5px double white",width:30,height:30},m={empty:u({},y,{backgroundColor:"#ccc"}),full:u({},y,{backgroundColor:"black"}),placeholder:u({},y,{backgroundColor:"red"})},b=function(e){return o.isValidElement(e)?e:"object"===l(e)&&null!==e?o.createElement("span",{style:e}):"[object String]"===Object.prototype.toString.call(e)?o.createElement("span",{className:e}):void 0},_=function(e){function t(){return a(this,t),f(this,p(t).apply(this,arguments))}return d(t,e),r(t,[{key:"render",value:function(){var e,t=this.props,n=t.index,l=t.inactiveIcon,a=t.activeIcon,i=t.percent,r=t.direction,c=t.readonly,u=t.onClick,d=t.onMouseMove,p=b(l),v=b(a),h=(s(e={display:"inline-block",position:"absolute",overflow:"hidden",top:0},"rtl"===r?"right":"left",0),s(e,"width","".concat(i,"%")),e);function f(e){d&&d(n,e)}function y(e){u&&(e.preventDefault(),u(n,e))}return o.createElement("span",{style:{cursor:c?"inherit":"pointer",display:"inline-block",position:"relative"},onClick:y,onMouseMove:f,onTouchMove:f,onTouchEnd:y},o.createElement("span",{style:i<100?{}:{visibility:"hidden"}},p),o.createElement("span",{style:h},v))}}]),t}(o.PureComponent),g=function(e){function t(e){var n;return a(this,t),(n=f(this,p(t).call(this,e))).state={displayValue:n.props.value,interacting:!1},n.onMouseLeave=n.onMouseLeave.bind(h(h(n))),n.symbolMouseMove=n.symbolMouseMove.bind(h(h(n))),n.symbolClick=n.symbolClick.bind(h(h(n))),n}return d(t,e),r(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.value!==e.value;this.setState(function(n){return{displayValue:t?e.value:n.displayValue}})}},{key:"componentDidUpdate",value:function(e,t){if(e.value===this.props.value){if(t.interacting&&!this.state.interacting)return this.props.onHover();this.state.interacting&&this.props.onHover(this.state.displayValue)}}},{key:"symbolClick",value:function(e,t){var n=this.calculateDisplayValue(e,t);this.props.onClick(n,t)}},{key:"symbolMouseMove",value:function(e,t){var n=this.calculateDisplayValue(e,t);this.setState({interacting:!this.props.readonly,displayValue:n})}},{key:"onMouseLeave",value:function(){this.setState({displayValue:this.props.value,interacting:!1})}},{key:"calculateDisplayValue",value:function(e,t){var n=this.calculateHoverPercentage(t),o=Math.ceil(n%1*this.props.fractions)/this.props.fractions,l=e+(Math.floor(n)+Math.floor(1e3*o)/1e3);return l>0?l>this.props.totalSymbols?this.props.totalSymbols:l:1/this.props.fractions}},{key:"calculateHoverPercentage",value:function(e){var t=e.nativeEvent.type.indexOf("touch")>-1?e.nativeEvent.type.indexOf("touchend")>-1?e.changedTouches[0].clientX:e.touches[0].clientX:e.clientX,n=e.target.getBoundingClientRect(),o="rtl"===this.props.direction?n.right-t:t-n.left;return o<0?0:o/n.width}},{key:"render",value:function(){for(var e,t=this.props,n=t.readonly,l=t.quiet,a=t.totalSymbols,i=t.value,r=t.placeholderValue,s=t.direction,d=t.emptySymbol,p=t.fullSymbol,v=t.placeholderSymbol,h=t.className,f=t.id,y=t.style,m=t.tabIndex,b=this.state,g=b.displayValue,k=b.interacting,j=[],x=[].concat(d),S=[].concat(p),w=[].concat(v),E=0!==r&&0===i&&!k,C=Math.floor(e=E?r:l?i:g),N=0;N<a;N++){var M=void 0;M=N-C<0?100:N-C==0?(e-N)*100:0,j.push(o.createElement(_,c({key:N,index:N,readonly:n,inactiveIcon:x[N%x.length],activeIcon:E?w[N%S.length]:S[N%S.length],percent:M,direction:s},!n&&{onClick:this.symbolClick,onMouseMove:this.symbolMouseMove,onTouchMove:this.symbolMouseMove,onTouchEnd:this.symbolClick})))}return o.createElement("span",c({id:f,style:u({},y,{display:"inline-block",direction:s}),className:h,tabIndex:m,"aria-label":this.props["aria-label"]},!n&&{onMouseLeave:this.onMouseLeave}),j)}}]),t}(o.PureComponent);function k(){}k._name="react_rating_noop";var j=function(e){function t(e){var n;return a(this,t),(n=f(this,p(t).call(this,e))).state={value:e.initialRating},n.handleClick=n.handleClick.bind(h(h(n))),n.handleHover=n.handleHover.bind(h(h(n))),n}return d(t,e),r(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.initialRating})}},{key:"handleClick",value:function(e,t){var n=this,o=this.translateDisplayValueToValue(e);this.props.onClick(o),this.state.value!==o&&this.setState({value:o},function(){return n.props.onChange(n.state.value)})}},{key:"handleHover",value:function(e){var t=void 0===e?e:this.translateDisplayValueToValue(e);this.props.onHover(t)}},{key:"translateDisplayValueToValue",value:function(e){var t=e*this.props.step+this.props.start;return t===this.props.start?t+1/this.props.fractions:t}},{key:"tranlateValueToDisplayValue",value:function(e){return void 0===e?0:(e-this.props.start)/this.props.step}},{key:"render",value:function(){var e=this.props,t=e.step,n=e.emptySymbol,l=e.fullSymbol,a=e.placeholderSymbol,i=e.readonly,r=e.quiet,s=e.fractions,c=e.direction,u=e.start,d=e.stop,p=e.id,v=e.className,h=e.style,f=e.tabIndex;return o.createElement(g,{id:p,style:h,className:v,tabIndex:f,"aria-label":this.props["aria-label"],totalSymbols:Math.floor((d-u)/t),value:this.tranlateValueToDisplayValue(this.state.value),placeholderValue:this.tranlateValueToDisplayValue(this.props.placeholderRating),readonly:i,quiet:r,fractions:s,direction:c,emptySymbol:n,fullSymbol:l,placeholderSymbol:a,onClick:this.handleClick,onHover:this.handleHover})}}]),t}(o.PureComponent);j.defaultProps={start:0,stop:5,step:1,readonly:!1,quiet:!1,fractions:1,direction:"ltr",onHover:k,onClick:k,onChange:k,emptySymbol:m.empty,fullSymbol:m.full,placeholderSymbol:m.placeholder},t.Z=j}}]);