(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{163:function(t,e,n){},164:function(t,e,n){},166:function(t,e,n){},167:function(t,e,n){},168:function(t,e,n){},169:function(t,e,n){},170:function(t,e,n){},171:function(t,e,n){},172:function(t,e,n){},173:function(t,e,n){},174:function(t,e,n){},176:function(t,e,n){},177:function(t,e,n){},199:function(t,e,n){"use strict";var i=n(163);n.n(i).a},205:function(t,e,n){"use strict";var i=n(164);n.n(i).a},209:function(t,e,n){"use strict";var i=n(166);n.n(i).a},210:function(t,e,n){"use strict";var i=n(167);n.n(i).a},211:function(t,e,n){"use strict";var i=n(168);n.n(i).a},212:function(t,e,n){"use strict";var i=n(169);n.n(i).a},213:function(t,e,n){"use strict";var i=n(170);n.n(i).a},214:function(t,e,n){"use strict";var i=n(171);n.n(i).a},215:function(t,e,n){"use strict";var i=n(172);n.n(i).a},216:function(t,e,n){"use strict";var i=n(173);n.n(i).a},217:function(t,e,n){"use strict";var i=n(174);n.n(i).a},219:function(t,e,n){"use strict";var i=n(176);n.n(i).a},220:function(t,e,n){"use strict";var i=n(177);n.n(i).a},227:function(t,e,n){"use strict";n.r(e);n(153);var i=n(0),a=n(187),s=n.n(a),r=n(53),o=n.n(r),l=(n(188),n(54)),c=n.n(l),u=(n(182),n(155),n(160)),h=n.n(u),d=(n(161),n(162),/#.*$/),p=/\.(md|html)$/,f=/\/$/,v=/^(https?:|mailto:|tel:)/;function m(t){return decodeURI(t).replace(d,"").replace(p,"")}function g(t){return v.test(t)}function b(t){if(g(t))return t;var e=t.match(d),n=e?e[0]:"",i=m(t);return f.test(i)?t:i+".html"+n}function _(t,e){var n=t.hash,i=function(t){var e=t.match(d);if(e)return e[0]}(e);return(!i||n===i)&&m(t.path)===m(e)}function k(t,e,n){n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var a=e.split("/");n&&a[a.length-1]||a.pop();for(var s=t.replace(/^\//,"").split("/"),r=0;r<s.length;r++){var o=s[r];".."===o?a.pop():"."!==o&&a.push(o)}""!==a[0]&&a.unshift("");return a.join("/")}(e,n));var i=m(e);return i in t?h()({},t[i],{type:"page",path:b(t[i].path)}):(console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{})}function $(t,e,n,i){var a=n.pages,s=n.themeConfig,r=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||r.sidebar||s.sidebar))return function(t){var e=C(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}})}]}(t);var o=r.sidebar||s.sidebar,l=a.reduce(function(t,e){return t[m(e.regularPath)]=e,t},{});if(o){var u=function(t,e){if(c()(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(n))return{base:n,config:e[n]};var i;return{}}(e,o),d=u.base,p=u.config;return p?p.map(function(t){return function t(e,n,i,a){if("string"==typeof e)return k(n,e,i);if(c()(e))return h()(k(n,e[0],i),{title:e[1]});a&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var s=e.children||[];return{type:"group",title:e.title,children:s.map(function(e){return t(e,n,i,!0)}),collapsable:!1!==e.collapsable}}(t,l,d)}):[]}return[]}function C(t){var e;return(t=t.map(function(t){return h()({},t)})).forEach(function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function x(t){return h()(t,{type:t.items&&t.items.length?"links":"link"})}var L={props:{item:{required:!0}},computed:{link:function(){return b(this.item.link)},exact:function(){var t=this;return this.$site.locales?o()(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:g,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}},w=n(3),y=Object(w.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,S={components:{NavLink:y},mounted:function(){},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}},actionLink1:function(){return{link:this.data.actionLink1,text:this.data.actionText1}},actionLink2:function(){return{link:this.data.actionLink2,text:this.data.actionText2}}}},T=(n(199),Object(w.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"banner"},[n("div",{staticClass:"hero"},[n("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n          "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n        ")])]),t._v(" "),t._m(0),t._v(" "),t.data.actionText&&t.data.actionLink?n("div",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e){return n("div",{staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{attrs:{custom:""}}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n      "+t._s(t.data.footer)+"\n    ")]):t._e()],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner_quickstart"},[e("pre",{staticClass:"banner_code_main"},[this._v("$ npm start\n")])])}],!1,null,null,null).exports),E=n(200),N=n.n(E),O=(n(205),Object(w.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),j=n(226),I=(n(207),n(55)),H={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},M=(n(209),Object(w.a)(H,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null).exports),D={components:{NavLink:y,DropdownTransition:M},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},W=(n(210),{components:{NavLink:y,DropdownLink:Object(w.a)(D,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&o()(e).length>1){var n=this.$page.path,i=this.$router.options.routes,a=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:o()(e).map(function(s){var r,o=e[s],l=a[s]&&a[s].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,s),i.some(function(t){return t.path===r})||(r=s)),{text:l,link:r}})};return[].concat(Object(I.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return h()(x(t),{items:(t.items||[]).map(x)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),P=(n(211),Object(w.a)(W,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function U(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var B={components:{SidebarButton:O,NavLinks:P,SearchBox:j.a,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=N()(U(this.$el,"paddingLeft"))+N()(U(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},G=(n(212),Object(w.a)(B,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[n("NavLinks",{staticClass:"can-hide"}),t._v(" "),t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e()],1)],1)},[],!1,null,null,null).exports);function A(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object(I.a)(t.children||[])):i.push(t)});for(var a=0;a<i.length;a++){var s=i[a];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[a+n]}}var R={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?k(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,A(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?k(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,A(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,a=void 0===i?"":i,s=t.docsBranch,r=void 0===s?"master":s,o=t.docsRepo,l=void 0===o?e:o,c=m(this.$page.path);return f.test(c)?c+="README.md":c+=".md",l&&n?this.createEditLink(e,l,a,r,c):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,a){return/bitbucket.org/.test(t)?(v.test(e)?e:t).replace(f,"")+"/".concat(i)+(n?"/"+n.replace(f,""):"")+a+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(v.test(e)?e:"https://github.com/".concat(e)).replace(f,"")+"/edit/".concat(i)+(n?"/"+n.replace(f,""):"")+a}}},z=(n(213),Object(w.a)(R,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[n("icon",{attrs:{name:"sealui-icon-chevron-left"}}),t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")],1):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n          "),n("icon",{attrs:{name:"sealui-icon-chevron-right"}})],1):t._e()],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports);function q(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function V(t,e,n,i,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var r=_(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[q(t,n+"#"+e.slug,e.title,r),V(t,e.children,n,i,a,s+1)])}))}var Y={functional:!0,props:["item"],render:function(t,e){var n=e.parent,i=n.$page,a=n.$site,s=n.$route,r=e.props.item,o=_(s,r.path),l="auto"===r.type?o||r.children.some(function(t){return _(s,r.basePath+"#"+t.slug)}):o,c=q(t,r.path,r.title||r.path,l),u=null!=i.frontmatter.sidebarDepth?i.frontmatter.sidebarDepth:a.themeConfig.sidebarDepth,h=null==u?1:u,p=!!a.themeConfig.displayAllHeaders;return"auto"===r.type?[c,V(t,r.children,r.basePath,s,h)]:(l||p)&&r.headers&&!d.test(r.path)?[c,V(t,C(r.headers),r.path,s,h)]:c}},J=(n(214),Object(w.a)(Y,void 0,void 0,!1,null,null,null).exports),K={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:J,DropdownTransition:M}};n(215);var X={components:{SidebarGroup:Object(w.a)(K,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)}),0):t._e()])],1)},[],!1,null,null,null).exports,SidebarLink:J,NavLinks:P},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return _(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return _(this.$route,t.regularPath)}}},Q=(n(216),Object(w.a)(X,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)}),0):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),F="bsa-cpc-script",Z={render:function(t){return t("div",{class:"bsa-cpc-wrapper"},[t("div",{ref:"ads",class:"bsa-cpc"})])},mounted:function(){var t=this;if(document.getElementById(F))this.load();else{var e=document.createElement("script");e.id=F,e.src="//m.servedby-buysellads.com/monetization.js",document.head.appendChild(e),e.onload=function(){t.load()}}},watch:{$route:function(t,e){t.path!==e.path&&(this.$refs.ads.innerHTML="",this.load())}},methods:{load:function(){"undefined"!=typeof _bsa&&_bsa&&_bsa.init("default","CKYD62QM","placement:vuejsorg",{target:".bsa-cpc",align:"horizontal",disable_css:"true"})}}},tt=(n(217),{components:{Home:T,Page:z,Sidebar:Q,Navbar:G,BuySellAds:Object(w.a)(Z,void 0,void 0,!1,null,null,null).exports},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return $(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;s.a.configure({showSpinner:!0}),this.$router.beforeEach(function(t,e,n){t.path===e.path||i.a.component(t.name)||s.a.start(),n()}),this.$router.afterEach(function(){s.a.done(),t.isSidebarOpen=!1})},methods:{stop:function(){this.anim.stop()},completed:function(){console.log("done")},configReady:function(){console.log("configReady")},dataReady:function(){console.log("dataReady")},segmentStart:function(){console.log("segmentStart")},domLoaded:function(){console.log("domLoaded")},canPlay:function(t){this.animation=t,this.animation.play(),console.log("canPlay")},destroy:function(){console.log("destroy")},destroyq:function(){this.showAnimation=!1,this.animation.destroy(),this.animation=null},toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),et=(n(218),n(219),n(220),Object(w.a)(tt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,"46de3372",null));e.default=et.exports}}]);