(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{5302:function(e,t,l){Promise.resolve().then(l.bind(l,2796))},4880:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var a=l(7437);l(7745),l(9617),l(9252);var s=l(6356),i=l(2265);function r(){let e=()=>!0,[t,l]=(0,i.useState)(!1),r=()=>{window.scrollY>100?l(!0):l(!1)};return(0,i.useEffect)(()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}),[]),(0,a.jsx)("button",{className:"fixed bottom-0 right-0 bg-white rounded-s-full px-4 py-2 mr-6 mb-[21px] z-50 items-center text-xs flex gap-2 scrollToTopButton  ".concat(t?"visible":""),onClick:function(){e()&&window.scrollTo({top:0,behavior:"smooth"})},children:(0,a.jsx)(s.At,{className:"inline-block h-10 w-10"})})}},164:function(e,t,l){"use strict";l.d(t,{Z:function(){return i}});var a=l(7437),s=l(8694);function i(){return(0,a.jsx)("div",{className:"social-icons-module",children:(0,a.jsxs)("ul",{className:"project-module breakword project-module-social_icons social",children:[(0,a.jsx)("li",{children:(0,a.jsx)(s.QZ,{className:"bg-cyanblue",target:"_blank",url:"https://www.linkedin.com/in/srinidhi-a-8a5308bb/"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.QZ,{className:"bg-black",target:"_blank",url:"https://github.com/srinidhi-anand"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.QZ,{className:"bg-black",target:"_blank",url:"https://medium.com/@srinidhi_anand"})})]})})}l(7745),l(3054)},2303:function(e,t,l){"use strict";l.d(t,{Z:function(){return n}});var a=l(7437);l(7745),l(8649),l(3054);var s=l(7138),i=l(6648),r=l(6463);function n(){let e=(0,r.usePathname)();return(0,a.jsxs)("div",{className:"site-header project-title",children:[(0,a.jsxs)("ul",{className:"w-5/6",children:[(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"/",className:"link ".concat("/"===e?"active":""),children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"/about",className:"link ".concat("/about"===e?"active":""),children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"/skills",className:"link ".concat("/skills"===e?"active":""),children:"Skills"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{className:"link ".concat("/services"===e?"active":""),href:"/services",children:"Services"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{className:"link ".concat("/projects"===e?"active":""),href:"/projects",children:"Projects"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{className:"link ".concat("/contact"===e?"active":""),href:"/contact",children:"Contact"})})]}),(0,a.jsx)("div",{className:"align w-96",children:(0,a.jsx)(i.default,{src:"/logo.jpeg",alt:"logo",width:"50",height:"50"})})]})}},5860:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});var a=l(7437);function s(e){let{name:t,description:l="",IsDetails:s=!1,cls:i=""}=e;return(0,a.jsx)("div",{className:"page-container ".concat(s?"padding-50":""),children:(0,a.jsxs)("div",{className:"page page-header",children:[(0,a.jsxs)("h1",{className:"title preserve-whitespace e2e-site-logo-text",children:[" ",t," "]}),(0,a.jsx)("p",{className:i?" description ".concat(i," animate-bounce"):"description",children:l})]})})}l(7745),l(8649),l(3054),l(4496)},2796:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return m}});var a=l(7437);l(7745),l(8649),l(3054);var s=l(2303),i=l(5860),r=l(164),n=l(4880),c=l(2265),o=l(6463);function m(){let e=(0,o.useRouter)(),[t,l]=(0,c.useState)({name:"",email:"",mobile:"",projectDetails:"",message:""}),[m,d]=(0,c.useState)(!1),[u,h]=(0,c.useState)(!1),[x,j]=(0,c.useState)({}),f=()=>{let e={};t.name||(e.name="Name is required."),t.email?/\S+@\S+\.\S+/.test(t.email)||(e.email="Email is invalid."):e.email="Email is required.",t.projectDetails?t.projectDetails.length<2&&(e.projectDetails="projectDetails must be Valid"):e.projectDetails="projectDetails is required.",t.mobile?(t.mobile.length<10||t.mobile.length>10)&&(e.mobile="Mobile Number must be valid."):e.mobile="Mobile Number is required.",j(e),h(0===Object.keys(e).length)},p=e=>{let t=e.target.name,a=e.target.value;l(e=>({...e,[t]:a}))},b=async e=>{if(e.preventDefault(),f(),!0===u){e.target.action;let l=new FormData;Object.entries(t).forEach(e=>{let[t,a]=e;l.append(t,a)}),console.log("form Data framed",l);let a=await fetch("/api/contact",{method:"post",body:l});console.log(a),200===a.status?d(a.status):d(!1)}else alert("Please fill the fields correctly and resolve errors before submitting.")};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{}),(0,a.jsx)(i.Z,{name:"Contact",description:"You can send an inquiry or any work quotation here!"}),m?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"center contact-form texteditor-contact",children:"Submitted. Thanks for Reaching Out! "}),(0,a.jsxs)("div",{className:"center contact-form texteditor-contact",children:[" ",(0,a.jsx)("button",{className:"center contact-form texteditor-contact primary",onClick:()=>{l({name:"",email:"",mobile:"",projectDetails:"",message:""}),j({}),h(!1),d(!1),e.refresh()},children:" Submit Another Request"})]})]}):(0,a.jsx)("div",{className:"center project-module-form project-module module form texteditor-contact w-full",children:(0,a.jsxs)("form",{className:"contact-form",method:"POST",action:"#",onSubmit:b,children:[(0,a.jsxs)("div",{className:"form-input flex flex-col",children:[(0,a.jsx)("label",{htmlFor:"name",className:"required",children:"Name"}),(0,a.jsx)("input",{type:"text",name:"name","data-validate":"required,Generic",placeholder:"Your Name...",required:!0,value:t.name,onChange:p}),x&&x.name&&(0,a.jsx)("p",{className:"error",children:x.name})]}),(0,a.jsxs)("div",{className:"form-input flex flex-col",children:[(0,a.jsx)("label",{htmlFor:"email",className:"required",children:"Email"}),(0,a.jsx)("input",{placeholder:"Your Email...",type:"text",onChange:p,name:"email",value:t.email,required:!0}),x&&x.email&&(0,a.jsx)("p",{className:"error",children:x.email})]}),(0,a.jsxs)("div",{className:"form-input flex flex-col",children:[(0,a.jsx)("label",{htmlFor:"mobile",className:"required",children:"Mobile No."}),(0,a.jsx)("input",{placeholder:"Enter your valid Mobile Number",onChange:p,type:"number",value:t.mobile,name:"mobile",required:!0}),x&&x.mobile&&(0,a.jsx)("p",{className:"error",children:x.mobile})]}),(0,a.jsxs)("div",{className:"form-input flex flex-col",children:[(0,a.jsx)("label",{htmlFor:"projectDetails",className:"required",children:"Project Tech Requirements"}),(0,a.jsx)("textarea",{placeholder:"Provide the tech stack e.g Python, React.js",name:"projectDetails",value:t.projectDetails,onChange:p,required:!0}),x&&x.projectDetails&&(0,a.jsx)("p",{className:"error",children:x.projectDetails})]}),(0,a.jsxs)("div",{className:"form-input flex flex-col",children:[(0,a.jsx)("label",{htmlFor:"message",children:"Message"}),(0,a.jsx)("textarea",{placeholder:"Your Message...",name:"message",onChange:p,value:t.message})]}),(0,a.jsx)("div",{className:"w-35 items-center center justify-start",children:(0,a.jsxs)("button",{className:"px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center send",children:["Send",(0,a.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 8 6",className:"text-cyan-500 ml-2 ",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z",fill:"currentColor"})})]})})]})}),(0,a.jsx)(n.Z,{}),(0,a.jsx)(r.Z,{})]})}l(9817)},8649:function(){},9617:function(){},9817:function(){},3054:function(){},4496:function(){},7745:function(){}},function(e){e.O(0,[627,790,333,132,51,173,757,694,971,23,744],function(){return e(e.s=5302)}),_N_E=e.O()}]);