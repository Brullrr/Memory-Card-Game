(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],{11:function(e,n,t){e.exports=t(24)},16:function(e,n,t){},17:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(4),c=t.n(o),i=(t(16),t(17),t(9)),l=t.n(i),s=t(1),u=Object(s.b)((function(e){return{isOverlayOn:e.vrlyrdcr.isOverlayOn}}))((function(e){var n=null;return e.isOverlayOn&&(n=a.a.createElement("div",{className:l.a.Overlay})),a.a.createElement(r.Fragment,null,n)})),d=Object(s.b)((function(e){return{isOverlayOn:e.vrlyrdcr.isOverlayOn}}),(function(e){return{turnOffOverlay:function(){return e({type:"TURN_OFF_OVERLAY"})}}}))((function(e){return setTimeout((function(){e.turnOffOverlay()}),3e3),a.a.createElement(r.Fragment,null,a.a.createElement(u,null),a.a.createElement("div",null,a.a.createElement("p",null,"a characcter"),a.a.createElement("p",null,"speech bubble"),a.a.createElement("p",null,"a world map in the background")))}));var v=function(){return a.a.createElement(d,null)},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m=t(2),g=t(3),h={isOverlayOn:!0},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TURN_ON_OVERLAY":return Object(g.a)(Object(g.a)({},e),{},{isOverlayOn:!0});case"TURN_OFF_OVERLAY":return Object(g.a)(Object(g.a)({},e),{},{isOverlayOn:!1})}return e},p=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},b=Object(m.b)({vrlyrdcr:y}),w=Object(m.c)(b,p);w.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(w.getState()))})),c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:w},a.a.createElement(v,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Memory-Card-Game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/Memory-Card-Game","/service-worker.js");f?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(n,e)}))}}()},9:function(e,n,t){e.exports={Overlay:"Overlay_Overlay__23OZv"}}},[[11,1,2]]]);
//# sourceMappingURL=main.25dc3d3b.chunk.js.map