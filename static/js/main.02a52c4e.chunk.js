(this.webpackJsonpmovie_application=this.webpackJsonpmovie_application||[]).push([[0],{33:function(e,t,a){e.exports=a(67)},38:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),s=a.n(o),c=a(7),i=a(6);a(38);var l=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/about"},"About"))},m=a(17),u=a.n(m),p=a(31),v=a(10),d=a(11),f=a(13),h=a(12),E=a(32),g=a.n(E);a(62);var y=function(e){var t=e.id,a=e.url,n=e.title,o=e.year,s=e.summary,i=e.poster,l=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(c.b,{to:{pathname:"/movie/".concat(t),state:{id:t,url:a,title:n,year:o,summary:s,poster:i,genres:l}}},r.a.createElement("img",{src:i,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},o),r.a.createElement("ul",{className:"movie__genres"},l.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},s.slice(0,80),"..."))))},_=(a(63),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(p.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts.mx/api/v2/list_movies.json");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){console.log("first render after!"),this.getMovies()}},{key:"componentDidUpdate",value:function(){console.log(this.state.movies)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return console.log(e),r.a.createElement(y,{key:e.id,id:e.id,url:e.url,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(64);var b=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),r.a.createElement("span",null,"\u2212 George Orwell, 1984"))},N=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){console.log(this.props);var e=this.props.location;return e.state?r.a.createElement("h1",null,e.state.title):null}}]),a}(r.a.Component);a(65);var k=function(){return r.a.createElement(c.a,null,r.a.createElement(l,null),r.a.createElement(i.a,{path:"/",exact:!0,component:_}),r.a.createElement(i.a,{path:"/about",exact:!0,component:b}),r.a.createElement(i.a,{path:"/movie/:id",component:N}))};a(66);s.a.render(r.a.createElement(k,null),document.getElementById("potato"))}},[[33,1,2]]]);
//# sourceMappingURL=main.02a52c4e.chunk.js.map