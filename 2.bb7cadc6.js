/*! For license information please see 2.bb7cadc6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{100:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),c=f(o),i=f(a(101)),l=f(a(8)),s=f(a(102)),u=f(a(103)),d=a(104);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),o=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},m.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},101:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var c=r.apply(null,n);c&&e.push(c)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},102:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},103:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},104:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},105:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),o=a(0),c=a.n(o),i=a(89),l=a(84),s=["label","to","docsPluginId"];function u(e){var t=e.label,a=e.to,o=e.docsPluginId,u=Object(r.a)(e,s),d=Object(l.useActiveVersion)(o),f=Object(l.useLatestVersion)(o),m=null!=d?d:f,h=null!=t?t:m.label,v=null!=a?a:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(m).path;return c.a.createElement(i.a,Object(n.a)({},u,{label:h,to:v}))}},109:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),o=a(0),c=a.n(o),i=a(89),l=a(84),s=["mobile","docsPluginId"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,a=e.mobile,o=e.docsPluginId,d=Object(r.a)(e,s),f=Object(l.useActiveDocContext)(o),m=Object(l.useVersions)(o),h=Object(l.useLatestVersion)(o);var v=null!==(t=f.activeVersion)&&void 0!==t?t:h,b=a?"Versions":v.label,p=a?void 0:u(v).path;return c.a.createElement(i.a,Object(n.a)({},d,{mobile:a,label:b,to:p,items:function(){if(!(m.length<=2))return m.map((function(e){var t=(null==f?void 0:f.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==f?void 0:f.activeVersion)}}}))}()}))}},81:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},82:function(e,t,a){"use strict";var n=a(0),r=a(81);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},86:function(e,t,a){"use strict";var n=a(0),r=a(90);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},89:function(e,t,a){"use strict";var n,r=a(2),o=a(6),c=a(0),i=a.n(c),l=a(77),s=a(79),u=a(78);var d=function(){if(void 0!==n)return n;var e=!1,t={get passive(){e=!0}},a=function(){};return window.addEventListener("t",a,t),window.removeEventListener("t",a,t),n=e,e},f=c.useLayoutEffect,m="touchstart",h=["mousedown",m],v=function(e){if(e===m)return d()?{passive:!0}:void 0};var b=function(e,t){var a=function(e){var t=c.useRef(e);return f((function(){t.current=e})),t}(t);Object(c.useEffect)((function(){if(t){var n=function(t){e.current&&a.current&&!e.current.contains(t.target)&&a.current(t)};return h.forEach((function(e){document.addEventListener(e,n,v(e))})),function(){h.forEach((function(e){document.removeEventListener(e,n,v(e))}))}}}),[!t])},p=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],g=["items","position","className"],k=["className"],E=["items","position","className"],O=["className"],j=["mobile"];function y(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,c=e.href,l=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,h=Object(o.a)(e,p),v=Object(u.a)(n),b=Object(u.a)(t),g=Object(u.a)(c,{forcePrependBaseUrl:!0});return i.a.createElement(s.a,Object(r.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:m?g:c}:Object.assign({isNavLink:!0,activeClassName:f,to:v},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(b)}}:null),h),l)}function _(e){var t=e.items,a=e.position,n=e.className,s=Object(o.a)(e,g),u=i.a.useRef(null),d=i.a.useRef(null),f=Object(c.useState)(!1),m=f[0],h=f[1];function v(e){if(e){var t,a,n=null==d||null===(t=d.current)||void 0===t||null===(a=t.firstChild)||void 0===a?void 0:a.firstChild;n&&n.focus()}h(e)}b(u,(function(){return v(!1)}));var p=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?i.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":m})},i.a.createElement(y,Object(r.a)({className:p(n)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){("Enter"===e.key&&!s.to||"Tab"===e.key)&&(e.preventDefault(),v(!0))}}),s.label),i.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,a){var n=e.className,c=Object(o.a)(e,k);return i.a.createElement("li",{key:a},i.a.createElement(y,Object(r.a)({onKeyDown:function(e){a===t.length-1&&"Tab"===e.key&&(e.preventDefault(),v(!1))},activeClassName:"dropdown__link--active",className:p(n,!0)},c)))})))):i.a.createElement(y,Object(r.a)({className:p(n)},s))}function w(e){var t=e.items,a=(e.position,e.className),n=Object(o.a)(e,E),c=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};return t?i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(y,Object(r.a)({className:c(a,!0)},n),n.label),i.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,l=Object(o.a)(e,O);return i.a.createElement("li",{className:"menu__list-item",key:t},i.a.createElement(y,Object(r.a)({activeClassName:"menu__link--active",className:c(a)},l,{onClick:n.onClick})))})))):i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(y,Object(r.a)({className:c(a)},n)))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(o.a)(e,j),r=a?w:_;return i.a.createElement(r,n)}},90:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},91:function(e,t,a){"use strict";var n=a(0),r=a(10),o=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(o()),r=a[0],c=a[1],i=function(){var t=o();c(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i,{passive:!0})}}),t),r}},92:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},93:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),o=a[0],c=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){c(t())}}),[]),o}},94:function(e,t,a){"use strict";var n=a(76),r=a(86),o=a(78),c=a(80);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).navbar,i=(a=void 0===a?{}:a).logo,l=void 0===i?{}:i,s=Object(r.a)().isDarkTheme,u=Object(o.a)(l.href||"/"),d={};l.target?d={target:l.target}:Object(c.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var f=l.srcDark&&s?l.srcDark:l.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(o.a)(f),logoAlt:l.alt}}},95:function(e,t,a){"use strict";var n=a(2),r=a(0),o=a.n(r),c=a(85),i=a(76),l=a(78),s=a(10),u="light",d="dark",f=function(e){return e===d?d:u},m=function(){return s.a.canUseDOM?f(document.documentElement.getAttribute("data-theme")):u},h=function(e){try{localStorage.setItem("theme",f(e))}catch(t){console.error(t)}},v=function(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).colorMode,n=(a=void 0===a?{}:a).disableSwitch,o=void 0!==n&&n,c=Object(r.useState)(m),l=c[0],s=c[1],v=Object(r.useCallback)((function(){s(u),h(u)}),[]),b=Object(r.useCallback)((function(){s(d),h(d)}),[]);return Object(r.useEffect)((function(){document.documentElement.setAttribute("data-theme",f(l))}),[l]),Object(r.useEffect)((function(){if(!o)try{var e=localStorage.getItem("theme");null!==e&&s(f(e))}catch(t){console.error(t)}}),[s]),Object(r.useEffect)((function(){o||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;s(t?d:u)}))}),[]),{isDarkTheme:l===d,setLightTheme:v,setDarkTheme:b}},b=a(90);var p=function(e){var t=v(),a=t.isDarkTheme,n=t.setLightTheme,r=t.setDarkTheme;return o.a.createElement(b.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:r}},e.children)},g="docusaurus.tab.",k=function(){var e=Object(r.useState)({}),t=e[0],a=e[1],n=Object(r.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(r.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith(g))e[n.substring(g.length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),n(e,t)}}},E="docusaurus.announcement.dismiss",O="docusaurus.announcement.id",j=function(){var e=Object(i.a)().siteConfig.themeConfig.announcementBar,t=Object(r.useState)(!0),a=t[0],n=t[1],o=Object(r.useCallback)((function(){localStorage.setItem(E,"true"),n(!0)}),[]);return Object(r.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem(O);"annoucement-bar"===a&&(a="announcement-bar");var r=t!==a;localStorage.setItem(O,t),r&&localStorage.setItem(E,"false"),(r||"false"===localStorage.getItem(E))&&n(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:o}},y=a(81);var _=function(e){var t=k(),a=t.tabGroupChoices,n=t.setTabGroupChoices,r=j(),c=r.isAnnouncementBarClosed,i=r.closeAnnouncementBar;return o.a.createElement(y.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:c,closeAnnouncementBar:i}},e.children)},w=a(77),C=a(82),N=a(45),S=a.n(N);var T=function(){var e,t=Object(i.a)().siteConfig,a=(t=void 0===t?{}:t).themeConfig,n=(a=void 0===a?{}:a).announcementBar,r=void 0===n?{}:n,c=r.content,l=r.backgroundColor,s=r.textColor,u=r.isCloseable,d=Object(C.a)(),f=d.isAnnouncementBarClosed,m=d.closeAnnouncementBar;return!c||u&&f?null:o.a.createElement("div",{className:S.a.announcementBar,style:{backgroundColor:l,color:s},role:"banner"},o.a.createElement("div",{className:Object(w.a)(S.a.announcementBarContent,(e={},e[S.a.announcementBarCloseable]=u,e)),dangerouslySetInnerHTML:{__html:c}}),u?o.a.createElement("button",{type:"button",className:S.a.announcementBarClose,onClick:m,"aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},L=a(79),B=function(){return null},x=a(100),I=a.n(x),P=a(46),D=a.n(P),M=function(e){var t=e.icon,a=e.style;return o.a.createElement("span",{className:Object(w.a)(D.a.toggle,D.a.dark),style:a},t)},A=function(e){var t=e.icon,a=e.style;return o.a.createElement("span",{className:Object(w.a)(D.a.toggle,D.a.light),style:a},t)},X=function(e){var t=Object(i.a)(),a=t.siteConfig.themeConfig.colorMode.switchConfig,r=a.darkIcon,c=a.darkIconStyle,l=a.lightIcon,s=a.lightIconStyle,u=t.isClient;return o.a.createElement(I.a,Object(n.a)({disabled:!u,icons:{checked:o.a.createElement(M,{icon:r,style:c}),unchecked:o.a.createElement(A,{icon:l,style:s})}},e))},F=a(86),U=a(83);var R=function(e){var t=Object(r.useState)(e),a=t[0],n=t[1];return Object(r.useEffect)((function(){var e=function(){return n(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,n]},V=a(91),H=function(e){var t=Object(r.useState)(!0),a=t[0],n=t[1],o=Object(r.useState)(!1),c=o[0],i=o[1],l=Object(r.useState)(0),s=l[0],u=l[1],d=Object(r.useState)(0),f=d[0],m=d[1],h=Object(r.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),v=Object(U.useLocation)(),b=R(v.hash),p=b[0],g=b[1];return Object(V.a)((function(t){var a=t.scrollY;if(e&&(0===a&&n(!0),!(a<f))){if(c)return i(!1),n(!1),void u(a);var r=document.documentElement.scrollHeight-f,o=window.innerHeight;s&&a>=s?n(!1):a+o<r&&n(!0),u(a)}}),[s,f]),Object(r.useEffect)((function(){e&&(n(!0),g(v.hash))}),[v]),Object(r.useEffect)((function(){e&&p&&i(!0)}),[p]),{navbarRef:h,isNavbarVisible:a}},G=a(92),W=a(93),Y=a(94),K=a(47),z=a.n(K),J=a(6),q=a(89),Q=["type"],Z={default:function(){return q.a},docsVersion:function(){return a(105).default},docsVersionDropdown:function(){return a(109).default}};function $(e){var t=e.type,a=Object(J.a)(e,Q),n=function(e){void 0===e&&(e="default");var t=Z[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return o.a.createElement(n,a)}var ee="right";var te=function(){var e,t,a=Object(i.a)(),c=a.siteConfig.themeConfig,l=c.navbar,s=(l=void 0===l?{}:l).title,u=void 0===s?"":s,d=l.items,f=void 0===d?[]:d,m=l.hideOnScroll,h=void 0!==m&&m,v=l.style,b=void 0===v?void 0:v,p=c.colorMode,g=(p=void 0===p?{}:p).disableSwitch,k=void 0!==g&&g,E=a.isClient,O=Object(r.useState)(!1),j=O[0],y=O[1],_=Object(r.useState)(!1),C=_[0],N=_[1],S=Object(F.a)(),T=S.isDarkTheme,x=S.setLightTheme,I=S.setDarkTheme,P=H(h),D=P.navbarRef,M=P.isNavbarVisible,A=Object(Y.a)(),U=A.logoLink,R=A.logoLinkProps,V=A.logoImageUrl,K=A.logoAlt;Object(G.a)(j);var J=Object(r.useCallback)((function(){y(!0)}),[y]),q=Object(r.useCallback)((function(){y(!1)}),[y]),Q=Object(r.useCallback)((function(e){return e.target.checked?I():x()}),[x,I]),Z=Object(W.a)();Object(r.useEffect)((function(){Z===W.b.desktop&&y(!1)}),[Z]);var te=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:ee)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:ee)}))}}(f),ae=te.leftItems,ne=te.rightItems;return o.a.createElement("nav",{ref:D,className:Object(w.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===b,"navbar--primary":"primary"===b,"navbar-sidebar--show":j},e[z.a.navbarHideable]=h,e[z.a.navbarHidden]=!M,e))},o.a.createElement("div",{className:"navbar__inner"},o.a.createElement("div",{className:"navbar__items"},null!=f&&0!==f.length&&o.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:J,onKeyDown:J},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),o.a.createElement(L.a,Object(n.a)({className:"navbar__brand",to:U},R),null!=V&&o.a.createElement("img",{key:E,className:"navbar__logo",src:V,alt:K}),null!=u&&o.a.createElement("strong",{className:Object(w.a)("navbar__title",(t={},t[z.a.hideLogoText]=C,t))},u)),ae.map((function(e,t){return o.a.createElement($,Object(n.a)({},e,{key:t}))}))),o.a.createElement("div",{className:"navbar__items navbar__items--right"},ne.map((function(e,t){return o.a.createElement($,Object(n.a)({},e,{key:t}))})),!k&&o.a.createElement(X,{className:z.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:T,onChange:Q}),o.a.createElement(B,{handleSearchBarToggle:N,isSearchBarExpanded:C}))),o.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:q}),o.a.createElement("div",{className:"navbar-sidebar"},o.a.createElement("div",{className:"navbar-sidebar__brand"},o.a.createElement(L.a,Object(n.a)({className:"navbar__brand",onClick:q,to:U},R),null!=V&&o.a.createElement("img",{key:E,className:"navbar__logo",src:V,alt:K}),null!=u&&o.a.createElement("strong",{className:"navbar__title"},u)),!k&&j&&o.a.createElement(X,{"aria-label":"Dark mode toggle in sidebar",checked:T,onChange:Q})),o.a.createElement("div",{className:"navbar-sidebar__items"},o.a.createElement("div",{className:"menu"},o.a.createElement("ul",{className:"menu__list"},f.map((function(e,t){return o.a.createElement($,Object(n.a)({mobile:!0},e,{onClick:q,key:t}))})))))))},ae=a(48),ne=a.n(ae),re=["to","href","label","prependBaseUrlToHref"];function oe(e){var t=e.to,a=e.href,r=e.label,c=e.prependBaseUrlToHref,i=Object(J.a)(e,re),s=Object(l.a)(t),u=Object(l.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(L.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?u:a}:{to:s},i),r)}var ce=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var ie=function(){var e=Object(i.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},r=n.copyright,c=n.links,s=void 0===c?[]:c,u=n.logo,d=void 0===u?{}:u,f=Object(l.a)(d.src);return a?o.a.createElement("footer",{className:Object(w.a)("footer",{"footer--dark":"dark"===a.style})},o.a.createElement("div",{className:"container"},s&&s.length>0&&o.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(oe,e))}))):null)}))),(d||r)&&o.a.createElement("div",{className:"text--center"},d&&d.src&&o.a.createElement("div",{className:"margin-bottom--sm"},d.href?o.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:ne.a.footerLogoLink},o.a.createElement(ce,{alt:d.alt,url:f})):o.a.createElement(ce,{alt:d.alt,url:f})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null};a(49);function le(e){var t=e.children;return o.a.createElement(p,null,o.a.createElement(_,null,t))}t.a=function(e){var t=Object(i.a)().siteConfig,a=t.favicon,r=t.title,s=t.themeConfig,u=s.image,d=s.metadatas,f=t.url,m=e.children,h=e.title,v=e.noFooter,b=e.description,p=e.image,g=e.keywords,k=e.permalink,E=h?h+" | "+r:r,O=p||u,j=Object(l.a)(O,{absolute:!0}),y=Object(l.a)(a);return o.a.createElement(le,null,o.a.createElement(c.a,null,o.a.createElement("html",{lang:"en"}),E&&o.a.createElement("title",null,E),E&&o.a.createElement("meta",{property:"og:title",content:E}),a&&o.a.createElement("link",{rel:"shortcut icon",href:y}),b&&o.a.createElement("meta",{name:"description",content:b}),b&&o.a.createElement("meta",{property:"og:description",content:b}),g&&g.length&&o.a.createElement("meta",{name:"keywords",content:g.join(",")}),O&&o.a.createElement("meta",{property:"og:image",content:j}),O&&o.a.createElement("meta",{property:"twitter:image",content:j}),O&&o.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),k&&o.a.createElement("meta",{property:"og:url",content:f+k}),k&&o.a.createElement("link",{rel:"canonical",href:f+k}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o.a.createElement(c.a,null,d.map((function(e,t){return o.a.createElement("meta",Object(n.a)({key:"metadata_"+t},e))}))),o.a.createElement(T,null),o.a.createElement(te,null),o.a.createElement("div",{className:"main-wrapper"},m),!v&&o.a.createElement(ie,null))}},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(95);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);