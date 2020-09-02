(this.webpackJsonpsoduku=this.webpackJsonpsoduku||[]).push([[0],{21:function(n,e,t){n.exports=t(34)},26:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),c=t(11),a=t.n(c);t(26),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(2),l=t(1);function u(){var n=Object(i.a)(["\n    html {\n      height: 100%;\n\n      body {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        margin: 0;\n\n        #root {\n          background: ",";\n          color: ",";\n          display: flex;\n          font-family: sans-serif;\n          height: 100%;\n          justify-content: center;\n          padding: 15px;\n        }\n      }\n    }\n  "]);return u=function(){return n},n}function f(){var n=Object(i.a)(["\n  ","\n"]);return f=function(){return n},n}var d=Object(l.b)(f(),(function(n){var e=n.theme;return Object(l.c)(u(),e.colors.background,e.colors.black)}));function s(){var n=Object(i.a)(["\n  max-width: 500px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n"]);return s=function(){return n},n}var v=l.d.div(s());function b(){var n=Object(i.a)(["\n    color: ",";\n    margin-top: 0;\n    text-align: center;\n  "]);return b=function(){return n},n}function h(){var n=Object(i.a)(["\n  ","\n"]);return h=function(){return n},n}var p=l.d.h1(h(),(function(n){var e=n.theme;return Object(l.c)(b(),e.colors.black)}));function g(){var n=Object(i.a)(["\n    background-color: ",";\n    border-radius: 15px;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    max-height: fit-content;\n    padding: 15px;\n  "]);return g=function(){return n},n}function m(){var n=Object(i.a)(["\n  ","\n"]);return m=function(){return n},n}var O=l.d.div(m(),(function(n){var e=n.theme;return Object(l.c)(g(),e.colors.white)})),j=t(4),w=t(5);function x(){var n=Object(i.a)(["\n    align-items: center;\n    background-color: ",";\n    border: solid 1px ",";\n    cursor: pointer;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    flex-basis: 0;\n    font-size: 20px;\n    font-weight:  ",";\n    height: auto;\n    justify-content: center;\n    transition: ",";\n    user-select: none;\n\n    &:before {\n      padding-top: 100%;\n      content: '';\n      float: left;\n    }\n\n    &:hover {\n      background-color: ",";\n    }\n  "]);return x=function(){return n},n}function y(){var n=Object(i.a)(["\n  ","\n"]);return y=function(){return n},n}var E=l.d.div(y(),(function(n){var e=n.theme;return Object(l.c)(x(),(function(n){return n.chosen?e.colors.lightBlue:e.colors.white}),e.colors.black,(function(n){return n.isPuzzle?"Bold":"Normal"}),e.transition,e.colors.lightBlue)}));function k(){var n=Object(i.a)(["\nbackground-color: ",";\nborder: solid 1px ",";\nheight:50px;\nwidth:50px;\nfont-size: 20px;\ndisplay: flex;\nfont-weight: bold;\nheight: auto;\ntransition: ",";\nuser-select: no\n"]);return k=function(){return n},n}function C(){var n=Object(i.a)(["\n","\n"]);return C=function(){return n},n}var A=l.d.input(C(),(function(n){var e=n.theme;return Object(l.c)(k(),e.colors.white,e.colors.black,e.transition)})),R=t(3),G=function(){return{type:"CREATE_GRID"}},I=G;var T=function(n){var e=Object(r.useState)(!1),t=Object(w.a)(e,2),o=t[0],c=t[1];function a(e){e.key===n&&c(!0)}var i=function(e){e.key===n&&c(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",a),window.addEventListener("keyup",i),function(){window.removeEventListener("keydown",a),window.removeEventListener("keyup",i)}}),[]),o},D=function(n){var e=n.rowIndex,t=n.colIndex,c=Object(r.useState)(!1),a=Object(w.a)(c,2),i=a[0],l=a[1],u=Object(r.useState)(""),f=Object(w.a)(u,2),d=f[0],s=f[1],v=Object(R.c)((function(n){return n.grid?n.grid[e][t]:0})),b=Object(R.c)((function(n){return n.solGrid?n.solGrid[e][t]:1})),h=Object(R.c)((function(n){return n.activeRow})),p=Object(R.c)((function(n){return n.activeCol})),g=0===b,m=h===e&&p===t;console.log("row",e,"col",t,"edit",g),console.log("activeRow",h,"activeCol",p,"selected",m);var O=Object(R.b)(),j=T("Enter"),x=T("Escape");return Object(r.useEffect)((function(){var n;i&&(j&&(O({type:"CHANGE_GRID",payload:{row:(n={row:e,col:t,val:d}).row,col:n.col,val:n.val}}),l(!1)),x&&l(!1))}),[j,x]),i?o.a.createElement(A,{type:"number",value:d,onChange:function(n){return s(parseInt(n.target.value))}}):o.a.createElement(E,{chosen:m,isPuzzle:!g,onClick:function(){return g?l(!i):null}},0===v?"":v)};function S(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n"]);return S=function(){return n},n}var _=l.d.div(S());function M(){var n=Object(i.a)(["\n    display: flex;\n    flex-flow: row;\n\n    &:nth-child(1) {\n      div {\n        border-top: solid 4px ",";\n      }\n    }\n    &:nth-child(3),\n    &:nth-child(6) {\n      div {\n        border-bottom: solid 3px ",";\n      }\n    }\n    &:nth-child(9) {\n      border-bottom: solid 4px ",";\n    }\n\n    div {\n      &:nth-child(1) {\n        border-left: solid 4px ",";\n      }\n      &:nth-child(3),\n      &:nth-child(6),\n      &:nth-child(9) {\n        border-right: solid 4px ",";\n      }\n      &:nth-child(4),\n      &:nth-child(7) {\n        border-left: none;\n      }\n    }\n  "]);return M=function(){return n},n}function B(){var n=Object(i.a)(["\n  ",""]);return B=function(){return n},n}var N=l.d.div(B(),(function(n){var e=n.theme;return Object(l.c)(M(),e.colors.blue,e.colors.blue,e.colors.blue,e.colors.blue,e.colors.blue)})),z=function(){console.log("I am being called");var n=Object(R.b)(),e=Object(r.useCallback)((function(){return n(I())}),[n]);return Object(r.useEffect)((function(){e()})),o.a.createElement(_,null,Object(j.a)(Array(9)).map((function(n,e){return o.a.createElement(N,null,Object(j.a)(Array(9)).map((function(n,t){return o.a.createElement(D,{colIndex:t,rowIndex:e})})))})))},L={colors:{background:"radial-gradient(circle at 100%, #87CEFA, #87CEFA 50%, #eee 75%, #87CEFA 75%)",black:"#282c34",blue:"#a0e9fd",lightBlue:"#caf3fe",white:"white"},transition:"0.01s"},F=t(9),K=t(20),U=t(6);var H=function(n){for(var e=n.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),r=[n[t],n[e]];n[e]=r[0],n[t]=r[1]}return n};var J=function(n,e,t){return!n[e].includes(t)};var P=function(n,e,t,r){for(var o=3*Math.floor(e/3),c=3*Math.floor(t/3),a=0;a<=2;a++)for(var i=0;i<=2;i++)if(n[o+a][c+i]===r)return!1;return!0};var W=function(n,e,t){for(var r=Array(9).fill(0),o=0;o<9;o++)r[o]=n[o][e];return!r.includes(t)};var $=function(){var n=Object(j.a)(Array(9)).map((function(){return Object(j.a)(Array(9).fill(0))}));return function n(e,t){if(81===t)return!0;for(var r=Array(9).fill(0),o=0;o<9;o++)r[o]=o+1;for(var c=H(r),a=Math.floor(t/9),i=t%9,l=0;l<c.length;l++)if(W(e,i,c[l])&&J(e,a,c[l])&&P(e,a,i,c[l])){if(e[a][i]=c[l],n(e,t+1))return!0;e[a][i]=0}return!1}(n,0),n};var q=function n(e,t,r){for(var o=-1,c=t;c<81;c++){var a=t%9;if(0===e[Math.floor(t/9)][a]){o=c;break}}if(-1!==o){for(var i=Math.floor(o/9),l=o%9,u=1;u<=9;u++)if(W(e,l,u)&&J(e,i,u)&&P(e,i,l,u)){if(e[i][l]=u,n(e,t+1,r),2===r.count)break;e[i][l]=0}}else r.count++};var Q=function(n){for(var e=Array(81).fill(0),t=0;t<81;t++)e[t]=t+1;H(e);for(var r=0;r<81;r++){var o=Math.floor(r/9),c=r%9,a=n[o][c];n[o][c]=0;var i={count:0};q(n,r,i),2===i.count&&(n[o][c]=a)}return n};var V=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CREATE_GRID":var t=$(),r=Q(t);return Object(U.a)({},n,{grid:r.slice().map((function(n){return n.slice()})),solGrid:r.slice().map((function(n){return n.slice()})),activeRow:9,activeCol:9});case"CHANGE_GRID":var o=Object(j.a)(n.grid),c=Object(j.a)(n.solGrid),a=e.payload.row,i=e.payload.col,l=e.payload.val;return 0===l?(o[a][i]=l,Object(U.a)({},n,{grid:o,solGrid:c})):W(o,i,l)&&J(o,a,l)&&P(o,a,i,l)?(o[a][i]=l,Object(U.a)({},n,{grid:o,solGrid:c,activeRow:9,activeCol:9})):(alert("Incorrect Option"),Object(U.a)({},n,{grid:o,solGrid:c,activeRow:9,activeCol:9}));case"BACKTRACK":var u=n.grid.slice().map((function(n){return n.slice()})),f=n.solGrid.slice().map((function(n){return n.slice()})),d=n.listCount-1,s=e.payload.row,v=e.payload.col,b=e.payload.val;return u[s][v]=b,Object(U.a)({},n,{grid:u,solGrid:f,activeRow:s,activeCol:v,listCount:d});case"CREATE_ACTION_LIST_COUNT":return Object(U.a)({},n,{listCount:e.payload.listCount});default:return n}};var X=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(F.createStore)(V,n,Object(K.devToolsEnhancer)());return e};var Y=function n(e,t,r){for(var o=-1,c=t;c<81;c++){var a=c%9;if(0===e[Math.floor(c/9)][a]){o=c;break}}if(-1===o)return!0;for(var i=Math.floor(o/9),l=o%9,u=1;u<=9;u++)if(W(e,l,u)&&J(e,i,u)&&P(e,i,l,u)){if(e[i][l]=u,r.push({row:i,col:l,val:u}),n(e,t+1,r))return!0;e[i][l]=0,r.push({row:i,col:l,val:0})}return!1};function Z(){var n=Object(i.a)(["\n    align-items: center;\n    background-color: ",";\n    border: 2px solid ",";\n    border-radius: 4px;\n    color: ",";\n    cursor: ",";\n    display: flex;\n    flex; 1;\n    font-size: 16px;\n    font-weight: bold;\n    height: 40px;\n    justify-content: center;\n    margin: 4px 2px;\n    min-height: 40px;\n    opacity: 0.8;\n    padding: 0;\n    transition: ",";\n\n    &:focus {\n      border-color: ",";\n      outline: none;\n    }\n\n    &:hover {\n      opacity: 0.6;\n    }\n  "]);return Z=function(){return n},n}function nn(){var n=Object(i.a)(["\n  ","\n"]);return nn=function(){return n},n}var en=l.d.button(nn(),(function(n){var e=n.theme,t=n.colorDisabled;return Object(l.c)(Z(),t?t.background:e.colors.black,e.colors.black,t?t.fontColor:e.colors.white,t?"none":"pointer",e.transition,e.colors.blue)}));var tn=function(){var n=Object(r.useState)("Solve"),e=Object(w.a)(n,2),t=e[0],c=e[1],a=Object(R.b)(),i=Object(R.c)((function(n){return n.grid?n.grid.slice().map((function(n){return n.slice()})):null})),l=Object(R.c)((function(n){return n.listCount}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(en,{onClick:function(){c("Solving..."),function(n,e){var t=[];Y(n,0,t);var r=t.map((function(n){return{type:"BACKTRACK",payload:{row:(e=n).row,col:e.col,val:e.val}};var e}));e({type:"CREATE_ACTION_LIST_COUNT",payload:{listCount:r.length}});for(var o=function(n){setTimeout((function(){return e(r[n])}),6)},c=0;c<r.length;c++)o(c)}(i,a)},disabled:l>0,colorDisabled:l>0?{background:"#D3D3D3",fontColor:"#808080"}:null},0===l?"Solved!":t),o.a.createElement(en,{disabled:l>0,colorDisabled:l>0?{background:"#D3D3D3",fontColor:"#808080"}:null,onClick:function(){!function(n,e){e({type:"CREATE_GRID"})}(0,a)}},"New Game"),o.a.createElement(en,null,"Steps Remaining: ",l||"Unknown"))},rn=X();a.a.render(o.a.createElement(l.a,{theme:L},o.a.createElement(d,null),o.a.createElement(R.a,{store:rn},o.a.createElement(v,null,o.a.createElement(p,null,"Sudoku"),o.a.createElement(O,null,o.a.createElement(z,null)),o.a.createElement(tn,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.01c0330b.chunk.js.map