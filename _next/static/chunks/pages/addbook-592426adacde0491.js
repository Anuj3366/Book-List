(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27],{9180:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/addbook",function(){return n(6652)}])},1526:function(e,t,n){"use strict";var l=n(5893),r=n(7294),a=n(9107),s=n.n(a);t.Z=function(e){let{message:t,show:n,toggleAlert:a}=e;return(0,r.useEffect)(()=>{n&&setTimeout(()=>{a(!1)},4e3)},[n,a]),(0,l.jsx)(l.Fragment,{children:n&&(0,l.jsx)("div",{className:s().container,children:(0,l.jsxs)("div",{className:"alert alert-success alert-dismissible",role:"alert",children:[(0,l.jsx)("div",{children:t}),(0,l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close",onClick:()=>{a(!1)}})]})})})}},6323:function(e,t,n){"use strict";var l=n(5893),r=n(1053),a=n.n(r);t.Z=function(e){let{id:t,label:n,placeholder:r,type:s,defaultValue:i}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("label",{htmlFor:t,className:a().label,children:n}),(0,l.jsx)("input",{type:s,placeholder:r,id:t,name:t,defaultValue:i})]})}},184:function(e,t,n){"use strict";var l=n(5893);t.Z=function(e){let{type:t,variant:n,onClick:r,children:a}=e;return(0,l.jsx)("span",{style:{padding:"5px"},children:(0,l.jsx)("button",{className:"btn btn-".concat(n),type:t,onClick:r,children:a})})}},6652:function(e,t,n){"use strict";n.r(t);var l=n(5893),r=n(1526),a=n(6323),s=n(184),i=n(7294);t.default=function(){let[e,t]=(0,i.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{message:"Book added successfully",show:e,toggleAlert:e=>{t(e)}}),(0,l.jsxs)("form",{onSubmit:e=>{e.preventDefault();let n={name:e.currentTarget.name.value,author:e.currentTarget.author.value,title:e.currentTarget.title.value};fetch("http://localhost:3001/books",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>{e.ok&&t(!0)},e=>{})},children:[(0,l.jsx)(a.Z,{id:"name",placeholder:"Enter Book Name",label:"Book Name",type:"text"}),(0,l.jsx)(a.Z,{id:"author",placeholder:"Enter Author Name",label:"Author Name",type:"text"}),(0,l.jsx)(a.Z,{id:"title",placeholder:"Enter Book Title",label:"Book Title",type:"text"}),(0,l.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,l.jsx)(s.Z,{type:"submit",variant:"primary",children:"Submit"})})]})]})}},9107:function(e){e.exports={container:"style_container__FkiOR"}},1053:function(e){e.exports={label:"style_label__QepNZ"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9180)}),_N_E=e.O()}]);