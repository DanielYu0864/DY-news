(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(16),i=a.n(s),l=(a(71),a(14)),o=a(28),d=a(60);!function(e){e.NEWS_LIST_REQUEST="NEWS_LIST_REQUEST",e.NEWS_LIST_REQUEST_SUCCESS="NEWS_LIST_REQUEST_SUCCESS",e.NEWS_LIST_REQUEST_FAIL="NEWS_LIST_REQUEST_FAIL"}(n||(n={}));var j,u={loading:!1,error:null,data:[]};!function(e){e.WEATHER_REQUEST="WEATHER_REQUEST",e.WEATHER_REQUEST_SUCCESS="WEATHER_REQUEST_SUCCESS",e.WEATHER_REQUEST_FAIL="WEATHER_REQUEST_FAIL"}(j||(j={}));var b={loading:!1,error:null,weatherData:{main:{feels_like:0,humidity:0,pressure:0,temp:0,temp_max:0,temp_min:0},name:"",sys:{country:"",sunrise:0,sunset:0},weather:{id:200,main:"",description:"",icon:""},wind:{deg:0,speed:0}}},h=a(61),m=Object(o.combineReducers)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.NEWS_LIST_REQUEST:return{loading:!0,error:null,data:[]};case n.NEWS_LIST_REQUEST_SUCCESS:return{loading:!1,error:null,data:t.payload};case n.NEWS_LIST_REQUEST_FAIL:return{loading:!1,error:t.payload,data:[]};default:return e}},weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.WEATHER_REQUEST:return{loading:!0,error:null,weatherData:[]};case j.WEATHER_REQUEST_SUCCESS:return{loading:!1,error:null,weatherData:t.payload};case j.WEATHER_REQUEST_FAIL:return{loading:!1,error:t.payload,weatherData:[]};default:return e}}}),x=[d.a],p=Object(o.createStore)(m,{},Object(h.composeWithDevTools)(o.applyMiddleware.apply(void 0,x))),f=(a(77),a(78),a(27)),O=a(7),E=a(135),S=a(127),v=a(133),g=a(1),T=function(){return Object(g.jsx)(E.a,{className:"navbar navbar-expand-lg navbar-dark bg-primary p-0",children:Object(g.jsxs)(S.a,{className:"container-fluid",children:[Object(g.jsx)(v.a.Link,{className:"navbar-brand",href:"/",children:"DY."}),Object(g.jsx)("div",{className:"collapse navbar-collapse",id:"navbarColor01",children:Object(g.jsxs)(v.a,{className:"navbar-nav me-auto",children:[Object(g.jsx)(f.b,{to:"/",children:Object(g.jsx)(v.a.Item,{className:"nav-link",children:"US Hot"})}),Object(g.jsx)(f.b,{to:"/twnews",children:Object(g.jsx)(v.a.Item,{className:"nav-link",children:"TW Hot"})})]})})]})})},_=a(131),y=a(132),w=a(136),N=function(e){var t,a=e.article,n=e.language;return Object(g.jsxs)(w.a,{className:"mb-3",children:[Object(g.jsxs)(w.a.Body,{children:[Object(g.jsx)(w.a.Title,{children:a.title}),Object(g.jsx)(w.a.Subtitle,{className:"text-muted",children:a.author})]}),Object(g.jsx)(w.a.Img,{src:a.urlToImage?a.urlToImage:"https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png"}),Object(g.jsx)(w.a.Body,{children:Object(g.jsx)(w.a.Text,{children:a.description})}),Object(g.jsx)(w.a.Body,{children:Object(g.jsxs)(w.a.Link,{href:a.url,className:"card-link",children:[Object(g.jsx)("i",{className:"fas fa-newspaper"})," ","tw"==n?"\u5b8c\u6574\u5831\u5c0e":"News link"]})}),Object(g.jsx)(w.a.Footer,{className:"card-footer text-muted",children:(t=a.publishedAt,new Date(t).toString().split("GMT")[0])})]})},R=a(134),U=a(128),I=function(e){var t=e.articles;return Object(g.jsx)(R.a,{className:"h-100",children:t.map((function(e){return Object(g.jsxs)(R.a.Item,{className:"h-100 overflow-hidden",children:[Object(g.jsx)("a",{href:e.url,children:Object(g.jsx)(U.a,{className:"d-block w-100",style:{minHeight:"340px",maxHeight:"340px",objectFit:"cover"},src:e.urlToImage,alt:e.title})}),Object(g.jsx)(R.a.Caption,{className:"pb-1",children:Object(g.jsx)("p",{style:{fontSize:"0.9rem"},children:e.title})})]},e.title)}))})},W=a(34),L=a(129),C=a(137),Q=a(130),A=a(22),H=a.n(A),F=a(32),k=a(65),D=a.n(k),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"seattle";return function(){var t=Object(F.a)(H.a.mark((function t(a){var n,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:j.WEATHER_REQUEST}),"bd22760ddf102f3ecf65e0de1fc6015a",t.next=5,D.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("bd22760ddf102f3ecf65e0de1fc6015a"));case 5:n=t.sent,c=n.data,a({type:j.WEATHER_REQUEST_SUCCESS,payload:c}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:j.WEATHER_REQUEST_FAIL,payload:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},M=function(e){var t=e.city,a=Object(l.b)(),n=Object(c.useState)(!0),r=Object(W.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(""),d=Object(W.a)(o,2),j=d[0],u=d[1],b=Object(c.useState)("K"),h=Object(W.a)(b,2),m=h[0],x=h[1],p=Object(l.c)((function(e){return e.weather})),f=p.loading,O=p.error,E=p.weatherData,S=function(e,t){return"C"==t?function(e){return Math.round(e-273.15)}(e):"F"==t?function(e){return Math.round(9*(e-273.15)/5+32)}(e):void 0};return Object(c.useEffect)((function(){console.log("re-render"),a(B(t)),i(!1),x("Kaohsiung"==t?"C":"F")}),[]),f||O?Object(g.jsx)("div",{children:"Loading.."}):s?Object(g.jsx)("div",{children:"Loading..."}):Object(g.jsxs)(w.a,{className:"text-white bg-primary h-100",children:[Object(g.jsxs)(L.a,{className:"mb-3",children:[Object(g.jsx)(C.a,{placeholder:null===E||void 0===E?void 0:E.name,"aria-label":"Recipient's username","aria-describedby":"basic-addon2",className:"form-group-lg",onChange:function(e){return function(e){u(e.target.value)}(e)}}),Object(g.jsx)(L.a.Append,{children:Object(g.jsx)(Q.a,{variant:"outline-secondary p-2 d-flex justify-content-center align-items-center",onClick:function(){a(B(j))},children:Object(g.jsx)("i",{className:"city-weather-search-btn fas fa-search-location"})})})]}),Object(g.jsxs)(w.a.Header,{children:[null===E||void 0===E?void 0:E.name," Today's Weather:"]}),Object(g.jsxs)(w.a.Body,{className:"w-100",children:[Object(g.jsx)(w.a.Title,{style:{fontSize:"1.6rem"},className:"text-center",children:null===E||void 0===E?void 0:E.weather[0].main}),Object(g.jsxs)(w.a.Body,{className:"d-flex justify-content-around align-items-center p-0",style:{fontSize:"0.5rem"},children:[Object(g.jsxs)("ul",{className:"mb-0",children:[Object(g.jsxs)(w.a.Text,{style:{fontSize:"2.5rem"},className:"mb-0",children:[S(null===E||void 0===E?void 0:E.main.temp,m),"\xb0",m]}),Object(g.jsxs)(w.a.Text,{className:"mb-0",children:["High: ",Object(g.jsx)("span",{children:S(null===E||void 0===E?void 0:E.main.temp_max,m)}),"\xb0/ Low:"," ",Object(g.jsx)("span",{children:S(null===E||void 0===E?void 0:E.main.temp_min,m)}),"\xb0"]}),Object(g.jsxs)(w.a.Text,{className:"mb-0",children:[Object(g.jsx)("i",{className:"water-drip fas fa-tint"})," Humidity:"," ",Object(g.jsx)("span",{children:null===E||void 0===E?void 0:E.main.humidity}),"%"]}),Object(g.jsxs)(w.a.Text,{className:"mb-0",children:[Object(g.jsx)("i",{className:"fas fa-wind"})," Wind:"," ",Object(g.jsx)("span",{children:null===E||void 0===E?void 0:E.wind.speed}),"m/s"]})]}),Object(g.jsx)(w.a.Img,{as:U.a,className:"w-50",src:"http://openweathermap.org/img/wn/".concat(null===E||void 0===E?void 0:E.weather[0].icon,".png"),fluid:!0,alt:null===E||void 0===E?void 0:E.weather[0].description})]})]})]})},z=a(66),J=a.n(z),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"us";return function(){var t=Object(F.a)(H.a.mark((function t(a){var c,r,s;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:n.NEWS_LIST_REQUEST}),"971e7e6b33d541b1b71a865308f94f99",c=new J.a("971e7e6b33d541b1b71a865308f94f99"),t.next=6,c.getTopHeadlines({country:e,category:"business",pageSize:40,page:1});case 6:r=t.sent,s=r.articles,a({type:n.NEWS_LIST_REQUEST_SUCCESS,payload:s}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:n.NEWS_LIST_REQUEST_FAIL,payload:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},P=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.news})),a=t.loading,n=t.error,r=t.data;Object(c.useEffect)((function(){e(K())}),[]);var s=r;return Object(g.jsxs)(S.a,{className:"main-container",children:[Object(g.jsxs)(_.a,{className:"mb-5 align-items-center",children:[Object(g.jsx)(y.a,{xs:12,sm:12,md:4,children:Object(g.jsx)(M,{city:"Seattle"})}),Object(g.jsx)(y.a,{xs:12,sm:12,md:8,children:!a&&!n&&Object(g.jsx)(I,{articles:s.filter((function(e,t){return t<3}))})})]}),Object(g.jsx)(_.a,{children:!a&&!n&&s.map((function(e,t){if(t>2&&e.description)return Object(g.jsx)(y.a,{className:"h-100",xs:12,md:6,lg:4,children:Object(g.jsx)(N,{article:e},t)},t)}))})]})},Y=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.news})),a=t.loading,n=t.error,r=t.data;Object(c.useEffect)((function(){e(K("tw"))}),[]);var s=r;return Object(g.jsxs)(S.a,{className:"main-container",children:[Object(g.jsxs)(_.a,{className:"mb-5 align-items-center",children:[Object(g.jsx)(y.a,{xs:12,sm:12,md:4,children:Object(g.jsx)(M,{city:"Kaohsiung"})}),Object(g.jsx)(y.a,{xs:12,sm:12,md:8,children:!a&&!n&&Object(g.jsx)(I,{articles:s.filter((function(e,t){return t<3}))})})]}),Object(g.jsx)(_.a,{children:!a&&!n&&s.map((function(e,t){if(t>2&&e.description)return Object(g.jsx)(y.a,{className:"h-100",xs:12,md:6,lg:4,children:Object(g.jsx)(N,{article:e,language:"tw"},t)},t)}))})]})},q=function(){return Object(g.jsx)("footer",{children:Object(g.jsx)(S.a,{children:Object(g.jsx)(_.a,{children:Object(g.jsxs)(y.a,{className:"text-center py-3",children:["Copyright \xa9"," ",Object(g.jsx)("a",{href:"https://daniel-adam-yu.netlify.app/",children:"Daniel Yu"})," | 2021"]})})})})};var G=function(){return Object(g.jsxs)(f.a,{children:[Object(g.jsx)(T,{}),Object(g.jsxs)("main",{children:[Object(g.jsx)(O.a,{path:"/twnews",component:Y,exact:!0}),Object(g.jsx)(O.a,{path:"/",component:P,exact:!0})]}),Object(g.jsx)(q,{})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,138)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(g.jsx)(l.a,{store:p,children:Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(G,{})})}),document.getElementById("root")),V()},71:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){}},[[125,1,2]]]);
//# sourceMappingURL=main.dcddc40e.chunk.js.map