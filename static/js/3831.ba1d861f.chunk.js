/*! For license information please see 3831.ba1d861f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkzhengming_map=self.webpackChunkzhengming_map||[]).push([[3831,3127,471],{3127:function(n,t,e){e.r(t),e.d(t,{i:function(){return r}});var r=function(n){return n&&""!==n.dir?"rtl"===n.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase())}},471:function(n,t,e){e.r(t),e.d(t,{createSwipeBackGesture:function(){return o}});var r=e(9069),i=e(3127),u=e(236),o=(e(1045),function(n,t,e,o,a){var c=n.ownerDocument.defaultView,d=(0,i.i)(n),f=function(n){return d?-n.deltaX:n.deltaX},s=function(n){return d?-n.velocityX:n.velocityX};return(0,u.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(n){return function(n){var t=n.startX;return d?t>=c.innerWidth-50:t<=50}(n)&&t()},onStart:e,onMove:function(n){var t=f(n)/c.innerWidth;o(t)},onEnd:function(n){var t=f(n),e=c.innerWidth,i=t/e,u=s(n),o=u>=0&&(u>.2||t>e/2),d=(o?1-i:i)*e,l=0;if(d>5){var h=d/Math.abs(u);l=Math.min(h,540)}a(o,i<=0?.01:(0,r.k)(0,i,.9999),l)}})})}}]);
//# sourceMappingURL=3831.ba1d861f.chunk.js.map