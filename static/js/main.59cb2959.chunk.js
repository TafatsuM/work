(this.webpackJsonpwork=this.webpackJsonpwork||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),c=a.n(r),i=(a(15),a(1)),o=a(2),l=a(5),u=a(4),h=a(3),m=(a(16),a(17),a(18),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).business=e.props.business,e}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"Business"},s.a.createElement("div",{className:"image-container"},s.a.createElement("a",{href:this.business.url},s.a.createElement("img",{src:this.business.imageSrc,alt:this.business.category}))),s.a.createElement("h2",null,this.business.name),s.a.createElement("div",{className:"Business-information"},s.a.createElement("div",{className:"Business-address"},s.a.createElement("p",null,this.business.address),s.a.createElement("p",null,this.business.city),s.a.createElement("p",null,this.business.state," ",this.business.zipCode)),s.a.createElement("div",{className:"Business-reviews"},s.a.createElement("h3",null,this.business.category),s.a.createElement("h3",{className:"rating"},this.business.rating," stars"),s.a.createElement("p",null,this.business.reviewCount," reviews"))))}}]),a}(s.a.Component)),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"BusinessList"},this.props.businesses.map((function(e){return s.a.createElement(m,{business:e,key:e.id})})))}}]),a}(s.a.Component),p=(a(19),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleTermChange=function(e){n.setState({term:e.target.value})},n.state={term:"",location:"",sortBy:"best_match"},n.sortByOptions={"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count",Closer:"distance"},n.handleTermChange=n.handleTermChange.bind(Object(l.a)(n)),n.handleLocationChange=n.handleLocationChange.bind(Object(l.a)(n)),n.handleSearch=n.handleSearch.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"getSortByClass",value:function(e){return this.state.sortBy===e?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearch",value:function(e){this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy),e.preventDefault()}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(this.sortByOptions).map((function(t){var a=e.sortByOptions[t];return s.a.createElement("li",{className:e.getSortByClass(a),key:a,onClick:e.handleSortByChange.bind(e,a)},t)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("div",{className:"SearchBar-sort-options"},s.a.createElement("ul",null,this.renderSortByOptions())),s.a.createElement("div",{className:"SearchBar-fields"},s.a.createElement("input",{onChange:this.handleTermChange,placeholder:"Search Businesses"}),s.a.createElement("input",{onChange:this.handleLocationChange,placeholder:"Where?"})),s.a.createElement("div",{className:"SearchBar-submit"},s.a.createElement("a",{onClick:this.handleSearch,href:"www.#.com"},"Let's Go")))}}]),a}(s.a.Component)),b=a(6),v=a.n(b),f=a(9),y={search:function(e,t,a){return Object(f.a)(v.a.mark((function n(){var s,r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(a),{headers:{Authorization:"Bearer ".concat("h9rHGemjST_nSv59UvwdhtcLyjib708Sen3U7_7NjD2sidP7uSA_i0d2oNW8D4EUuAwHSN20-jP09upaXvw1KDXffUCTQ6tj5ERwq5v-h34rVy4aoHsZsIME3E_rXnYx")}});case 2:return s=n.sent,n.next=5,s.json();case 5:if(r=n.sent,n.prev=6,!r.businesses){n.next=11;break}return n.abrupt("return",r.businesses.map((function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}})));case 11:console.log("hello world");case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(6),console.error("Hello World ".concat(n.t0));case 17:case 18:case"end":return n.stop()}}),n,null,[[6,14]])})))()}},g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={businesses:[]},n.searchYelp=n.searchYelp.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"searchYelp",value:function(e,t,a){var n=this;console.log("Searching Yelp with ".concat(e,", ").concat(t,", ").concat(a)),y.search(e,t,a).then((function(e){n.setState({businesses:e})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Apollo Yelp API Project"),s.a.createElement(p,{searchYelp:this.searchYelp}),s.a.createElement(d,{businesses:this.state.businesses}),s.a.createElement("footer",null,s.a.createElement("span",null,"This project is reproduced from \xa9Codecademy project Ravenous")))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.59cb2959.chunk.js.map