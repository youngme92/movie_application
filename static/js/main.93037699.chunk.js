(this.webpackJsonpmovie_application=this.webpackJsonpmovie_application||[]).push([[0],{19:function(e,a,t){e.exports=t(45)},42:function(e,a,t){},43:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(12),i=t.n(r),o=t(2),c=t.n(o),m=t(13),l=t(14),u=t(15),v=t(18),p=t(17),d=t(16),g=t.n(d);t(42);var _=function(e){e.id;var a=e.url,t=e.title,n=e.year,r=e.summary,i=e.poster,o=e.genres;return s.a.createElement("div",{className:"movie"},s.a.createElement("img",{src:i,alt:t,title:t}),s.a.createElement("div",{className:"movie__data"},s.a.createElement("h3",{className:"movie__title"},t),s.a.createElement("h5",{className:"movie__year"},n),s.a.createElement("a",{className:"movie__url",href:a},a),s.a.createElement("ul",{className:"movie__genres"},o.map((function(e,a){return s.a.createElement("li",{key:a,className:"genres_genre"},e)}))),s.a.createElement("p",{className:"movie__summary"},r.slice(0,80),"...")))},f=(t(43),function(e){Object(v.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(c.a.mark((function a(){var t,n;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.get("https://yts.mx/api/v2/list_movies.json");case 2:t=a.sent,n=t.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("movies update!"),this.getMovies()}},{key:"componentDidUpdate",value:function(){console.log(this.state.movies)}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return s.a.createElement("section",{className:"container"},a?s.a.createElement("div",{className:"loader"},s.a.createElement("span",{className:"loader__text"},"Loading...")):s.a.createElement("div",{className:"movies"},t.map((function(e){return console.log(e),s.a.createElement(_,{key:e.id,id:e.id,url:e.url,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(s.a.Component));t(44);i.a.render(s.a.createElement(f,null),document.getElementById("potato"))}},[[19,1,2]]]);
//# sourceMappingURL=main.93037699.chunk.js.map