(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2540:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(2809),i=n(6311),s=n(9008),a=n(5893),o=function(e){var t=e.label,n=e.name,r=e.onChange;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("label",{htmlFor:n,className:"block text-sm font-medium text-gray-700",children:t}),(0,a.jsx)("input",{type:"number",step:"0.1",name:n,id:n,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-max pr-12 text-right shadow-sm sm:text-sm border-gray-300 rounded-md",placeholder:"",onChange:r}),(0,a.jsx)("span",{className:"absolute top-8 right-0 flex items-center px-4",children:"cm"})]})},c=n(7294),d=n(9669),l=n.n(d);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(){var e=c.useState({heightFather:0,heightMother:0,gender:"",isLoading:!1,isResult:!1,expect:{expectHeight:0,minHeight:0,maxHeight:0}}),t=(0,i.Z)(e,2),n=t[0],d=t[1],m=function(e){d(h(h({},n),{},(0,r.Z)({},e.target.name,e.target.value)))},x=n.expect,g=x.expectHeight,u=x.minHeight,p=x.maxHeight;return(0,a.jsxs)("div",{className:"container mx-auto",children:[(0,a.jsxs)(s.default,{children:[(0,a.jsx)("title",{children:"\uc544\uc774 \uc608\uc0c1 \ud0a4"}),(0,a.jsx)("meta",{name:"description",content:"\uc544\uc774\uc758 \uc608\uc0c1 \ud0a4 \uad6c\ud558\uae30"})]}),(0,a.jsxs)("main",{className:"mt-10 sm:mt-0",children:[(0,a.jsx)("h1",{className:"block md:text-4xl text-2xl font-medium text-gray-700 pt-6 text-center",children:"\uc6b0\ub9ac \uc544\uc774\uc758 \uc608\uc0c1 \ud0a4"}),(0,a.jsxs)("p",{className:"block md:text-base text-sm font-medium text-gray-700 py-4 text-center",children:["\ubd80\ubaa8\uc758 \ud0a4\uc640 \uc544\uc774\uc758 \uc131\ubcc4\uc744 \uc785\ub825\ud558\uba74",(0,a.jsx)("br",{}),"\uc6b0\ub9ac \uc544\uc774\uc758 ",(0,a.jsx)("strong",{children:"\uc608\uc0c1 \ud0a4"}),"\ub97c \uc54c\ub824 \ub4dc\ub9bd\ub2c8\ub2e4."]}),(0,a.jsxs)("form",{className:"shadow overflow-hidden sm:rounded-md mx-auto w-max",onSubmit:function(e){var t,r,i;e.preventDefault(),d(h(h({},n),{},{isLoading:!0})),(t=n.heightFather,r=n.heightMother,i=n.gender,l().post("https://api.mstorm.net/kiki/v1/expect",{heightFather:t,heightMother:r,gender:i})).then((function(e){d(h(h({},n),{},{expect:e.data,isResult:!0,isLoading:!1}))}))},children:[(0,a.jsxs)("div",{className:"px-4 py-4 bg-white sm:p-4 md:grid md:grid-cols-3 md:gap-4",children:[(0,a.jsx)("div",{className:"relative mt-4",children:(0,a.jsx)(o,{label:"\uc544\ube60 \ud0a4",name:"heightFather",onChange:m})}),(0,a.jsx)("div",{className:"relative mt-4",children:(0,a.jsx)(o,{label:"\uc5c4\ub9c8 \ud0a4",name:"heightMother",onChange:m})}),(0,a.jsxs)("div",{className:"relative mt-4",children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"\uc544\uc774 \uc131\ubcc4"}),(0,a.jsxs)("div",{className:"mt-1",children:[(0,a.jsx)("input",{type:"radio",name:"gender",id:"gender-MALE",className:"peer hidden",value:"MALE",onChange:m}),(0,a.jsx)("label",{htmlFor:"gender-MALE",className:"inline-flex justify-center py-2 px-4 cursor-pointer checked-adjacent:bg-indigo-600 text-sm font-medium text-white transition-colors duration-150 rounded-l-lg bg-gray-300 focus:shadow-outline hover:bg-indigo-300",children:"\ub0a8\uc790"}),(0,a.jsx)("input",{type:"radio",name:"gender",id:"gender-FEMALE",className:"peer hidden",value:"FEMALE",onChange:m}),(0,a.jsx)("label",{htmlFor:"gender-FEMALE",className:"inline-flex justify-center py-2 px-4 cursor-pointer checked-adjacent:bg-indigo-600 text-sm font-medium text-white transition-colors duration-150 rounded-r-lg bg-gray-300 focus:shadow-outline hover:bg-indigo-300",children:"\uc5ec\uc790"})]})]})]}),(0,a.jsx)("div",{className:"px-4 py-3 bg-gray-50 text-center md:text-right sm:px-6",children:(0,a.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"\ud655\uc778\ud558\uae30"})})]}),n.isLoading&&(0,a.jsx)("div",{className:"block mt-4 overflow-hidden sm:rounded-md mx-auto w-max",children:(0,a.jsxs)("svg",{className:"animate-spin h-5 w-5 text-black",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),!n.isLoading&&n.isResult&&(0,a.jsxs)("div",{className:"block mt-4 overflow-hidden sm:rounded-md mx-auto w-max",children:[n.gender," \uc544\uc774\uc758 \uc608\uc0c1 \ud0a4\ub294 ",g,"cm, ",u,"~",p,"cm \uc785\ub2c8\ub2e4."]})]}),(0,a.jsx)("footer",{className:"block text-sm font-base text-gray-700 pt-6 text-center",children:"\xa9kiki"})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2540)}])}},function(e){e.O(0,[33,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);