import{o as u,c as k,d as E,a,b as o,w as d,e as S,r as Z,f as h,T as P,g as V,p as T,h as H,i as N}from"./index-ebdf49b0.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const q={id:"canvas",class:"block max-lg:hidden"},D={__name:"CanvasBackground",setup(p){return setTimeout(()=>{var n=document.getElementById("canvas"),f=document.body,e=n.getContext("2d"),i=[],g=50,v,M,s={shapecolor:"#666",radius:2,distance:200,circleopacity:1,speed:.5},c=n.width=window.innerWidth,r=n.height=window.innerHeight;addEventListener("resize",function(){c=n.width=window.innerWidth,r=n.height=window.innerHeight});function C(t,l){return Math.floor(Math.random()*(l-t+1)+t)}function I(){e.clearRect(0,0,c,r)}function m(t){var l=n.getBoundingClientRect();return{x:t.clientX-l.left,y:t.clientY-l.top}}function _(t,l){this.x=t||C(0,c),this.y=l||C(0,r),this.speed=s.speed,this.vx=Math.cos(C(0,360))*this.speed,this.vy=Math.sin(C(0,360))*this.speed,this.r=s.radius,this.color=s.shapecolor,this.opacity=s.circleopacity,this.draw=function(){e.beginPath(),e.globalCompositeOperation="source-over",e.globalAlpha=this.opacity,e.arc(this.x,this.y,this.r,0,Math.PI*2,!1),e.closePath(),e.fillStyle=this.color,e.fill()},this.move=function(){this.x+=this.vx,this.y+=this.vy,(this.x>=c||this.x<=0)&&(this.vx*=-1),(this.y>=r||this.y<=0)&&(this.vy*=-1),this.x>c?this.x=c:this.x,this.y>r?this.y=r:this.y,this.x<0?this.x=0:this.x,this.y<0?this.y=0:this.y}}function z(t,l){for(var L=0;L<l.length;L++){var w=t.y-l[L].y,b=t.x-l[L].x,x=Math.sqrt(b*b+w*w);x<s.distance&&(e.beginPath(),e.globalAlpha=1-x/s.distance,e.globalCompositeOperation="destination-over",e.lineWidth=1,e.moveTo(t.x,t.y),e.lineTo(l[L].x,l[L].y),e.strokeStyle=s.shapecolor,e.lineCap="round",e.closePath(),e.stroke())}}function y(){I(),i[0].x=v,i[0].y=M,i[0].move(),i[0].draw();for(var t=1;t<i.length;t++)i[t].move(),i[t].draw(),z(i[t],i);window.requestAnimationFrame(y)}function A(){for(var t=0;t<g;t++)i.push(new _);window.requestAnimationFrame(y)}f.addEventListener("mousemove",function(t){var l=m(t);v=l.x,M=l.y}),f.addEventListener("click",function(t){var l=m(t);i.push(new _(l.x,l.y))}),f.addEventListener("contextmenu",function(t){t.preventDefault(),i.splice(i.length-1,1)}),A()},1e3),(n,f)=>(u(),k("canvas",q))}},R=B(D,[["__scopeId","data-v-93d50cdb"]]),W=p=>(T("data-v-c5ec15b0"),p=p(),H(),p),F={class:"min-h-screen w-screen"},O={class:"fixed z-50 h-screen w-52 grid grid-rows-6",style:{"background-color":"#181818"}},Y=W(()=>a("div",{class:"row-start-1"},[a("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"500",zoomAndPan:"magnify",viewBox:"0 0 375 374.999991",height:"500",preserveAspectRatio:"xMidYMid meet",version:"1.0"},[a("defs",null,[a("g"),a("clipPath",{id:"aff97b2538"},[a("path",{d:"M 91 37.5 L 286.652344 37.5 L 286.652344 207 L 91 207 Z M 91 37.5 ","clip-rule":"nonzero"})])]),a("g",{"clip-path":"url(#aff97b2538)"},[a("path",{fill:"#0f8795",d:"M 286.46875 122.25 C 286.46875 75.519531 248.570312 37.5 201.996094 37.5 L 96.210938 37.5 C 93.375 37.5 91.078125 39.804688 91.078125 42.648438 L 91.078125 201.847656 C 91.078125 204.691406 93.375 206.996094 96.210938 206.996094 L 201.996094 206.996094 C 202.003906 206.996094 202.011719 206.992188 202.015625 206.992188 C 248.585938 206.984375 286.46875 168.972656 286.46875 122.25 Z M 201.996094 196.699219 C 201.992188 196.699219 201.984375 196.699219 201.976562 196.699219 L 101.34375 196.699219 L 101.34375 47.796875 L 201.996094 47.796875 C 242.914062 47.796875 276.199219 81.199219 276.199219 122.25 C 276.199219 163.300781 242.914062 196.699219 201.996094 196.699219 Z M 201.996094 196.699219 ","fill-opacity":"1","fill-rule":"nonzero"})]),a("path",{fill:"#0f8795",d:"M 201.996094 64.03125 L 122.65625 64.03125 C 119.820312 64.03125 117.523438 66.335938 117.523438 69.179688 C 117.523438 69.179688 117.523438 69.179688 117.523438 69.1875 C 117.523438 69.1875 117.523438 69.1875 117.523438 69.191406 L 117.523438 148.78125 C 117.523438 151.628906 119.820312 153.929688 122.65625 153.929688 C 125.492188 153.929688 127.789062 151.628906 127.789062 148.78125 L 127.789062 74.332031 L 201.996094 74.332031 C 228.332031 74.332031 249.753906 95.828125 249.753906 122.246094 C 249.753906 148.664062 228.332031 170.160156 201.996094 170.160156 L 122.65625 170.160156 C 119.820312 170.160156 117.523438 172.464844 117.523438 175.308594 C 117.523438 178.15625 119.820312 180.460938 122.65625 180.460938 L 201.976562 180.460938 C 201.984375 180.460938 201.992188 180.460938 201.996094 180.460938 C 233.992188 180.460938 260.019531 154.34375 260.019531 122.242188 C 260.019531 90.140625 233.992188 64.03125 201.996094 64.03125 Z M 201.996094 64.03125 ","fill-opacity":"1","fill-rule":"nonzero"}),a("path",{fill:"#0f8795",d:"M 201.996094 143.632812 C 201.75 143.632812 201.515625 143.671875 201.28125 143.707031 L 149.105469 143.707031 C 146.269531 143.707031 143.972656 146.011719 143.972656 148.855469 C 143.972656 151.699219 146.269531 154.003906 149.105469 154.003906 L 201.996094 154.003906 C 202.375 154.003906 202.75 153.957031 203.105469 153.875 C 220 153.277344 233.566406 139.34375 233.566406 122.25 C 233.566406 104.777344 219.398438 90.570312 201.992188 90.570312 L 175.550781 90.570312 C 172.714844 90.570312 170.417969 92.871094 170.417969 95.71875 C 170.417969 98.5625 172.714844 100.867188 175.550781 100.867188 L 201.996094 100.867188 C 213.75 100.867188 223.308594 110.460938 223.308594 122.25 C 223.308594 134.039062 213.75 143.632812 201.996094 143.632812 Z M 201.996094 143.632812 ","fill-opacity":"1","fill-rule":"nonzero"}),a("g",{fill:"#05e0e9","fill-opacity":"1"},[a("g",{transform:"translate(108.245487, 277.139073)"},[a("g",null,[a("path",{d:"M 3.964844 0 L 17.265625 0 C 28.351562 0 37.421875 -9.003906 37.421875 -20.15625 C 37.421875 -31.308594 28.351562 -40.3125 17.265625 -40.3125 L 3.964844 -40.3125 Z M 12.832031 -7.859375 L 12.832031 -32.453125 L 17.199219 -32.453125 C 23.582031 -32.453125 28.554688 -27.144531 28.554688 -20.15625 C 28.554688 -13.167969 23.582031 -7.859375 17.199219 -7.859375 Z M 12.832031 -7.859375 "})])])]),a("g",{fill:"#05e0e9","fill-opacity":"1"},[a("g",{transform:"translate(147.066581, 277.139073)"},[a("g",null,[a("path",{d:"M 33.929688 -6.988281 C 32.789062 -6.988281 31.578125 -7.390625 31.578125 -9.609375 L 31.578125 -26.875 L 23.046875 -26.875 L 23.046875 -24.523438 C 21.03125 -26.335938 18.476562 -27.414062 15.386719 -27.414062 C 7.929688 -27.414062 2.082031 -21.230469 2.082031 -13.4375 C 2.082031 -5.644531 7.929688 0.539062 15.386719 0.539062 C 19.28125 0.539062 22.441406 -1.210938 24.589844 -4.03125 C 26.269531 -1.277344 29.226562 0.539062 32.855469 0.539062 C 33.726562 0.539062 34.535156 0.269531 35.140625 0 L 35.140625 -6.988281 Z M 17.066406 -7.054688 C 13.503906 -7.054688 10.683594 -9.875 10.683594 -13.4375 C 10.683594 -17 13.503906 -19.820312 17.066406 -19.820312 C 20.558594 -19.820312 23.449219 -17 23.449219 -13.4375 C 23.449219 -9.875 20.558594 -7.054688 17.066406 -7.054688 Z M 17.066406 -7.054688 "})])])]),a("g",{fill:"#05e0e9","fill-opacity":"1"},[a("g",{transform:"translate(182.126403, 277.139073)"},[a("g",null,[a("path",{d:"M 20.222656 -27.414062 C 17.132812 -27.414062 14.445312 -25.933594 12.5625 -23.582031 L 12.5625 -26.875 L 3.964844 -26.875 L 3.964844 0 L 12.5625 0 L 12.5625 -15.585938 C 12.5625 -18.007812 14.578125 -19.820312 17.066406 -19.820312 C 19.550781 -19.820312 21.296875 -18.007812 21.296875 -15.585938 L 21.296875 0 L 29.832031 0 L 29.832031 -17 C 29.832031 -22.910156 25.53125 -27.414062 20.222656 -27.414062 Z M 20.222656 -27.414062 "})])])]),a("g",{fill:"#05e0e9","fill-opacity":"1"},[a("g",{transform:"translate(214.298138, 277.139073)"},[a("g",null,[a("path",{d:"M 20.222656 -27.414062 C 17.132812 -27.414062 14.445312 -25.933594 12.5625 -23.582031 L 12.5625 -26.875 L 3.964844 -26.875 L 3.964844 0 L 12.5625 0 L 12.5625 -15.585938 C 12.5625 -18.007812 14.578125 -19.820312 17.066406 -19.820312 C 19.550781 -19.820312 21.296875 -18.007812 21.296875 -15.585938 L 21.296875 0 L 29.832031 0 L 29.832031 -17 C 29.832031 -22.910156 25.53125 -27.414062 20.222656 -27.414062 Z M 20.222656 -27.414062 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(40.950267, 319.503289)"},[a("g",null,[a("path",{d:"M 3.503906 0 L 3.503906 -13 L 1.882812 -13 L 1.882812 0 Z M 3.503906 0 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(48.183081, 319.503289)"},[a("g",null,[a("path",{d:"M 12.058594 0 L 12.019531 -13 L 10.4375 -13 L 10.4375 -6.5 C 10.4375 -4.972656 10.457031 -3.109375 10.492188 -1.582031 L 4.371094 -13 L 1.882812 -13 L 1.882812 0 L 3.503906 0 L 3.503906 -6.5 C 3.503906 -8.027344 3.484375 -9.890625 3.449219 -11.417969 L 9.570312 0 Z M 12.058594 0 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(63.965604, 319.503289)"},[a("g",null,[a("path",{d:"M 7.515625 -6.273438 L 7.515625 -4.953125 L 10.550781 -4.953125 C 10.550781 -2.636719 8.988281 -1.015625 6.875 -1.015625 C 4.3125 -1.015625 2.695312 -3.316406 2.695312 -6.519531 C 2.695312 -9.664062 4.332031 -11.980469 6.988281 -11.980469 C 9.15625 -11.980469 10.304688 -10.71875 10.683594 -8.855469 L 10.71875 -8.667969 L 12.339844 -8.667969 L 12.320312 -8.855469 C 12.058594 -11.398438 10.324219 -13.261719 7.027344 -13.261719 C 3.335938 -13.261719 0.886719 -10.398438 0.886719 -6.441406 C 0.886719 -2.636719 2.996094 0.265625 6.78125 0.265625 C 8.269531 0.265625 9.421875 -0.226562 10.15625 -1.054688 L 10.738281 -2.261719 L 10.738281 0 L 12.171875 0 L 12.171875 -6.273438 Z M 7.515625 -6.273438 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(79.597466, 319.503289)"},[a("g",null,[a("path",{d:"M 10.53125 -1.320312 L 3.503906 -1.320312 L 3.503906 -5.839844 L 9.777344 -5.839844 L 9.777344 -7.160156 L 3.503906 -7.160156 L 3.503906 -11.679688 L 10.34375 -11.679688 L 10.34375 -13 L 1.882812 -13 L 1.882812 0 L 10.53125 0 Z M 10.53125 -1.320312 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(92.912998, 319.503289)"},[a("g",null,[a("path",{d:"M 12.058594 0 L 12.019531 -13 L 10.4375 -13 L 10.4375 -6.5 C 10.4375 -4.972656 10.457031 -3.109375 10.492188 -1.582031 L 4.371094 -13 L 1.882812 -13 L 1.882812 0 L 3.503906 0 L 3.503906 -6.5 C 3.503906 -8.027344 3.484375 -9.890625 3.449219 -11.417969 L 9.570312 0 Z M 12.058594 0 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(108.69552, 319.503289)"},[a("g",null,[a("path",{d:"M 3.503906 0 L 3.503906 -13 L 1.882812 -13 L 1.882812 0 Z M 3.503906 0 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(115.928335, 319.503289)"},[a("g",null,[a("path",{d:"M 10.53125 -1.320312 L 3.503906 -1.320312 L 3.503906 -5.839844 L 9.777344 -5.839844 L 9.777344 -7.160156 L 3.503906 -7.160156 L 3.503906 -11.679688 L 10.34375 -11.679688 L 10.34375 -13 L 1.882812 -13 L 1.882812 0 L 10.53125 0 Z M 10.53125 -1.320312 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(129.243867, 319.503289)"},[a("g",null,[a("path",{d:"M 10.4375 -3.410156 C 10.324219 -4.710938 9.816406 -5.898438 8.761719 -6.386719 C 9.964844 -6.761719 11.078125 -7.742188 11.078125 -9.457031 C 11.078125 -11.644531 9.722656 -12.679688 7.835938 -12.925781 C 7.253906 -13 6.800781 -13 6.140625 -13 L 1.882812 -13 L 1.882812 0 L 3.503906 0 L 3.503906 -5.59375 L 5.953125 -5.59375 C 6.253906 -5.59375 6.574219 -5.59375 6.875 -5.578125 C 8.15625 -5.484375 8.667969 -4.597656 8.816406 -3.257812 C 8.988281 -1.65625 9.15625 -0.828125 9.515625 0 L 11.304688 0 C 10.777344 -0.695312 10.589844 -1.714844 10.4375 -3.410156 Z M 3.503906 -6.914062 L 3.503906 -11.679688 L 6.140625 -11.679688 C 6.726562 -11.679688 7.082031 -11.660156 7.441406 -11.605469 C 8.648438 -11.417969 9.34375 -10.757812 9.34375 -9.308594 C 9.34375 -7.835938 8.460938 -7.066406 7.253906 -6.953125 C 6.894531 -6.914062 6.574219 -6.914062 5.992188 -6.914062 Z M 3.503906 -6.914062 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(143.162022, 319.503289)"},[a("g",null,[a("path",{d:"M 7.027344 -13.261719 C 3.070312 -13.261719 0.886719 -10.476562 0.886719 -6.5 C 0.886719 -2.542969 3.070312 0.265625 7.027344 0.265625 C 10.984375 0.265625 13.167969 -2.542969 13.167969 -6.5 C 13.167969 -10.476562 10.984375 -13.261719 7.027344 -13.261719 Z M 7.027344 -1.015625 C 4.296875 -1.015625 2.695312 -3.128906 2.695312 -6.5 C 2.695312 -9.890625 4.296875 -11.980469 7.027344 -11.980469 C 9.757812 -11.980469 11.359375 -9.890625 11.359375 -6.5 C 11.359375 -3.128906 9.757812 -1.015625 7.027344 -1.015625 Z M 7.027344 -1.015625 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(159.302356, 319.503289)"},[a("g")])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(165.631236, 319.503289)"},[a("g",null,[a("path",{d:"M 3.503906 0 L 3.503906 -13 L 1.882812 -13 L 1.882812 0 Z M 3.503906 0 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(172.86405, 319.503289)"},[a("g",null,[a("path",{d:"M 12.058594 0 L 12.019531 -13 L 10.4375 -13 L 10.4375 -6.5 C 10.4375 -4.972656 10.457031 -3.109375 10.492188 -1.582031 L 4.371094 -13 L 1.882812 -13 L 1.882812 0 L 3.503906 0 L 3.503906 -6.5 C 3.503906 -8.027344 3.484375 -9.890625 3.449219 -11.417969 L 9.570312 0 Z M 12.058594 0 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(188.646573, 319.503289)"},[a("g",null,[a("path",{d:"M 3.503906 -11.679688 L 10.34375 -11.679688 L 10.34375 -13 L 1.882812 -13 L 1.882812 0 L 3.503906 0 L 3.503906 -5.839844 L 9.589844 -5.839844 L 9.589844 -7.160156 L 3.503906 -7.160156 Z M 3.503906 -11.679688 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(201.585469, 319.503289)"},[a("g",null,[a("path",{d:"M 7.027344 -13.261719 C 3.070312 -13.261719 0.886719 -10.476562 0.886719 -6.5 C 0.886719 -2.542969 3.070312 0.265625 7.027344 0.265625 C 10.984375 0.265625 13.167969 -2.542969 13.167969 -6.5 C 13.167969 -10.476562 10.984375 -13.261719 7.027344 -13.261719 Z M 7.027344 -1.015625 C 4.296875 -1.015625 2.695312 -3.128906 2.695312 -6.5 C 2.695312 -9.890625 4.296875 -11.980469 7.027344 -11.980469 C 9.757812 -11.980469 11.359375 -9.890625 11.359375 -6.5 C 11.359375 -3.128906 9.757812 -1.015625 7.027344 -1.015625 Z M 7.027344 -1.015625 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(217.725803, 319.503289)"},[a("g",null,[a("path",{d:"M 10.4375 -3.410156 C 10.324219 -4.710938 9.816406 -5.898438 8.761719 -6.386719 C 9.964844 -6.761719 11.078125 -7.742188 11.078125 -9.457031 C 11.078125 -11.644531 9.722656 -12.679688 7.835938 -12.925781 C 7.253906 -13 6.800781 -13 6.140625 -13 L 1.882812 -13 L 1.882812 0 L 3.503906 0 L 3.503906 -5.59375 L 5.953125 -5.59375 C 6.253906 -5.59375 6.574219 -5.59375 6.875 -5.578125 C 8.15625 -5.484375 8.667969 -4.597656 8.816406 -3.257812 C 8.988281 -1.65625 9.15625 -0.828125 9.515625 0 L 11.304688 0 C 10.777344 -0.695312 10.589844 -1.714844 10.4375 -3.410156 Z M 3.503906 -6.914062 L 3.503906 -11.679688 L 6.140625 -11.679688 C 6.726562 -11.679688 7.082031 -11.660156 7.441406 -11.605469 C 8.648438 -11.417969 9.34375 -10.757812 9.34375 -9.308594 C 9.34375 -7.835938 8.460938 -7.066406 7.253906 -6.953125 C 6.894531 -6.914062 6.574219 -6.914062 5.992188 -6.914062 Z M 3.503906 -6.914062 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(231.643958, 319.503289)"},[a("g",null,[a("path",{d:"M 14.847656 -13 L 12.226562 -13 L 8.402344 -1.375 L 4.558594 -13 L 1.882812 -13 L 1.882812 0 L 3.503906 0 L 3.503906 -6.6875 C 3.503906 -8.289062 3.503906 -10.078125 3.464844 -11.492188 C 3.882812 -10.097656 4.484375 -8.289062 5.011719 -6.746094 L 7.347656 0 L 9.382812 0 L 11.679688 -6.707031 C 12.226562 -8.289062 12.828125 -10.117188 13.261719 -11.53125 C 13.226562 -10.117188 13.226562 -8.308594 13.226562 -6.6875 L 13.226562 0 L 14.847656 0 Z M 14.847656 -13 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(250.21362, 319.503289)"},[a("g",null,[a("path",{d:"M 8.589844 -4.597656 L 10.136719 0 L 11.886719 0 L 7.402344 -13 L 5.21875 -13 L 0.546875 0 L 2.28125 0 L 3.804688 -4.597656 Z M 4.257812 -5.914062 L 6.273438 -11.71875 L 8.15625 -5.914062 Z M 4.257812 -5.914062 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(264.508412, 319.503289)"},[a("g",null,[a("path",{d:"M 11.53125 -11.679688 L 11.53125 -13 L 0.640625 -13 L 0.640625 -11.679688 L 5.273438 -11.679688 L 5.273438 0 L 6.894531 0 L 6.894531 -11.679688 Z M 11.53125 -11.679688 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(278.294742, 319.503289)"},[a("g",null,[a("path",{d:"M 3.503906 0 L 3.503906 -13 L 1.882812 -13 L 1.882812 0 Z M 3.503906 0 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(285.527545, 319.503289)"},[a("g",null,[a("path",{d:"M 7.027344 -13.261719 C 3.335938 -13.261719 0.886719 -10.398438 0.886719 -6.441406 C 0.886719 -2.636719 2.996094 0.265625 6.78125 0.265625 C 10.210938 0.265625 11.964844 -1.789062 12.207031 -4.144531 L 12.226562 -4.332031 L 10.605469 -4.332031 L 10.570312 -4.144531 C 10.191406 -2.28125 9.042969 -1.015625 6.875 -1.015625 C 4.3125 -1.015625 2.695312 -3.316406 2.695312 -6.519531 C 2.695312 -9.664062 4.332031 -11.980469 6.988281 -11.980469 C 9.15625 -11.980469 10.304688 -10.71875 10.683594 -8.855469 L 10.71875 -8.667969 L 12.339844 -8.667969 L 12.320312 -8.855469 C 12.058594 -11.398438 10.324219 -13.261719 7.027344 -13.261719 Z M 7.027344 -13.261719 "})])])]),a("g",{fill:"#909096","fill-opacity":"1"},[a("g",{transform:"translate(300.952257, 319.503289)"},[a("g",null,[a("path",{d:"M 7.027344 -13.261719 C 3.070312 -13.261719 0.886719 -10.476562 0.886719 -6.5 C 0.886719 -2.542969 3.070312 0.265625 7.027344 0.265625 C 10.984375 0.265625 13.167969 -2.542969 13.167969 -6.5 C 13.167969 -10.476562 10.984375 -13.261719 7.027344 -13.261719 Z M 7.027344 -1.015625 C 4.296875 -1.015625 2.695312 -3.128906 2.695312 -6.5 C 2.695312 -9.890625 4.296875 -11.980469 7.027344 -11.980469 C 9.757812 -11.980469 11.359375 -9.890625 11.359375 -6.5 C 11.359375 -3.128906 9.757812 -1.015625 7.027344 -1.015625 Z M 7.027344 -1.015625 "})])])])])],-1)),$={id:"AsideMenu",class:"text-lg row-span-2 row-start-3"},X={style:{"border-top":"1px solid #282828"}},G=S('<ul id="MediaSection" class="row-span-1 row-start-5 flex justify-center items-center" data-v-c5ec15b0><li class="w-12 flex justify-center" data-v-c5ec15b0><a class="facebook social" href="https://www.linkedin.com/in/dann-armand-inostroza-1827bb229/" target="_blank" data-v-c5ec15b0><span data-v-c5ec15b0></span><span data-v-c5ec15b0></span><span data-v-c5ec15b0></span><span data-v-c5ec15b0></span><i class="fa fa-linkedin" aria-hidden="true" data-v-c5ec15b0></i></a></li><li class="w-12 flex justify-center" data-v-c5ec15b0><a class="facebook social" href="https://github.com/DannArmandI" target="_blank" data-v-c5ec15b0><span data-v-c5ec15b0></span><span data-v-c5ec15b0></span><span data-v-c5ec15b0></span><span data-v-c5ec15b0></span><i class="fa fa-github" data-v-c5ec15b0></i></a></li><li class="w-12 flex justify-center" data-v-c5ec15b0><a class="facebook social" href="https://api.whatsapp.com/send?phone=56942889061" target="_blank" data-v-c5ec15b0><span data-v-c5ec15b0></span><span data-v-c5ec15b0></span><span data-v-c5ec15b0></span><span data-v-c5ec15b0></span><i class="fa fa-whatsapp" aria-hidden="true" data-v-c5ec15b0></i></a></li></ul>',1),J={id:"section",class:"flex pl-52 w-screen min-h-screen"},K=E({__name:"LandingView",setup(p){return(n,f)=>{const e=Z("router-link"),i=Z("router-view");return u(),k("div",F,[a("div",O,[Y,a("ul",$,[a("li",X,[o(e,{to:"/",tag:"a"},{default:d(()=>[h("Inicio")]),_:1})]),a("li",null,[o(e,{to:"/Habilidades",tag:"a"},{default:d(()=>[h("Mis Habilidades")]),_:1})]),a("li",null,[o(e,{to:"/Experiencia",tag:"a"},{default:d(()=>[h("Experiencia")]),_:1})]),a("li",null,[o(e,{to:"/Contacto",tag:"a"},{default:d(()=>[h("Contacto")]),_:1})])]),G]),a("div",J,[o(i,null,{default:d(({Component:g})=>[o(P,{name:"scale",mode:"out-in"},{default:d(()=>[(u(),V(N(g)))]),_:2},1024)]),_:1}),o(R)])])}}});const j=B(K,[["__scopeId","data-v-c5ec15b0"]]);export{j as default};
