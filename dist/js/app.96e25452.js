(function(e){function t(t){for(var n,i,l=t[0],c=t[1],u=t[2],a=0,f=[];a<l.length;a++)i=l[a],r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(f.length)f.shift()();return d.push.apply(d,u||[]),o()}function o(){for(var e,t=0;t<d.length;t++){for(var o=d[t],n=!0,l=1;l<o.length;l++){var c=o[l];0!==r[c]&&(n=!1)}n&&(d.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},d=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/tovue-list/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;d.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("h1",{staticClass:"title"},[e._v("Todo List")]),o("md-field",[o("md-button",{staticClass:"md-icon-button addItem",on:{click:function(t){return e.addTodo()}}},[o("md-icon",[e._v("add")])],1),o("md-input",{staticClass:"add",attrs:{placeholder:"Add a todo..."},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo()}},model:{value:e.currentTodo,callback:function(t){e.currentTodo=t},expression:"currentTodo"}})],1),o("md-list",{staticClass:"todos"},e._l(e.todos,function(t,n){return o("md-list-item",{key:t.id,staticClass:"todo",class:{completed:t.completed},on:{dblclick:function(t){return e.editTodo(n)}}},[o("md-checkbox",{attrs:{value:"todo.completed"},on:{change:function(o){return e.completeTodo(t)}},model:{value:t.completed,callback:function(o){e.$set(t,"completed",o)},expression:"todo.completed"}},[t.edit?e._e():o("label",[e._v(e._s(t.label))]),t.edit?o("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"todo.label"},{name:"focus",rawName:"v-focus"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:t.label},on:{blur:function(t){return e.doneEdit(n)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doneEdit(n)},input:function(o){o.target.composing||e.$set(t,"label",o.target.value)}}}):e._e()]),o("md-button",{staticClass:"remove",on:{click:function(o){return e.removeTodo(t)}}},[e._v("X")])],1)}),1),o("footer",{directives:[{name:"show",rawName:"v-show",value:e.todos.length>0,expression:"todos.length > 0"}]},[o("md-button",{staticClass:"clear",on:{click:function(t){return e.removeCompleted()}}},[e._v("Clear completed")])],1),o("p",{staticClass:"message"},[e._v("*Click on a Todo once to complete twice to edit")])],1)},d=[],i={data:function(){return{todos:[],currentTodo:""}},methods:{addTodo:function(){""!==this.currentTodo&&this.todos.push({id:this.todos.length,label:this.currentTodo,completed:!1,edit:!1}),this.currentTodo=""},completeTodo:function(e){!0===e.completed&&(e.completed=!1),!1===e.completed&&(e.completed=!0)},editTodo:function(e){this.todos[e].edit=!0},doneEdit:function(e){this.todos[e].edit=!1},removeTodo:function(e){var t=this.todos.indexOf(e);this.todos.splice(t,1)},removeCompleted:function(){this.todos=this.todos.filter(function(e){return!e.completed})}}},l=i,c=(o("034f"),o("2877")),u=Object(c["a"])(l,r,d,!1,null,null,null),s=u.exports,a=(o("51de"),o("43f9")),f=o.n(a);n["default"].use(f.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(s)}}).$mount("#app")},"64a9":function(e,t,o){}});
//# sourceMappingURL=app.96e25452.js.map