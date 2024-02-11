"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3307],{1252:function(e,t,r){r.d(t,{O:function(){return s}});var n=r(49501),a=r(85893),s=function(){return(0,a.jsx)(n.cC,{id:"Due to internal stETH mechanics required for rebasing support, it is not possible to perform a collateral switch where stETH is the source token."})}},85577:function(e,t,r){r.r(t),r.d(t,{SwapModal:function(){return de}});var n=r(59499),a=r(49501),s=r(67294),o=r(31959),i=r(8195),c=r(94635),l=r(67484),u=r(30120),p=r(81645),d=r(29630),f=r(70794),x=r(25935),h=r(69331),m=r(53601),v=r(57824),g=r(1252),b=r(29946),y=r(30313),j=r(43629),w=r(46930),S=r(77537),A=r(20301),T=r(8656),O=r(94847),k=r(68448),D=r(87385),E=r(34220),C=r(93608),P=r(94671),L=r(99730),I=r(50029),R=r(17674),Z=r(4730),N=r(87794),_=r.n(N),M=r(75331),B=r(80854),F=r(90116),W=r(30194),H=r(19419),U=r(74119),V=r(32113),G=r(39771),q=r(31001),z=r(89291);function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K=r(67489),J=r(85893),X=["amountToSwap","amountToReceive","isWrongNetwork","sx","poolReserve","targetReserve","isMaxSelected","useFlashLoan","loading","symbol","blocked","buildTxFn"];function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ee=function(e){var t,r=e.amountToSwap,o=e.amountToReceive,c=e.isWrongNetwork,l=e.sx,u=e.poolReserve,p=e.targetReserve,d=e.isMaxSelected,f=e.useFlashLoan,x=e.loading,h=e.symbol,m=e.blocked,v=e.buildTxFn,g=(0,Z.Z)(e,X),b=(0,T.Yh)((function(e){return[e.swapCollateral,e.currentMarketData]})),y=(0,R.Z)(b,2),j=y[0],w=y[1],A=function(e){var t=e.handleGetTxns,r=e.handleGetApprovalTxns,n=e.gasLimitRecommendation,a=e.skip,o=e.spender,c=e.protocolAction,l=e.deps,u=void 0===l?[]:l,p=(0,i.vR)(),d=p.approvalTxState,f=p.setApprovalTxState,x=p.mainTxState,h=p.setMainTxState,m=p.setGasLimit,v=p.loadingTxns,g=p.setLoadingTxns,b=p.setTxError,y=(0,S.Z)(),j=y.sendTx,w=y.getTxError,A=y.signTxData,O=(0,H.n)(),k=O.refetchPoolData,D=O.refetchIncentiveData,E=(0,T.Yh)(),C=E.walletApprovalMethodPreference,P=E.generateSignatureRequest,L=E.addTransaction,R=(0,s.useState)(),Z=R[0],N=R[1],B=(0,s.useState)(),Y=B[0],K=B[1],J=(0,s.useState)(),X=J[0],$=J[1],ee=(0,s.useState)(),te=ee[0],re=ee[1],ne=(0,s.useState)({asset:u[0],amount:u[1]}),ae=ne[0],se=ne[1],oe=(0,s.useState)(!1),ie=oe[0],ce=oe[1],le=(0,s.useRef)(!1);(0,s.useEffect)((function(){return le.current=!0,function(){le.current=!1}}),[]);var ue=function(){var e=(0,I.Z)(_().mark((function e(t){var r,n,a,s,o;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.tx,n=t.errorCallback,a=t.successCallback,e.prev=1,e.next=4,r();case 4:return s=e.sent,e.prev=5,e.next=8,s.wait(1);case 8:le.current&&a&&a(s),L(s.hash,{txState:"success",action:c||M.UQ.default}),W.queryClient.invalidateQueries({queryKey:q.B.pool}),k&&k(),D&&D(),e.next=32;break;case 15:return e.prev=15,e.t0=e.catch(5),e.prev=17,e.next=20,w(s.hash);case 20:return o=e.sent,le.current&&n&&n(new Error(o),s.hash),e.abrupt("return");case 25:return e.prev=25,e.t1=e.catch(17),le.current&&n&&n(e.t1,s.hash),e.abrupt("return");case 29:return e.prev=29,L(s.hash,{txState:"failed",action:c||M.UQ.default}),e.finish(29);case 32:return e.abrupt("return");case 35:e.prev=35,e.t2=e.catch(1),n&&n(e.t2);case 38:case"end":return e.stop()}}),e,null,[[1,35],[5,15],[17,25,29,32]])})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=(0,I.Z)(_().mark((function e(t){var r,n,a,s,i,c,l,u,p;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.amount,n=t.underlyingAsset,!(ie&&r&&n)){e.next=38;break}return f(Q(Q({},d),{},{loading:!0})),e.prev=3,a=Math.floor(Date.now()/1e3+3600).toString(),e.next=7,P({token:n,amount:r,deadline:a,spender:o});case 7:return s=e.sent,e.prev=8,e.next=11,A(s);case 11:if(i=e.sent,le.current){e.next=14;break}return e.abrupt("return");case 14:$(i),re(a),f({txHash:z.Z,loading:!1,success:!0}),b(void 0),e.next=27;break;case 20:if(e.prev=20,e.t0=e.catch(8),le.current){e.next=24;break}return e.abrupt("return");case 24:c=(0,G.WG)(e.t0,G.aD.APPROVAL,!1),b(c),f({txHash:void 0,loading:!1});case 27:e.next=36;break;case 29:if(e.prev=29,e.t1=e.catch(3),le.current){e.next=33;break}return e.abrupt("return");case 33:l=(0,G.WG)(e.t1,G.aD.GAS_ESTIMATION,!1),b(l),f({txHash:void 0,loading:!1});case 36:e.next=56;break;case 38:if(!Z){e.next=56;break}return e.prev=39,f(Q(Q({},d),{},{loading:!0})),e.next=43,Z.tx();case 43:return delete(u=e.sent).gasPrice,e.next=47,ue({tx:function(){return j(u)},successCallback:function(e){f({txHash:e.hash,loading:!1,success:!0}),b(void 0)},errorCallback:function(e,t){var r=(0,G.WG)(e,G.aD.APPROVAL,!1);b(r),f({txHash:t,loading:!1})},action:G.aD.APPROVAL});case 47:e.next=56;break;case 49:if(e.prev=49,e.t2=e.catch(39),le.current){e.next=53;break}return e.abrupt("return");case 53:p=(0,G.WG)(e.t2,G.aD.GAS_ESTIMATION,!1),b(p),f({txHash:void 0,loading:!1});case 56:case"end":return e.stop()}}),e,null,[[3,29],[8,20],[39,49]])})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=(0,I.Z)(_().mark((function e(){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(Q(Q({},x),{},{loading:!0})),b(void 0),e.next=4,t(X,te).then(function(){var e=(0,I.Z)(_().mark((function e(t){var r,n,a;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t.find((function(e){return["DLP_ACTION"].includes(e.txType)})))){e.next=15;break}return e.prev=2,e.next=5,r.tx();case 5:return delete(n=e.sent).gasPrice,e.abrupt("return",ue({tx:function(){return j(n)},successCallback:function(e){h({txHash:e.hash,loading:!1,success:!0}),b(void 0)},errorCallback:function(e,t){var r=(0,G.WG)(e,G.aD.MAIN_ACTION);b(r),h({txHash:t,loading:!1})},action:G.aD.MAIN_ACTION}));case 10:e.prev=10,e.t0=e.catch(2),a=(0,G.WG)(e.t0,G.aD.GAS_ESTIMATION,!1),b(a),h(Q(Q({},x),{},{loading:!1}));case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var t=(0,G.WG)(e,G.aD.GAS_ESTIMATION,!1);b(t),h(Q(Q({},x),{},{loading:!1}))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){a?(N(void 0),K(void 0)):(g(!0),r().then(function(){var e=(0,I.Z)(_().mark((function e(t){var r,n;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.find((function(e){return"ERC20_APPROVAL"===e.txType})),n=C===V.n.PERMIT,(u[0]!==ae.asset||Number(u[1])>Number(ae.amount)+Number(ae.amount)*(U.Ik/2))&&(f({success:!1}),b(void 0)),Number(u[1])<Number(ae.amount)&&b(void 0),se({asset:u[0],amount:u[1]}),r&&n?(ce(!0),h({txHash:void 0}),g(!1)):(ce(!1),N(r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).finally((function(){h({txHash:void 0}),m(n),g(!1)})))}),[a].concat((0,F.Z)(u),[C])),{approval:pe,action:de,loadingTxns:v,requiresApproval:!!Z||ie,approvalTxState:d,mainTxState:x,actionTx:Y,approvalTx:Z}}({protocolAction:M.UQ.swapCollateral,handleGetTxns:function(){var e=(0,I.Z)(_().mark((function e(t,n){var a;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return a=e.sent,e.abrupt("return",j({amountToSwap:a.inputAmount,amountToReceive:a.outputAmount,poolReserve:u,targetReserve:p,isWrongNetwork:c,symbol:h,blocked:m,isMaxSelected:d,useFlashLoan:f,swapCallData:a.swapCallData,augustus:a.augustus,signature:t,deadline:n,signedAmount:(0,U.sm)(r,u.decimals)}));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),handleGetApprovalTxns:function(){var e=(0,I.Z)(_().mark((function e(){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j({amountToSwap:r,amountToReceive:o,poolReserve:u,targetReserve:p,isWrongNetwork:c,symbol:h,blocked:m,isMaxSelected:d,useFlashLoan:!1,swapCallData:"0x",augustus:B.hP}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),gasLimitRecommendation:B.eB[M.UQ.swapCollateral].limit,skip:x||!r||0===parseFloat(r),spender:null!==(t=w.addresses.SWAP_COLLATERAL_ADAPTER)&&void 0!==t?t:"",deps:[p.symbol,r]}),O=A.approval,k=A.action,D=A.approvalTxState,E=A.mainTxState,C=A.loadingTxns,P=A.requiresApproval;return(0,J.jsx)(K.B,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({mainTxState:E,approvalTxState:D,isWrongNetwork:c,preparingTransactions:C,handleAction:k,requiresAmount:!0,amount:r,handleApproval:function(){return O({amount:(0,U.sm)(r,u.decimals),underlyingAsset:u.aTokenAddress})},requiresApproval:P,actionText:(0,J.jsx)(a.cC,{id:"Switch"}),actionInProgressText:(0,J.jsx)(a.cC,{id:"Switching"}),sx:l,fetchingData:x,errorParams:{loading:!1,disabled:m,content:(0,J.jsx)(a.cC,{id:"Switch"}),handleClick:k},tryPermit:!0},g))},te=r(1279),re=r(76384),ne=r(91655),ae=r(41024),se=r(92391),oe=r(72667),ie=function(e){var t=e.showHealthFactor,r=e.healthFactor,n=e.healthFactorAfterSwap,s=e.swapSource,o=e.swapTarget,i=e.toAmount,c=e.fromAmount,l=e.loading,d=(0,te.hE)(s.underlyingBalance).minus((0,te.hE)(c)),f=(0,te.hE)(o.underlyingBalance).plus((0,te.hE)(i)),x=(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(ne.Z,{variant:"rectangular",height:20,width:100,sx:{borderRadius:"4px"}}),(0,J.jsx)(ne.Z,{variant:"rectangular",height:15,width:80,sx:{borderRadius:"4px",marginTop:"4px"}})]});return(0,J.jsxs)(J.Fragment,{children:[n&&(0,J.jsx)(v.jz,{healthFactor:r,futureHealthFactor:n,visibleHfChange:t,loading:l}),(0,J.jsx)(v.oD,{description:(0,J.jsx)(a.cC,{id:"Supply apy"}),value:s.reserve.supplyAPY,futureValue:o.reserve.supplyAPY,percent:!0,loading:l}),(0,J.jsx)(se.X,{caption:(0,J.jsx)(a.cC,{id:"Collateralization"}),captionVariant:"description",mb:4,children:(0,J.jsx)(u.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"flex-end"},children:l?(0,J.jsx)(ne.Z,{variant:"rectangular",height:20,width:100,sx:{borderRadius:"4px"}}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(v.JV,{collateralType:s.collateralType}),(0,J.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,J.jsx)(p.Z,{color:"primary",sx:{fontSize:"14px",mx:1},children:(0,J.jsx)(re.Z,{})}),(0,J.jsx)(v.JV,{collateralType:o.collateralType})]})]})})}),(0,J.jsx)(v.aE,{incentives:s.reserve.aIncentivesData,symbol:s.reserve.symbol,futureIncentives:o.reserve.aIncentivesData,futureSymbol:o.reserve.symbol,loading:l}),(0,J.jsx)(v.oD,{description:(0,J.jsx)(a.cC,{id:"Liquidation threshold"}),value:s.reserve.formattedReserveLiquidationThreshold,futureValue:o.reserve.formattedReserveLiquidationThreshold,percent:!0,visibleDecimals:0,loading:l}),(0,J.jsx)(se.X,{caption:(0,J.jsx)(a.cC,{id:"Supply balance after switch"}),captionVariant:"description",mb:4,align:"flex-start",children:(0,J.jsxs)(u.Z,{sx:{textAlign:"right"},children:[(0,J.jsx)(u.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center"},children:l?x:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,J.jsx)(oe.T1,{symbol:s.reserve.iconSymbol,sx:{mr:2,ml:4,fontSize:"16px"}}),(0,J.jsx)(ae.B,{value:d.toString(),variant:"secondary14",compact:!0})]}),(0,J.jsx)(ae.B,{value:d.multipliedBy((0,te.hE)(s.reserve.priceInUSD)).toString(),variant:"helperText",compact:!0,symbol:"USD",symbolsColor:"text.secondary",color:"text.secondary"})]})}),(0,J.jsx)(u.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center"},mt:2,children:l?x:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,J.jsx)(oe.T1,{symbol:o.reserve.iconSymbol,sx:{mr:2,ml:4,fontSize:"16px"}}),(0,J.jsx)(ae.B,{value:f.toString(),variant:"secondary14",compact:!0})]}),(0,J.jsx)(ae.B,{value:f.multipliedBy((0,te.hE)(o.reserve.priceInUSD)).toString(),variant:"helperText",compact:!0,symbol:"USD",symbolsColor:"text.secondary",color:"text.secondary"})]})})]})})]})};function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue=function(e){var t=e.poolReserve,r=e.userReserve,n=e.isWrongNetwork,o=(0,E.HT)(),c=o.reserves,I=o.user,R=o.marketReferencePriceInUsd,Z=(0,w.f)(),N=Z.currentChainId,_=Z.currentMarket,M=Z.currentNetworkConfig,B=(0,S.Z)().currentAccount,F=(0,i.vR)(),W=F.gasLimit,H=F.mainTxState,U=F.txError,V=(0,T.Yh)((function(e){return e.displayGho})),G=c.filter((function(e){return!V({symbol:e.symbol,currentMarket:_})})).filter((function(e){return e.underlyingAsset!==t.underlyingAsset&&!e.isFrozen})).map((function(e){return{address:e.underlyingAsset,symbol:e.symbol,iconSymbol:e.iconSymbol}})),q=(0,s.useState)(""),z=q[0],Y=q[1],Q=(0,s.useRef)(""),K=(0,s.useState)(G[0]),X=K[0],$=K[1],te=(0,s.useState)("0.1"),re=te[0],ne=te[1],ae=I.userReservesData.find((function(e){return e.underlyingAsset===X.address})),se=f.Z.min(r.underlyingBalance,new f.Z(t.availableLiquidity).multipliedBy(.99)).toString(10),oe="-1"===z,ce=oe?se:z,ue=(0,y.k)({chainId:M.underlyingChainId||N,userAddress:B,swapIn:le(le({},t),{},{amount:Q.current}),swapOut:le(le({},ae.reserve),{},{amount:"0"}),max:oe,skip:H.loading||!1,maxSlippage:Number(re)}),pe=ue.inputAmountUSD,de=ue.inputAmount,fe=ue.outputAmount,xe=ue.outputAmountUSD,he=ue.error,me=ue.loading,ve=ue.buildTxFn,ge=me&&"0"===xe,be=(0,k._S)({fromAmount:ce,fromAssetData:t,fromAssetUserData:r,user:I,toAmountAfterSlippage:fe,toAssetData:ae.reserve}),ye=be.hfAfterSwap,je=be.hfEffectOfFromAmount,we=(0,P.gK)(I.healthFactor,je),Se=(0,O.x)(ae.reserve.supplyCap,ae.reserve.totalLiquidity),Ae=(0,D.N4)(Se,ae.reserve.formattedPriceInMarketReferenceCurrency,R),Te=(0,P.Vc)(I),Oe=void 0;Te.length>0&&!Te.includes(t.symbol)?Oe=P.NI.ZERO_LTV_WITHDRAW_BLOCKED:!Se.eq("-1")&&Ae.lt(xe)?Oe=P.NI.SUPPLY_CAP_REACHED:we&&!t.flashLoanEnabled&&(Oe=P.NI.FLASH_LOAN_NOT_AVAILABLE);var ke=function(){switch(Oe){case P.NI.SUPPLY_CAP_REACHED:return(0,J.jsx)(a.cC,{id:"Supply cap on target reserve reached. Try lowering the amount."});case P.NI.ZERO_LTV_WITHDRAW_BLOCKED:return(0,J.jsx)(a.cC,{id:"Assets with zero LTV ({assetsBlockingWithdraw}) must be withdrawn or disabled as collateral to perform this action",values:{assetsBlockingWithdraw:Te}});case P.NI.FLASH_LOAN_NOT_AVAILABLE:return(0,J.jsx)(a.cC,{id:"Due to health factor impact, a flashloan is required to perform this transaction, but Aave Governance has disabled flashloan availability for this asset. Try lowering the amount or supplying additional collateral."});default:return null}};if(H.success)return(0,J.jsx)(C.R,{action:(0,J.jsx)(a.cC,{id:"Switched"}),amount:Q.current,symbol:t.symbol});var De=I&&"0"!==I.totalBorrowsMarketReferenceCurrency&&"0"!==t.reserveLiquidationThreshold,Ee=(0,j.wD)(ae.reserve).debtCeilingReached,Ce=(0,P.yI)(r,I.totalCollateralUSD,I.isInIsolationMode,Ee),Pe=(0,j.wD)(ae.reserve).debtCeilingReached,Le=(0,P.yI)(ae,I.totalCollateralUSD,I.isInIsolationMode,Pe);if(oe&&Ce===b.z.ISOLATED_ENABLED&&"0"===ae.underlyingBalance&&(Le=ae.reserve.isIsolated?b.z.ISOLATED_ENABLED:b.z.ENABLED),oe&&Ce===b.z.ENABLED&&"0"===ae.underlyingBalance&&ae.reserve.isIsolated){var Ie=I.userReservesData.filter((function(e){return e.usageAsCollateralEnabledOnUser}));1===Ie.length&&Ie[0].underlyingAsset===r.underlyingAsset&&(Le=b.z.ISOLATED_ENABLED)}return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(m.W,{value:ce,onChange:function(e){var t="-1"===e;Q.current=t?se:e,Y(e)},usdValue:pe,symbol:t.iconSymbol,assets:[{balance:se,address:t.underlyingAsset,symbol:t.symbol,iconSymbol:t.iconSymbol}],maxValue:se,inputTitle:(0,J.jsx)(a.cC,{id:"Supplied asset amount"}),balanceText:(0,J.jsx)(a.cC,{id:"Supply balance"}),isMaxSelected:oe}),(0,J.jsxs)(u.Z,{sx:{padding:"18px",pt:"14px",display:"flex",justifyContent:"space-between"},children:[(0,J.jsx)(p.Z,{sx:{fontSize:"18px !important"},children:(0,J.jsx)(l.Z,{})}),(0,J.jsx)(x.B,{loading:ge,outputAmountUSD:xe,inputAmountUSD:pe})]}),(0,J.jsx)(m.W,{value:fe,onSelect:$,usdValue:xe,symbol:X.symbol,assets:G,inputTitle:(0,J.jsx)(a.cC,{id:"Switch to"}),balanceText:(0,J.jsx)(a.cC,{id:"Supply balance"}),disableInput:!0,loading:ge}),he&&!ge&&(0,J.jsx)(d.Z,{variant:"helperText",color:"error.main",children:he}),!he&&void 0!==Oe&&(0,J.jsx)(d.Z,{variant:"helperText",color:"error.main",children:(0,J.jsx)(ke,{})}),"stETH"===ae.reserve.symbol&&(0,J.jsx)(h.v,{severity:"warning",sx:{mt:2,mb:0},children:(0,J.jsx)(g.O,{})}),(0,J.jsx)(v.m6,{gasLimit:W,slippageSelector:(0,J.jsx)(A.n,{selectedSlippage:re,setSlippage:ne}),children:(0,J.jsx)(ie,{showHealthFactor:De,healthFactor:null===I||void 0===I?void 0:I.healthFactor,healthFactorAfterSwap:ye.toString(10),swapSource:le(le({},r),{},{collateralType:Ce}),swapTarget:le(le({},ae),{},{collateralType:Le}),toAmount:fe,fromAmount:""===ce?"0":ce,loading:ge})}),U&&(0,J.jsx)(L.f,{txError:U}),(0,J.jsx)(ee,{isMaxSelected:oe,poolReserve:t,amountToSwap:de,amountToReceive:fe,isWrongNetwork:n,targetReserve:ae.reserve,symbol:t.symbol,blocked:void 0!==Oe||""!==he||"stETH"===ae.reserve.symbol,useFlashLoan:we,loading:me,buildTxFn:ve})]})};function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var de=function(){var e=(0,i.vR)(),t=e.type,r=e.close,s=e.args;return(0,J.jsx)(o.P,{open:t===i.w8.Swap,setOpen:r,children:(0,J.jsx)(c.A,{title:(0,J.jsx)(a.cC,{id:"Switch"}),underlyingAsset:s.underlyingAsset,children:function(e){return(0,J.jsx)(ue,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}})})}},99730:function(e,t,r){r.d(t,{f:function(){return l}});var n=r(49501),a=r(30120),s=r(29630),o=r(69331),i=r(67916),c=r(85893),l=function(e){var t=e.txError;return(0,c.jsxs)(a.Z,{children:[(0,c.jsx)(i.Q,{txError:t}),"MetaMask Message Signature: User denied message signature."!==t.rawError.message&&"MetaMask Tx Signature: User denied transaction signature."!==t.rawError.message&&(0,c.jsx)(a.Z,{sx:{pt:4},children:(0,c.jsx)(o.v,{severity:"info",children:(0,c.jsxs)(s.Z,{variant:"description",children:[" ",(0,c.jsx)(n.cC,{id:"Tip: Try increasing slippage or reduce input amount"})]})})})]})}},94847:function(e,t,r){r.d(t,{x:function(){return i},I:function(){return c}});var n=r(80854),a=r(1279),s=r(70794),o=r(87385);function i(e,t){return"0"===e?new s.Z(-1):new s.Z(e).minus(t)}function c(e,t,r,c){if(t.isFrozen)return"0";var l=(0,a.hE)(e);return l.gt(0)&&r.toLowerCase()===n.hP.toLowerCase()&&(l=l.minus(c)),"0"!==t.supplyCap&&(l=s.Z.min(l,i(t.supplyCap,t.totalLiquidity))),l.lte(0)?"0":(0,o.$w)(l.toString(10),t.decimals)}},76384:function(e,t,r){var n=r(67294);const a=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"}))}));t.Z=a},10822:function(e,t,r){var n=r(67294);const a=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"}))}));t.Z=a},67484:function(e,t,r){var n=r(67294);const a=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"}))}));t.Z=a}}]);