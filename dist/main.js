/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(81),r=n.n(o),i=n(645),c=n.n(i)()(r());c.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Raleway&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),c.push([t.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Raleway';\n    font-weight: 300;\n    font-size: 1.1rem;\n}\n\nh1 {\n    font-size: 3rem;\n}\n\n#content {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 20vw 80vw;\n}\n\n/* <Sidebar> */\n#sidebar {\n    padding-top: 1rem;\n    background-color: #FFB000;\n    color: white;\n}\n\n#sidebar h1 {\n    text-align: center;\n}\n\n#projects {\n    display: flex;\n    flex-direction: column-reverse;\n    padding: 2rem 0.5rem;\n    position: sticky;\n    top: 0;\n}\n\n#projects button {\n    padding: 0.75rem 1rem;\n    outline: none;\n    border: 0;\n    background-color: #F5F5DC;\n    border-radius: 12px;\n    color: black;\n    transition: 0.1s;\n    margin-top: 1rem;\n}\n\n.project-button {\n    display: flex;\n    justify-content: space-between;\n}\n\n.project-button button:first-child {\n    flex-grow: 1;\n}\n\n#projects button:hover {\n    background-color: #FFCF9D;\n}\n\nbutton.project-button-delete {\n    padding: 0;\n}\n\n.project-delete-trash-icon {\n    height: 24px;\n    width: auto;\n}\n/* </Sidebar> */\n\n/* <ContentDisplay> */\n#content-display {\n    padding: 1rem 2rem;\n}\n\n#content-display-body {\n    padding-top: 3rem;\n}\n\n#todo-container {\n    display: flex;\n    flex-direction: column-reverse;\n}\n\n#todo-container > div {\n    background-color: #F5F5DC;\n    margin-top: 1rem;\n    padding: 1rem 2rem;\n    border-radius: 12px;\n}\n\n.todo-container {\n    display: grid;\n    grid-template-columns: 10% 90%;\n    gap: 1rem;\n}\n\n.todo-container.item-done {\n    filter: grayscale();\n    opacity: 0.25;\n}\n\n.todo-info {\n    display: flex;\n    justify-content: space-between;\n}\n\n.todo-info-right {\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-info-right > button {\n    width: 100%;\n    padding: 0.5rem 1.2rem;\n    margin-bottom: 0.5rem;\n    border: 0;\n    background-color: #141414;\n    color: white;\n    border-radius: 6px;\n}\n\n.todo-action-item {\n    border: 0;\n    padding: 0.5rem 1.25rem;\n    margin-top: 0.75rem;\n    margin-right: 1rem;\n    background-color: #004225;\n    color: white;\n    border-radius: 12px;\n}\n\n.todo-info-item:first-child .todo-info-item-value {\n    font-size: 1.5rem;\n    text-decoration: underline;\n}\n\n.todo-done-check {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.todo-done-check-img {\n    width: 60%;\n    height: auto;\n}\n\n#todo-add-new {\n    display: flex;\n    align-items: center;\n}\n\n#add-icon {\n    color: white;\n    background-color: green;\n    border-radius: 48px;\n    font-size: 2rem;\n    padding: 0rem 2rem;\n}\n\n#add-icon-text {\n    margin-left: 1rem;\n}",""]);const a=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);o&&c[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},c=[],a=0;a<t.length;a++){var s=t[a],d=o.base?s[0]+o.base:s[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=r(f,o);o.byIndex=a,e.splice(a,0,{identifier:l,updater:h,references:1})}c.push(l)}return c}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var a=n(i[c]);e[a].references--}for(var s=o(t,r),d=0;d<i.length;d++){var u=n(i[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!t;)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function o(n){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?e(Object(r),!0).forEach((function(e){t(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}function r(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var c=function(t,e,n){for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)&&e&&!1===e.call(n,t[o],o,t))return;return t},a=function(t,e,n){for(var o=n._pubsub_topics,i=o[t]?r(o[t]):[],c=0,a=i.length;c<a;c+=1){var s=i[c].token,d=i[c];if(n._options.immediateExceptions)d.callback(e,{name:t,token:s});else try{d.callback(e,{name:t,token:s})}catch(t){setTimeout((function(){throw t}),0)}!0===d.once&&n.unsubscribe(s)}},s=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return n.length<=1?n[0]:[].concat(n)},d=function(t,e,n,o){return!!t._pubsub_topics[e]&&(o?a(e,n,t):setTimeout((function(){a(e,n,t)}),0),!0)},u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._pubsub_topics={},this._pubsub_uid=-1,this._options=o(o({},{immediateExceptions:!1}),e)}var e;return(e=[{key:"subscribe",value:function(t,e,n){var o=this._pubsub_topics,r=this._pubsub_uid+=1,i={};if("function"!=typeof e)throw new TypeError("When subscribing for an event, a callback function must be defined.");return o[t]||(o[t]=[]),i.token=r,i.callback=e,i.once=!!n,o[t].push(i),r}},{key:"subscribeOnce",value:function(t,e){return this.subscribe(t,e,!0)}},{key:"publish",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return d(this,t,s.apply(void 0,[t].concat(n)),!1)}},{key:"publishSync",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return d(this,t,s.apply(void 0,[t].concat(n)),!0)}},{key:"unsubscribe",value:function(t){var e=this._pubsub_topics,n=!1;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)&&e[o]){for(var r=e[o].length;r;){if(r-=1,e[o][r].token===t)return e[o].splice(r,1),0===e[o].length&&delete e[o],t;o===t&&(e[o].splice(r,1),0===e[o].length&&delete e[o],n=!0)}if(!0===n)return t}return!1}},{key:"unsubscribeAll",value:function(){return this._pubsub_topics={},this}},{key:"hasSubscribers",value:function(t){var e=this._pubsub_topics,n=!1;return null==t?(c(e,(function(t,e){if(e)return n=!0,!1})),n):Object.prototype.hasOwnProperty.call(e,t)}},{key:"subscribers",value:function(){var t={};return c(this._pubsub_topics,(function(e,n){t[n]=r(e)})),t}},{key:"subscribersByTopic",value:function(t){return this._pubsub_topics[t]?r(this._pubsub_topics[t]):[]}},{key:"alias",value:function(e){var n=this;return c(e,(function(o,r){var i,c;t.prototype[r]&&(t.prototype[e[r]]=(i=r,c=n,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return c[i].apply(c,e)}))})),this}}])&&function(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(t.prototype,e),t}();u.createInstance=function(t){return new u(t)},new u;class l{static entityCount=0;constructor(t,e){this.title=t,this.description=e,this.id=l.entityCount++}setTitle(t){this.title=t}setDescription(t){this.description=t}}function p(t,e="",n=[],o=""){const r=document.createElement(t);return e&&(r.id=e),n.length>0&&r.classList.add(...n),o&&(r.textContent=o),r}function f(t,e){let n=null;for(;!n;){if(n=prompt(t),null===n)return;n.length>20&&(n=null)}let o=null;for(;!o;)if(o=prompt(e),null===o)return;return{name:n,description:o}}const h=n.p+"24032ffbf3274f765eb4a97259a3240e.png",b=n.p+"ecc2a709588b07fc9de45720b741048c.png",m=n.p+"089321841fb701cd043f9c7fb2bffa22.png";class y extends l{constructor(t,e){super(t,e),this.todos=[]}addToDo(t){this.todos.push(t)}deleteToDo(t){this.todos.splice(this.todos.indexOf(t),1)}viewToDos(){for(const[t,e]of Object.entries(this.todos))console.log(`${t} - ${e.title} - ${e.description} - DONE: ${e.done} - DUE AT: ${e.due_at} - PRIORITY : ${e.priority}`)}getPendingToDos(){return this.todos.filter((t=>!t.done))}getPendingToDosCount(){return this.getPendingToDos().length}}class v extends l{constructor(t,e){super(t,e),this.due_at="today",this.priority="Low",this.done=!1}setDueAt(t){this.due_at=t}setPriority(t){this.priority=t}setDoneState(t){this.done=t}toggleDoneState(){this.setDoneState(!this.done)}}var g=n(379),w=n.n(g),E=n(795),j=n.n(E),T=n(569),D=n.n(T),x=n(565),O=n.n(x),_=n(216),k=n.n(_),S=n(589),A=n.n(S),M=n(426),P={};P.styleTagTransform=A(),P.setAttributes=O(),P.insert=D().bind(null,"head"),P.domAPI=j(),P.insertStyleElement=k(),w()(M.Z,P),M.Z&&M.Z.locals&&M.Z.locals,new class{static DOM_ELEMENTS;constructor(){this.projects=[],this.current_project=null,this.init(),this.addDummyData()}init(){this.DOM_ELEMENTS=function(){const t={};return t.content=document.querySelector("div#content"),t.sideBar=p("div","sidebar",[],""),t.projects=p("div","projects"),t.sideBar.append(p("h1","",[],"Projects"),t.projects),t.contentArea=p("div","content-display"),t.contentAreaHeader=p("h1","content-display-head",[],""),t.contentAreaBody=p("div","content-display-body"),t.contentArea.append(t.contentAreaHeader,t.contentAreaBody),t.content.append(t.sideBar,t.contentArea),t}();let t=p("button","add-new-project",[],"Add Project");t.addEventListener("click",(()=>this.addNewProject())),this.DOM_ELEMENTS.projects.appendChild(t),this.resetView()}addDummyData(){let t=this.createNewProject("Testing","12345");t.addToDo(new v("Test","123123123")),t.addToDo(new v("Test","123123123")),t.addToDo(new v("Test","123123123")),t.addToDo(new v("Test","123123123")),t.addToDo(new v("Test","123123123"))}addNewProject(){let t=f("Enter project name (Max 20 characters): ","Enter project description: ");if(void 0!==t)return this.createNewProject(t.name,t.description)}createNewProject(t,e){const n=new y(t,e);this.projects.push(n);const o=function(t){let e=p("button","",["project-button"]);e.setAttribute("data-index",t.id);let n=p("p","",["project-button-title"],t.title),o=p("img","",["project-delete-trash-icon"],"");return o.src=m,e.append(n,o),{btn:e,trashBtn:o}}(n);return o.btn.addEventListener("click",(()=>this.viewProject(n))),o.trashBtn.addEventListener("click",(t=>this.deleteProject(n,t))),this.DOM_ELEMENTS.projects.appendChild(o.btn),n}renderProjectToDos(t){if(null===t)return;const e=p("div","todo-container"),n=function(){const t=p("div","todo-add-new",[],""),e=p("span","add-icon",[],"+"),n=p("span","add-icon-text",[],"Add New Item");return t.append(e,n),t}();return n.addEventListener("click",(()=>this.createToDo(t))),e.appendChild(n),t.todos.forEach((t=>e.appendChild(this.createToDoNode(t)))),this.DOM_ELEMENTS.contentAreaBody.append(e),e}viewProject(t){this.DOM_ELEMENTS.contentAreaHeader.textContent=t.title,this.DOM_ELEMENTS.contentAreaBody.replaceChildren(p("p","",[],t.description)),this.renderProjectToDos(t),this.current_project=t,this.DOM_ELEMENTS.todoContainer=this.DOM_ELEMENTS.contentArea.querySelector("#todo-container")}deleteProject(t,e){return e.target.parentElement.remove(),this.projects.splice(this.projects.indexOf(t),1),this.current_project===t&&this.resetView(),e.stopPropagation(),t}createToDoNode(t){const e=function(t){let e=p("div","",["todo-container"]);e.setAttribute("data-index",t.id),t.done&&e.classList.add("item-done");const n=function(t){let e=p("div","",["todo-done-check"]);const n=p("img","",["todo-done-check-img"]);return n.src=t.done?b:h,e.appendChild(n),{btn:e,doneBtn:n}}(t);e.appendChild(n.btn);let o=p("div","",["todo-info"]);const r=function(t){let e=p("div","",["todo-info-left"]);const n={"":t.title,Description:t.description};for(const[t,o]of Object.entries(n)){let n=p("div","",["todo-info-item"]),r=p("span","",["todo-info-item-key"],t?`${t}: `:""),i=p("span","",["todo-info-item-value"],`${o}`);n.append(r,i),e.appendChild(n)}const o=p("button","",["todo-action-item"],"Edit Item"),r=p("button","",["todo-action-item"],"Delete Item");return e.append(o,r),{el:e,editBtn:o,deleteBtn:r}}(t),i=function(t){const e=p("div","",["todo-info-right"],""),n=p("button","",["todo-info-priority"],t.priority),o=p("button","",["todo-info-due-date"],t.due_at);return e.append(n,o),{el:e,priorityBtn:n,dueBtn:o}}(t);return o.append(r.el,i.el),e.appendChild(o),{todoEl:e,doneBtn:n.doneBtn,editBtn:r.editBtn,deleteBtn:r.deleteBtn,dueBtn:i.dueBtn,priorityBtn:i.priorityBtn}}(t);return e.doneBtn.addEventListener("click",(e=>this.flipToDoDone(t,e))),e.deleteBtn.addEventListener("click",(e=>this.deleteToDo(t,e))),t.done||[e.editBtn,e.dueBtn,e.priorityBtn].forEach((e=>e.addEventListener("click",(e=>this.editToDo(t,e))))),e.todoEl}createToDo(){let t=f("Enter title (Max 20 characters): ","Enter description: ");if(void 0===t)return;const e=new v(t.name,t.description);return this.current_project.addToDo(e),this.DOM_ELEMENTS.todoContainer.appendChild(this.createToDoNode(e)),e}refreshToDoNode(t,e){e.parentElement.replaceChild(this.createToDoNode(t),e)}flipToDoDone(t,e){t.toggleDoneState();const n=e.target.parentElement.parentElement;this.refreshToDoNode(t,n)}deleteToDo(t,e){return e.target.parentElement.parentElement.parentElement.remove(),this.current_project.deleteToDo(t),t}editToDo(t,e){console.log("editToDo called")}resetView(){this.DOM_ELEMENTS.contentAreaHeader.textContent="Hey there!",this.DOM_ELEMENTS.contentAreaBody.innerHTML="",this.DOM_ELEMENTS.contentAreaBody.textContent="No project chosen.",this.current_project=null}}})()})();