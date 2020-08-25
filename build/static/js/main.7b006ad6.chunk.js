(this.webpackJsonpsoduku=this.webpackJsonpsoduku||[]).push([[0],{21:function(n,r,t){n.exports=t(34)},26:function(n,r,t){},34:function(n,r,t){"use strict";t.r(r);var e=t(0),o=t.n(e),c=t(11),a=t.n(c);t(26),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(2),l=t(1);function u(){var n=Object(i.a)(["\n    html {\n      height: 100%;\n\n      body {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        margin: 0;\n\n        #root {\n          background: ",";\n          color: ",";\n          display: flex;\n          font-family: sans-serif;\n          height: 100%;\n          justify-content: center;\n          padding: 15px;\n        }\n      }\n    }\n  "]);return u=function(){return n},n}function f(){var n=Object(i.a)(["\n  ","\n"]);return f=function(){return n},n}var d=Object(l.b)(f(),(function(n){var r=n.theme;return Object(l.c)(u(),r.colors.background,r.colors.black)}));function s(){var n=Object(i.a)(["\n  max-width: 500px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n"]);return s=function(){return n},n}var v=l.d.div(s());function b(){var n=Object(i.a)(["\n    color: ",";\n    margin-top: 0;\n    text-align: center;\n  "]);return b=function(){return n},n}function h(){var n=Object(i.a)(["\n  ","\n"]);return h=function(){return n},n}var p=l.d.h1(h(),(function(n){var r=n.theme;return Object(l.c)(b(),r.colors.white)}));function g(){var n=Object(i.a)(["\n    background-color: ",";\n    border-radius: 15px;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    max-height: fit-content;\n    padding: 15px;\n  "]);return g=function(){return n},n}function m(){var n=Object(i.a)(["\n  ","\n"]);return m=function(){return n},n}var j=l.d.div(m(),(function(n){var r=n.theme;return Object(l.c)(g(),r.colors.white)})),O=t(4),w=t(10);function x(){var n=Object(i.a)(["\n    align-items: center;\n    background-color: ",";\n    border: solid 1px ",";\n    cursor: pointer;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    flex-basis: 0;\n    font-size: 20px;\n    font-weight: bold;\n    height: auto;\n    justify-content: center;\n    transition: ",";\n    user-select: none;\n\n    &:before {\n      padding-top: 100%;\n      content: '';\n      float: left;\n    }\n\n    &:hover {\n      background-color: ",";\n    }\n  "]);return x=function(){return n},n}function y(){var n=Object(i.a)(["\n  ","\n"]);return y=function(){return n},n}var k=l.d.div(y(),(function(n){var r=n.theme;return Object(l.c)(x(),(function(n){return n.chosen?r.colors.lightBlue:r.colors.white}),r.colors.black,r.transition,r.colors.lightBlue)}));function E(){var n=Object(i.a)(["\nbackground-color: ",";\nborder: solid 1px ",";\nheight:50px;\nwidth:50px;\nfont-size: 20px;\ndisplay: flex;\nfont-weight: bold;\nheight: auto;\ntransition: ",";\nuser-select: no\n"]);return E=function(){return n},n}function C(){var n=Object(i.a)(["\n","\n"]);return C=function(){return n},n}var A=l.d.input(C(),(function(n){var r=n.theme;return Object(l.c)(E(),r.colors.white,r.colors.black,r.transition)})),G=t(3),R=function(){return{type:"CREATE_GRID"}};var I=function(n){var r=Object(e.useState)(!1),t=Object(w.a)(r,2),o=t[0],c=t[1];function a(r){r.key===n&&c(!0)}var i=function(r){r.key===n&&c(!1)};return Object(e.useEffect)((function(){return window.addEventListener("keydown",a),window.addEventListener("keyup",i),function(){window.removeEventListener("keydown",a),window.removeEventListener("keyup",i)}}),[]),o},M=function(n){var r=n.rowIndex,t=n.colIndex,c=Object(e.useState)(!1),a=Object(w.a)(c,2),i=a[0],l=a[1],u=Object(e.useState)(""),f=Object(w.a)(u,2),d=f[0],s=f[1],v=Object(G.c)((function(n){return n.grid?n.grid[r][t]:0})),b=Object(G.c)((function(n){return n.solGrid?n.solGrid[r][t]:1})),h=Object(G.c)((function(n){return n.activeRow})),p=Object(G.c)((function(n){return n.activeCol})),g=0===b,m=h===r&&p===t;console.log("row",r,"col",t,"edit",g),console.log("activeRow",h,"activeCol",p,"selected",m);var j=Object(G.b)(),O=I("Enter"),x=I("Escape");return Object(e.useEffect)((function(){var n;i&&(O&&(j({type:"CHANGE_GRID",payload:{row:(n={row:r,col:t,val:d}).row,col:n.col,val:n.val}}),l(!1)),x&&l(!1))}),[O,x]),i?o.a.createElement(A,{type:"number",value:d,onChange:function(n){return s(parseInt(n.target.value))}}):o.a.createElement(k,{chosen:m,onClick:function(){return g?l(!i):null}},0===v?"":v)};function B(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n"]);return B=function(){return n},n}var S=l.d.div(B());function T(){var n=Object(i.a)(["\n    display: flex;\n    flex-flow: row;\n\n    &:nth-child(1) {\n      div {\n        border-top: solid 4px ",";\n      }\n    }\n    &:nth-child(3),\n    &:nth-child(6) {\n      div {\n        border-bottom: solid 3px ",";\n      }\n    }\n    &:nth-child(9) {\n      border-bottom: solid 4px ",";\n    }\n\n    div {\n      &:nth-child(1) {\n        border-left: solid 4px ",";\n      }\n      &:nth-child(3),\n      &:nth-child(6),\n      &:nth-child(9) {\n        border-right: solid 4px ",";\n      }\n      &:nth-child(4),\n      &:nth-child(7) {\n        border-left: none;\n      }\n    }\n  "]);return T=function(){return n},n}function D(){var n=Object(i.a)(["\n  ",""]);return D=function(){return n},n}var K=l.d.div(D(),(function(n){var r=n.theme;return Object(l.c)(T(),r.colors.black,r.colors.black,r.colors.black,r.colors.black,r.colors.black)})),L=function(){console.log("I am being called");var n=Object(G.b)(),r=Object(e.useCallback)((function(){return n(R())}),[n]);return Object(e.useEffect)((function(){r()})),o.a.createElement(S,null,Object(O.a)(Array(9)).map((function(n,r){return o.a.createElement(K,null,Object(O.a)(Array(9)).map((function(n,t){return o.a.createElement(M,{colIndex:t,rowIndex:r})})))})))},_={colors:{background:"radial-gradient(#282c34cc, #282c34)",black:"#282c34",blue:"#a0e9fd",lightBlue:"#caf3fe",white:"white"},transition:"0.01s"},z=t(8),H=t(20),J=t(7);var N=function(n){for(var r=n.length-1;r>0;r--){var t=Math.floor(Math.random()*(r+1)),e=[n[t],n[r]];n[r]=e[0],n[t]=e[1]}return n};var W=function(n,r,t){return!n[r].includes(t)};var $=function(n,r,t,e){for(var o=3*Math.floor(r/3),c=3*Math.floor(t/3),a=0;a<=2;a++)for(var i=0;i<=2;i++)if(n[o+a][c+i]===e)return!1;return!0};var q=function(n,r,t){for(var e=Array(9).fill(0),o=0;o<9;o++)e[o]=n[o][r];return!e.includes(t)};var F=function(){var n=Object(O.a)(Array(9)).map((function(){return Object(O.a)(Array(9).fill(0))}));return function n(r,t){if(81===t)return!0;for(var e=Array(9).fill(0),o=0;o<9;o++)e[o]=o+1;for(var c=N(e),a=Math.floor(t/9),i=t%9,l=0;l<c.length;l++)if(q(r,i,c[l])&&W(r,a,c[l])&&$(r,a,i,c[l])){if(r[a][i]=c[l],n(r,t+1))return!0;r[a][i]=0}return!1}(n,0),n};var P=function n(r,t,e){for(var o=-1,c=t;c<81;c++){var a=t%9;if(0===r[Math.floor(t/9)][a]){o=c;break}}if(-1!==o){for(var i=Math.floor(o/9),l=o%9,u=1;u<=9;u++)if(q(r,l,u)&&W(r,i,u)&&$(r,i,l,u)){if(r[i][l]=u,n(r,t+1,e),2===e.count)break;r[i][l]=0}}else e.count++};var Q=function(n){for(var r=Array(81).fill(0),t=0;t<81;t++)r[t]=t+1;N(r);for(var e=0;e<81;e++){var o=Math.floor(e/9),c=e%9,a=n[o][c];n[o][c]=0;var i={count:0};P(n,e,i),2===i.count&&(n[o][c]=a)}return n};var U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"CREATE_GRID":var t=F(),e=Q(t);return Object(J.a)({},n,{grid:e.slice().map((function(n){return n.slice()})),solGrid:e.slice().map((function(n){return n.slice()})),activeRow:9,activeCol:9});case"CHANGE_GRID":var o=Object(O.a)(n.grid),c=Object(O.a)(n.solGrid),a=r.payload.row,i=r.payload.col,l=r.payload.val;return console.log(r.payload.row),0===l?(o[a][i]=l,console.log("Action",c[a][i]),Object(J.a)({},n,{grid:o,solGrid:c})):q(o,i,l)&&W(o,a,l)&&$(o,a,i,l)?(o[a][i]=l,console.log("Action",c[a][i]),Object(J.a)({},n,{grid:o,solGrid:c,activeRow:9,activeCol:9})):(alert("Incorrect Option"),Object(J.a)({},n,{grid:o,solGrid:c,activeRow:9,activeCol:9}));case"BACKTRACK":var u=n.grid.slice().map((function(n){return n.slice()})),f=n.solGrid.slice().map((function(n){return n.slice()})),d=r.payload.row,s=r.payload.col,v=r.payload.val;return console.log(r.payload.row),u[d][s]=v,Object(J.a)({},n,{grid:u,solGrid:f,activeRow:d,activeCol:s});default:return n}};var V=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(z.createStore)(U,n,Object(H.devToolsEnhancer)());return r};var X=function n(r,t,e){for(var o=-1,c=t;c<81;c++){var a=c%9;if(0===r[Math.floor(c/9)][a]){o=c;break}}if(-1===o)return!0;for(var i=Math.floor(o/9),l=o%9,u=1;u<=9;u++)if(q(r,l,u)&&W(r,i,u)&&$(r,i,l,u)){if(r[i][l]=u,e.push({row:i,col:l,val:u}),n(r,t+1,e))return!0;r[i][l]=0,e.push({row:i,col:l,val:0})}return!1};function Y(){var n=Object(i.a)(["\n    align-items: center;\n    background-color: ",";\n    border: 2px solid ",";\n    border-radius: 4px;\n    color: ",";\n    cursor: pointer;\n    display: flex;\n    flex; 1;\n    font-size: 16px;\n    font-weight: bold;\n    height: 40px;\n    justify-content: center;\n    margin: 4px 2px;\n    min-height: 40px;\n    opacity: 0.9;\n    padding: 0;\n    transition: ",";\n\n    &:focus {\n      border-color: ",";\n      outline: none;\n    }\n\n    &:hover {\n      opacity: 0.6;\n    }\n  "]);return Y=function(){return n},n}function Z(){var n=Object(i.a)(["\n  ","\n"]);return Z=function(){return n},n}var nn=l.d.button(Z(),(function(n){var r=n.theme;return Object(l.c)(Y(),r.colors.black,r.colors.black,r.colors.white,r.transition,r.colors.blue)}));var rn=function(){var n=Object(G.c)((function(n){return n.grid?n.grid.slice().map((function(n){return n.slice()})):null})),r=Object(G.b)();return o.a.createElement(nn,{onClick:function(){return function(n,r){var t=[];X(n,0,t);for(var e=t.map((function(n){return{type:"BACKTRACK",payload:{row:(r=n).row,col:r.col,val:r.val}};var r})),o=function(n){setTimeout((function(){return r(e[n])}),6e4)},c=0;c<e.length;c++)o(c)}(n,r)}}," Solve ")},tn=V();a.a.render(o.a.createElement(l.a,{theme:_},o.a.createElement(d,null),o.a.createElement(G.a,{store:tn},o.a.createElement(v,null,o.a.createElement(p,null,"Sudoku"),o.a.createElement(j,null,o.a.createElement(L,null)),o.a.createElement(rn,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.7b006ad6.chunk.js.map