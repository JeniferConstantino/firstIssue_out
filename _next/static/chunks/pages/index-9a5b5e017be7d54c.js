(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5075)}])},4636:function(e,s,r){"use strict";r.d(s,{J:function(){return w}});var t=r(5893),n=r(9417),l=r(7814),i=r(7294),a=r(8533),o=r(7484),c=r.n(o),u=r(4110),d=r.n(u),x=r(4288);let p=e=>{let{numIssues:s}=e;return(0,t.jsxs)("div",{className:"flex flex-row items-center justify-end mt-1 w-10",children:[(0,t.jsx)("span",{className:"mr-2 text-sm leading-snug",children:s}),(0,t.jsx)(l.G,{icon:x.Mzg})]})},m=e=>{let{issue:s}=e;return(0,t.jsxs)("li",{className:"flex flex-row items-start justify-start py-1",children:[(0,t.jsxs)("span",{className:"text-slate text-right w-30 px-2 leading-snug",children:["#",s.number]}),(0,t.jsxs)("div",{className:"flex items-start flex-row flex-auto",children:[(0,t.jsx)("a",{className:"leading-snug font-semibold hover:text-juniper text-vanilla-300 block flex-auto",href:s.url,rel:"noopener noreferrer",target:"_blank",title:"Open issue on GitHub",children:s.title}),s.comments_count>0&&(0,t.jsx)(p,{numIssues:s.comments_count})]})]},s.url)},f=e=>{let{issues:s}=e;return(0,t.jsx)("ol",{className:"px-5 py-3 text-base leading-loose border-t border-ink-200",children:s.map(e=>(0,t.jsx)(m,{issue:e},e.id))})},j=e=>{let{repositoryDescription:s}=e;return(0,t.jsx)("div",{className:"flex-row flex text-sm py-1 overflow-auto text-neutral-content",children:s})},h=e=>{let{isIssueOpen:s,numberOfIssues:r}=e;return(0,t.jsxs)("span",{className:"hidden md:inline text-sm border px-3 py-1 ml-2 rounded-full font-semibold ".concat(s?"text-ink-400 bg-juniper border-transparent":"text-vanilla-200"),children:[r,r>=10?"+":""," issue",r>1?"s":""]})},N=e=>{let{isIssueOpen:s,repositoryName:r,repositoryOwner:n,repositoryUrl:l}=e;return(0,t.jsxs)("a",{className:"text-xl font-bold group-hover:text-juniper ".concat(s?"text-juniper":""),href:l,rel:"noopener noreferrer",target:"_blank",title:"Open ".concat(n,"/").concat(r," on GitHub"),children:[n," / ",r]})},b=e=>{let{isIssueOpen:s,repositoryHasNewIssues:r,repositoryName:n,repositoryNumIssues:l,repositoryOwner:i,repositoryUrl:a}=e;return(0,t.jsxs)("div",{className:"flex flex-row",children:[(0,t.jsx)(N,{isIssueOpen:s,repositoryName:n,repositoryOwner:i,repositoryUrl:a}),(0,t.jsx)("div",{className:"flex flex-1 justify-end items-center",children:(0,t.jsx)("div",{className:"w-2 h-2 rounded-full ".concat(r?"bg-juniper":"")})}),(0,t.jsx)(h,{isIssueOpen:s,numberOfIssues:l})]})},y=e=>{let{isIssueOpen:s,lastModified:r,repositoryLang:n,repositoryStars:l}=e;return(0,t.jsxs)("div",{className:"flex-row flex text-sm py-1 font-mono ".concat(s?"text-honey":"text-vanilla-200"),children:[(0,t.jsxs)("div",{className:"mr-4",children:[(0,t.jsx)("span",{className:"text-green-600",children:"lang: "}),n]}),(0,t.jsxs)("div",{className:"mr-4",children:[(0,t.jsx)("span",{className:"text-blue-600",children:"stars: "}),l]}),(0,t.jsxs)("div",{className:"mr-4",children:[(0,t.jsx)("span",{className:"text-red-600",children:"last activity: "}),(0,t.jsx)("span",{children:r})]})]})},g=e=>{let{repository:s}=e,[r,n]=(0,i.useState)(!1);c().extend(d());let l=(e=>{let[s,r]=(0,i.useState)("");return(0,i.useEffect)(()=>r(c()(e).fromNow()),[e]),s})(s.last_modified);return(0,t.jsxs)("div",{id:"repo-".concat(s.id),className:"select-none border w-full rounded-md mb-4 cursor-pointer hover:bg-ink-300 group ".concat(r?"border-juniper hover:bg-ink-400":"border-ink-200"),onClick:()=>n(!r),children:[(0,t.jsxs)("div",{className:"px-5 py-3",children:[(0,t.jsx)(b,{isIssueOpen:r,repositoryHasNewIssues:s.has_new_issues,repositoryName:s.name,repositoryNumIssues:s.issues.length,repositoryOwner:s.owner,repositoryUrl:s.url}),(0,t.jsx)(j,{repositoryDescription:s.description}),(0,t.jsx)(y,{isIssueOpen:r,lastModified:l,repositoryLang:s.language.display,repositoryStars:s.stars_display})]}),r&&(0,t.jsx)(f,{issues:s.issues})]})},v=()=>(0,t.jsx)("div",{className:"p-4 w-full",children:(0,t.jsx)("div",{className:"flex items-center justify-center",children:(0,t.jsx)(l.G,{icon:n.IJ7,className:"fa-spin"})})}),w=e=>{let{repositories:s}=e,[r,n]=(0,i.useState)(15);return(0,t.jsx)("main",{children:(0,t.jsx)("div",{className:"p-4 w-full",children:(0,t.jsx)(a.Z,{dataLength:r,next:()=>n(r+15),hasMore:r<s.length,loader:(0,t.jsx)(v,{}),children:s.slice(0,r).map(e=>(0,t.jsx)(g,{repository:e},e.id))})})})}},5075:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return o}});var t=r(5893),n=r(9008),l=r.n(n),i=r(4636),a=r(6379);function o(){let{repositories:e}=(0,a.useAppContext)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l(),{children:(0,t.jsx)("title",{children:"First Issue | Issues for your next open-source contribution"})}),(0,t.jsx)(i.J,{repositories:e})]})}}},function(e){e.O(0,[976,130,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
//# sourceMappingURL=index-9a5b5e017be7d54c.js.map