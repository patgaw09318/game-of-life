(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{173:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),c=(a(73),a(74),a(33)),i=a(12),s=a(65),u=(a(75),a(193)),v=function(e,t,a){for(var n=[],r=0;r<e;r++){for(var l=[],o=0;o<t;o++)if(void 0===a){var c=Math.random();l.push(Math.round(c))}else l.push(a);n.push(l)}return n},m=function(e,t,a){var n=0;return t>0&&a>0&&(n+=e[t-1][a-1]),t>0&&(n+=e[t-1][a]),t>0&&a<e[t-1].length-1&&(n+=e[t-1][a+1]),a>0&&(n+=e[t][a-1]),a<e[t].length-1&&(n+=e[t][a+1]),t<e.length-1&&a>0&&(n+=e[t+1][a-1]),t<e.length-1&&(n+=e[t+1][a]),t<e.length-1&&a<e[t+1].length-1&&(n+=e[t+1][a+1]),n},f=a(59),d=a(194),h=a(191),b=a(192),p=function(e){var t=Object(n.useState)({table:e.table,step:0,start:!1,aliveHistory:[]}),a=Object(s.a)(t,2),l=a[0],o=a[1],p=l.table.reduce((function(e,t){return e.concat(t)})).reduce((function(e,t){return e+t}));Object(n.useEffect)((function(){var e=setInterval((function(){l.start&&function(e,t){for(var a=e,n=[],r=0;r<a.length;r++){for(var l=[],o=0;o<a[r].length;o++){var c=1===a[r][o],i=m(a,r,o);c?(i<2||i>3)&&(c=!1):3===i&&(c=!0),l.push(c?1:0)}n.push(l)}t(n)}(l.table,(function(e){return o(Object(i.a)(Object(i.a)({},l),{},{table:e,step:l.step+1,aliveHistory:[].concat(Object(c.a)(l.aliveHistory),[p])}))}))}),600);return function(){clearInterval(e)}}));var y={labels:Array.from(Array(l.aliveHistory.length>0?l.aliveHistory.length:1).keys()),datasets:[{label:"Alive",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:l.aliveHistory.length>0?l.aliveHistory:[p]}]};return r.a.createElement("div",null,r.a.createElement("div",{className:"canvas"},r.a.createElement("div",{className:"table"},l.table.map((function(e,t){return r.a.createElement("div",{className:"row",key:t},e.map((function(e,a){return r.a.createElement("div",{className:1===e?"coll alive":"coll",key:a,onClick:function(){return function(e,t){var a=l.table;a[e][t]=0===l.table[e][t]?1:0,o(Object(i.a)(Object(i.a)({},l),{},{table:a})),console.log(e,t,a)}(t,a)}})})))})))),r.a.createElement("div",{className:"menu"},r.a.createElement("h1",{className:"App-title"},"Game of Life"),r.a.createElement(d.a,{className:"info-card",variant:"elevation"},r.a.createElement(h.a,null,r.a.createElement("div",null,"Step: ",l.step),r.a.createElement("div",null,"Alive: ",p),r.a.createElement(u.a,{color:"secondary",onClick:function(){return o(Object(i.a)(Object(i.a)({},l),{},{start:!l.start}))}},l.start?"stop":"Start"),r.a.createElement(u.a,{color:"secondary",onClick:function(){o({step:0,start:!1,table:v(64,64),aliveHistory:[]})}},"Reset"),r.a.createElement(u.a,{color:"secondary",onClick:function(){o({step:0,start:!1,table:v(64,64,0),aliveHistory:[]})}},"Clear"))),r.a.createElement(d.a,{className:"info-card",variant:"elevation"},r.a.createElement(h.a,null,r.a.createElement(f.a,{data:y,options:{title:{display:!0,text:"Alive history",fontSize:20},legend:{display:!1},scales:{yAxes:[{stacked:!0}]}}}))),r.a.createElement(d.a,{className:"info-card",variant:"elevation"},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Statistics"),r.a.createElement(b.a,{variant:"body2",component:"p"},"Max alive:"," ",l.aliveHistory.length>0?Math.max.apply(Math,Object(c.a)(l.aliveHistory)):p,r.a.createElement("br",null),"Min alive:"," ",l.aliveHistory.length>0?Math.min.apply(Math,Object(c.a)(l.aliveHistory)):p)))))};var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{table:v(64,64)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){e.exports=a(173)},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.dbf48cf4.chunk.js.map