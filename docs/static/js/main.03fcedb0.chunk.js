(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),a=s(8),i=s.n(a),o=(s(14),s(15),s(6)),c=s(7),p=s(9),l=s(0),u=function(e){var t=e.types.map((function(e,t){return Object(l.jsx)("li",{className:"card__inner--list card__type--".concat(e),children:e},t)}));return Object(l.jsxs)("article",{className:"card__inner",id:e.id,onClick:function(t){e.handlePokemon(e.id)},children:[Object(l.jsx)("img",{className:"card__inner--image",src:e.url,alt:"Imagen de "+e.name}),Object(l.jsx)("h3",{className:"card__inner--title",children:e.name}),Object(l.jsx)("ul",{className:"card__inner--list",children:t})]})},m=s(4),d=s.n(m),h=function(e){var t=e.pokemons.map((function(t){return Object(l.jsx)("li",{className:"card",children:Object(l.jsx)(u,{id:t.id,name:t.name,url:t.url,types:t.types,handlePokemon:e.handlePokemon})},t.id.toString())}));return Object(l.jsx)("ul",{className:"card-container",children:t})};u.propTypes={id:d.a.number,url:d.a.string,name:d.a.string};var j=function(){var e,t,s=Object(n.useState)(p),r=Object(c.a)(s,1)[0],a=Object(n.useState)([]),i=Object(c.a)(a,2),u=i[0],m=i[1],d=function(e){var t=u.findIndex((function(t){return t.id===e}));if(-1===t){var s=r.find((function(t){return t.id===e}));u.push(s),m(Object(o.a)(u))}else u.splice(t,1),m(Object(o.a)(u))};return 0!==u.length?e="This are my favorite Pokemons":(e="",t="hide"),Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{className:"app-header",children:Object(l.jsx)("h1",{className:"app-header__title",children:" Choose your favorite PoKemon"})}),Object(l.jsxs)("main",{children:[Object(l.jsx)("section",{children:Object(l.jsx)(h,{pokemons:r,handlePokemon:d})}),Object(l.jsx)("section",{className:"app-fav",children:Object(l.jsxs)("article",{children:[Object(l.jsx)("h2",{className:"app-fav_title "+t,children:e}),Object(l.jsx)(h,{className:"fav-pokemonList",pokemons:u,handlePokemon:d})]})})]})]})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.03fcedb0.chunk.js.map