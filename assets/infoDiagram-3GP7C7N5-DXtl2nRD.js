import{p as o}from"./gitGraph-YCYPL57B-QPBUOVDP-BGggS8TL.js";import{m as e,J as i,aS as n,k as d,aT as p}from"./mermaid.esm.min-gwMyd_A_.js";import"./chunk-BKDDFIKN-C-O4Os1X.js";import"./app-yDdAZrYy.js";var m={parse:e(async r=>{let a=await o("info",r);i.debug(a)},"parse")},g={version:p},v=e(()=>g.version,"getVersion"),f={getVersion:v},l=e((r,a,s)=>{i.debug(`rendering info diagram
`+r);let t=n(a);d(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${s}`)},"draw"),x={draw:l},k={parser:m,db:f,renderer:x};export{k as diagram};
