(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{71830:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return y}});var n=t(59499),o=t(50029),a=t(87794),i=t.n(a),c=t(79072),s=t(11163),l=t(67294),u=t(15446),p=t(50811),d=t(92908),f=t(36644),h=t(11065),x=t(3483),v=t(34841),j=t(85893);function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g={proposal:{id:"",creator:"",accessLevel:"",ipfsHash:"",proposalMetadata:{shortDescription:"",aip:1,title:"",author:"",discussions:"",ipfsHash:"",description:""},state:1,votingPortal:{id:"",votingMachineChainId:"",votingMachine:"",enabled:!0},votingConfig:{id:"1",cooldownBeforeVotingStart:"86400",votingDuration:"259200",yesThreshold:"320000",yesNoDifferential:"80000",minPropositionPower:"80000"},payloads:[{id:"0",chainId:"1",accessLevel:"1",payloadsController:""}],transactions:{id:"0",created:{id:"",blockNumber:"",timestamp:""},active:null,queued:null,failed:null,executed:null,canceled:null},votingDuration:null,snapshotBlockHash:"0x0",votes:{forVotes:"0",againstVotes:"0"},constants:{id:"8",precisionDivider:"1000000000000000000",cooldownPeriod:"0",expirationTime:"2592000",cancellationFee:"50000000000000000"}},votingMachineData:{proposalData:{id:"0",sentToGovernance:!1,startTime:0,endTime:0,votingClosedAndSentTimestamp:0,forVotes:"0",againstVotes:"0",creationBlockNumber:0,votingClosedAndSentBlockNumber:0},votedInfo:{support:!1,votingPower:"0"},strategy:"",dataWarehouse:"",votingAssets:[""],hasRequiredRoots:!1,voteConfig:{votingDuration:"0",l1ProposalBlockHash:""},state:0}};function y(){var e=(0,s.useRouter)().query.ipfsHash,r=(0,l.useState)(!0),t=r[0],n=r[1],a=(0,l.useState)(g),d=a[0],b=a[1],y=(0,l.useState)(!1),w=y[0],Z=y[1];function O(){return(O=(0,o.Z)(i().mark((function r(){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n(!0),r.next=4,(0,x.md)(e,v.CA);case 4:t=r.sent,b((function(e){return m(m({},e),{},{proposal:m(m({},e.proposal),{},{proposalMetadata:t})})})),n(!1),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),console.error(r.t0),Z(!0);case 13:return r.prev=13,n(!1),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[0,9,13,16]])})))).apply(this,arguments)}return(0,l.useEffect)((function(){e&&function(){O.apply(this,arguments)}()}),[e]),(0,j.jsxs)(j.Fragment,{children:[!t&&(0,j.jsx)(p.h,{imageUrl:"https://app.aave.com/aaveMetaLogo-min.jpg",title:d.proposal.proposalMetadata.title,description:d.proposal.proposalMetadata.shortDescription}),(0,j.jsx)(h.S,{}),!t&&(0,j.jsx)(u.O,{children:(0,j.jsx)(c.ZP,{container:!0,spacing:4,children:(0,j.jsx)(c.ZP,{item:!0,xs:12,md:8,children:(0,j.jsx)(f.R,{proposal:d,error:w,loading:t})})})})]})}y.getLayout=function(e){return(0,j.jsx)(d.Z,{children:e})}},15446:function(e,r,t){"use strict";t.d(r,{O:function(){return i}});var n=t(30120),o=t(64288),a=t(85893),i=function(e){var r=e.children;return(0,a.jsx)(n.Z,{sx:{display:"flex",flexDirection:"column",flex:1,mt:{xs:"-32px",lg:"-46px",xl:"-44px",xxl:"-48px"}},children:(0,a.jsx)(o.Z,{children:r})})}},44304:function(e,r,t){"use strict";t.d(r,{M:function(){return a}});var n=t(81645),o=t(85893),a=function(e){var r=e.color;return(0,o.jsx)(n.Z,{xmlns:"http://www.w3.org/2000/svg","aria-label":"Lens",children:(0,o.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 96 61",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M65.519 16.253c3.9-3.24 8.253-4.472 12.426-4.16 4.453.332 8.573 2.41 11.65 5.427 3.078 3.018 5.192 7.054 5.53 11.41.341 4.396-1.137 9-5.035 13.041-.357.372-.722.74-1.094 1.102-17.681 17.338-41.17 17.384-41.41 17.384-.12 0-23.683 0-41.41-17.386l-.005-.004a71.134 71.134 0 0 1-1.081-1.09l-.003-.003c-3.9-4.037-5.38-8.64-5.04-13.036.338-4.356 2.45-8.393 5.526-11.412 3.076-3.018 7.196-5.097 11.65-5.431 4.173-.313 8.526.918 12.43 4.156.42-4.994 2.606-8.881 5.78-11.554 3.385-2.85 7.796-4.24 12.152-4.24 4.357 0 8.768 1.39 12.153 4.24 3.175 2.673 5.361 6.56 5.78 11.556ZM48.395 58.7l-.001-.022h.002l-.001.022Zm-1.619 0v-.022.022Zm14.093-24.075c-.483 0-.65.685-.342 1.048a3.65 3.65 0 0 1 .875 2.372c0 2.048-1.693 3.707-3.78 3.707-2.088 0-3.78-1.66-3.78-3.707 0-.11-.146-.164-.212-.075a6.264 6.264 0 0 0-1.164 2.651c-.093.533-.535.975-1.09.975h-.307c-.724 0-1.322-.576-1.215-1.274.733-4.784 5.54-8.253 11.016-8.253 5.475 0 10.282 3.47 11.015 8.253.107.698-.49 1.274-1.215 1.274-.725 0-1.299-.58-1.456-1.268-.717-3.135-4.04-5.703-8.344-5.703Zm-33.568 3.42c0-.144-.19-.222-.28-.107a6.322 6.322 0 0 0-1.256 2.713c-.108.575-.585 1.053-1.186 1.053h-.225c-.724 0-1.322-.576-1.215-1.274.733-4.786 5.54-8.253 11.015-8.253 5.476 0 10.283 3.467 11.016 8.253.107.698-.49 1.274-1.215 1.274-.725 0-1.298-.58-1.456-1.268-.716-3.137-4.038-5.703-8.345-5.703-.39 0-.534.539-.272.822.609.658.98 1.532.98 2.49 0 2.048-1.693 3.707-3.78 3.707-2.088 0-3.78-1.66-3.78-3.707Zm24.49 8.94c.512-.5 1.303-.742 1.939-.404.636.339.877 1.125.419 1.671-1.493 1.78-3.909 2.909-6.574 2.909-2.663 0-5.085-1.117-6.58-2.91-.456-.548-.212-1.333.425-1.67.638-.336 1.428-.09 1.94.41.984.963 2.479 1.614 4.215 1.614 1.732 0 3.228-.657 4.216-1.62Z",fill:r})})})}},88622:function(e,r,t){"use strict";t.d(r,{Ul:function(){return f},KS:function(){return h},Sk:function(){return v}});var n=t(59499),o=t(7734),a=t(81719),i=t(20525),c=t(41796),s=t(91655),l=t(85893);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=(0,a.ZP)("span")((function(e){var r,t=e.theme,a=e.state,s=(r={},(0,n.Z)(r,o.rn.Null,t.palette.secondary.main),(0,n.Z)(r,o.rn.Created,t.palette.primary.light),(0,n.Z)(r,o.rn.Active,t.palette.success.main),(0,n.Z)(r,o.rn.Queued,t.palette.primary.light),(0,n.Z)(r,o.rn.Executed,t.palette.success.main),(0,n.Z)(r,o.rn.Cancelled,t.palette.error.main),(0,n.Z)(r,o.rn.Expired,t.palette.error.main),(0,n.Z)(r,o.rn.Failed,t.palette.error.main),r)[a]||"#000";return(0,i.Z)(p(p({},t.typography.subheader2),{},{color:s,border:"1px solid",borderColor:(0,c.Fq)(s,.5),py:.5,px:2,borderRadius:1,display:"inline-flex",alignItems:"center"}))}));function f(e){var r=e.state;return e.loading?(0,l.jsx)(s.Z,{width:70}):(0,l.jsx)(d,{state:r,children:x(r)})}var h=function(){return Object.keys(o.rn).map((function(e){return o.rn[e]})).filter((function(e){return!isNaN(Number(e))})).map(x).filter((function(e){return"Null"!==e}))},x=function(e){switch(e){case o.rn.Null:return"Null";case o.rn.Created:return"Created";case o.rn.Active:return"Active";case o.rn.Queued:return"Queued";case o.rn.Executed:return"Executed";case o.rn.Cancelled:return"Cancelled";case o.rn.Expired:return"Expired";case o.rn.Failed:return"Failed"}},v=function(e){switch(e){case"Null":return o.rn.Null;case"Created":return o.rn.Created;case"Active":return o.rn.Active;case"Queued":return o.rn.Queued;case"Executed":return o.rn.Executed;case"Cancelled":return o.rn.Cancelled;case"Expired":return o.rn.Expired;case"Failed":return o.rn.Failed}}},36644:function(e,r,t){"use strict";t.d(r,{R:function(){return W}});var n=t(59499),o=t(4730),a=t(49501),i=t(42833),c=t(64232),s=t(81719),l=t(62097),u=t(61225),p=t(70918),d=t(29630),f=t(30120),h=t(91655),x=t(75084),v=t(81645),j=t(86777),b=t(90244),m=t(69417),g=t(7272),y=t(39807),w=t(93978),Z=t(40849),O=t(56713),P=t(44304),k=t(69331),C=t(88622),E=t(8656),D=t(34841),N=t(57609),S=t(85893),I=["node"],A=["node"],_=["node"],M=["node"],L=["node"],R=["node"];function F(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function B(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?F(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var T=(0,s.ZP)("img")({display:"block",margin:"0 auto",maxWidth:"100%"}),H=(0,s.ZP)("a")({color:"inherit"}),W=function(e){var r=e.proposal,t=e.loading,n=e.error,s=(0,E.Yh)((function(e){return e.trackEvent})),F=(0,l.Z)(),W=F.breakpoints,K=F.palette,Q=(0,u.Z)(W.up("lg"));return(0,S.jsxs)(p.Z,{sx:{px:6,pt:4,pb:12},"data-cy":"vote-info-body",children:[(0,S.jsx)(d.Z,{variant:"h3",children:(0,S.jsx)(a.cC,{id:"Proposal overview"})}),n?(0,S.jsx)(f.Z,{sx:{px:{md:18},pt:8},children:(0,S.jsx)(k.v,{severity:"error",children:(0,S.jsx)(a.cC,{id:"An error has occurred fetching the proposal."})})}):(0,S.jsxs)(f.Z,{sx:{px:{md:18},pt:8,wordBreak:"break-word"},children:[r?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(d.Z,{variant:"h2",sx:{mb:6},children:r.proposal.proposalMetadata.title||(0,S.jsx)(h.Z,{})}),(0,S.jsxs)(f.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,S.jsx)(f.Z,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center"},children:(0,S.jsx)(f.Z,{sx:{mr:"24px",mb:{xs:"2px",sm:0}},children:(0,S.jsx)(C.Ul,{state:r.proposal.state,loading:t})})}),(0,S.jsx)(f.Z,{sx:{flexGrow:1}}),(0,S.jsx)(x.Z,{component:"a",sx:{minWidth:Q?"160px":""},target:"_blank",rel:"noopener",onClick:function(){return s(N.vh.EXTERNAL_LINK,{AIP:r.proposal.id,Link:"Raw Ipfs"})},href:"".concat(D.CA,"/").concat(r.proposal.proposalMetadata.ipfsHash),startIcon:(0,S.jsx)(v.Z,{sx:{"& path":{strokeWidth:"1"}},children:(0,S.jsx)(i.Z,{})}),children:Q&&(0,S.jsx)(a.cC,{id:"Raw-Ipfs"})}),(0,S.jsx)(x.Z,{component:"a",sx:{minWidth:Q?"160px":""},target:"_blank",rel:"noopener noreferrer",onClick:function(){return s(N.vh.EXTERNAL_LINK,{AIP:r.proposal.id,Link:"Share on twitter"})},href:"https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(r.proposal.proposalMetadata.title),"&url=").concat(window.location.href),startIcon:(0,S.jsx)(c.Z,{}),children:Q&&(0,S.jsx)(a.cC,{id:"Share on twitter"})}),(0,S.jsx)(x.Z,{sx:{minWidth:Q?"160px":""},component:"a",target:"_blank",rel:"noopener noreferrer",onClick:function(){return s(N.vh.EXTERNAL_LINK,{AIP:r.proposal.id,Link:"Share on lens"})},href:"https://hey.xyz/?url=".concat(window.location.href,"&text=Check out this proposal on aave governance \ud83d\udc7b\ud83d\udc7b - ").concat(r.proposal.proposalMetadata.title,"&hashtags=Aave&preview=true"),startIcon:(0,S.jsx)(P.M,{color:"dark"===K.mode?K.primary.light:K.text.primary}),children:Q&&(0,S.jsx)(a.cC,{id:"Share on Lens"})})]})]}):(0,S.jsx)(d.Z,{variant:"buttonL",children:(0,S.jsx)(h.Z,{})}),r?(0,S.jsx)(Z.D,{remarkPlugins:[O.Z],components:{table:function(e){e.node;var r=(0,o.Z)(e,I);return(0,S.jsx)(j.Z,{component:p.Z,variant:"outlined",children:(0,S.jsx)(b.Z,B(B({},r),{},{sx:{wordBreak:"normal"}}))})},tr:function(e){e.node;var r=(0,o.Z)(e,A);return(0,S.jsx)(m.Z,B({sx:{"&:last-child td, &:last-child th":{border:0}}},r))},td:function(e){var r=e.children,t=e.style;return(0,S.jsx)(g.Z,{style:t,children:r})},th:function(e){var r=e.children,t=e.style;return(0,S.jsx)(g.Z,{style:t,children:r})},tbody:function(e){var r=e.children;return(0,S.jsx)(y.Z,{children:r})},thead:function(e){e.node;var r=(0,o.Z)(e,_);return(0,S.jsx)(w.Z,B({},r))},img:function(e){var r=e.src,t=e.alt;if(!r)return null;var n=/^\.\.\//.test(r)?r.replace("../","https://raw.githubusercontent.com/aave/aip/main/content/"):r;return(0,S.jsx)(T,{src:n,alt:t})},a:function(e){e.node;var r=(0,o.Z)(e,M);return(0,S.jsx)(H,B({},r))},h2:function(e){e.node;var r=(0,o.Z)(e,L);return(0,S.jsx)(d.Z,B({variant:"subheader1",sx:{mt:6},gutterBottom:!0},r))},p:function(e){e.node;var r=(0,o.Z)(e,R);return(0,S.jsx)(d.Z,B({variant:"description"},r))}},children:r.proposal.proposalMetadata.description}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h.Z,{variant:"text",sx:{my:4}}),(0,S.jsx)(h.Z,{variant:"rectangular",height:200,sx:{my:4}}),(0,S.jsx)(h.Z,{variant:"text",sx:{my:4}}),(0,S.jsx)(h.Z,{variant:"rectangular",height:400,sx:{my:4}})]})]})]})}},11065:function(e,r,t){"use strict";t.d(r,{S:function(){return f}});var n=t(49501),o=t(93973),a=t(30120),i=t(75084),c=t(81645),s=(t(67294),t(68861)),l=t(8656),u=t(57609),p=t(74815),d=t(85893),f=function(){var e=(0,l.Yh)((function(e){return e.trackEvent}));return(0,d.jsx)(p.f,{children:(0,d.jsx)(a.Z,{sx:{display:"flex",alignItems:"center",mb:"18px"},children:(0,d.jsx)(i.Z,{component:s.rU,href:s.Z6.governance,variant:"surface",size:"medium",onClick:function(){return e(u.cD.GO_BACK)},color:"primary",startIcon:(0,d.jsx)(c.Z,{fontSize:"small",children:(0,d.jsx)(o.Z,{})}),children:(0,d.jsx)(n.cC,{id:"Go Back"})})})})}},3483:function(e,r,t){"use strict";t.d(r,{md:function(){return b},fC:function(){return g}});var n=t(59499),o=t(50029),a=t(87794),i=t.n(a),c=t(56371),s=t(9675),l=t.n(s),u=t(63144),p=t.n(u),d=t(34841),f=t(48764).Buffer;function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var v={};function j(e,r){return"".concat(r,"/").concat(e)}function b(e,r){return m.apply(this,arguments)}function m(){return(m=(0,o.Z)(i().mark((function e(r,t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(r,t);case 3:return e.abrupt("return",e.sent);case 6:if(e.prev=6,e.t0=e.catch(0),console.groupCollapsed("Fetching proposal metadata from IPFS..."),console.info("failed with",t),t!==d.CA){e.next=15;break}return console.info("retrying with",d.b2),console.error(e.t0),console.groupEnd(),e.abrupt("return",b(r,d.b2));case 15:throw console.info("exiting"),console.error(e.t0),console.groupEnd(),e.t0;case 19:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function g(e,r){return y.apply(this,arguments)}function y(){return(y=(0,o.Z)(i().mark((function e(r,t){var n,o,a,s,u,p,d,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.startsWith("0x")?c.base58.encode(f.from("1220".concat(t.slice(2)),"hex")):t,!v[n]){e.next=3;break}return e.abrupt("return",v[n]);case 3:return e.prev=3,e.next=6,JSON.parse(r);case 6:o=e.sent,a=l()(o.description),s=a.content,u=a.data,v[n]=x(x({},o),{},{ipfsHash:n,description:s},u),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),p=l()(r),d=p.content,h=p.data,v[n]=x(x({},h),{},{ipfsHash:n,description:d});case 15:return e.abrupt("return",v[n]);case 16:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}function w(e,r){return Z.apply(this,arguments)}function Z(){return(Z=(0,o.Z)(i().mark((function e(r,t){var n,o,a,s,u,d,h,b,m,g,y;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.startsWith("0x")?c.base58.encode(f.from("1220".concat(r.slice(2)),"hex")):r,!v[n]){e.next=3;break}return e.abrupt("return",v[n]);case 3:return e.next=5,p()(j(n,t));case 5:if((o=e.sent).ok){e.next=8;break}throw Error("Fetch not working");case 8:return e.next=10,o.clone();case 10:return a=e.sent,e.prev=11,e.next=14,o.json();case 14:s=e.sent,u=l()(s.description),d=u.content,h=u.data,v[n]=x(x({},s),{},{ipfsHash:n,description:d},h),e.next=26;break;case 19:return e.prev=19,e.t0=e.catch(11),e.next=23,a.text();case 23:b=e.sent,m=l()(b),g=m.content,y=m.data,v[n]=x(x({},y),{},{ipfsHash:n,description:g});case 26:return e.abrupt("return",v[n]);case 27:case"end":return e.stop()}}),e,null,[[11,19]])})))).apply(this,arguments)}},72889:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/governance/ipfs-preview",function(){return t(71830)}])},33596:function(){}},function(e){e.O(0,[6146,7529,7406,7715,2284,7808,8795,4815,9774,2888,179],(function(){return r=72889,e(e.s=r);var r}));var r=e.O();_N_E=r}]);