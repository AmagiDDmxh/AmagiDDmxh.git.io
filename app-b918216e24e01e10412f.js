webpackJsonp([0xd2a57dc1d883],{85:function(n,e,t){"use strict";function o(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var a=[{plugin:t(390),options:{plugins:[],trackingId:"UA-73379983-2"}},{plugin:t(392),options:{plugins:[]}},{plugin:t(389),options:{plugins:[]}}]},217:function(n,e,t){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(344),"component---src-templates-page-template-jsx":t(352),"component---src-templates-post-template-jsx":t(353),"component---src-templates-tag-template-jsx":t(354),"component---src-templates-category-template-jsx":t(351),"component---src-pages-404-jsx":t(346),"component---src-pages-categories-jsx":t(347),"component---src-pages-index-jsx":t(348),"component---src-pages-resume-jsx":t(349),"component---src-pages-tags-jsx":t(350)},e.json={"layout-index.json":t(355),"offline-plugin-app-shell-fallback.json":t(365),"contact.json":t(363),"posts-a-brief-history-of-typography.json":t(366),"tags-linotype.json":t(382),"tags-monotype.json":t(383),"tags-history-of-typography.json":t(379),"tags-helvetica.json":t(377),"categories-design-inspiration.json":t(361),"posts-the-origins-of-social-stationery-lettering.json":t(371),"tags-typefaces.json":t(385),"tags-lettering.json":t(381),"tags-history.json":t(378),"categories-design-culture.json":t(360),"posts-perfecting-the-art-of-perfection.json":t(369),"tags-handwriting.json":t(376),"tags-learning-to-write.json":t(380),"about.json":t(358),"posts-humane-typography-in-the-digital-age.json":t(368),"tags-design.json":t(374),"tags-typography.json":t(386),"tags-web-development.json":t(387),"categories-typography.json":t(362),"posts-the-birth-of-movable-type.json":t(370),"tags-open-source.json":t(384),"tags-gatsby.json":t(375),"posts-all-article-below-are-for-test-propose.json":t(367),"404.json":t(356),"categories.json":t(359),"index.json":t(364),"resume.json":t(372),"tags.json":t(373),"404-html.json":t(357)},e.layouts={"layout---index":t(345)}},218:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(2),c=o(i),l=t(8),p=o(l),f=t(147),d=o(f),m=t(60),g=o(m),h=t(85),y=t(585),x=o(y),j=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(t){r(this,e);var o=a(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,x.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},60:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(476),a=o(r),u=(0,a.default)();n.exports=u},219:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(84),a=t(148),u=o(a),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),s[a])return s[a];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return i=n,s[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return i=n,s[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return i=n,s[a]=n,!0}return!1}),i}}},220:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(177),a=o(r),u=t(85),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();n.exports=c},357:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(401)})})}},356:function(n,e,t){t(1),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(402)})})}},358:function(n,e,t){t(1),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(403)})})}},360:function(n,e,t){t(1),n.exports=function(n){return t.e(23344975645473,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(404)})})}},361:function(n,e,t){t(1),n.exports=function(n){return t.e(86806178100415,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(405)})})}},362:function(n,e,t){t(1),n.exports=function(n){return t.e(58048626276655,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(406)})})}},359:function(n,e,t){t(1),n.exports=function(n){return t.e(30875753179511,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(407)})})}},363:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa7f31e1aeaea,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(408)})})}},364:function(n,e,t){t(1),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(409)})})}},355:function(n,e,t){t(1),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(112)})})}},365:function(n,e,t){t(1),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(410)})})}},366:function(n,e,t){t(1),n.exports=function(n){return t.e(0xe1dd4847cd0f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(411)})})}},367:function(n,e,t){t(1),n.exports=function(n){return t.e(55494709973064,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(412)})})}},368:function(n,e,t){t(1),n.exports=function(n){return t.e(27289334676535,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(413)})})}},369:function(n,e,t){t(1),n.exports=function(n){return t.e(9943303745503,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(414)})})}},370:function(n,e,t){t(1),n.exports=function(n){return t.e(0xf7f7f86d856,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(415)})})}},371:function(n,e,t){t(1),n.exports=function(n){return t.e(0x7933eff9b2a9,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(416)})})}},372:function(n,e,t){t(1),n.exports=function(n){return t.e(0xc69833dc971c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(417)})})}},374:function(n,e,t){t(1),n.exports=function(n){return t.e(65951750749414,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(418)})})}},375:function(n,e,t){t(1),n.exports=function(n){return t.e(0x7ab76f7a7e61,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(419)})})}},376:function(n,e,t){t(1),n.exports=function(n){return t.e(0xb4e5f151e811,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(420)})})}},377:function(n,e,t){t(1),n.exports=function(n){return t.e(79794552500884,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(421)})})}},379:function(n,e,t){t(1),n.exports=function(n){return t.e(0x707b8f44ac80,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(422)})})}},378:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa535ea119525,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(423)})})}},380:function(n,e,t){t(1),n.exports=function(n){return t.e(0x7d452d1fb9ab,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(424)})})}},381:function(n,e,t){t(1),n.exports=function(n){return t.e(0x74666f7946b5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(425)})})}},382:function(n,e,t){t(1),n.exports=function(n){return t.e(22083049329370,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(426)})})}},383:function(n,e,t){t(1),n.exports=function(n){return t.e(0xceddda9b8d1a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(427)})})}},384:function(n,e,t){t(1),n.exports=function(n){return t.e(52998803222938,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(428)})})}},385:function(n,e,t){t(1),n.exports=function(n){return t.e(35072081723212,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(429)})})}},386:function(n,e,t){t(1),n.exports=function(n){return t.e(43479966672054,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(430)})})}},387:function(n,e,t){t(1),n.exports=function(n){return t.e(0xe04e745676b4,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(431)})})}},373:function(n,e,t){t(1),n.exports=function(n){return t.e(55702396619907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(432)})})}},345:function(n,e,t){t(1),n.exports=function(n){return t.e(79611799117203,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(221)})})}},147:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(2),a=(o(r),t(219)),u=o(a),s=t(60),i=o(s),c=t(148),l=o(c),p=void 0,f={},d={},m={},g={},h={},y=[],x=[],j={},v="",N=[],C={},b=function(n){return n&&n.default||n},w=void 0,R=!0,k=[],_={},P={},E=5;w=t(222)({getNextQueuedResources:function(){return N.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){N=N.filter(function(e){return e!==n}),w.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){w.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){w.onPostLoadPageResources(n)});var O=function(n,e){return C[n]>C[e]?1:C[n]<C[e]?-1:0},T=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){t(null,g[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){g[e]=o,k.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),k=k.slice(-E),t(n,o)})}},S=function(e,t){h[e]?n.nextTick(function(){t(null,h[e])}):P[e]?n.nextTick(function(){t(P[e])}):L(e,function(n,o){if(n)t(n);else{var r=b(o());h[e]=r,t(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=k.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},F=1,I={empty:function(){x=[],j={},C={},N=[],y=[],v=""},addPagesArray:function(n){y=n,p=(0,u.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return x.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var t=1/F;F+=1,j[e]?j[e]+=1:j[e]=1,I.has(e)||x.unshift(e),x.sort(T);var o=p(e);return o.jsonName&&(C[o.jsonName]?C[o.jsonName]+=1+t:C[o.jsonName]=1+t,N.indexOf(o.jsonName)!==-1||g[o.jsonName]||N.unshift(o.jsonName)),o.componentChunkName&&(C[o.componentChunkName]?C[o.componentChunkName]+=1+t:C[o.componentChunkName]=1+t,N.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||N.unshift(o.componentChunkName)),N.sort(O),w.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:N,resourcesCount:C}},getPages:function(){return{pathArray:x,pathCount:j}},getPage:function(n){return p(n)},has:function(n){return x.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),R=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),r=e,s()}),S(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=e,s()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=e,s()}))},peek:function(n){return x.slice(-1)[0]},length:function(){return x.length},indexOf:function(n){return x.length-x.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:I.getResourcesForPathname};e.default=I}).call(e,t(127))},433:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-page-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"contact.json",path:"/contact"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-a-brief-history-of-typography.json",path:"/posts/a-brief-history-of-typography/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-linotype.json",path:"/tags/linotype/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-monotype.json",path:"/tags/monotype/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-history-of-typography.json",path:"/tags/history-of-typography/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-helvetica.json",path:"/tags/helvetica/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-design-inspiration.json",path:"/categories/design-inspiration/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-the-origins-of-social-stationery-lettering.json",path:"/posts/the-origins-of-social-stationery-lettering"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-typefaces.json",path:"/tags/typefaces/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-lettering.json",path:"/tags/lettering/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-history.json",path:"/tags/history/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-design-culture.json",path:"/categories/design-culture/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-perfecting-the-art-of-perfection.json",path:"/posts/perfecting-the-art-of-perfection/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-handwriting.json",path:"/tags/handwriting/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-learning-to-write.json",path:"/tags/learning-to-write/"},{componentChunkName:"component---src-templates-page-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-humane-typography-in-the-digital-age.json",path:"/posts/humane-typography-in-the-digital-age/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-design.json",path:"/tags/design/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-typography.json",path:"/tags/typography/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-web-development.json",path:"/tags/web-development/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-typography.json",path:"/categories/typography/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-the-birth-of-movable-type.json",path:"/posts/the-birth-of-movable-type/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-open-source.json",path:"/tags/open-source/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-gatsby.json",path:"/tags/gatsby/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-all-article-below-are-for-test-propose.json",path:"/posts/all-article-below-are-for-test-propose/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-categories-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories.json",path:"/categories/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-resume-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"resume.json",path:"/resume/"},{componentChunkName:"component---src-pages-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags.json",path:"/tags/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404-html.json",path:"/404.html"}]},222:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(85),u=t(2),s=o(u),i=t(183),c=o(i),l=t(84),p=t(396),f=t(328),d=o(f),m=t(21),g=t(220),h=o(g),y=t(60),x=o(y),j=t(433),v=o(j),N=t(434),C=o(N),b=t(218),w=o(b),R=t(217),k=o(R),_=t(147),P=o(_);t(250),window.___history=h.default,window.___emitter=x.default,P.default.addPagesArray(v.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=C.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(223);var o=function(n,e){function t(n){n.page.path===P.default.getPage(r).path&&(x.default.off("onPostLoadPageResources",t),clearTimeout(i),s(o))}var o=(0,m.createLocation)(n,null,null,h.default.location),r=o.pathname,a=E[r];a&&(r=a.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var s=e?window.___history.replace:window.___history.push,i=setTimeout(function(){x.default.off("onPostLoadPageResources",t),x.default.emit("onDelayedLoadPageResources",{pathname:r}),s(o)},1e3);P.default.getResourcesForPathname(r)?(clearTimeout(i),s(o)):x.default.on("onPostLoadPageResources",t)}};window.___push=function(n){return o(n,!1)},window.___replace=function(n){return o(n,!0)},window.___navigateTo=window.___push,(0,a.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},y=(0,l.withRouter)(w.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:g,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(w.default,r({page:!0},o)):(0,u.createElement)(w.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0],i=(0,a.apiRunner)("replaceHydrateFunction",void 0,c.default.render)[0];(0,d.default)(function(){return i(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},434:function(n,e){n.exports=[]},223:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(60),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},148:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},328:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},329:function(n,e){"use strict";var t=/[|\\{}()[\]^$+*?.]/g;n.exports=function(n){if("string"!=typeof n)throw new TypeError("Expected a string");return n.replace(t,"\\$&")}},1:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var s=!1,i=!0,c=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},388:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.routeThroughBrowserOrApp=e.hashShouldBeFollowed=e.pathIsNotHandledByApp=e.urlsAreOnSameOrigin=e.authorIsForcingNavigation=e.anchorsTargetIsEquivalentToSelf=e.findClosestAnchor=e.navigationWasHandledElsewhere=e.slashedPathname=e.userIsForcingNavigation=void 0,e.default=function(n,e){var t=h(e);return n.addEventListener("click",t),function(){return n.removeEventListener("click",t)}};var r=t(329),a=o(r),u=t(15),s=e.userIsForcingNavigation=function(n){return 0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey},i=e.slashedPathname=function(n){return"/"===n[0]?n:"/"+n},c=e.navigationWasHandledElsewhere=function(n){return n.defaultPrevented},l=e.findClosestAnchor=function(n){for(;n.parentNode;n=n.parentNode)if("a"===n.nodeName.toLowerCase())return n;return null},p=e.anchorsTargetIsEquivalentToSelf=function(n){return n.hasAttribute("target")===!1||null==n.target||["_self",""].indexOf(n.target)!==-1||"_parent"===n.target&&(!n.ownerDocument.defaultView.parent||n.ownerDocument.defaultView.parent===n.ownerDocument.defaultView)||"_top"===n.target&&(!n.ownerDocument.defaultView.top||n.ownerDocument.defaultView.top===n.ownerDocument.defaultView)},f=e.authorIsForcingNavigation=function(n){return n.hasAttribute("download")===!0||p(n)===!1},d=e.urlsAreOnSameOrigin=function(n,e){return n.protocol===e.protocol&&n.host===e.host},m=e.pathIsNotHandledByApp=function(n){var e=new RegExp("^"+(0,a.default)((0,u.withPrefix)("/"))),t=/^.*\.((?!htm)[a-z0-9]{1,5})$/i;return e.test(i(n.pathname))===!1||n.pathname.search(t)!==-1},g=e.hashShouldBeFollowed=function(n,e){return""!==e.hash&&(""===e.pathname||e.pathname===n.pathname)},h=e.routeThroughBrowserOrApp=function(n){return function(e){if(s(e))return!0;if(c(e))return!0;var t=l(e.target);if(null==t)return!0;if(f(t))return!0;var o=document.createElement("a");o.href=t.href;var r=document.createElement("a");return r.href=window.location.href,d(r,o)===!1||(!!m(o)||(!!g(r,o)||(e.preventDefault(),n(""+i(o.pathname)+o.search+o.hash),!1)))}}},389:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(15),a=t(388),u=o(a);e.onClientEntry=function(){(0,u.default)(window,function(n){(0,r.navigateTo)(n)})}},390:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;if("function"==typeof ga){if(e&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(n){
return n.test(e.pathname)}))return;window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview")}}},344:function(n,e,t){t(1),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(391)})})}},392:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},476:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},127:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){g&&d&&(g=!1,d.length?m=d.concat(m):h=-1,m.length&&s())}function s(){if(!g){var n=r(u);g=!0;for(var e=m.length;e;){for(d=m,m=[];++h<e;)d&&d[h].run();h=-1,e=m.length}d=null,g=!1,a(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],g=!1,h=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new i(n,e)),1!==m.length||g||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},585:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},346:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa6bc690a59e9,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(232)})})}},347:function(n,e,t){t(1),n.exports=function(n){return t.e(0x81a450a7cd7a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(233)})})}},348:function(n,e,t){t(1),n.exports=function(n){return t.e(0xc23565d713b7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(234)})})}},349:function(n,e,t){t(1),n.exports=function(n){return t.e(59872079621741,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(235)})})}},350:function(n,e,t){t(1),n.exports=function(n){return t.e(36530248567819,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(236)})})}},351:function(n,e,t){t(1),n.exports=function(n){return t.e(90179704293519,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(237)})})}},352:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa485d5bf544,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(238)})})}},353:function(n,e,t){t(1),n.exports=function(n){return t.e(0x623bdfc73907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(239)})})}},354:function(n,e,t){t(1),n.exports=function(n){return t.e(2638498282051,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(240)})})}}});
//# sourceMappingURL=app-b918216e24e01e10412f.js.map