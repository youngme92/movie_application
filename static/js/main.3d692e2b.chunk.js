(this.webpackJsonpmovie_application=this.webpackJsonpmovie_application||[]).push([[0],{33:function(e,a,t){e.exports=t(64)},56:function(e,a,t){},57:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(23),o=t.n(s),c=t(28),i=t(6);var m=function(){return r.a.createElement("span",null,"About")},l=t(10),u=t.n(l),v=t(24),p=t(25),d=t(26),g=t(32),E=t(31),_=t(27),f=t.n(_);t(56);var y=function(e){e.id;var a=e.url,t=e.title,n=e.year,s=e.summary,o=e.poster,c=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:o,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie__year"},n),r.a.createElement("a",{className:"movie__url",href:a},a),r.a.createElement("ul",{className:"movie__genres"},c.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},s.slice(0,80),"...")))},h=(t(57),function(e){Object(g.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(u.a.mark((function a(){var t,n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.get("https://yts.mx/api/v2/list_movies.json");case 2:t=a.sent,n=t.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log("movies update!"),this.getMovies()}},{key:"componentDidUpdate",value:function(){console.log(this.state.movies)}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return console.log(e),r.a.createElement(y,{key:e.id,id:e.id,url:e.url,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));var N=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{path:"/",exact:!0,component:h}),r.a.createElement(i.a,{path:"/about",exact:!0,component:m}))};t(63);o.a.render(r.a.createElement(N,null),document.getElementById("potato"))}},[[33,1,2]]]);
//# sourceMappingURL=main.3d692e2b.chunk.js.map