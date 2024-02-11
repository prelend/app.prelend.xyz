"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3908],{81902:function(e,t,n){var r;n.d(t,{R:function(){return r}}),function(e){e.supplyCap="supplyCap",e.borrowCap="borrowCap"}(r||(r={}))},25049:function(e,t,n){n.d(t,{Y:function(){return d}});var r=n(59499),a=n(4730),s=n(49501),o=n(81902),i=n(58527),u=n(85893),c=["capType"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t=e.capType,n=(0,a.Z)(e,c),r=t===o.R.supplyCap?(0,u.jsx)(s.cC,{id:"This is the total amount that you are able to supply to in this reserve. You are able to supply your wallet balance up until the supply cap is reached."}):(0,u.jsx)(s.cC,{id:"This is the total amount available for you to borrow. You can borrow based on your collateral and until the borrow cap is reached."});return(0,u.jsx)(i.G,p(p({},n),{},{children:r}))}},53601:function(e,t,n){n.d(t,{l:function(){return _},W:function(){return k}});var r=n(59499),a=n(4730),s=n(49501),o=n(33740),i=n(62097),u=n(30120),c=n(29630),l=n(90149),p=n(81011),d=n(80562),m=n(55343),f=n(46541),x=n(31538),h=n(61702),y=n(75084),b=n(67294),v=n(57333),g=n(8656),w=n(25049),j=n(41024),A=n(72667),O=n(85893),Z=["onChange"];function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=b.forwardRef((function(e,t){var n=e.onChange,r=(0,a.Z)(e,Z);return(0,O.jsx)(v.Z,C(C({},r),{},{getInputRef:t,onValueChange:function(t){t.value!==e.value&&n({target:{name:e.name,value:t.value||""}})},thousandSeparator:!0,isNumericString:!0,allowNegative:!1}))})),k=function(e){var t=e.value,n=e.usdValue,r=e.symbol,a=e.onChange,b=e.disabled,v=e.disableInput,Z=e.onSelect,S=e.assets,k=e.capType,T=e.maxValue,P=e.isMaxSelected,D=e.inputTitle,E=e.balanceText,B=e.loading,I=void 0!==B&&B,N=e.event,U=e.selectOptionHeader,R=e.selectOption,F=e.sx,V=void 0===F?{}:F,M=(0,i.Z)(),Y=(0,g.Yh)((function(e){return e.trackEvent})),G=1===S.length?S[0]:S&&S.find((function(e){return e.symbol===r}));return(0,O.jsxs)(u.Z,C(C({},V),{},{children:[(0,O.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",mb:1},children:[(0,O.jsx)(c.Z,{color:"text.secondary",children:D||(0,O.jsx)(s.cC,{id:"Amount"})}),k&&(0,O.jsx)(w.Y,{capType:k})]}),(0,O.jsxs)(u.Z,{sx:function(e){return{p:"8px 12px",border:"1px solid ".concat(e.palette.divider),borderRadius:"6px",mb:1}},children:[(0,O.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",mb:.5},children:[I?(0,O.jsx)(u.Z,{sx:{flex:1},children:(0,O.jsx)(l.Z,{color:"inherit",size:"16px"})}):(0,O.jsx)(p.ZP,{sx:{flex:1},placeholder:"0.00",disabled:b||v,value:t,autoFocus:!0,onChange:function(e){a&&(Number(e.target.value)>Number(T)?a("-1"):a(e.target.value))},inputProps:{"aria-label":"amount input",style:{fontSize:"21px",lineHeight:"28,01px",padding:0,height:"28px",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}},inputComponent:_}),""!==t&&!v&&(0,O.jsx)(d.Z,{sx:{minWidth:0,p:0,left:8,zIndex:1,color:"text.muted","&:hover":{color:"text.secondary"}},onClick:function(){a&&a("")},disabled:b,children:(0,O.jsx)(o.Z,{height:16})}),Z&&1!==S.length?(0,O.jsx)(m.Z,{children:(0,O.jsxs)(f.Z,{disabled:b,value:G.symbol,onChange:function(e){var t=S.find((function(t){return t.symbol===e.target.value}));Z&&Z(t),a&&a("")},variant:"outlined",className:"AssetInput__select","data-cy":"assetSelect",MenuProps:{sx:{maxHeight:"240px",".MuiPaper-root":{border:"dark"===M.palette.mode?"1px solid #EBEBED1F":"unset",boxShadow:"0px 2px 10px 0px #0000001A"}}},sx:{p:0,"&.AssetInput__select .MuiOutlinedInput-input":{p:0,backgroundColor:"transparent",pr:"24px !important"},"&.AssetInput__select .MuiOutlinedInput-notchedOutline":{display:"none"},"&.AssetInput__select .MuiSelect-icon":{color:"text.primary",right:"0%"}},renderValue:function(e){var t=1===S.length?S[0]:S&&S.find((function(t){return t.symbol===e}));return(0,O.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},"data-cy":"assetsSelectedOption_".concat(t.symbol.toUpperCase()),children:[(0,O.jsx)(A.T1,{symbol:t.iconSymbol||t.symbol,aToken:t.aToken,sx:{mr:2,ml:4}}),(0,O.jsx)(c.Z,{variant:"main16",color:"text.primary",children:e})]})},children:[U||void 0,S.map((function(e){return(0,O.jsx)(x.Z,{value:e.symbol,"data-cy":"assetsSelectOption_".concat(e.symbol.toUpperCase()),children:R?R(e):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(A.T1,{aToken:e.aToken,symbol:e.iconSymbol||e.symbol,sx:{fontSize:"22px",mr:1}}),(0,O.jsx)(h.Z,{sx:{mr:6},children:e.symbol}),e.balance&&(0,O.jsx)(j.B,{value:e.balance,compact:!0})]})},e.symbol)}))]})}):(0,O.jsxs)(u.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,O.jsx)(A.T1,{aToken:G.aToken,symbol:G.iconSymbol||G.symbol,sx:{mr:2,ml:4}}),(0,O.jsx)(c.Z,{variant:"h3",sx:{lineHeight:"28px"},"data-cy":"inputAsset",children:r})]})]}),(0,O.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",height:"16px"},children:[I?(0,O.jsx)(u.Z,{sx:{flex:1}}):(0,O.jsx)(j.B,{value:isNaN(Number(n))?0:Number(n),compact:!0,symbol:"USD",variant:"secondary12",color:"text.muted",symbolsColor:"text.muted",flexGrow:1}),G.balance&&a&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(c.Z,{component:"div",variant:"secondary12",color:"text.secondary",children:[E&&""!==E?E:(0,O.jsx)(s.cC,{id:"Balance"})," ",(0,O.jsx)(j.B,{value:G.balance,compact:!0,variant:"secondary12",color:"text.secondary",symbolsColor:"text.disabled"})]}),!v&&(0,O.jsx)(y.Z,{size:"small",sx:{minWidth:0,ml:"7px",p:0},onClick:function(){N&&Y(N.eventName,C({},N.eventParams)),a("-1")},disabled:b||P,children:(0,O.jsx)(s.cC,{id:"Max"})})]})]})]})]}))}},74119:function(e,t,n){n.d(t,{w_:function(){return h},rG:function(){return y},aE:function(){return g},xS:function(){return w},F8:function(){return A},_n:function(){return Z},wP:function(){return C},Ik:function(){return P},sm:function(){return D}});var r,a=n(50029),s=n(59499),o=n(87794),i=n.n(o),u=n(75331),c=n(80854),l=n(1279),p=n(35977),d=n(3330),m=n(79643),f=function(e){var t=(0,m.Sv)(fetch);return(0,m.A6)({chainId:e,fetcher:t},m.QA,m.TG)},x=(r={},(0,s.Z)(r,u.a_.mainnet,f(u.a_.mainnet)),(0,s.Z)(r,u.a_.polygon,f(u.a_.polygon)),(0,s.Z)(r,u.a_.avalanche,f(u.a_.avalanche)),(0,s.Z)(r,u.a_.fantom,f(u.a_.fantom)),(0,s.Z)(r,u.a_.arbitrum_one,f(u.a_.arbitrum_one)),(0,s.Z)(r,u.a_.optimism,f(u.a_.optimism)),(0,s.Z)(r,u.a_.base,f(u.a_.base)),(0,s.Z)(r,u.a_.bnb,f(u.a_.bnb)),r),h=function(e){var t=x[e];if(t)return t;throw new Error("Chain not supported")},y=function(e){return u.a_.base===e?p.Uc:d.Uc},b={ESTIMATED_LOSS_GREATER_THAN_MAX_IMPACT:"Price impact too high. Please try a different amount or asset pair.","No routes found with enough liquidity":"No routes found with enough liquidity."},v=[{regex:/^Amount \d+ is too small to proceed$/,message:"Amount is too small. Please try larger amount."}];function g(e){var t;return e in b?b[e]:(null===(t=v.find((function(t){return t.regex.test(e)})))||void 0===t?void 0:t.message)||"There was an issue fetching data from Paraswap"}function w(e,t,n,r,a,s){return j.apply(this,arguments)}function j(){return(j=(0,a.Z)(i().mark((function e(t,n,r,a,s,o){var u,c,p,d,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=k(a),e.next=3,u.getTransactionParams(n.underlyingAsset,n.decimals,r.underlyingAsset,r.decimals,s,t,o);case 3:return c=e.sent,p=c.swapCallData,d=c.augustus,m=c.destAmountWithSlippage,e.abrupt("return",{swapCallData:p,augustus:d,inputAmount:(0,l.Fv)(t.srcAmount,n.decimals),outputAmount:(0,l.Fv)(m,r.decimals),inputAmountUSD:t.srcUSD,outputAmountUSD:t.destUSD});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t,n,r,a){return O.apply(this,arguments)}function O(){return(O=(0,a.Z)(i().mark((function e(t,n,r,a,s){var o,u,c,p;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(0,l.hE)(t.amount),s&&"0"!==t.supplyAPY&&(o=o.plus(o.multipliedBy(t.supplyAPY).dividedBy(8640))),u=(0,l.pV)(o,-1*t.decimals),c={partner:"aave"},s&&(c.excludeContractMethods=[m.OZ.simpleSwap,m.OZ.directUniV3Swap,m.OZ.directBalancerV2GivenInSwap,m.OZ.directBalancerV2GivenOutSwap,m.OZ.directCurveV1Swap,m.OZ.directCurveV2Swap]),p=k(r),e.next=8,p.getRate(u.toFixed(0),t.underlyingAsset,t.decimals,n.underlyingAsset,n.decimals,a,c);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t,n,r,a,s){return S.apply(this,arguments)}function S(){return(S=(0,a.Z)(i().mark((function e(t,n,r,a,s,o){var u,c,p,d,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=T(a),e.next=3,u.getTransactionParams(n.underlyingAsset,n.decimals,r.underlyingAsset,r.decimals,s,t,o);case 3:return c=e.sent,p=c.swapCallData,d=c.augustus,m=c.srcAmountWithSlippage,e.abrupt("return",{swapCallData:p,augustus:d,inputAmount:(0,l.Fv)(m,n.decimals),outputAmount:(0,l.Fv)(t.destAmount,r.decimals),inputAmountUSD:t.srcUSD,outputAmountUSD:t.destUSD});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t,n,r,a){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)(i().mark((function e(t,n,r,a,s){var o,u,c,p;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(0,l.hE)(n.amount),s&&(o=o.plus(o.multipliedBy(t.variableBorrowAPY).dividedBy(8640))),u=(0,l.pV)(o,-1*n.decimals),c={partner:"aave"},s&&(c.excludeContractMethods=[m.OZ.simpleBuy,m.OZ.directUniV3Buy,m.OZ.directBalancerV2GivenOutSwap]),p=T(r),e.next=8,p.getRate(u.toFixed(0),t.underlyingAsset,t.decimals,n.underlyingAsset,n.decimals,a,c);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e){var t=h(e),n=y(e),r=function(){var e=(0,a.Z)(i().mark((function e(n,r,a,s,o,u,c){var l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRate({amount:n,srcToken:r,srcDecimals:a,destToken:s,destDecimals:o,userAddress:u,side:m.PC.SELL,options:c});case 2:return l=e.sent,e.abrupt("return",l);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a,s,o,i){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)(i().mark((function e(r,a,s,o,u,c,p){var d,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=new l.rh(c.destAmount).multipliedBy(100-p).dividedBy(100).toFixed(0),e.prev=1,e.next=4,t.buildTx({srcToken:r,srcDecimals:a,srcAmount:c.srcAmount,destToken:s,destDecimals:o,destAmount:d,priceRoute:c,userAddress:u,partnerAddress:n,takeSurplus:!0},{ignoreChecks:!0});case 4:return m=e.sent,e.abrupt("return",{swapCallData:m.data,augustus:m.to,destAmountWithSlippage:d});case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),new Error("Error building transaction parameters");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,r,a,s,o,i){return e.apply(this,arguments)}}();return{getRate:r,getTransactionParams:s}},T=function(e){var t=h(e),n=function(){var e=(0,a.Z)(i().mark((function e(n,r,a,s,o,u,c){var l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRate({amount:n,srcToken:r,srcDecimals:a,destToken:s,destDecimals:o,userAddress:u,side:m.PC.BUY,options:c});case 2:return l=e.sent,e.abrupt("return",l);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a,s,o,i){return e.apply(this,arguments)}}(),r=function(){var n=(0,a.Z)(i().mark((function n(r,a,s,o,u,c,p){var d,m,f;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d=new l.rh(c.srcAmount).multipliedBy(100+p).dividedBy(100).toFixed(0),m=y(e),n.prev=2,n.next=5,t.buildTx({srcToken:r,destToken:s,srcAmount:d,destAmount:c.destAmount,priceRoute:c,userAddress:u,partnerAddress:m,takeSurplus:!0,srcDecimals:a,destDecimals:o},{ignoreChecks:!0});case 5:return f=n.sent,n.abrupt("return",{swapCallData:f.data,augustus:f.to,srcAmountWithSlippage:d});case 9:throw n.prev=9,n.t0=n.catch(2),console.log(n.t0),new Error("Error building transaction parameters");case 13:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e,t,r,a,s,o,i){return n.apply(this,arguments)}}();return{getRate:n,getTransactionParams:r}},P=.1,D=function(e,t,n){var r=Number(e)+Number(e)*(null!==n&&void 0!==n?n:P);return(0,c.gU)(r.toString(),t)}}}]);