!function(e){function t(t){for(var o,i,r=t[0],l=t[1],u=t[2],c=0,f=[];c<r.length;c++)i=r[c],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(t);f.length;)f.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],o=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(o=!1)}o&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var o={},s={2:0},n=[];function i(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=o,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(a,o,function(t){return e[t]}.bind(null,o));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var d=l;n.push([33,0]),a()}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){this.model=e.model}render(e){}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){this.model=e.model,this.view=e.view,console.log("view, model: ",this.view,this.model)}render(e){}}},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(0));class n extends s.default{constructor(){super({name:"Health Panel"}),this._health=100}set health(e){this._health=e}get health(){return this._health}}t.default=n},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(1)),n=o(a(3));class i extends s.default{constructor(e){super({model:n.default}),this._layout=e.layout,this.model=new n.default}get layout(){return this._layout}}t.default=i},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>{if(e.map.length!==e.size.y)throw new Error(`The level's Y axis isn't equal ${e.size.y}`);if(e.map[0].length!==e.size.x)throw new Error(`The level's X axis isn't equal ${e.size.x}`);return e.map},t.LevelBlockKeys={a:"air",t:"terra",s:"stone",w:"water",l:"lava",rb:"reward-block",r:"reward"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCoordsOfBlock=function(e,t){const a=t.getBoundingClientRect(),o=document.body.getBoundingClientRect(),s=o.left-a.left,n=o.top-a.top,{left:i,top:r}=e.getBoundingClientRect();return{left:i+s,top:r+n}};class o{constructor(e){this.keyCodes={arrows:{left:37,top:38,bottom:40,right:39}}}}t.Listeners=o,t.defaultListeners=new o({})},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(8)),n=o(a(15)),i=o(a(23)),r=a(6);t.default=class{constructor(e){this.gameRoot=e.gameRoot,this.gamePanel=new s.default(e),this.level=new i.default({map:e.level.map,theme:e.level.theme,container:e.level.container}),this.digger=new n.default({level:this.level,position:{left:0,top:0},frameCounter:0,skin:{name:e.theme.diggerSkin.name,_$element:null,framesQuantity:e.theme.diggerSkin.framesQuantity},direction:e.startDirection}),this.startPosition=e.startPosition,this.listeners=e.listeners}start(){const e=this.level.render(this.gameRoot),t=e.querySelector(`[data-x-axis="${this.startPosition.x}"][data-y-axis="${this.startPosition.y}"]`),a=r.getCoordsOfBlock(t,e);this.digger.controller.spawn({level:this.level,position:a,direction:this.digger.model.direction});this.setEventListeners(this.listeners)}setEventListeners(e){const{left:t,right:a,bottom:o,top:s}=e.keyCodes.arrows;window.addEventListener("keydown",e=>{switch(e.keyCode){case t:this.digger.controller.run("left");break;case a:this.digger.controller.run("right")}})}}},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(9)),n=o(a(11));t.default=class{constructor(e){this.healthPanel=new s.default,this.budgetPanel=new n.default,this.render(e.gameRoot)}render(e){const t=`<div class="game-panel">\n                ${this.healthPanel.view.layout+this.budgetPanel.view.layout}\n            </div>`;e.insertAdjacentHTML("afterbegin",t)}}},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(3)),n=o(a(4)),i=o(a(10));t.default=class{constructor(){this.model=new s.default,this.view=new n.default({model:this.model,layout:`<div class="health-panel">\n                    <progress value="${this.model.health}" max="100" class="health-panel__value panel__value">\n                    </progress>\n                </div>`}),this.controller=new i.default(this.model,this.view)}}},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(2)),n=o(a(3)),i=o(a(4));class r extends s.default{constructor(e,t){super({model:e,view:t}),this.model=new n.default,this.view=new i.default({model:this.model,layout:this.view.layout})}get getHealth(){return this.model.health}render(e){return this.view.layout}}t.default=r},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(12)),n=o(a(13)),i=o(a(14));t.default=class{constructor(){this.model=new s.default(50),this.view=new n.default({layout:`<div class="budget-panel">\n                    <span class="budget-panel__value panel__value">${this.model.budget}</span>\n                </div>`,model:this.model}),this.controller=new i.default({model:this.model,view:this.view})}}},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(0));class n extends s.default{constructor(e){super({}),this._budget=0,this._budget=e}set budget(e){this._budget=e}get budget(){return this._budget}}t.default=n},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(1));class n extends s.default{constructor(e){super({model:e.model}),this._layout=e.layout}get layout(){return this._layout}}t.default=n},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(2));class n extends s.default{}t.default=n},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(16)),n=o(a(17)),i=o(a(19)),r=o(a(21));class l extends s.default{constructor(e){const t=new n.default({level:e.level,speed:5,position:e.position,name:e.skin.name,condition:"runs",frameCounter:e.frameCounter,direction:e.direction}),a=new i.default({model:t,skin:e.skin});super(t,a,new r.default({model:t,view:a}))}}t.default=l},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e,t,a){this.model=e,this.view=t,this.controller=a}spawn(){this.controller.spawn({level:this.model.level,position:this.model.position,direction:this.model.direction})}}},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(18));class n extends s.default{constructor(e){super({speed:e.speed,position:e.position,name:e.name,level:e.level,condition:e.condition,frameCounter:e.frameCounter,direction:e.direction})}}t.default=n},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(0));class n extends s.default{constructor(e){super({name:"Character"}),this.speed=e.speed,this.position=e.position,this.name=e.name,this.level=e.level,this.condition=e.condition,this.frameCounter=e.frameCounter,this.direction=e.direction}}t.default=n},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(20));class n extends s.default{constructor(e){super({skin:{name:e.model.name,_$element:e.skin._$element,framesQuantity:e.skin.framesQuantity},model:e.model})}}t.default=n},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(1));class n extends s.default{constructor(e){super({model:e.model}),this.skin=e.skin,this.model=e.model}render(e){const{left:t,top:a}=e.position,{name:o,condition:s}=this.model,n=document.createElement("img");n.src=`./assets/img/Characters/${o}/${this.skin.name}_${s}.png`,n.classList.add("frame",`frame-${e.frameCounter}`);const i=document.createElement("div");i.classList.add("character",`character-${this.model.name}`,`direction-${e.direction}`),i.appendChild(n),document.body.appendChild(i),i.style.left=`${t}px`,i.style.top=`${a}px`,this.skin._$element=i,document.querySelector(".level-container").insertAdjacentElement("beforeend",i)}erase(){this.skin._$element.remove()}}t.default=n},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(22));class n extends s.default{constructor(e){super({model:{speed:e.model.speed,position:e.model.position,name:e.model.name,condition:e.model.condition,level:e.model.level,frameCounter:e.model.frameCounter,direction:e.model.direction},view:{model:e.view.model,skin:e.view.skin,render:e.view.render,erase:e.view.erase}})}}t.default=n},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(2));class n extends s.default{constructor(e){super(e),this.view=e.view,this.model=e.model}spawn(e){return this.model.position=e.position,this.view.render({position:e.position,frameCounter:0,direction:e.direction})}run(e){switch(this.view.erase(),this.model.frameCounter>=this.view.skin.framesQuantity&&(this.model.frameCounter=0),this.model.frameCounter++,e){case"left":this.model.position.left--;break;case"right":this.model.position.left++}this.view.render({position:this.model.position,frameCounter:this.model.frameCounter,direction:e})}attack(){}}t.default=n},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(24)),n=o(a(25)),i=o(a(26));t.default=class{constructor(e){this.model=new s.default({map:e.map}),this.view=new n.default({model:this.model,theme:e.theme,container:e.container}),this.controller=new i.default({model:this.model,view:this.view})}render(e){return this.controller.render({gameRoot:e,map:this.model.map,theme:this.view.theme})}}},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(0));class n extends s.default{constructor(e){super({}),this.map=e.map}}t.default=n},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(1));class n extends s.default{constructor(e){super(e),this.theme=e.theme,this.container=e.container}}t.default=n},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(2)),n=a(5);class i extends s.default{constructor(e){super(e),this.model=e.model,this.view=e.view}render(e){const t=document.createElement("div");return t.classList.add("level-container"),e.map.forEach((a,o)=>{const s=t.appendChild(document.createElement("div"));s.setAttribute("data-row-counter",o.toString()),a.forEach((t,a)=>{s.insertAdjacentHTML("beforeend",`<img \n                        alt="${n.LevelBlockKeys[t]}"\n                        data-y-axis="${o}" \n                        data-x-axis="${a}"\n                        src="./assets/img/themes/${e.theme}/${n.LevelBlockKeys[t]}.png"\n                        class="block block-${n.LevelBlockKeys[t]}"\n                    >`)})}),e.gameRoot.appendChild(t)}}t.default=i},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(5)).default({size:{x:30,y:20},map:[["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["t","t","t","t","t","t","t","t","t","t","t","r","t","rb","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t"],["t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","rb","t","rb","t","t","t","rb","t","t","t","t","t","t","t","t"],["t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t"],["t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","rb","t","t","t","t","t","t","t","t"],["t","t","t","t","t","t","t","t","t","t","t","t","t","rb","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t"],["t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t"]]});t.default=s},function(e,t,a){var o=a(30),s=a(29);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var n={insert:"head",singleton:!1},i=(o(e.i,s,n),s.locals?s.locals:{});e.exports=i},function(e,t,a){},,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(34),a(28)},function(e,t,a){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(a(7)),n=o(a(27)),i=a(6),r=document.querySelector("#game-test");console.log("test");const l={map:n.default,theme:"default",container:".level-container"},u=new s.default({gameRoot:r,level:l,listeners:i.defaultListeners,startPosition:{x:8,y:14},theme:{diggerSkin:{name:"Digger",framesQuantity:4}},startDirection:"right"});u.start(),describe("Position in Digger's model is changing ",()=>{it("position.left should become position.left + 1",()=>{const e=u.digger.model.position.left;u.digger.controller.run("right"),expect(u.digger.model.position.left).toEqual(e+1),expect(u.digger.model.position.left).toBeGreaterThan(e)})})}]);