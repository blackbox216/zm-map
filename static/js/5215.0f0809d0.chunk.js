/*! For license information please see 5215.0f0809d0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkzhengming_map=self.webpackChunkzhengming_map||[]).push([[5215],{5215:function(t,e,n){n.r(e),n.d(e,{startTapClick:function(){return o}});var i=n(1811),o=function(t){var e,n,o,l,v=10*-f,p=0,m=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),L=new WeakMap,h=function(t){v=(0,i.q)(t),w(t)},E=function(){clearTimeout(l),l=void 0,n&&(b(!1),n=void 0)},g=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,k(a(t),t))},w=function(t){k(void 0,t)},k=function(t,e){if(!t||t!==n){clearTimeout(l),l=void 0;var o=(0,i.p)(e),a=o.x,c=o.y;if(n){if(L.has(n))throw new Error("internal error");n.classList.contains(s)||q(n,a,c),b(!0)}if(t){var d=L.get(t);d&&(clearTimeout(d),L.delete(t));var f=r(t)?0:u;t.classList.remove(s),l=setTimeout((function(){q(t,a,c),l=void 0}),f)}n=t}},q=function(t,e,n){p=Date.now(),t.classList.add(s);var i=m&&c(t);i&&i.addRipple&&(T(),o=i.addRipple(e,n))},T=function(){void 0!==o&&(o.then((function(t){return t()})),o=void 0)},b=function(t){T();var e=n;if(e){var i=d-Date.now()+p;if(t&&i>0&&!r(e)){var o=setTimeout((function(){e.classList.remove(s),L.delete(e)}),d);L.set(e,o)}else e.classList.remove(s)}},S=document;S.addEventListener("ionScrollStart",(function(t){e=t.target,E()})),S.addEventListener("ionScrollEnd",(function(){e=void 0})),S.addEventListener("ionGestureCaptured",E),S.addEventListener("touchstart",(function(t){v=(0,i.q)(t),g(t)}),!0),S.addEventListener("touchcancel",h,!0),S.addEventListener("touchend",h,!0),S.addEventListener("mousedown",(function(t){var e=(0,i.q)(t)-f;v<e&&g(t)}),!0),S.addEventListener("mouseup",(function(t){var e=(0,i.q)(t)-f;v<e&&w(t)}),!0),S.addEventListener("contextmenu",(function(t){w(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);
//# sourceMappingURL=5215.0f0809d0.chunk.js.map