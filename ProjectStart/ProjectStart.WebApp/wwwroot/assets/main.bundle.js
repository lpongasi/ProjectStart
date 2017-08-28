webpackJsonp([0],{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(34);
var redux_thunk_1 = __webpack_require__(109);
//import { mode } from '../../Configs/global';
var logger_1 = __webpack_require__(273);
var reducer_1 = __webpack_require__(275);
var middleware = [redux_thunk_1.default, logger_1.default];
exports.default = redux_1.createStore(reducer_1.default, redux_1.applyMiddleware.apply(void 0, middleware));


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(79);
var react_redux_1 = __webpack_require__(41);
var store_1 = __webpack_require__(113);
var route_1 = __webpack_require__(279);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(route_1.default, null)), document.getElementById('main-app'));


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_logger_1 = __webpack_require__(274);
var common_1 = __webpack_require__(42);
var actionTransformer = function (action) {
    if (action && action.type === 'BATCHING_REDUCER.BATCH') {
        action.payload.type = action.payload.map(function (next) { return next.type; }).join(' => ');
        return action.payload;
    }
    return action;
};
var level = 'info';
var logger = {};
var mute = [
    "LOADING_" + common_1.StateLifeCycle.Started,
    "LOADING_" + common_1.StateLifeCycle.Error,
    "LOADING_" + common_1.StateLifeCycle.End
];
for (var method in console) {
    if (console.hasOwnProperty(method)) {
        if (typeof console[method] === 'function') {
            logger[method] = console[method].bind(console);
        }
    }
}
logger[level] = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var lastArg = args.pop();
    if (Array.isArray(lastArg)) {
        return lastArg.forEach(function (item) {
            console[level].apply(console, args.concat([item]));
        });
    }
    console[level].apply(console, arguments);
};
exports.default = redux_logger_1.createLogger({
    level: level,
    predicate: function (getState, action) { return mute.indexOf(action.type) < 0; },
    actionTransformer: actionTransformer,
    logger: logger
});


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(34);
var loading_reducer_1 = __webpack_require__(276);
var node_reducer_1 = __webpack_require__(277);
var manageItem_reducer_1 = __webpack_require__(278);
var allreducers = redux_1.combineReducers({
    manageItem: manageItem_reducer_1.default,
    loading: loading_reducer_1.default,
    node: node_reducer_1.default
});
exports.default = allreducers;


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(42);
var initialState = {
    status: common_1.StateLifeCycle.End
};
function default_1(state, action) {
    if (state === void 0) { state = initialState; }
    var newState;
    switch (action.type) {
        case "LOADING_" + common_1.StateLifeCycle.Started:
            newState = __assign({}, state, { status: common_1.StateLifeCycle.Started });
            break;
        case "LOADING_" + common_1.StateLifeCycle.End:
            newState = __assign({}, state, { status: common_1.StateLifeCycle.End });
            break;
        case "LOADING_" + common_1.StateLifeCycle.Error:
            newState = __assign({}, state, action.payload, { status: common_1.StateLifeCycle.Error });
            break;
        default:
            newState = __assign({}, state);
            break;
    }
    return newState;
}
exports.default = default_1;


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(42);
var initialState = {
    status: common_1.StateLifeCycle.End,
    nodes: [],
    selectedNode: null
};
function default_1(state, action) {
    if (state === void 0) { state = initialState; }
    var newState;
    switch (action.type) {
        case "NODE_GETALL_" + common_1.StateLifeCycle.Started:
            newState = __assign({}, state, { status: common_1.StateLifeCycle.Started });
            break;
        case "NODE_GETALL_" + common_1.StateLifeCycle.Success:
            newState = __assign({}, state, { nodes: action.payload.result, status: common_1.StateLifeCycle.Success });
            break;
        case "NODE_GETALL_" + common_1.StateLifeCycle.Error:
            newState = __assign({}, state, action.payload, { status: common_1.StateLifeCycle.Error });
            break;
        case "NODE_GETALL_" + common_1.StateLifeCycle.End:
            newState = __assign({}, state, { status: common_1.StateLifeCycle.End });
            break;
        case 'NODE_SELECT':
            newState = __assign({}, state, { selectedNode: __assign({}, state.selectedNode, action.payload.selectedNode) });
            break;
        default:
            newState = __assign({}, state);
            break;
    }
    return newState;
}
exports.default = default_1;


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var initialState = {
    list: []
};
function default_1(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'MANAGEITEM_LIST':
            state = __assign({}, state, { list: action.data });
            break;
    }
    return state;
}
exports.default = default_1;


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var react_router_dom_1 = __webpack_require__(62);
var navigation_1 = __webpack_require__(280);
var node_1 = __webpack_require__(281);
var home_1 = __webpack_require__(283);
var manage_item_1 = __webpack_require__(284);
var loading_1 = __webpack_require__(285);
exports.default = function () { return (React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement("div", null,
        React.createElement(navigation_1.default, null),
        React.createElement(loading_1.default, null),
        React.createElement(node_1.default, null),
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: home_1.default }),
            React.createElement(react_router_dom_1.Route, { path: '/Manage/Item', component: manage_item_1.default }))))); };


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var $ = __webpack_require__(23);
var Navigation = (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navigation.prototype.componentDidMount = function () {
        $('.button-collapse').sideNav({
            menuWidth: 300,
            closeOnClick: true,
            draggable: true
        });
    };
    Navigation.prototype.render = function () {
        return (React.createElement("nav", null,
            React.createElement("div", { className: "nav-wrapper" },
                React.createElement("a", { href: "#!", className: "brand-logo" }, "Logo"),
                React.createElement("a", { href: "#", "data-activates": "mobile-demo", className: "button-collapse" },
                    React.createElement("i", { className: "material-icons" }, "menu")),
                React.createElement("ul", { className: "right hide-on-med-and-down" },
                    React.createElement("li", null,
                        React.createElement("a", { href: "sass.html" }, "Sass")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "badges.html" }, "Components")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "collapsible.html" }, "Javascript")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "mobile.html" }, "Mobile"))),
                React.createElement("ul", { className: "side-nav", id: "mobile-demo" },
                    React.createElement("li", null,
                        React.createElement("a", { href: "sass.html" }, "Sass")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "badges.html" }, "Components")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "collapsible.html" }, "Javascript")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "mobile.html" }, "Mobile"))))));
    };
    return Navigation;
}(React.Component));
exports.default = Navigation;


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var react_redux_1 = __webpack_require__(41);
var api_1 = __webpack_require__(282);
var common_1 = __webpack_require__(42);
exports.node = function (state) { return (__assign({}, state.node)); };
var DisplayNode = function (_a) {
    var _b = _a.nodes, nodes = _b === void 0 ? [] : _b, _c = _a.selectedId, selectedId = _c === void 0 ? 0 : _c;
    return (nodes != null && nodes.length > 0
        ? React.createElement("ul", null, nodes.map(function (item) { return (React.createElement("li", { key: item.id },
            React.createElement("input", { type: "radio", name: "node", id: item.id, value: item.id, checked: selectedId === item.id, onClick: function () {
                    api_1.dispatcher('NODE_SELECT', { selectedNode: __assign({}, item) });
                } }),
            React.createElement("label", { htmlFor: item.id }, item.name),
            React.createElement(DisplayNode, { nodes: item.subNodes, selectedId: selectedId }))); }))
        : null);
};
var Node = (function (_super) {
    __extends(Node, _super);
    function Node() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Node.prototype.componentDidMount = function () {
        api_1.api('NODE_GETALL', api_1.MethodType.Get, 'api/nodes');
    };
    Node.prototype.render = function () {
        var _a = this.props, selectedNode = _a.selectedNode, nodes = _a.nodes;
        return (React.createElement("div", { className: "row" },
            "SELECTED ",
            React.createElement("br", null),
            selectedNode != null
                ? React.createElement("span", null,
                    selectedNode.name,
                    React.createElement("br", null),
                    selectedNode.subNodes.map(function (item) { return React.createElement("span", { key: common_1.GenerateId() }, item.name); }))
                : null,
            React.createElement("br", null),
            "LIST NODES ",
            React.createElement("br", null),
            React.createElement(DisplayNode, { nodes: nodes, selectedId: selectedNode != null ? selectedNode.id : 0 })));
    };
    Node = __decorate([
        react_redux_1.connect(exports.node)
    ], Node);
    return Node;
}(React.Component));
exports.default = Node;


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(23);
var store_1 = __webpack_require__(113);
var common_1 = __webpack_require__(42);
var MethodType;
(function (MethodType) {
    MethodType[MethodType["Get"] = ('get')] = "Get";
    MethodType[MethodType["Post"] = ('post')] = "Post";
    MethodType[MethodType["Put"] = ('put')] = "Put";
    MethodType[MethodType["Delete"] = ('delete')] = "Delete";
})(MethodType = exports.MethodType || (exports.MethodType = {}));
exports.dispatcher = function (type, payload) {
    if (payload === void 0) { payload = null; }
    return store_1.default.dispatch({
        type: type,
        payload: __assign({}, payload)
    });
};
exports.api = function (dispatchPrefix, methodType, url, data) {
    if (dispatchPrefix === void 0) { dispatchPrefix = 'FETCH'; }
    if (methodType === void 0) { methodType = MethodType.Get; }
    if (url === void 0) { url = ''; }
    if (data === void 0) { data = null; }
    exports.dispatcher(dispatchPrefix + "_" + common_1.StateLifeCycle.Started);
    exports.dispatcher("LOADING_" + common_1.StateLifeCycle.Started);
    $.ajax({
        method: methodType.toString(),
        url: url,
        dataType: 'json',
        cache: false,
        data: __assign({}, data)
    })
        .done(function (data) {
        exports.dispatcher(dispatchPrefix + "_" + common_1.StateLifeCycle.Success, data);
        exports.dispatcher("LOADING_" + common_1.StateLifeCycle.End);
    })
        .fail(function (jqXhr, textStatus, errorThrown) {
        exports.dispatcher(dispatchPrefix + "_" + common_1.StateLifeCycle.Error, __assign({}, jqXhr.responseJSON, { errorThrown: errorThrown, textStatus: textStatus }));
        exports.dispatcher("LOADING_" + common_1.StateLifeCycle.Error, __assign({}, jqXhr.responseJSON, { errorThrown: errorThrown }));
    })
        .always(function () {
        exports.dispatcher(dispatchPrefix + "_" + common_1.StateLifeCycle.End);
    });
};


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var react_router_dom_1 = __webpack_require__(62);
exports.default = function () { return (React.createElement("div", null,
    "HELLO HOME PAGE",
    React.createElement("input", { type: "checkbox", id: "text" }),
    React.createElement("label", { htmlFor: "text" }, "asdawda"),
    React.createElement(react_router_dom_1.Link, { to: '/Manage/Item', className: 'waves-effect waves-light btn' },
        React.createElement("span", { className: "fa fa-user" }, " "),
        "LINK"))); };


/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
exports.default = function () { return (React.createElement("div", null, "HELLO ITEMS")); };


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var react_redux_1 = __webpack_require__(41);
exports.loading = function (state) { return (__assign({}, state.loading)); };
var Loading = (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loading.prototype.render = function () {
        return (React.createElement("div", null, this.props.status));
    };
    Loading = __decorate([
        react_redux_1.connect(exports.loading)
    ], Loading);
    return Loading;
}(React.Component));
exports.default = Loading;


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StateLifeCycle;
(function (StateLifeCycle) {
    StateLifeCycle[StateLifeCycle["Started"] = ('STARTED')] = "Started";
    StateLifeCycle[StateLifeCycle["Success"] = ('SUCCESS')] = "Success";
    StateLifeCycle[StateLifeCycle["Error"] = ('ERROR')] = "Error";
    StateLifeCycle[StateLifeCycle["End"] = ('END')] = "End";
})(StateLifeCycle = exports.StateLifeCycle || (exports.StateLifeCycle = {}));
var generatedID = 0;
exports.GenerateId = function () { return generatedID++; };


/***/ })

},[272]);