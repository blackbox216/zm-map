"use strict";(self.webpackChunkzhengming_map=self.webpackChunkzhengming_map||[]).push([[5022],{5022:function(n,e,t){t.r(e),t.d(e,{createSwipeBackGesture:function(){return u}});var r=t(1811),i=t(9507),a=t(7909),u=function(n,e,t,u,c){var o=n.ownerDocument.defaultView,f=(0,i.i)(n),s=function(n){return f?-n.deltaX:n.deltaX};return(0,a.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(n){return function(n){var e=n.startX;return f?e>=o.innerWidth-50:e<=50}(n)&&e()},onStart:t,onMove:function(n){var e=s(n)/o.innerWidth;u(e)},onEnd:function(n){var e=s(n),t=o.innerWidth,i=e/t,a=function(n){return f?-n.velocityX:n.velocityX}(n),u=a>=0&&(a>.2||e>t/2),h=(u?1-i:i)*t,d=0;if(h>5){var l=h/Math.abs(a);d=Math.min(l,540)}c(u,i<=0?.01:(0,r.j)(0,i,.9999),d)}})}}}]);
//# sourceMappingURL=5022.352ea424.chunk.js.map