(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],[,,,function(e,t,n){e.exports={WorldMap:"WorldMap_WorldMap__3K-PS",StageOne:"WorldMap_StageOne__2987j",StageTwo:"WorldMap_StageTwo__2Mi6l",StageThree:"WorldMap_StageThree__1Dqro",StageFour:"WorldMap_StageFour__1GHmv"}},,function(e,t,n){e.exports={FirstTime:"FirstTime_FirstTime__3J5JD",ImpHolder:"FirstTime_ImpHolder__KFj2k",Imp:"FirstTime_Imp__3VrQS",WordBox:"FirstTime_WordBox__2Sozx"}},,,,,,function(e,t,n){e.exports={Overlay:"Overlay_Overlay__23OZv"}},,function(e,t,n){e.exports=n.p+"static/media/Imp.c33eec6e.png"},function(e,t,n){e.exports=n(27)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(6),o=n.n(i),l=(n(19),n(20),n(11)),s=n.n(l),c=n(2),u=Object(c.b)((function(e){return{isOverlayOn:e.vrlyrdcr.isOverlayOn}}))((function(e){var t=null;return e.isOverlayOn&&(t=a.a.createElement("div",{className:s.a.Overlay})),a.a.createElement(r.Fragment,null,t)})),m=n(5),d=n.n(m),v=n(13),f=n.n(v),g=Object(c.b)((function(e){return{instructionsNum:e.nstrctnsrdcr.instructionsNumber}}),(function(e){return{incrementInstructionNumber:function(){return e({type:"INCR_INSTRUCTIONS_NUMBER"})}}}))((function(e){if(0===e.instructionsNum){console.log("Test is running");var t=setInterval((function(){e.incrementInstructionNumber()}),1350);setTimeout((function(){clearInterval(t)}),35e3)}return a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:d.a.FirstTime},a.a.createElement("div",{className:d.a.WordBox},a.a.createElement("p",null,["Yo, listen up","Here's a story","About a little guy","That lives in a blue world","And all day ","and all night","And everything he sees","is just blue","like him ","inside and outside","Blue his house","With a blue little window","And a blue corvette","And everything is blue","for him","And himself ","and everybody around","Cause he ain't got","nobody","to listen to","to listen to","IM BLUE","DA BA DEE DA BA DI","DA BA DEE DA BA DI","DA BA DEE DA BA DI","DA BA DEE DA BA DI","DA BA DEE DA BA DI","DA BA DEE DA BA DI","DA BA DEE DA BA DI","DA BA DEE DA BA DI"][e.instructionsNum])),a.a.createElement("div",{className:d.a.ImpHolder},a.a.createElement("img",{className:d.a.Imp,src:f.a,alt:"Imp"}))))})),p=n(3),h=n.n(p),O=function(){return a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:h.a.WorldMap},a.a.createElement("div",{className:h.a.StageOne},"Meet the tttown?"),a.a.createElement("div",{className:h.a.StageTwo},"learn The negihbors"),a.a.createElement("div",{className:h.a.StageThree},"Kill the invaders"),a.a.createElement("div",{className:h.a.StageFour},"Become the invading aliens",a.a.createElement("p",null,"a world map with four major clickable sections"),a.a.createElement("p",null,"each section is set to clickable after completing the prior stage"),a.a.createElement("p",null,"LOL I AM ROTFL"),a.a.createElement("p",null,"Components that need to be added"),a.a.createElement("p",null,'a component for each "level"'),a.a.createElement("p",null,"I have 0 direction of where this project is headed"),a.a.createElement("p",null,"list characters"),a.a.createElement("p",null,"Should i use routing (browser router or Nextjs) for different stages or just a popup????"))))},E=Object(c.b)((function(e){return{isOverlayOn:e.vrlyrdcr.isOverlayOn,isUserFirstVisit:e.frsttmvstrdcr.isUserFirstVisit}}),(function(e){return{turnOffOverlay:function(){return e({type:"TURN_OFF_OVERLAY"})},turnOffFirstVisit:function(){return e({type:"TURN_OFF_FIRST_VISIT"})}}}))((function(e){var t=null,n=null;return e.isUserFirstVisit&&(t=a.a.createElement(u,null),n=a.a.createElement(g,null),setTimeout((function(){e.turnOffOverlay(),e.turnOffFirstVisit()}),3e4)),a.a.createElement(r.Fragment,null,t,n,a.a.createElement(O,null))}));var b=function(){return a.a.createElement(E,null)},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var y=n(4),I=n(1),N={isOverlayOn:!0},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TURN_ON_OVERLAY":return Object(I.a)(Object(I.a)({},e),{},{isOverlayOn:!0});case"TURN_OFF_OVERLAY":return Object(I.a)(Object(I.a)({},e),{},{isOverlayOn:!1});default:return e}},w={isUserFirstVisit:!0},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;return"TURN_OFF_FIRST_VISIT"===t.type?Object(I.a)(Object(I.a)({},e),{},{isUserFirstVisit:!1}):e},T={timerIsRunning:!0,instructionsNumber:0},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;return"INCR_INSTRUCTIONS_NUMBER"===t.type?(console.log("REDCUER Instruction number Begin"),Object(I.a)(Object(I.a)({},e),{},{instructionsNumber:e.instructionsNumber+1})):e},B=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},R=Object(y.b)({vrlyrdcr:S,frsttmvstrdcr:D,nstrctnsrdcr:F}),j=Object(y.c)(R,B);j.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(j.getState()))})),o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,{store:j},a.a.createElement(b,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Memory-Card-Game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Memory-Card-Game","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(t,e)}))}}()}],[[14,1,2]]]);
//# sourceMappingURL=main.05726ae8.chunk.js.map