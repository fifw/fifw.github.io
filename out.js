(()=>{var q,h,$,ne,S,M,O,se,E={},H=[],oe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(r,e){for(var t in e)r[t]=e[t];return r}function W(r){var e=r.parentNode;e&&e.removeChild(r)}function l(r,e,t){var o,n,s,c={};for(s in e)s=="key"?o=e[s]:s=="ref"?n=e[s]:c[s]=e[s];if(arguments.length>2&&(c.children=arguments.length>3?q.call(arguments,2):t),typeof r=="function"&&r.defaultProps!=null)for(s in r.defaultProps)c[s]===void 0&&(c[s]=r.defaultProps[s]);return P(r,c,o,n,null)}function P(r,e,t,o,n){var s={type:r,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:n??++$};return n==null&&h.vnode!=null&&h.vnode(s),s}function A(r){return r.children}function N(r,e){this.props=r,this.context=e}function x(r,e){if(e==null)return r.__?x(r.__,r.__.__k.indexOf(r)+1):null;for(var t;e<r.__k.length;e++)if((t=r.__k[e])!=null&&t.__e!=null)return t.__e;return typeof r.type=="function"?x(r):null}function B(r){var e,t;if((r=r.__)!=null&&r.__c!=null){for(r.__e=r.__c.base=null,e=0;e<r.__k.length;e++)if((t=r.__k[e])!=null&&t.__e!=null){r.__e=r.__c.base=t.__e;break}return B(r)}}function G(r){(!r.__d&&(r.__d=!0)&&S.push(r)&&!D.__r++||O!==h.debounceRendering)&&((O=h.debounceRendering)||M)(D)}function D(){for(var r;D.__r=S.length;)r=S.sort(function(e,t){return e.__v.__b-t.__v.__b}),S=[],r.some(function(e){var t,o,n,s,c,u;e.__d&&(c=(s=(t=e).__v).__e,(u=t.__P)&&(o=[],(n=k({},s)).__v=s.__v+1,U(u,s,n,t.__n,u.ownerSVGElement!==void 0,s.__h!=null?[c]:null,o,c??x(s),s.__h),X(o,s),s.__e!=c&&B(s)))})}function V(r,e,t,o,n,s,c,u,_,f){var i,m,p,a,d,w,y,g=o&&o.__k||H,v=g.length;for(t.__k=[],i=0;i<e.length;i++)if((a=t.__k[i]=(a=e[i])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?P(null,a,null,null,a):Array.isArray(a)?P(A,{children:a},null,null,null):a.__b>0?P(a.type,a.props,a.key,null,a.__v):a)!=null){if(a.__=t,a.__b=t.__b+1,(p=g[i])===null||p&&a.key==p.key&&a.type===p.type)g[i]=void 0;else for(m=0;m<v;m++){if((p=g[m])&&a.key==p.key&&a.type===p.type){g[m]=void 0;break}p=null}U(r,a,p=p||E,n,s,c,u,_,f),d=a.__e,(m=a.ref)&&p.ref!=m&&(y||(y=[]),p.ref&&y.push(p.ref,null,a),y.push(m,a.__c||d,a)),d!=null?(w==null&&(w=d),typeof a.type=="function"&&a.__k===p.__k?a.__d=_=j(a,_,r):_=Y(r,a,p,g,d,_),typeof t.type=="function"&&(t.__d=_)):_&&p.__e==_&&_.parentNode!=r&&(_=x(p))}for(t.__e=w,i=v;i--;)g[i]!=null&&(typeof t.type=="function"&&g[i].__e!=null&&g[i].__e==t.__d&&(t.__d=x(o,i+1)),Z(g[i],g[i]));if(y)for(i=0;i<y.length;i++)J(y[i],y[++i],y[++i])}function j(r,e,t){for(var o,n=r.__k,s=0;n&&s<n.length;s++)(o=n[s])&&(o.__=r,e=typeof o.type=="function"?j(o,e,t):Y(t,o,o,n,o.__e,e));return e}function Y(r,e,t,o,n,s){var c,u,_;if(e.__d!==void 0)c=e.__d,e.__d=void 0;else if(t==null||n!=s||n.parentNode==null)e:if(s==null||s.parentNode!==r)r.appendChild(n),c=null;else{for(u=s,_=0;(u=u.nextSibling)&&_<o.length;_+=2)if(u==n)break e;r.insertBefore(n,s),c=s}return c!==void 0?c:n.nextSibling}function ie(r,e,t,o,n){var s;for(s in t)s==="children"||s==="key"||s in e||L(r,s,null,t[s],o);for(s in e)n&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||t[s]===e[s]||L(r,s,e[s],t[s],o)}function z(r,e,t){e[0]==="-"?r.setProperty(e,t):r[e]=t==null?"":typeof t!="number"||oe.test(e)?t:t+"px"}function L(r,e,t,o,n){var s;e:if(e==="style")if(typeof t=="string")r.style.cssText=t;else{if(typeof o=="string"&&(r.style.cssText=o=""),o)for(e in o)t&&e in t||z(r.style,e,"");if(t)for(e in t)o&&t[e]===o[e]||z(r.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in r?e.toLowerCase().slice(2):e.slice(2),r.l||(r.l={}),r.l[e+s]=t,t?o||r.addEventListener(e,s?Q:K,s):r.removeEventListener(e,s?Q:K,s);else if(e!=="dangerouslySetInnerHTML"){if(n)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in r)try{r[e]=t??"";break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||e[0]==="a"&&e[1]==="r")?r.setAttribute(e,t):r.removeAttribute(e))}}function K(r){this.l[r.type+!1](h.event?h.event(r):r)}function Q(r){this.l[r.type+!0](h.event?h.event(r):r)}function U(r,e,t,o,n,s,c,u,_){var f,i,m,p,a,d,w,y,g,v,T,b=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(_=t.__h,u=e.__e=t.__e,e.__h=null,s=[u]),(f=h.__b)&&f(e);try{e:if(typeof b=="function"){if(y=e.props,g=(f=b.contextType)&&o[f.__c],v=f?g?g.props.value:f.__:o,t.__c?w=(i=e.__c=t.__c).__=i.__E:("prototype"in b&&b.prototype.render?e.__c=i=new b(y,v):(e.__c=i=new N(y,v),i.constructor=b,i.render=ae),g&&g.sub(i),i.props=y,i.state||(i.state={}),i.context=v,i.__n=o,m=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),b.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=k({},i.__s)),k(i.__s,b.getDerivedStateFromProps(y,i.__s))),p=i.props,a=i.state,m)b.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(b.getDerivedStateFromProps==null&&y!==p&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(y,v),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(y,i.__s,v)===!1||e.__v===t.__v){i.props=y,i.state=i.__s,e.__v!==t.__v&&(i.__d=!1),i.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(C){C&&(C.__=e)}),i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(y,i.__s,v),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(p,a,d)})}i.context=v,i.props=y,i.state=i.__s,(f=h.__r)&&f(e),i.__d=!1,i.__v=e,i.__P=r,f=i.render(i.props,i.state,i.context),i.state=i.__s,i.getChildContext!=null&&(o=k(k({},o),i.getChildContext())),m||i.getSnapshotBeforeUpdate==null||(d=i.getSnapshotBeforeUpdate(p,a)),T=f!=null&&f.type===A&&f.key==null?f.props.children:f,V(r,Array.isArray(T)?T:[T],e,t,o,n,s,c,u,_),i.base=e.__e,e.__h=null,i.__h.length&&c.push(i),w&&(i.__E=i.__=null),i.__e=!1}else s==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=le(t.__e,e,t,o,n,s,c,_);(f=h.diffed)&&f(e)}catch(C){e.__v=null,(_||s!=null)&&(e.__e=u,e.__h=!!_,s[s.indexOf(u)]=null),h.__e(C,e,t)}}function X(r,e){h.__c&&h.__c(e,r),r.some(function(t){try{r=t.__h,t.__h=[],r.some(function(o){o.call(t)})}catch(o){h.__e(o,t.__v)}})}function le(r,e,t,o,n,s,c,u){var _,f,i,m=t.props,p=e.props,a=e.type,d=0;if(a==="svg"&&(n=!0),s!=null){for(;d<s.length;d++)if((_=s[d])&&"setAttribute"in _==!!a&&(a?_.localName===a:_.nodeType===3)){r=_,s[d]=null;break}}if(r==null){if(a===null)return document.createTextNode(p);r=n?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,p.is&&p),s=null,u=!1}if(a===null)m===p||u&&r.data===p||(r.data=p);else{if(s=s&&q.call(r.childNodes),f=(m=t.props||E).dangerouslySetInnerHTML,i=p.dangerouslySetInnerHTML,!u){if(s!=null)for(m={},d=0;d<r.attributes.length;d++)m[r.attributes[d].name]=r.attributes[d].value;(i||f)&&(i&&(f&&i.__html==f.__html||i.__html===r.innerHTML)||(r.innerHTML=i&&i.__html||""))}if(ie(r,p,m,n,u),i)e.__k=[];else if(d=e.props.children,V(r,Array.isArray(d)?d:[d],e,t,o,n&&a!=="foreignObject",s,c,s?s[0]:t.__k&&x(t,0),u),s!=null)for(d=s.length;d--;)s[d]!=null&&W(s[d]);u||("value"in p&&(d=p.value)!==void 0&&(d!==m.value||d!==r.value||a==="progress"&&!d)&&L(r,"value",d,m.value,!1),"checked"in p&&(d=p.checked)!==void 0&&d!==r.checked&&L(r,"checked",d,m.checked,!1))}return r}function J(r,e,t){try{typeof r=="function"?r(e):r.current=e}catch(o){h.__e(o,t)}}function Z(r,e,t){var o,n;if(h.unmount&&h.unmount(r),(o=r.ref)&&(o.current&&o.current!==r.__e||J(o,null,e)),(o=r.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(s){h.__e(s,e)}o.base=o.__P=null}if(o=r.__k)for(n=0;n<o.length;n++)o[n]&&Z(o[n],e,typeof r.type!="function");t||r.__e==null||W(r.__e),r.__e=r.__d=void 0}function ae(r,e,t){return this.constructor(r,t)}function R(r,e,t){var o,n,s;h.__&&h.__(r,e),n=(o=typeof t=="function")?null:t&&t.__k||e.__k,s=[],U(e,r=(!o&&t||e).__k=l(A,null,[r]),n||E,E,e.ownerSVGElement!==void 0,!o&&t?[t]:n?null:e.firstChild?q.call(e.childNodes):null,s,!o&&t?t:n?n.__e:e.firstChild,o),X(s,r)}q=H.slice,h={__e:function(r,e){for(var t,o,n;e=e.__;)if((t=e.__c)&&!t.__)try{if((o=t.constructor)&&o.getDerivedStateFromError!=null&&(t.setState(o.getDerivedStateFromError(r)),n=t.__d),t.componentDidCatch!=null&&(t.componentDidCatch(r),n=t.__d),n)return t.__E=t}catch(s){r=s}throw r}},$=0,ne=function(r){return r!=null&&r.constructor===void 0},N.prototype.setState=function(r,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof r=="function"&&(r=r(k({},t),this.props)),r&&k(t,r),r!=null&&this.__v&&(e&&this.__h.push(e),G(this))},N.prototype.forceUpdate=function(r){this.__v&&(this.__e=!0,r&&this.__h.push(r),G(this))},N.prototype.render=A,S=[],M=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,D.__r=0,se=0;function I(r){this.name="Error404",this.el=r}I.prototype=Error.prototype;var ce="https://salty-ocean-46227.herokuapp.com";function _e(r,e){return`https://${r}.fandom.com/wiki/${e}`}var ee=class extends N{constructor(e){super(e);this.state={showRows:!0}}render(){let e=this.props.aside;if(!e)return null;let t=this.props.parser,o=[];if(!!!e.querySelector("figure"))return null;let s=null,c=e.querySelector("h2");c&&(s=l("h2",null,t.text(c)));let u=t.imgsrc(e.querySelector("figure").querySelector("img").src);for(let _ of e.querySelectorAll("div.pi-item"))if(_.children.length!==0)if(_.children.length===1)o.push(t.parseNode(_));else if(_.children.length===2){let f=t.parseNode(_.children[0]),i=t.parseNode(_.children[1]);o.push(l("tr",null,l("td",null,f),l("td",null,i)))}else o.push(t.parseNode(_));return l("aside",null,s,l("div",{style:{display:"flex",justifyContent:"center"}},l("img",{src:u})),l("div",{onClick:()=>{this.setState({showRows:!this.state.showRows})}},l("button",null,this.state.showRows?"Hide":"Show")),this.state.showRows?l("table",null,o):null)}},te=class{constructor(e,t){this.raw_text=e,this.wiki=t;let o=new DOMParser;this.html=o.parseFromString(e,"text/html"),this.buildingTable=!1}qs(e){return this.html.querySelector(e)}text(e){return e?e.innerText.trim():(console.error("unknown el"),"-")}title(){return this.text(this.qs(".page-header__title"))}imgsrc(e){return e.includes("/revision/")?e.split("/revision/")[0]:e}aside(){let t=this.qs("div.mw-parser-output").querySelector("aside");return l(ee,{aside:t,parser:this})}toc(){let e=this.qs("#toc");if(!e)return null;let t=[],o=(s,c)=>{for(let u of s.children){let _=u.children[0],f=this.text(_.querySelector(".toctext"));t.push(l("div",{style:{marginLeft:`${20*c}px`}},l("a",{href:`#${encodeURI(f)}`},this.text(_))));let i=u.querySelector("ul");i&&o(i,c+1)}},n=e.querySelector("ul");return n?(o(n,0),l("div",{className:"toc"},t)):l("div",{className:"toc"},this.parseNode(e))}stripSuffix(e,t){return e.endsWith(t)?e.slice(0,-t.length):e}styleFrom(e){let t=["text-align","background-color"],o={};for(let n of t)e.style[n]&&(o[n]=e.style[n]);return o}parseNode(e){let t=[],o={SMALL:"small",B:"b",I:"i",EM:"em",SPAN:"span",DD:"dd",THEAD:"thead",TBODY:"tbody",TR:"tr",CENTER:"center",FONT:"font",STRONG:"strong",ASIDE:"aside",SECTION:"section"};for(let n of e.childNodes){if(o[n.nodeName]){let s=`${o[n.nodeName]}`;t.push(l(s,null,this.parseNode(n)));continue}if(n.nodeName==="A"){let s=n.href;if(n.href.startsWith(window.location.origin)){let c=n.href.split("/wiki/")[1];s=`${window.location.origin}/?p=${this.wiki}/${c}`}t.push(l("a",{href:s},this.parseNode(n)))}else if(n.nodeName==="#text"){let s=n.textContent.trim()==="";(!s||s&&!this.buildingTable)&&t.push(l("span",null,n.textContent))}else if(n.nodeName==="P")n.innerText.trim()!==""&&t.push(l("p",null,this.parseNode(n)));else if(n.nodeName!=="SUP")if(n.nodeName==="BR")t.push(l("br",null));else if(n.nodeName==="DL")t.push(this.blockquoteFromDl(n));else if(n.nodeName==="H2"){let s=this.stripSuffix(this.text(n),"[]");t.push(l("h2",{id:encodeURI(s)},s))}else if(n.nodeName==="H3"){let s=this.stripSuffix(this.text(n),"[]");t.push(l("h3",{id:encodeURI(s)},s))}else if(n.nodeName==="H4"){let s=this.stripSuffix(this.text(n),"[]");t.push(l("h4",{id:encodeURI(s)},s))}else if(n.nodeName==="BLOCKQUOTE"){let s=n.querySelector("i"),c=null;if(s){c=this.parseNode(s);let u=n.querySelector("cite"),_=null;u&&(_=l("cite",null,l("small",null,this.parseNode(u)))),t.push(l("blockquote",null,c,_))}else t.push(l("blockquote",null,this.parseNode(n)))}else if(n.nodeName==="DIV"){let s=n.querySelector("dl");if(s)t.push(this.blockquoteFromDl(s));else if(n.id==="ma-article-type")t.push(l("p",{className:"article-type"},this.parseNode(n)));else{let c=this.styleFrom(n),u=null;n.classList.contains("year")&&(c.border="1px solid black",this.buildingTable=!0),n.classList.contains("wikia-gallery")&&(u="gallery"),t.push(l("p",{className:u,style:c},this.parseNode(n))),n.className==="year"&&(this.buildingTable=!1)}}else if(n.nodeName==="FIGURE"){let s=n.querySelector("a").href.split("/revision/")[0],c=this.text(n.querySelector("figcaption"));t.push(l("figure",null,l("img",{src:s}),l("figcaption",null,l("span",null,c))))}else if(n.nodeName==="UL")t.push(this.parseList(n,"ul"));else if(n.nodeName==="OL")t.push(this.parseList(n,"ol"));else if(n.nodeName==="IMG"){let s=n.getAttribute("data-src"),c=n.src;s&&(c=n.getAttribute("data-src")),t.push(l("img",{src:this.imgsrc(c)}))}else n.nodeName==="TD"?t.push(this.parseTableCell(n,"td")):n.nodeName==="TH"?t.push(this.parseTableCell(n,"th")):n.nodeName==="TABLE"?(this.buildingTable=!0,t.push(l("table",null,this.parseNode(n))),this.buildingTable=!1):n.nodeName==="NOSCRIPT"||(console.log("Unknown node:",n.nodeName),t.push(l("span",null,n.innerText)))}return t}parseTableCell(e,t){return l(t,{style:{background:e.style.background},rowspan:e.getAttribute("rowspan"),colspan:e.getAttribute("colspan")},this.parseNode(e))}parseList(e,t){let o=t,n=[];for(let s of e.querySelectorAll("li"))n.push(l("li",null,this.parseNode(s)));return l(o,null,n)}blockquoteFromDl(e){let t=[],o=null;if(e.children.length===1){let n=this.parseNode(e.children[0]);t.push(n)}else if(e.children.length===2){let n=this.parseNode(e.children[0]);t.push(n),t.push(l("cite",null,this.parseNode(e.children[1])))}else o="quote-many",t.push(this.parseNode(e));return l("blockquote",{className:o},t)}sections(){let e=this.qs("div.mw-parser-output"),t=!1,o=[];e.querySelector("#toc")||(t=!0);let n=[];for(let s of e.childNodes)s.nodeName!=="ASIDE"&&(t&&n.push(s),s.id==="toc"&&(t=!0));return l("div",{className:"sections"},this.parseNode({childNodes:n}))}headParagraphs(){let e=this.qs("div.mw-parser-output");if(!e.querySelector("#toc"))return null;let t=[];for(let n of Array.from(e.childNodes)){if(n.id==="toc")break;n.nodeName==="ASIDE"||n.nodeName==="DIV"&&n.querySelector("aside")||(n.nodeName!=="DL",t.push(n))}let o=this.parseNode({childNodes:t});return l("div",null,o)}},F=class extends N{constructor(e){super(e)}componentDidMount(){this.update()}async update(){let e=_e(this.props.wiki,this.props.page),t=await fetch(`${ce}/${e}`),o=await t.text();this.setState({error:t.status<200||t.status>=300,parser:new te(o,this.props.wiki),origin:e})}render(){if(!this.state.parser)return null;if(this.state.error)throw new I(l("div",null,this.props.page," not found on ",this.props.wiki));return this.props.onTitle(this.state.parser.title()),setTimeout(()=>{this.props.onLoad()},0),l("div",null,l("a",{href:this.state.origin},"origin"),l("h1",null,this.state.parser.title()),l("p",null,this.state.parser.aside()),l("p",null,this.state.parser.headParagraphs()),l("p",null,this.state.parser.toc()),l("p",null,this.state.parser.sections()))}};var re=class extends N{componentDidCatch(e){console.error(e),this.setState({error:e})}render(){if(this.state.error){let e=""+this.state.error.stack;return this.state.error.el&&(e=this.state.error.el),l("div",{style:{fontFamily:"monospace"}},"Error fetching ",l("span",null,this.props.page)," from"," ",l("span",null,this.props.wiki),l("pre",{style:{color:"red"}},e))}return l(F,{...this.props})}};async function pe(){let r=new URL(window.location.href),e=r.searchParams.get("p"),t=null,o=null;if(e){let n=e.split("/");if(n=n.map(s=>s.trim()).filter(s=>s!=""),n.length!=2){alert(`Expected to parts to the path: <wiki>/<page>, instead found ${n}`);return}[t,o]=n}else o=r.pathname.split("/").slice(-1)[0],t=r.pathname.split("https://")[1].split(".")[0];R(l("div",null,"Loading '",o,"' from '",t,"'"),document.body),R(l(re,{onTitle:n=>{document.title=n},onLoad:()=>{sessionStorage[o]&&window.scrollTo(0,sessionStorage[o])},wiki:t,page:o}),document.body),window.onscroll=()=>{sessionStorage[o]=window.scrollY}}pe();})();
