(this.webpackJsonpfunds=this.webpackJsonpfunds||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"static/media/notfound.300f4a6f.png"},38:function(e,a,t){e.exports=t.p+"static/media/loader.baeaf0c7.gif"},44:function(e,a,t){e.exports=t(59)},50:function(e,a,t){},51:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(19),c=t.n(s),i=(t(49),t(50),t(51),t(14)),l=t(15),m=t(18),o=t(17),u=t(5),h=t(16),d=t(67),g=t(61),E=t(23),v=t.n(E),p=function(e){console.log(e);var a="";return e.serie.show.summary&&(a=e.serie.show.summary.substring(0,100)+"..."),r.a.createElement(d.a,{className:"h-100 ",style:{width:"15rem"}},e.serie.show.image&&r.a.createElement(h.b,{to:"/series/".concat(e.serie.show.id)},r.a.createElement(d.a.Img,{variant:"top",src:e.serie.show.image.original})),!e.serie.show.image&&r.a.createElement(d.a.Img,{variant:"top",src:v.a,alt:e.serie.show.name}),r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Title,null,r.a.createElement(h.b,{to:"/series/".concat(e.serie.show.id)},e.serie.show.name)),r.a.createElement(d.a.Text,{as:"div"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})),r.a.createElement(g.a,{href:"/series/".concat(e.serie.show.id),variant:"primary"},"Show More "),e.serie.show.rating.average&&r.a.createElement("div",{className:"rating"},"\u2605 ",e.serie.show.rating.average,"/10")))},f=t(62),w=t(37),b=function(e){return console.log(e),r.a.createElement(f.a,null,e.list.map((function(e){return r.a.createElement(w.a,{className:"col-lg-3 col-md-6 mb-3",key:e.show.id},r.a.createElement(p,{serie:e})," ")})))},N=t(38),y=t.n(N),S=function(e){return r.a.createElement("div",null,r.a.createElement("img",{alt:"loader icon",width:"200",src:y.a}))},F=t(63),_=t(64),j=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={series:[],seriesName:"",isFetching:!1},e.SearchSeries=function(a){e.setState({seriesName:a.target.value,isFetching:!0}),fetch("http://api.tvmaze.com/search/shows?q=".concat(a.target.value)).then((function(e){return e.json()})).then((function(a){return e.setState({series:a,isFetching:!1})}))},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,a=e.series,t=e.seriesName,n=e.isFetching;return r.a.createElement(F.a,{className:"add_top_100"},r.a.createElement(f.a,{className:"add_top_30"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(f.a,{className:"add_top_30"},r.a.createElement("h1",{className:"w-100"},"Series Search Engine"),r.a.createElement("div",{className:"w-100 center"},r.a.createElement(_.a,null,r.a.createElement(_.a.Group,{controlId:"search"},r.a.createElement(_.a.Control,{type:"search",value:t,onChange:this.SearchSeries})))),!n&&0===a.length&&""===t.trim()&&r.a.createElement("p",{className:"center"},"Please enter series name"),!n&&0===a.length&&""!==t.trim()&&r.a.createElement("p",{className:"center"},"No Tv series found"),n&&r.a.createElement(S,null),!n&&r.a.createElement(b,{list:this.state.series})))))}}]),t}(n.Component),k=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={show:null,isFetching:!0},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isFetching:!0}),fetch("http://api.tvmaze.com/shows/".concat(this.props.match.params.id,"?embed=episodes")).then((function(e){return e.json()})).then((function(a){return e.setState({show:a,isFetching:!1})}))}},{key:"render",value:function(){var e=this.state.show;return console.log(e),r.a.createElement(F.a,null,r.a.createElement(f.a,{className:"add_top_30"},this.state.isFetching&&r.a.createElement(S,null),!this.state.isFetching&&r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"my-4"},e.image&&r.a.createElement("img",{className:"img-fluid",src:e.image.original,alt:e.name}),!e.image&&r.a.createElement("img",{className:"img-fluid",src:v.a,alt:e.name}))),!this.state.isFetching&&r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"card mt-4"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},e.name),r.a.createElement("div",{className:"card-text"},r.a.createElement("h4",null,"Summury"),e.summary&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.summary}})),!this.state.isFetching&&e.genres&&r.a.createElement("div",null,"Genres :  ",e.genres.map((function(e){return r.a.createElement("span",null," ",e," ")}))),!this.state.isFetching&&e.rating.average&&r.a.createElement("div",null,"Rating : ",r.a.createElement("span",{className:"text-warning"},"\u2605 ")," ",e.rating.average,"/10"),!this.state.isFetching&&e.officialSite&&r.a.createElement("div",null,"Official Site : ",r.a.createElement("a",{target:"_blank",href:e.officialSite},e.officialSite)),!this.state.isFetching&&e.premiered&&r.a.createElement("div",null,"premiered : ",e.premiered),!this.state.isFetching&&e._embedded.episodes&&r.a.createElement("div",null,"Episodes : ",e._embedded.episodes.length),!this.state.isFetching&&e.language&&r.a.createElement("div",null,"Language : ",e.language),!this.state.isFetching&&e.status&&r.a.createElement("div",null,"Status : ",e.status))))))}}]),t}(n.Component),O=function(e){return r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:j}),r.a.createElement(u.a,{exact:!0,path:"/series/:id",component:k}))},x=t(65),C=t(66),I=function(e){return r.a.createElement(x.a,{bg:"dark",expand:"lg",className:"navbar-dark"},r.a.createElement(F.a,null,r.a.createElement(x.a.Brand,{href:"/"},"Series Search Engine"),r.a.createElement(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(x.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(C.a,{className:"ml-auto"},r.a.createElement(C.a.Link,{href:"/"},"Home")))))},T=(t(58),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null),r.a.createElement(O,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h.a,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.1b37a2a5.chunk.js.map