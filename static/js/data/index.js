function import$(t,e){var n={}.hasOwnProperty;for(var r in e)n.call(e,r)&&(t[r]=e[r]);return t}var x$;x$=angular.module("ogr"),x$.controller("data",["$scope","$http"].concat(function(t,e){var n;return n={radar:plotdb.chart.get("Radar Chart - OGR Edition"),column:plotdb.chart.get("Column Chart"),gradar:plotdb.chart.get("grouped radar chart"),line:plotdb.chart.get("Line Chart - OGR edition")},t.loading=!0,t.score={data:reportScore,init:function(){var t,e,n,r,a=this;for(t=0,n=(e=this.data).length;n>t;++t)r=e[t],r["您的評分"]=0;return this.getMine().then(function(){return a.getMean()}).then(function(){return a.render()})},render:function(){return n.line.data(this.data,!0,{value:["報告分數","社群平均","您的評分"],order:["id"]})},update:function(t,e){function n(t){return t.id===r}var r,a,o,u=[];for(r in t)a=t[r],o=this.data.filter(n)[0],"total"!==r&&o&&u.push(o[e]=a/(null!=t.total?t.total||1:1));return u},getMine:function(){var t=this;return e({url:"/d/score/",method:"GET"}).then(function(e){var n;return t.values=e.data,function(){var t=[];for(n in this.values)t.push(n);return t}.call(t).length?(t.update(t.values,"您的評分"),t.done=!0):void 0})["catch"](function(){})},getMean:function(){var t=this;return e({url:"/d/score/mean",method:"GET"}).then(function(e){return t.mean=e.data,t.update(t.mean,"社群平均")})["catch"](function(t){return console.log(t)})},mean:null,set:function(t,e){return this.values[t]=this.values[t]===e?0:e},values:{},send:function(){var n=this;return t.loading=!0,e({url:"/d/score",method:"POST",data:{payload:this.values}})["finally"](function(){return t.loading=!1}).then(function(){return n.update(n.values,"您的評分"),n.getMean()}).then(function(){return n.render()})["catch"](function(){return alert("您已經填過囉！")})}},t.clsmap={"政策基礎":"context","資料集":"dataset","影響力":"impact"},d3.csv("/assets/data/detail.csv",function(e){var r,a,o,u,i,c,s,l,d,f,h;e=d3.nest().key(function(t){return t["資料集類別"]}).rollup(function(t){var e,n,r,a,o,u,i,c,s,l;for(e=function(){var e=[];for(n in t[0])e.push(n);return e}().filter(function(t){return/^\d+\./.exec(t)}),r={},a=0,o=e.length;o>a;++a)for(u=e[a],i=u.replace(/^\d+\.\s*/,""),r[i]=0,c=0,s=t.length;s>c;++c)l=t[c],r[i]=r[i]+ +l[u];for(a=0,o=e.length;o>a;++a)u=e[a],i=u.replace(/^\d+\.\s*/,""),r[i]=Math.round(100*r[i]/t.length);return r}).entries(e),e.map(function(t){return t.img=t.key.split(" ")[0],t.name=t.key.replace(/^[0-9. ]+/g,"")}),a=[];for(o in e[0].values)a.push(o);for(r=a,a=[],i=0,c=r.length;c>i;++i){for(s=r[i],l={name:s},d=0,f=e.length;f>d;++d)h=e[d],l[h.key]={value:h.values[s],rank:Math.floor(h.values[s]/33.33)};a.push(l)}return u=a,t.$apply(function(){return t.table=u,t.detail=e}),d3.csv("/assets/data/score.csv",function(e){function r(){var t,e=[];for(s in t=c)l=t[s],e.push(l);return e}function a(t,e){return t+e.sum}var o,u,i,c,s,l,d,f,h,m,g,p,v,x,k,y,S;setTimeout(function(){return document.querySelector("#visualization").setAttribute("class","ld ld-over-full-inverse")},1e3),o={danger:"#ff5135",success:"#00f2c1",primary:"#00b4ed",warning:"#ffdc6c",info:"#e285ff"},u=d3.nest().key(function(t){return t.Category}).key(function(t){return t["Sub-category"]}).rollup(function(t){var e,n;return e=t.reduce(function(t,e){return t+ +e["Weighted Score"]},0),n=t.reduce(function(t,e){return t+ +e.Weight.replace("%","")},0),{values:t,sum:e,sum2:n,score:.01*Math.round(1e4*e/n)}}).map(e);for(i in u){c=u[i],c.sum=r().reduce(a,0);for(s in c)l=c[s],l.subscore=100*l.sum/(c.sum||1)}for(d=d3.nest().key(function(t){return t.Category}).map(e),f=d3.nest().key(function(t){return t["Sub-category"]}).rollup(function(t){var e;return e=t.reduce(function(t,e){return t+ +e["Weighted Score"]},0),{values:t,sum:e}}).entries(e),h=0,m=f.length;m>h;++h)g=f[h],g["總計"]=Math.round(100*g.values.sum)/100;return t.$apply(function(){return t.subcats=f}),p={gridShow:!1,xAxisShow:!0,yAxisShow:!1,xAxisTickDirection:"vertical",xAxisHandleOverlap:"none",xAxisTickSizeInner:0,xAxisTickSizeOuter:0,fontSoze:10,xAxisStroke:"#f92",fill:"#f92",labelShow:!1},v={gridStroke:"#ddd",gridBackground:"none",gridDashArray:"1 0",gridStrokeWidth:.5,margin:30,nodeFill:"#fff",stroke:o.danger,nodeSize:10,legendShow:!0,palette:{colors:[{hex:"#00f2c1",keyword:"政策基礎"},{hex:"#ffdc6c",keyword:"資料集"},{hex:"#e285ff",keyword:"影響力"},{hex:"#e354f0",keyword:"其它"}]},aAxisShow:!0,rAxisShow:!1},x={palette:{colors:[{hex:"#ccc",keyword:"報告分數"},{hex:"#f73d7e",keyword:"您的評分"},{hex:"#00f2c1",keyword:"社群平均"}]},yAxisShowDomain:!1,gridShow:!1,xAxisTickDirection:"vertical",xAxisHandleOverlap:"none",xAxisTickCount:15,sort:null},n.context=n.column.clone(),n.dataset=n.column.clone(),n.impact=n.column.clone(),k=[["context","政策基礎"],["dataset","資料集"],["impact","影響力"]].map(function(t){var e,n;return[t,function(){var r,a=[];for(e in r=u[t[1]])n=r[e],a.push({k:e,v:n});return a}().filter(function(t){return"sum"!==t.k}).map(function(e){return e.v.name=e.k,e.v.cat=t[1],e.v})]}),k.map(function(t){return n[t[0][0]].data(t[1],!1,{value:["score"],order:["name"]})}),n.gradar.data(k.reduce(function(t,e){return t.concat(e[1])},[]),!1,{radius:["score"],name:["name"],category:["cat"]}),n.gradar.config(v),n.context.config((y=import$({},p),y.fill=o.success,y.xAxisStroke=o.success,y)),n.dataset.config((y=import$({},p),y.fill=o.warning,y.xAxisStroke=o.warning,y)),n.impact.config((y=import$({},p),y.fill=o.info,y.xAxisStroke=o.info,y)),n.line.config(import$({},x)),n.gradar.attach("#chart-attr"),n.context.attach("#chart-context"),n.dataset.attach("#chart-dataset"),n.impact.attach("#chart-impact"),n.line.attach("#feedback-line"),S=function(t,e){return document.querySelector(t).innerText=Math.round(e)},S("#sum-context .score",.01*Math.round(100*u["政策基礎"].sum/.35)),S("#sum-dataset .score",.01*Math.round(100*u["資料集"].sum/.35)),S("#sum-impact .score",.01*Math.round(100*u["影響力"].sum/.3)),S("#sum-ttl .score",u["影響力"].sum+u["政策基礎"].sum+u["資料集"].sum),t.$apply(function(){return t.loading=!1}),t.score.init().then(function(){})})})}));