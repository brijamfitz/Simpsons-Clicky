(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,n){},17:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),c=n(2),r=n.n(c),l=(n(15),n(3)),o=n(4),m=n(7),s=n(5),g=n(8),d={navbar:{backgroundColor:"gold",color:"blue",height:"70px",fontSize:"24px"},container:{float:"left",width:"25%"},card:{textAlign:"center",paddingTop:"20px"}},u=function(e){return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar fixed-top",style:d.navbar},i.a.createElement("ul",{className:"nav navbar-nav navbar-left"},i.a.createElement("li",null,"Simpsons Clicky!")),i.a.createElement("ul",{className:"nav navbar-nav navbar-right"},i.a.createElement("li",null,"Score: ",e.score," | High Score: ",e.highScore))))},p={header:{height:"320px",textAlign:"center",backgroundColor:"blue",color:"gold",paddingTop:"70px"},img:{width:"250px",paddingTop:"20px"}},h=function(){return i.a.createElement("div",{style:p.header},i.a.createElement("img",{alt:"simpsons logo",src:"./images/simpsons-logo.png",style:p.img}),i.a.createElement("h3",null,"Click on a character to earn points \u2013 but don't click anybody more than once!"))},k=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},f={container:{float:"left",width:"25%",textAlign:"center",paddingTop:"20px"},card:{textAlign:"center",paddingTop:"20px"},navbar:{backgroundColor:"gold",color:"blue",height:"70px",fontSize:"24px"}},v=function(e){return i.a.createElement("div",{className:"card",style:f.container,onClick:function(){return e.onClick(e.name)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{src:e.image,alt:e.name}),i.a.createElement("p",null,e.name)))},b=function(){return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar bottom navbar-light bg-light"},i.a.createElement("h5",null,"Simpsons Clicky \u2014 Powered by React")))},y=n(6),E=[],w=0,S=0,x=function(e){function a(){var e,n;Object(l.a)(this,a);for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).state={characters:y,clicked:E,score:w,highScore:S},n.shuffle=function(e){var a=0,t=0,i=null;for(a=e.length-1;a>0;a-=1)t=Math.floor(Math.random()*(a+1)),i=e[a],e[a]=e[t],e[t]=i;n.setState({characters:e})},n.onClick=function(e){console.log(e);var a=n.state.score,t=n.state.clicked,i=0,c=n.state.highScore;n.state.clicked.forEach(function(a){a===e&&i++}),i>0?(a=0,t=[],alert("Sorry, you already clicked on them! Try again!")):(a+=1,t.push(e),a>c&&(c=a),16===a&&(alert("Congratulations! You are a Simpsons wizard!"),a=0,t=[])),n.setState({clicked:t}),n.setState({score:a}),n.setState({highScore:c}),n.shuffle(n.state.characters)},n}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(k,null,i.a.createElement(u,{score:this.state.score,highScore:this.state.highScore}),i.a.createElement(h,null),this.state.characters.map(function(a,n){return i.a.createElement(v,{key:n,id:a.id,name:a.name,image:a.image,onClick:e.onClick})}),i.a.createElement(b,null))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports=[{id:1,name:"Barney",image:"./images/barney.jpeg",clicked:!1},{id:2,name:"Bart",image:"./images/bart.png",clicked:!1},{id:3,name:"Comic Book Guy",image:"./images/comic-book-guy.jpeg",clicked:!1},{id:4,name:"Hans Moleman",image:"./images/hans-moleman.jpeg",clicked:!1},{id:5,name:"Homer",image:"./images/homer.png",clicked:!1},{id:6,name:"Krusty",image:"./images/krusty.png",clicked:!1},{id:7,name:"Lisa",image:"./images/lisa.png",clicked:!1},{id:8,name:"Marge",image:"./images/marge.png",clicked:!1},{id:9,name:"Milhouse",image:"./images/milhouse.png",clicked:!1},{id:10,name:"Willie",image:"./images/willie.jpeg",clicked:!1},{id:11,name:"Maggie",image:"./images/maggie.jpeg",clicked:!1},{id:12,name:"Ralph",image:"./images/ralph.jpeg",clicked:!1},{id:13,name:"Apu",image:"./images/apu.png",clicked:!1},{id:14,name:"Grandpa",image:"./images/grandpa.png",clicked:!1},{id:15,name:"Moe",image:"./images/moe.jpeg",clicked:!1},{id:16,name:"Principal Skinner",image:"./images/skinner.jpeg",clicked:!1}]},9:function(e,a,n){e.exports=n(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.d017875e.chunk.js.map