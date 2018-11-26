var tns=function(){var t=window,Pi=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Hi=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Ri(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function Wi(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function zi(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function qi(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function ji(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function Fi(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Qi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Vi(t){return("insertRule"in t?t.cssRules:t.rules).length}function Xi(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Yi=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Ki=i?function(t,e){Yi(t,e)||t.classList.add(e)}:function(t,e){Yi(t,e)||(t.className+=" "+e)},Ui=i?function(t,e){Yi(t,e)&&t.classList.remove(e)}:function(t,e){Yi(t,e)&&(t.className=t.className.replace(e,""))};function Gi(t,e){return t.hasAttribute(e)}function Ji(t,e){return t.getAttribute(e)}function r(t){return void 0!==t.item}function _i(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Zi(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function $i(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function ta(t,e){"none"!==t.style.display&&(t.style.display="none")}function ea(t,e){"none"===t.style.display&&(t.style.display="")}function na(t){return"none"!==window.getComputedStyle(t).display}function ia(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function aa(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}function ra(t,e){for(var n in e)t.addEventListener(n,e[n],!1)}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var u=!!a&&{passive:!0};function oa(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&u;t.removeEventListener(n,e[n],i)}}function ua(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var sa=function(h){h=Ri({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:"auto",freezable:!0,onInit:!1,useLocalStorage:!0},h||{});var D=document,m=window,u=13,s=32,l=33,c=34,f=35,d=36,v=37,p=38,y=39,g=40,e={},n=h.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=m.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}var a,r,o,x,b,w,C,M=e.tC?Wi(e.tC):zi(e,"tC",function(){var t=document,e=qi(),n=ji(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],s=0;s<3;s++)if(r=u[s],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?Fi(e,n):i.remove(),a}(),n),A=e.tPL?Wi(e.tPL):zi(e,"tPL",function(){var t,e=document,n=qi(),i=ji(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?Fi(n,i):a.remove(),t}(),n),O=e.tMQ?Wi(e.tMQ):zi(e,"tMQ",(r=document,o=qi(),x=ji(o),b=r.createElement("div"),w=r.createElement("style"),C="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",w.type="text/css",b.className="tns-mq-test",o.appendChild(w),o.appendChild(b),w.styleSheet?w.styleSheet.cssText=C:w.appendChild(r.createTextNode(C)),a=window.getComputedStyle?window.getComputedStyle(b).position:b.currentStyle.position,o.fake?Fi(o,x):b.remove(),"absolute"===a),n),T=e.tTf?Wi(e.tTf):zi(e,"tTf",ia("transform"),n),E=e.t3D?Wi(e.t3D):zi(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=qi(),a=ji(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?Fi(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(T),n),B=e.tTDu?Wi(e.tTDu):zi(e,"tTDu",ia("transitionDuration"),n),k=e.tTDe?Wi(e.tTDe):zi(e,"tTDe",ia("transitionDelay"),n),N=e.tADu?Wi(e.tADu):zi(e,"tADu",ia("animationDuration"),n),L=e.tADe?Wi(e.tADe):zi(e,"tADe",ia("animationDelay"),n),S=e.tTE?Wi(e.tTE):zi(e,"tTE",aa(B,"Transition"),n),I=e.tAE?Wi(e.tAE):zi(e,"tAE",aa(N,"Animation"),n),P=m.console&&"function"==typeof m.console.warn,H=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],R={};if(H.forEach(function(t){if("string"==typeof h[t]){var e=h[t],n=D.querySelector(e);if(R[t]=e,!n||!n.nodeName)return void(P&&console.warn("Can't find",h[t]));h[t]=n}}),!(h.container.children.length<1)){var W=h.responsive,z=h.nested,q="carousel"===h.mode;if(W){0 in W&&(h=Ri(h,W[0]),delete W[0]);var j={};for(var F in W){var Q=W[F];Q="number"==typeof Q?{items:Q}:Q,j[F]=Q}W=j,j=null}if(q&&"outer"!==z||function t(e){for(var n in e)q||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"outer"===z&&"autoHeight"===n&&(e[n]=!0),"responsive"===n&&t(e[n])}(h),!q){h.axis="horizontal",h.slideBy="page",h.edgePadding=!1;var V=h.animateIn,X=h.animateOut,Y=h.animateDelay,K=h.animateNormal}var U,G="horizontal"===h.axis,J=D.createElement("div"),_=D.createElement("div"),Z=h.container,$=Z.parentNode,tt=Z.outerHTML,et=Z.children,nt=et.length,it=mn(),at=!1;W&&Pn();var rt,ot,ut,st,lt,ct,ft,dt=h.autoWidth,vt=xn("fixedWidth"),pt=xn("edgePadding"),ht=xn("gutter"),mt=yn(),yt=xn("center"),gt=dt?1:Math.floor(xn("items")),xt=xn("slideBy"),bt=h.viewportMax||h.fixedWidthViewportWidth,wt=xn("arrowKeys"),Ct=xn("speed"),Mt=h.rewind,At=!Mt&&h.loop,Tt=xn("autoHeight"),Et=xn("controls"),Bt=xn("controlsText"),kt=xn("nav"),Nt=xn("touch"),Lt=xn("mouseDrag"),Dt=xn("autoplay"),Ot=xn("autoplayTimeout"),St=xn("autoplayText"),It=xn("autoplayHoverPause"),Pt=xn("autoplayResetOnVisibility"),Ht=(ft=document.createElement("style"),ct&&ft.setAttribute("media",ct),document.querySelector("head").appendChild(ft),ft.sheet?ft.sheet:ft.styleSheet),Rt=h.lazyload,Wt=(h.lazyloadSelector,[]),zt=At?(st=function(){{if(dt||vt&&!bt)return nt-1;var t=vt?"fixedWidth":"items",e=[];if((vt||h[t]<nt)&&e.push(h[t]),W)for(var n in W){var i=W[n][t];i&&(vt||i<nt)&&e.push(i)}return e.length||e.push(0),Math.ceil(vt?bt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),lt=q?Math.ceil((5*st-nt)/2):4*st-nt,lt=Math.max(st,lt),gn("edgePadding")?lt+1:lt):0,qt=q?nt+2*zt:nt+zt,jt=!(!vt&&!dt||At),Ft=vt?oi():null,Qt=!q||!At,Vt=G?"left":"top",Xt="",Yt="",Kt=vt?function(){return Math.ceil(-Ft/(vt+ht))}:dt?function(){for(var t=qt;t--;)if(rt[t]>-Ft)return t}:function(){return yt&&q&&!At?nt-1:At||q?Math.max(0,qt-Math.ceil(gt)):qt-1},Ut=vn(xn("startIndex")),Gt=Ut,Jt=(dn(),0),_t=dt?null:Kt(),Zt=h.preventActionWhenRunning,$t=h.swipeAngle,te=!$t||"?",ee=!1,ne=h.onInit,ie=new ua,ae=" tns-slider tns-"+h.mode,re=Z.id||(ut=window.tnsId,window.tnsId=ut?ut+1:1,"tns"+window.tnsId),oe=xn("disable"),ue=!1,se=h.freezable,le=!(!se||dt)&&In(),ce=!1,fe={click:hi,keydown:function(t){switch((t=Mi(t)).keyCode){case v:case p:case l:Oe.disabled||hi(t,-1);break;case y:case g:case c:Se.disabled||hi(t,1);break;case d:pi("first",t);break;case f:pi("last",t)}}},de={click:function(t){if(ee){if(Zt)return;vi()}var e,n=(t=Mi(t)).target||t.srcElement;for(;n!==Re&&!Gi(n,"data-nav");)n=n.parentNode;Gi(n,"data-nav")&&(pi(e=je=[].indexOf.call(He,n),t),Fe===e&&(Ue&&bi(),je=-1))},keydown:function(t){var e=D.activeElement;if(!Gi(e,"data-nav"))return;var n=(t=Mi(t)).keyCode,i=[].indexOf.call(He,e),a=ze.length,r=ze.indexOf(i);h.navContainer&&(a=nt,r=i);function o(t){return h.navContainer?t:ze[t]}switch(n){case v:case l:0<r&&Ci(He[o(r-1)]);break;case p:case d:0<r&&Ci(He[o(0)]);break;case y:case c:r<a-1&&Ci(He[o(r+1)]);break;case g:case f:r<a-1&&Ci(He[o(a-1)]);break;case u:case s:pi(je=i,t)}}},ve={mouseover:function(){Ue&&(yi(),Ge=!0)},mouseout:function(){Ge&&(mi(),Ge=!1)}},pe={visibilitychange:function(){D.hidden?Ue&&(yi(),_e=!0):_e&&(mi(),_e=!1)}},he={keydown:function(t){switch((t=Mi(t)).keyCode){case v:hi(t,-1);break;case y:hi(t,1)}}},me={touchstart:ki,touchmove:Ni,touchend:Li,touchcancel:Li},ye={mousedown:ki,mousemove:Ni,mouseup:Li,mouseleave:Li},ge=gn("controls"),xe=gn("nav"),be=!!dt||h.navAsThumbnails,we=gn("autoplay"),Ce=gn("touch"),Me=gn("mouseDrag"),Ae="tns-slide-active",Te="tns-complete",Ee={load:function(t){Fn(Ai(t))},error:function(t){Qn(Ai(t))}},Be="force"===h.preventScrollOnTouch;if(ge)var ke,Ne,Le=h.controlsContainer,De=h.controlsContainer?h.controlsContainer.outerHTML:"",Oe=h.prevButton,Se=h.nextButton,Ie=h.prevButton?h.prevButton.outerHTML:"",Pe=h.nextButton?h.nextButton.outerHTML:"";if(xe)var He,Re=h.navContainer,We=h.navContainer?h.navContainer.outerHTML:"",ze=Oi(),qe=[],je=-1,Fe=hn(),Qe=Fe,Ve="tns-nav-active",Xe="Carousel Page ",Ye=" (Current Slide)";if(we)var Ke,Ue,Ge,Je,_e,Ze="forward"===h.autoplayDirection?1:-1,$e=h.autoplayButton,tn=h.autoplayButton?h.autoplayButton.outerHTML:"",en=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ce||Me)var nn,an,rn={},on={},un=!1,sn=G?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};dt||fn(oe||le),T&&(Vt=T,Xt="translate",E?(Xt+=G?"3d(":"3d(0px, ",Yt=G?", 0px, 0px)":", 0px)"):(Xt+=G?"X(":"Y(",Yt=")")),function(){W&&Pn();!function(){gn("gutter");J.className="tns-outer",_.className="tns-inner",J.id=re+"-ow",_.id=re+"-iw",Tt&&(_.className+=" tns-ah");""===Z.id&&(Z.id=re);ae+=A||dt?" tns-subpixel":" tns-no-subpixel",ae+=M?" tns-calc":" tns-no-calc",dt&&(ae+=" tns-autowidth");if(ae+=" tns-"+h.axis,Z.className+=ae,q){var t=D.createElement("div");t.className="tns-ovh",J.appendChild(t),t.appendChild(_)}else J.appendChild(_);$.insertBefore(J,Z),_.appendChild(Z)}();for(var t=0;t<nt;t++){var e=et[t];e.id||(e.id=re+"-item"+t),Ki(e,"tns-item"),!q&&K&&Ki(e,K),_i(e,{"aria-hidden":"true",tabindex:"-1"})}if(zt){for(var n=D.createDocumentFragment(),i=D.createDocumentFragment(),a=zt;a--;){var r=a%nt,o=et[r].cloneNode(!0);if(Zi(o,"id"),i.insertBefore(o,i.firstChild),q){var u=et[nt-1-r].cloneNode(!0);Zi(u,"id"),n.appendChild(u)}}Z.insertBefore(n,Z.firstChild),Z.appendChild(i),et=Z.children}(function(){for(var t=Ut,e=Ut+Math.min(nt,gt);t<e;t++){var n=et[t];_i(n,{"aria-hidden":"false"}),Zi(n,["tabindex"]),Ki(n,Ae),q||(n.style.left=100*(t-Ut)/gt+"%",Ki(n,V),Ui(n,K))}G&&(A||dt?(Qi(Ht,"#"+re+" > .tns-item","font-size:"+m.getComputedStyle(et[0]).fontSize+";",Vi(Ht)),Qi(Ht,"#"+re,"font-size:0;",Vi(Ht))):q&&Xi(et,function(t,e){var n;t.style.marginLeft=(n=e,M?M+"("+100*n+"% / "+qt+")":100*n/qt+"%")}));if(O){var i=bn(h.edgePadding,h.gutter,h.fixedWidth,h.speed,h.autoHeight);Qi(Ht,"#"+re+"-iw",i,Vi(Ht)),q&&(i=G&&!dt?"width:"+wn(h.fixedWidth,h.gutter,h.items)+";":"",B&&(i+=Tn(Ct)),Qi(Ht,"#"+re,i,Vi(Ht))),i=G&&!dt?Cn(h.fixedWidth,h.gutter,h.items):"",h.gutter&&(i+=Mn(h.gutter)),q||(B&&(i+=Tn(Ct)),N&&(i+=En(Ct))),i&&Qi(Ht,"#"+re+" > .tns-item",i,Vi(Ht))}else{_.style.cssText=bn(pt,ht,vt,Tt),q&&G&&!dt&&(Z.style.width=wn(vt,ht,gt));var i=G&&!dt?Cn(vt,ht,gt):"";ht&&(i+=Mn(ht)),i&&Qi(Ht,"#"+re+" > .tns-item",i,Vi(Ht))}if(W&&O)for(var a in W){a=parseInt(a);var r=W[a],i="",o="",u="",s="",l=dt?null:xn("items",a),c=xn("fixedWidth",a),f=xn("speed",a),d=xn("edgePadding",a),v=xn("autoHeight",a),p=xn("gutter",a);("edgePadding"in r||"gutter"in r)&&(o="#"+re+"-iw{"+bn(d,p,c,f,v)+"}"),q&&G&&!dt&&("fixedWidth"in r||"items"in r||vt&&"gutter"in r)&&(u="width:"+wn(c,p,l)+";"),B&&"speed"in r&&(u+=Tn(f)),u&&(u="#"+re+"{"+u+"}"),("fixedWidth"in r||vt&&"gutter"in r||!q&&"items"in r)&&(s+=Cn(c,p,l)),"gutter"in r&&(s+=Mn(p)),!q&&"speed"in r&&(B&&(s+=Tn(f)),N&&(s+=En(f))),s&&(s="#"+re+" > .tns-item{"+s+"}"),(i=o+u+s)&&Ht.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",Ht.cssRules.length)}})(),Bn()}();var ln=At?q?function(){var t=Jt,e=_t;t+=xt,e-=xt,pt?(t+=1,e-=1):vt&&(mt+ht)%(vt+ht)&&(e-=1),zt&&(e<Ut?Ut-=nt:Ut<t&&(Ut+=nt))}:function(){if(_t<Ut)for(;Jt+nt<=Ut;)Ut-=nt;else if(Ut<Jt)for(;Ut<=_t-nt;)Ut+=nt}:function(){Ut=Math.max(Jt,Math.min(_t,Ut))},cn=q?function(){var e,n,i,a,t,r,o,u,s,l,c;ai(Z,""),B||!Ct?(li(),Ct&&na(Z)||vi()):(e=Z,n=Vt,i=Xt,a=Yt,t=ui(),r=Ct,o=vi,u=Math.min(r,10),s=0<=t.indexOf("%")?"%":"px",t=t.replace(s,""),l=Number(e.style[n].replace(i,"").replace(a,"").replace(s,"")),c=(t-l)/r*u,setTimeout(function t(){r-=u,l+=c,e.style[n]=i+l+s+a,0<r?setTimeout(t,u):o()},u)),G||Di()}:function(){Wt=[];var t={};t[S]=t[I]=vi,oa(et[Gt],t),ra(et[Ut],t),ci(Gt,V,X,!0),ci(Ut,K,V),S&&I&&Ct&&na(Z)||vi()};return{version:"2.8.8",getInfo:Ii,events:ie,goTo:pi,play:function(){Dt&&!Ue&&(xi(),Je=!1)},pause:function(){Ue&&(bi(),Je=!0)},isOn:at,updateSliderHeight:_n,refresh:Bn,destroy:function(){if(Ht.disabled=!0,Ht.ownerNode&&Ht.ownerNode.remove(),oa(m,{resize:On}),wt&&oa(D,he),Le&&oa(Le,fe),Re&&oa(Re,de),oa(Z,ve),oa(Z,pe),$e&&oa($e,{click:wi}),Dt&&clearInterval(Ke),q&&S){var t={};t[S]=vi,oa(Z,t)}Nt&&oa(Z,me),Lt&&oa(Z,ye);var r=[tt,De,Ie,Pe,We,tn];for(var e in H.forEach(function(t,e){var n="container"===t?J:h[t];if("object"==typeof n){var i=!!n.previousElementSibling&&n.previousElementSibling,a=n.parentNode;n.outerHTML=r[e],h[t]=i?i.nextElementSibling:a.firstElementChild}}),H=V=X=Y=K=G=J=_=Z=$=tt=et=nt=U=it=dt=vt=pt=ht=mt=gt=xt=bt=wt=Ct=Mt=At=Tt=Ht=Rt=rt=Wt=zt=qt=jt=Ft=Qt=Vt=Xt=Yt=Kt=Ut=Gt=Jt=_t=$t=te=ee=ne=ie=ae=re=oe=ue=se=le=ce=fe=de=ve=pe=he=me=ye=ge=xe=be=we=Ce=Me=Ae=Te=Ee=ot=Et=Bt=Le=De=Oe=Se=ke=Ne=kt=Re=We=He=ze=qe=je=Fe=Qe=Ve=Xe=Ye=Dt=Ot=Ze=St=It=$e=tn=Pt=en=Ke=Ue=Ge=Je=_e=rn=on=nn=un=an=sn=Nt=Lt=null,this)"rebuild"!==e&&(this[e]=null);at=!1},rebuild:function(){return sa(Ri(h,R))}}}function fn(t){t&&(Et=kt=Nt=Lt=wt=Dt=It=Pt=!1)}function dn(){for(var t=q?Ut-zt:Ut;t<0;)t+=nt;return t%nt+1}function vn(t){return t=t?Math.max(0,Math.min(At?nt-1:nt-gt,t)):0,q?t+zt:t}function pn(t){for(null==t&&(t=Ut),q&&(t-=zt);t<0;)t+=nt;return Math.floor(t%nt)}function hn(){var n,i=pn();return ze.forEach(function(t,e){t<=i&&(n=t)}),!At&&q&&Ut===_t&&(n=ze[ze.length-1]),n}function mn(){return m.innerWidth||D.documentElement.clientWidth||D.body.clientWidth}function yn(){var t=pt?2*pt-ht:0;return function t(e){var n,i=D.createElement("div");return e.appendChild(i),n=i.offsetWidth,i.remove(),n||t(e.parentNode)}($)-t}function gn(t){if(h[t])return!0;if(W)for(var e in W)if(W[e][t])return!0;return!1}function xn(t,e){if(null==e&&(e=it),"items"===t&&vt)return Math.floor((mt+ht)/(vt+ht))||1;var n=h[t];if(W)for(var i in W)e>=parseInt(i)&&t in W[i]&&(n=W[i][t]);return"slideBy"===t&&"page"===n&&(n=xn("items")),q||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function bn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=G?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(G?u+" 0 0":"0 "+u+" 0")+";"}return a&&B&&i&&(r+=Tn(i)),r}function wn(t,e,n){return t?(t+e)*qt+"px":M?M+"("+100*qt+"% / "+n+")":100*qt/n+"%"}function Cn(t,e,n){var i;if(t)i=t+e+"px";else{q||(n=Math.floor(n));var a=q?qt:n;i=M?M+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==z?i+";":i+" !important;"}function Mn(t){var e="";!1!==t&&(e=(G?"padding-":"margin-")+(G?"right":"bottom")+": "+t+"px;");return e}function An(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Tn(t){return An(B,18)+"transition-duration:"+t/1e3+"s;"}function En(t){return An(N,17)+"animation-duration:"+t/1e3+"s;"}function Bn(){if(gn("autoHeight")||dt||!G){var t=Z.querySelectorAll("img");Xi(t,function(t){var e=t.src;e.indexOf("data:image")<0?(ra(t,Ee),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e,Ki(t,"loading"),Xn(t)):Rt||Fn(t)}),Pi(function(){Un($i(t),function(){ot=!0})}),!dt&&G&&(t=Yn(Ut,gt)),Rt?kn():Pi(function(){Un($i(t),kn)})}else q&&si(),Ln(),Dn()}function kn(){if(dt){var e=At?Ut:nt-1;!function t(){et[e-1].getBoundingClientRect().right.toFixed(2)===et[e].getBoundingClientRect().left.toFixed(2)?Nn():setTimeout(function(){t()},16)}()}else Nn()}function Nn(){G&&!dt||(Zn(),dt?(Ft=oi(),se&&(le=In()),_t=Kt(),fn(oe||le)):Di()),q&&si(),Ln(),Dn()}function Ln(){if(we){var t=Dt?"stop":"start";$e?_i($e,{"data-action":t}):h.autoplayButtonOutput&&(J.insertAdjacentHTML("top"!==h.autoplayPosition?"beforeend":"afterbegin",'<button data-action="'+t+'" type="button">'+en[0]+t+en[1]+St[0]+"</button>"),$e=J.querySelector("[data-action]")),$e&&ra($e,{click:wi}),Dt&&(xi(),It&&ra(Z,ve),Pt&&ra(Z,pe))}if(xe){var n=q?zt:0;if(Re)_i(Re,{"aria-label":"Carousel Pagination"}),Xi(He=Re.children,function(t,e){_i(t,{"data-nav":e,tabindex:"-1","aria-controls":et[n+e].id,"aria-label":Xe+(e+1)})});else{for(var e="",i=be?"":'style="display:none"',a=0;a<nt;a++)e+='<button data-nav="'+a+'" tabindex="-1" aria-controls="'+et[n+a].id+'" '+i+' type="button" aria-label="'+Xe+(a+1)+'"></button>';e='<div class="tns-nav" aria-label="Carousel Pagination">'+e+"</div>",J.insertAdjacentHTML("top"!==h.navPosition?"beforeend":"afterbegin",e),Re=J.querySelector(".tns-nav"),He=Re.children}if(Si(),B){var r=B.substring(0,B.length-18).toLowerCase(),o="transition: all "+Ct/1e3+"s";r&&(o="-"+r+"-"+o),Qi(Ht,"[aria-controls^="+re+"-item]",o,Vi(Ht))}_i(He[Fe],{tabindex:"0","aria-label":Xe+(Fe+1)+Ye}),Ki(He[Fe],Ve),ra(Re,de)}ge&&(Le||Oe&&Se||(J.insertAdjacentHTML("top"!==h.controlsPosition?"beforeend":"afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+re+'" type="button">'+Bt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+re+'" type="button">'+Bt[1]+"</button></div>"),Le=J.querySelector(".tns-controls")),Oe&&Se||(Oe=Le.children[0],Se=Le.children[1]),h.controlsContainer&&_i(Le,{"aria-label":"Carousel Navigation",tabindex:"0"}),(h.controlsContainer||h.prevButton&&h.nextButton)&&_i([Oe,Se],{"aria-controls":re,tabindex:"-1"}),(h.controlsContainer||h.prevButton&&h.nextButton)&&(_i(Oe,{"data-controls":"prev"}),_i(Se,{"data-controls":"next"})),ke=ti(Oe),Ne=ti(Se),ii(),Le?ra(Le,fe):(ra(Oe,fe),ra(Se,fe))),Hn()}function Dn(){if(q&&S){var t={};t[S]=vi,ra(Z,t)}Nt&&ra(Z,me),Lt&&ra(Z,ye),wt&&ra(D,he),"inner"===z?ie.on("outerResized",function(){Sn(),ie.emit("innerLoaded",Ii())}):(W||vt||dt||Tt||!G)&&ra(m,{resize:On}),"outer"===z?ie.on("innerLoaded",Kn):Tt&&!oe&&Kn(),jn(),oe?zn():le&&Wn(),ie.on("indexChanged",Gn),"inner"===z&&ie.emit("innerLoaded",Ii()),"function"==typeof ne&&ne(Ii()),at=!0}function On(t){Pi(function(){Sn(Mi(t))})}function Sn(t){if(at){"outer"===z&&ie.emit("outerResized",Ii(t)),it=mn();var e,n=U,i=!1;W&&(Pn(),(e=n!==U)&&ie.emit("newBreakpointStart",Ii(t)));var a,r,o,u,s=gt,l=oe,c=le,f=wt,d=Et,v=kt,p=Nt,h=Lt,m=Dt,y=It,g=Pt,x=Ut;if(e){var b=vt,w=Tt,C=Bt,M=yt,A=St;if(!O)var T=ht,E=pt}if(wt=xn("arrowKeys"),Et=xn("controls"),kt=xn("nav"),Nt=xn("touch"),yt=xn("center"),Lt=xn("mouseDrag"),Dt=xn("autoplay"),It=xn("autoplayHoverPause"),Pt=xn("autoplayResetOnVisibility"),e&&(oe=xn("disable"),vt=xn("fixedWidth"),Ct=xn("speed"),Tt=xn("autoHeight"),Bt=xn("controlsText"),St=xn("autoplayText"),Ot=xn("autoplayTimeout"),O||(pt=xn("edgePadding"),ht=xn("gutter"))),fn(oe),mt=yn(),G&&!dt||oe||(Zn(),G||(Di(),i=!0)),(vt||dt)&&(Ft=oi(),_t=Kt()),(e||vt)&&(gt=xn("items"),xt=xn("slideBy"),(r=gt!==s)&&(vt||dt||(_t=Kt()),ln())),e&&oe!==l&&(oe?zn():function(){if(!ue)return;if(Ht.disabled=!1,Z.className+=ae,si(),At)for(var t=zt;t--;)q&&ea(et[t]),ea(et[qt-t-1]);if(!q)for(var e=Ut,n=Ut+nt;e<n;e++){var i=et[e],a=e<Ut+gt?V:K;i.style.left=100*(e-Ut)/gt+"%",Ki(i,a)}Rn(),ue=!1}()),se&&(e||vt||dt)&&(le=In())!==c&&(le?(li(ui(vn(0))),Wn()):(!function(){if(!ce)return;pt&&O&&(_.style.margin="");if(zt)for(var t="tns-transparent",e=zt;e--;)q&&Ui(et[e],t),Ui(et[qt-e-1],t);Rn(),ce=!1}(),i=!0)),fn(oe||le),Dt||(It=Pt=!1),wt!==f&&(wt?ra(D,he):oa(D,he)),Et!==d&&(Et?Le?ea(Le):(Oe&&ea(Oe),Se&&ea(Se)):Le?ta(Le):(Oe&&ta(Oe),Se&&ta(Se))),kt!==v&&(kt?(ea(Re),Si()):ta(Re)),Nt!==p&&(Nt?ra(Z,me):oa(Z,me)),Lt!==h&&(Lt?ra(Z,ye):oa(Z,ye)),Dt!==m&&(Dt?($e&&ea($e),Ue||Je||xi()):($e&&ta($e),Ue&&bi())),It!==y&&(It?ra(Z,ve):oa(Z,ve)),Pt!==g&&(Pt?ra(D,pe):oa(D,pe)),e){if(vt===b&&yt===M||(i=!0),Tt!==w&&(Tt||(_.style.height="")),Et&&Bt!==C&&(Oe.innerHTML=Bt[0],Se.innerHTML=Bt[1]),$e&&St!==A){var B=Dt?1:0,k=$e.innerHTML,N=k.length-A[B].length;k.substring(N)===A[B]&&($e.innerHTML=k.substring(0,N)+St[B])}}else yt&&(vt||dt)&&(i=!0);if((a=Ut!==x)&&(ie.emit("indexChanged",Ii()),i=!0),r&&(ze=Oi(),Si(),a||Gn(),q||function(){for(var t=Ut+Math.min(nt,gt),e=qt;e--;){var n=et[e];Ut<=e&&e<t?(Ki(n,"tns-moving"),n.style.left=100*(e-Ut)/gt+"%",Ki(n,V),Ui(n,K)):n.style.left&&(n.style.left="",Ki(n,K),Ui(n,V)),Ui(n,X)}setTimeout(function(){Xi(et,function(t){Ui(t,"tns-moving")})},300)}()),!oe&&!le){if(e&&!O&&(pt===E&&ht===T||(_.style.cssText=bn(pt,ht,vt,Ct,Tt)),G)){q&&(Z.style.width=wn(vt,ht,gt));var L=Cn(vt,ht,gt)+Mn(ht);u=Vi(o=Ht)-1,"deleteRule"in o?o.deleteRule(u):o.removeRule(u),Qi(Ht,"#"+re+" > .tns-item",L,Vi(Ht))}Tt&&Kn(),i&&(si(),Gt=Ut)}e&&ie.emit("newBreakpointEnd",Ii(t))}}function In(){return vt||dt?(vt?(vt+ht)*nt:At?rt[nt]:ri())<=mt+2*pt:nt<=gt}function Pn(){for(var t in U=0,W)(t=parseInt(t))<=it&&(U=t)}function Hn(){!Dt&&$e&&ta($e),!kt&&Re&&ta(Re),Et||(Le?ta(Le):(Oe&&ta(Oe),Se&&ta(Se)))}function Rn(){Dt&&$e&&ea($e),kt&&Re&&ea(Re),Et&&(Le?ea(Le):(Oe&&ea(Oe),Se&&ea(Se)))}function Wn(){if(!ce){if(pt&&(_.style.margin="0px"),zt)for(var t="tns-transparent",e=zt;e--;)q&&Ki(et[e],t),Ki(et[qt-e-1],t);Hn(),ce=!0}}function zn(){if(!ue){if(Ht.disabled=!0,Z.className=Z.className.replace(ae.substring(1),""),Zi(Z,["style"]),At)for(var t=zt;t--;)q&&ta(et[t]),ta(et[qt-t-1]);if(G&&q||Zi(_,["style"]),!q)for(var e=Ut,n=Ut+nt;e<n;e++){var i=et[e];Zi(i,["style"]),Ui(i,V),Ui(i,K)}Hn(),ue=!0}}function qn(){var n,i,a,r=Ut;if(yt||pt?(dt||vt)&&(i=yt||pt?-(ui().replace(/%|px/,"")+pt):rt[Ut],a=i+mt):dt&&(i=rt[Ut]),dt)yt||pt||(a=i+mt),rt.forEach(function(t,e){(yt||pt)&&t<=i&&(r=e),t<a&&(n=e)});else if(yt||pt)if(vt){var t=vt+ht;r=Math.floor(Math.max(i,0)/t),n=Math.ceil(a/t)}else yt&&(r-=(gt-1)/2),pt&&(r-=pt*gt/mt),n=r+gt,pt&&(n+=(2*pt-ht)*gt/mt),r=Math.floor(Math.max(r,0)),n=Math.floor(n);else n=r+gt;return[r,n]}function jn(){Rt&&!oe&&Yn.apply(null,qn()).forEach(function(t){if(!Yi(t,Te)){var e={};e[S]=function(t){t.stopPropagation()},ra(t,e),ra(t,Ee);var n=Ji(t,"data-srcset");n&&(t.srcset=n),t.src=Ji(t,"data-src"),Ki(t,"loading"),Xn(t)}})}function Fn(t){Ki(t,"loaded"),Vn(t)}function Qn(t){Ki(t,"failed"),Vn(t)}function Vn(t){Ki(t,"tns-complete"),Ui(t,"loading"),oa(t,Ee)}function Xn(t){t.complete&&(0!==t.naturalWidth?Fn(t):Qn(t))}function Yn(t,e){var n=[];for(e=Math.min(e,qt-1);t<=e;)Xi(et[t].querySelectorAll("img"),function(t){n.push(t)}),t++;return n}function Kn(){var t=Tt?Yn.apply(null,qn()):Yn(zt,zt+nt);Pi(function(){Un(t,_n)})}function Un(n,t){return ot?t():(n.forEach(function(t,e){Yi(t,Te)&&n.splice(e,1)}),n.length?void Pi(function(){Un(n,t)}):t())}function Gn(){jn(),function(){for(var t=Ut+Math.min(nt,gt),e=qt;e--;){var n=et[e];Ut<=e&&e<t?Gi(n,"tabindex")&&(_i(n,{"aria-hidden":"false"}),Zi(n,["tabindex"]),Ki(n,Ae)):(Gi(n,"tabindex")||_i(n,{"aria-hidden":"true",tabindex:"-1"}),Yi(n,Ae)&&Ui(n,Ae))}}(),ii(),function(){if(kt&&(Fe=0<=je?je:hn(),je=-1,Fe!==Qe)){var t=He[Qe],e=He[Fe];_i(t,{tabindex:"-1","aria-label":Xe+(Qe+1)}),_i(e,{tabindex:"0","aria-label":Xe+(Fe+1)+Ye}),Ui(t,Ve),Ki(e,Ve),Qe=Fe}}()}function Jn(t,e){for(var n=[],i=t,a=Math.min(t+e,qt);i<a;i++)n.push(et[i].offsetHeight);return Math.max.apply(null,n)}function _n(){var t=Tt?Jn(Ut,gt):Jn(zt,nt);_.style.height!==t&&(_.style.height=t+"px")}function Zn(){rt=[0];for(var t,e=G?"left":"top",n=et[0].getBoundingClientRect()[e],i=1;i<qt;i++)t=et[i].getBoundingClientRect()[e],rt.push(t-n)}function $n(t){return t.nodeName.toLowerCase()}function ti(t){return"button"===$n(t)}function ei(t){return"true"===t.getAttribute("aria-disabled")}function ni(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function ii(){if(Et&&!Mt&&!At){var t=ke?Oe.disabled:ei(Oe),e=Ne?Se.disabled:ei(Se),n=Ut<=Jt,i=!Mt&&_t<=Ut;n&&!t&&ni(ke,Oe,!0),!n&&t&&ni(ke,Oe,!1),i&&!e&&ni(Ne,Se,!0),!i&&e&&ni(Ne,Se,!1)}}function ai(t,e){B&&(t.style[B]=e)}function ri(){return vt?(vt+ht)*qt:rt[qt-1]+et[qt-1].getBoundingClientRect().width}function oi(){var t=mt+ht-ri();return yt&&(t-=vt?(mt-vt)/2:(mt-(et[qt-1].clientWidth-ht))/2),0<t&&(t=0),t}function ui(t){var e;(null==t&&(t=Ut),G&&!dt)?vt?(e=-(vt+ht)*t,yt&&(e+=(mt-vt)/2)):(yt&&(t-=(gt-1)/2),e=100*-t/(T?qt:gt)):(e=-rt[t],yt&&G&&(e+=(mt-(et[t].offsetWidth-ht))/2));return jt&&(e=Math.max(e,Ft)),e+=!G||dt||vt?"px":"%"}function si(t){ai(Z,"0s"),li(t)}function li(t){null==t&&(t=ui()),Z.style[Vt]=Xt+t+Yt}function ci(t,e,n,i){var a=t+gt;At||(a=Math.min(a,qt));for(var r=t;r<a;r++){var o=et[r];i||(o.style.left=100*(r-Ut)/gt+"%"),Y&&k&&(o.style[k]=o.style[L]=Y*(r-t)/1e3+"s"),Ui(o,e),Ki(o,n),i&&Wt.push(o)}}function fi(t,e){Qt&&ln(),(Ut!==Gt||e)&&(ie.emit("indexChanged",Ii()),ie.emit("transitionStart",Ii()),Tt&&Kn(),Ue&&t&&0<=["click","keydown"].indexOf(t.type)&&bi(),ee=!0,cn())}function di(t){return t.toLowerCase().replace(/-/g,"")}function vi(t){if(q||ee){if(ie.emit("transitionEnd",Ii(t)),!q&&0<Wt.length)for(var e=0;e<Wt.length;e++){var n=Wt[e];n.style.left="",L&&k&&(n.style[L]="",n.style[k]=""),Ui(n,X),Ki(n,K)}if(!t||!q&&t.target.parentNode===Z||t.target===Z&&di(t.propertyName)===di(Vt)){if(!Qt){var i=Ut;ln(),Ut!==i&&(ie.emit("indexChanged",Ii()),si())}"inner"===z&&ie.emit("innerLoaded",Ii()),ee=!1,Gt=Ut}}}function pi(t,e){if(!le)if("prev"===t)hi(e,-1);else if("next"===t)hi(e,1);else{if(ee){if(Zt)return;vi()}var n=pn(),i=0;if("first"===t?i=-n:"last"===t?i=q?nt-gt-n:nt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(nt-1,t))),i=t-n)),!q&&i&&Math.abs(i)<gt){var a=0<i?1:-1;i+=Jt<=Ut+i-nt?nt*a:2*nt*a*-1}Ut+=i,q&&At&&(Ut<Jt&&(Ut+=nt),_t<Ut&&(Ut-=nt)),pn(Ut)!==pn(Gt)&&fi(e)}}function hi(t,e){if(ee){if(Zt)return;vi()}var n;if(!e){for(var i=(t=Mi(t)).target||t.srcElement;i!==Le&&[Oe,Se].indexOf(i)<0;)i=i.parentNode;var a=[Oe,Se].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(Mt){if(Ut===Jt&&-1===e)return void pi("last",t);if(Ut===_t&&1===e)return void pi("first",t)}e&&(Ut+=xt*e,dt&&(Ut=Math.floor(Ut)),fi(n||t&&"keydown"===t.type?t:null))}function mi(){Ke=setInterval(function(){hi(null,Ze)},Ot),Ue=!0}function yi(){clearInterval(Ke),Ue=!1}function gi(t,e){_i($e,{"data-action":t}),$e.innerHTML=en[0]+t+en[1]+e}function xi(){mi(),$e&&gi("stop",St[1])}function bi(){yi(),$e&&gi("start",St[0])}function wi(){Ue?(bi(),Je=!0):(xi(),Je=!1)}function Ci(t){t.focus()}function Mi(t){return Ti(t=t||m.event)?t.changedTouches[0]:t}function Ai(t){return t.target||m.event.srcElement}function Ti(t){return 0<=t.type.indexOf("touch")}function Ei(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Bi(){return a=on.y-rn.y,r=on.x-rn.x,t=Math.atan2(a,r)*(180/Math.PI),e=$t,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),n===h.axis;var t,e,n,i,a,r}function ki(t){if(ee){if(Zt)return;vi()}Dt&&Ue&&yi(),un=!0,an&&(Hi(an),an=null);var e=Mi(t);ie.emit(Ti(t)?"touchStart":"dragStart",Ii(t)),!Ti(t)&&0<=["img","a"].indexOf($n(Ai(t)))&&Ei(t),on.x=rn.x=parseInt(e.clientX),on.y=rn.y=parseInt(e.clientY),q&&(nn=parseFloat(Z.style[Vt].replace(Xt,"").replace(Yt,"")),ai(Z,"0s"))}function Ni(t){if(un){var e=Mi(t);on.x=parseInt(e.clientX),on.y=parseInt(e.clientY),q?an||(an=Pi(function(){!function t(e){if(!te)return void(un=!1);Hi(an);un&&(an=Pi(function(){t(e)}));"?"===te&&(te=Bi());if(te){!Be&&Ti(e)&&(Be=!0);try{e.type&&ie.emit(Ti(e)?"touchMove":"dragMove",Ii(e))}catch(t){}var n=nn,i=sn(on,rn);if(!G||vt||dt)n+=i,n+="px";else{var a=T?i*gt*100/((mt+ht)*qt):100*i/(mt+ht);n+=a,n+="%"}Z.style[Vt]=Xt+n+Yt}}(t)})):("?"===te&&(te=Bi()),te&&(Be=!0)),Be&&t.preventDefault()}}function Li(i){if(un){an&&(Hi(an),an=null),q&&ai(Z,""),un=!1;var t=Mi(i);on.x=parseInt(t.clientX),on.y=parseInt(t.clientY);var a=sn(on,rn);if(Math.abs(a)){if(!Ti(i)){var n=Ai(i);ra(n,{click:function t(e){Ei(e),oa(n,{click:t})}})}q?an=Pi(function(){if(G&&!dt){var t=-a*gt/(mt+ht);t=0<a?Math.floor(t):Math.ceil(t),Ut+=t}else{var e=-(nn+a);if(e<=0)Ut=Jt;else if(e>=rt[rt.length-1])Ut=_t;else for(var n=0;n<qt&&e>=rt[n];)e>rt[Ut=n]&&a<0&&(Ut+=1),n++}fi(i,a),ie.emit(Ti(i)?"touchEnd":"dragEnd",Ii(i))}):te&&hi(i,0<a?-1:1)}}"auto"===h.preventScrollOnTouch&&(Be=!1),$t&&(te="?"),Dt&&!Ue&&mi()}function Di(){_.style.height=rt[Ut+gt]-rt[Ut]+"px"}function Oi(){for(var t=[],e=0,n=Math.ceil(nt/gt);e<n;)t.push(e*gt),e++;return t}function Si(){kt&&!be&&ze!==qe&&(Xi(He,function(t,e){ze.indexOf(e)<0?ta(t):ea(t)}),qe=ze)}function Ii(t){return{container:Z,slideItems:et,navContainer:Re,navItems:He,controlsContainer:Le,hasControls:ge,prevButton:Oe,nextButton:Se,items:gt,slideBy:xt,cloneCount:zt,slideCount:nt,slideCountNew:qt,index:Ut,indexCached:Gt,displayIndex:dn(),navCurrentIndex:Fe,navCurrentIndexCached:Qe,visibleNavIndexes:ze,visibleNavIndexesCached:qe,sheet:Ht,isOn:at,event:t||{}}}P&&console.warn("No slides found in",h.container)};return sa}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
