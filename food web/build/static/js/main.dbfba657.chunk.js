(this.webpackJsonpmini_project=this.webpackJsonpmini_project||[]).push([[0],{120:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t),a.d(t,"firestore",(function(){return D}));var n=a(1),c=a.n(n),l=(a(76),a(36)),r=a(37),i=a(42),s=a(41),m=(a(77),a(29)),o=a(30),d=a(4),E=a(20),h=a.n(E),u=h.a.initializeApp({apiKey:"AIzaSyADl0VGdoA45liNiderICdVjgIxwlSEtLk",authDomain:"myappjan.firebaseapp.com",databaseURL:"https://myappjan.firebaseio.com",projectId:"myappjan",storageBucket:"myappjan.appspot.com",messagingSenderId:"576012620890",appId:"1:576012620890:web:ca4f73772d3ec801013463",measurementId:"G-QWBKMXG31B"}),g=(a(111),a(67)),f=a.n(g);a(120);document.body.style.backgroundImage="url('https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-delicious-noodle-background-material-bowl-of-noodlesfresh-image_82093.jpg')";var p=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).uiConfig={signInFlow:"popup",signInOptions:[h.a.auth.FacebookAuthProvider.PROVIDER_ID,h.a.auth.GoogleAuthProvider.PROVIDER_ID,h.a.auth.GithubAuthProvider.PROVIDER_ID],callback:{signInSuccess:function(){return!1}}},n.login=n.login.bind(Object(o.a)(n)),n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.sigup=n.sigup.bind(Object(o.a)(n)),n.state={email:"",password:"",isSignedIn:!1},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.auth().onAuthStateChanged((function(t){e.setState({isSignedIn:!!t})}))}},{key:"login",value:function(e){e.preventDefault(),u.auth().signInWithEmailAndPassword(this.state.email,this.state.passeword).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"sigup",value:function(e){e.preventDefault(),u.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e;return(c.a.createElement("div",{id:"classicformpage row my-3 d-flex justify-content-center "},c.a.createElement(d.t,null,c.a.createElement(d.n,{className:"d-flex justify-content-center align-items-center gradient "},c.a.createElement(d.j,{className:" align-items-center"},c.a.createElement(d.r,null,c.a.createElement(d.i,{md:"6",xl:"5",className:"mb-4"},c.a.createElement(d.b,{type:"fadeInRight",delay:".3s"},c.a.createElement(d.d,{id:"classic-card"},c.a.createElement(d.e,{className:"white-text "},c.a.createElement("div",{class:"text-center"},c.a.createElement("img",{src:"https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/s960x960/51095734_1180564112147452_1471511896472420352_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_eui2=AeGcYscU0D2jhgjcw8RJJmATiCYbrg_vJOKIJhuuD-8k4ufJGBh_aq5uVbBPKZAmHEeVioJYXb-fw_fHJ69o_9dV&_nc_ohc=ucUfD9erfzMAX-sW2ZD&_nc_ht=scontent.fbkk5-4.fna&_nc_tp=7&oh=db36bcaa38686ff1a60b548052466595&oe=5EBD6C9A",className:"img-thumbnail justify-content-center ",width:"200",height:"90"})),c.a.createElement("h3",{className:"text-center"},c.a.createElement(d.k,{icon:"user"})," Register"),c.a.createElement("hr",{className:"hr-light"}),c.a.createElement(d.m,{className:"white-text",iconClass:"white-text",label:"Your email",roup:!0,type:"email",name:"email",validate:!0,error:"wrong",success:"right",icon:"envelope",value:this.state.email,onChange:this.handleChange}),c.a.createElement(d.m,(e={className:"white-text",iconClass:"white-text",label:"Your password",icon:"lock",type:"password",group:!0},Object(m.a)(e,"type","password"),Object(m.a)(e,"name","password"),Object(m.a)(e,"validate",!0),Object(m.a)(e,"value",this.state.password),Object(m.a)(e,"onChange",this.handleChange),e)),c.a.createElement("div",{className:"text-center mt-4 black-text"},c.a.createElement(d.c,{color:"amber",onClick:this.login},"Login"),c.a.createElement(d.c,{color:"amber",onClick:this.sigup},"Sign Up"),c.a.createElement("hr",{className:"hr-light"}),c.a.createElement(f.a,{uiConfig:this.uiConfig,firebaseAuth:h.a.auth()}))))))))))))}}]),a}(n.Component),b=a(130),_=a(131),v=a(129),k=a(128),w=function(e){return c.a.createElement("div",null,c.a.createElement(b.a,{bg:"dark",variant:"dark"},c.a.createElement(b.a.Brand,{href:"/"},"\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e23\u0e01"),c.a.createElement(_.a,{className:"mr-auto"},c.a.createElement(_.a.Link,{href:"/Fooditem "},"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2d\u0e32\u0e2b\u0e32\u0e23"),c.a.createElement(_.a.Link,{href:"/contact "},"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e09\u0e31\u0e19"),c.a.createElement(_.a.Link,{href:"/Reviews "},"Reviews")),c.a.createElement(v.a,{inline:!0},c.a.createElement(k.a,{variant:"outline-info",onClick:function(){u.auth().signOut()}},"LogOut"))),c.a.createElement("div",null,c.a.createElement(d.d,{className:"my-5 px-5 pb-5 "},c.a.createElement(d.e,null,c.a.createElement("h2",{className:"h1-responsive font-weight-bold text-center my-5"},"Reviews"),c.a.createElement("p",{className:"text-center w-responsive mx-auto mb-5"},"\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e2a\u0e32\u0e21\u0e23\u0e16\u0e23\u0e35\u0e27\u0e34\u0e27\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e08\u0e32\u0e01\u0e17\u0e32\u0e07\u0e23\u0e49\u0e32\u0e19\u0e42\u0e14\u0e22\u0e15\u0e23\u0e07\u0e08\u0e32\u0e01\u0e17\u0e32\u0e07\u0e19\u0e35\u0e49\u0e44\u0e14\u0e49"),c.a.createElement(d.r,null,c.a.createElement(d.i,{lg:"5"},c.a.createElement(d.t,{className:"rounded z-depth-2 mb-lg-0 mb-4",hover:!0,waves:!0},c.a.createElement("img",{className:"img-fluid",src:"https://food.mthai.com/app/uploads/2018/12/noodle014.jpg",alt:""}),c.a.createElement("a",{href:"#!"},c.a.createElement(d.n,{overlay:"white-slight"})))),c.a.createElement(d.i,{lg:"7"},c.a.createElement("a",{href:"#!",className:"green-text"},c.a.createElement("h6",{className:"font-weight-bold mb-3"},c.a.createElement(d.k,{icon:"utensils",className:"pr-2"}),"Food")),c.a.createElement("h3",{className:"font-weight-bold mb-3 p-0"},c.a.createElement("strong",null,"\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e40\u0e2a\u0e49\u0e19\u0e01\u0e25\u0e32\u0e07\u0e19\u0e48\u0e2d\u0e07\u0e44\u0e01\u0e49")),c.a.createElement("p",null,"\u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e01\u0e46\u0e40\u0e25\u0e22\u0e04\u0e48\u0e32 \u0e19\u0e48\u0e2d\u0e07\u0e19\u0e35\u0e49\u0e19\u0e38\u0e48\u0e21\u0e41\u0e1a\u0e1a\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e04\u0e35\u0e49\u0e22\u0e27\u0e40\u0e25\u0e22"),c.a.createElement("p",null,"by",c.a.createElement("a",{href:"#!"},c.a.createElement("strong",null,"Carine Fox")),", 19/08/2018"))),c.a.createElement("hr",null),c.a.createElement(d.r,null,c.a.createElement(d.i,{lg:"5"},c.a.createElement(d.t,{className:"rounded z-depth-2 mb-lg-0 mb-4",hover:!0,waves:!0},c.a.createElement("img",{className:"img-fluid",src:"https://f.ptcdn.info/629/009/000/1378987568-DPP0174JPG-o.jpg",alt:""}),c.a.createElement("a",{href:"#!"},c.a.createElement(d.n,{overlay:"white-slight"})))),c.a.createElement(d.i,{lg:"7"},c.a.createElement("a",{href:"#!",className:"green-text"},c.a.createElement("h6",{className:"font-weight-bold mb-3"},c.a.createElement(d.k,{icon:"utensils",className:"pr-2"}),"Food")),c.a.createElement("h3",{className:"font-weight-bold mb-3 p-0"},c.a.createElement("strong",null,"\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e40\u0e2a\u0e49\u0e19\u0e01\u0e25\u0e32\u0e07\u0e15\u0e49\u0e21\u0e22\u0e33\u0e41\u0e2b\u0e49\u0e07")),c.a.createElement("p",null,"\u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e01\u0e46\u0e40\u0e25\u0e22\u0e04\u0e48\u0e32 10 10 10 \u0e44\u0e1b\u0e40\u0e25\u0e22"),c.a.createElement("p",null,"by",c.a.createElement("a",{href:"#!"},c.a.createElement("strong",null,"Carine Fox")),", 19/08/2018"))),c.a.createElement("hr",null),c.a.createElement(d.r,null,c.a.createElement(d.i,{lg:"5"},c.a.createElement(d.t,{className:"rounded z-depth-2 mb-lg-0 mb-4",hover:!0,waves:!0},c.a.createElement("img",{className:"img-fluid",src:"https://bottomlineis.co/uploads/images/image_750x_5d691a8d5f2f9.jpg",alt:""}),c.a.createElement("a",{href:"#!"},c.a.createElement(d.n,{overlay:"white-slight"})))),c.a.createElement(d.i,{lg:"7"},c.a.createElement("a",{href:"#!",className:"green-text"},c.a.createElement("h6",{className:"font-weight-bold mb-3"},c.a.createElement(d.k,{icon:"utensils",className:"pr-2"}),"Food")),c.a.createElement("h3",{className:"font-weight-bold mb-3 p-0"},c.a.createElement("strong",null,"\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e2b\u0e21\u0e39\u0e19\u0e49\u0e33\u0e02\u0e49\u0e19")),c.a.createElement("p",null,"\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e08\u0e49\u0e32 \u0e2d\u0e34\u0e48\u0e21\u0e21\u0e4a\u0e32\u0e01\u0e01"),c.a.createElement("p",null,"by",c.a.createElement("a",{href:"#!"},c.a.createElement("strong",null,"Carine Fox")),", 19/08/2018")))))))},A=function(e){return c.a.createElement("div",null,c.a.createElement(b.a,{bg:"dark",variant:"dark"},c.a.createElement(b.a.Brand,{href:"/"},"\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e23\u0e01"),c.a.createElement(_.a,{className:"mr-auto"},c.a.createElement(_.a.Link,{href:"/Fooditem "},"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2d\u0e32\u0e2b\u0e32\u0e23"),c.a.createElement(_.a.Link,{href:"/contact "},"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e09\u0e31\u0e19"),c.a.createElement(_.a.Link,{href:"/Reviews "},"Reviews")),c.a.createElement(v.a,{inline:!0},c.a.createElement(k.a,{variant:"outline-info",onClick:function(){u.auth().signOut()}},"LogOut"))),c.a.createElement("div",null,c.a.createElement("div",{class:"container-fluid "},c.a.createElement("div",{class:"row "},c.a.createElement("div",{class:"col-sm"},c.a.createElement(d.i,null,c.a.createElement(d.d,{style:{width:"22rem"}},c.a.createElement(d.f,{className:"img-fluid",src:"https://img.wongnai.com/p/1920x0/2017/06/16/d6336a363f194e8a8c3bc82ea46f2cd2.jpg",waves:!0}),c.a.createElement(d.e,null,c.a.createElement(d.h,null,"\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e2b\u0e21\u0e39\u0e41\u0e14\u0e07 \u0e19\u0e49\u0e33\u0e43\u0e2a"),c.a.createElement(d.g,null,"\u0e20\u0e32\u0e1e\u0e43\u0e0a\u0e49\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e40\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e42\u0e06\u0e29\u0e13\u0e32"))))),c.a.createElement("div",{class:"col-sm"},c.a.createElement(d.i,null,c.a.createElement(d.d,{style:{width:"22rem"}},c.a.createElement(d.f,{className:"img-fluid",src:"https://img.wongnai.com/p/1920x0/2015/07/23/a59728420cb343539e7e7cadbcc9f1d0.jpg",waves:!0}),c.a.createElement(d.e,null,c.a.createElement(d.h,null,"\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e2b\u0e21\u0e39\u0e15\u0e49\u0e21\u0e22\u0e33"),c.a.createElement(d.g,null,"\u0e20\u0e32\u0e1e\u0e43\u0e0a\u0e49\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e40\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e42\u0e06\u0e29\u0e13\u0e32"))))),c.a.createElement("div",{class:"col-sm"},c.a.createElement(d.i,null,c.a.createElement(d.d,{style:{width:"22rem"}},c.a.createElement(d.f,{className:"img-fluid",src:"https://img.wongnai.com/p/1920x0/2019/05/19/2556580ec10145bba6555ffc11efa436.jpg",waves:!0}),c.a.createElement(d.e,null,c.a.createElement(d.h,null,"\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e25\u0e39\u0e01\u0e0a\u0e34\u0e49\u0e19\u0e1b\u0e25\u0e32"),c.a.createElement(d.g,null,"\u0e20\u0e32\u0e1e\u0e43\u0e0a\u0e49\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e40\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e42\u0e06\u0e29\u0e13\u0e32"))))),c.a.createElement("div",{class:"col-sm"},c.a.createElement(d.i,null,c.a.createElement(d.d,{style:{width:"22rem"}},c.a.createElement(d.f,{className:"img-fluid",src:"https://img.wongnai.com/p/1300x640/2018/08/27/e58ac3fe2172470691eaef131446d282.jpg",waves:!0}),c.a.createElement(d.e,null,c.a.createElement(d.h,null,"\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e2b\u0e21\u0e39\u0e19\u0e49\u0e33\u0e02\u0e49\u0e19"),c.a.createElement(d.g,null,"\u0e20\u0e32\u0e1e\u0e43\u0e0a\u0e49\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e40\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e42\u0e06\u0e29\u0e13\u0e32"))))),c.a.createElement("div",{class:"col-sm"},c.a.createElement(d.i,null,c.a.createElement(d.d,{style:{width:"22rem"}},c.a.createElement(d.f,{className:"img-fluid",src:"https://4.bp.blogspot.com/-zDyqZ0tUQf4/VNngPFlRdPI/AAAAAAAADMM/8URJMXPkgzo/s1600/%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B9%82%E0%B8%9F.jpg",waves:!0}),c.a.createElement(d.e,null,c.a.createElement(d.h,null,"\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e40\u0e22\u0e47\u0e19\u0e15\u0e32\u0e42\u0e1f"),c.a.createElement(d.g,null,"\u0e20\u0e32\u0e1e\u0e43\u0e0a\u0e49\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e40\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e42\u0e06\u0e29\u0e13\u0e32"))))),c.a.createElement("div",{class:"col-sm"},c.a.createElement(d.i,null,c.a.createElement(d.d,{style:{width:"22rem"}},c.a.createElement(d.f,{className:"img-fluid",src:"https://pbs.twimg.com/media/DgRJnyEVQAAz7Jn.jpg",waves:!0}),c.a.createElement(d.e,null,c.a.createElement(d.h,null,"\u0e01\u0e4b\u0e27\u0e22\u0e08\u0e31\u0e4a\u0e1a"),c.a.createElement(d.g,null,"\u0e20\u0e32\u0e1e\u0e43\u0e0a\u0e49\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e40\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e42\u0e06\u0e29\u0e13\u0e32"))))),c.a.createElement("div",{class:"col-sm"},c.a.createElement(d.i,null,c.a.createElement(d.d,{style:{width:"22rem"}},c.a.createElement(d.f,{className:"img-fluid",src:"https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/51007932_1180566005480596_2977294032784326656_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_eui2=AeExK3dLQ3BX6Xwbyc8W1RRL8i_dwK5xJgXyL93ArnEmBUhKHEP1NnblUXiJVURlqJdt23KPaYo5CzSWZbLBw6Pf&_nc_ohc=KDrkMjKz-TcAX8nPY9X&_nc_ht=scontent.fbkk5-3.fna&oh=f4ab9557ae5f6bbbdeb6e8479389eb8a&oe=5EC7FA11",waves:!0}),c.a.createElement(d.e,null,c.a.createElement(d.h,null,"\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e2b\u0e21\u0e39\u0e41\u0e14\u0e07\u0e41\u0e2b\u0e49\u0e07"),c.a.createElement(d.g,null,"\u0e20\u0e32\u0e1e\u0e43\u0e0a\u0e49\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e40\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e42\u0e06\u0e29\u0e13\u0e32"))))),c.a.createElement("div",{class:"col-sm"},c.a.createElement(d.i,{class:"col-lg-4 col-md-6"},c.a.createElement(d.d,{style:{width:"22rem"}},c.a.createElement(d.f,{className:"img-fluid",src:"https://img-global.cpcdn.com/recipes/4d97cb6270edd80d/1200x630cq70/photo.jpg",waves:!0}),c.a.createElement(d.e,null,c.a.createElement(d.h,null,"\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e2b\u0e21\u0e39\u0e15\u0e49\u0e21\u0e22\u0e33 \u0e41\u0e2b\u0e49\u0e07"),c.a.createElement(d.g,null,"\u0e20\u0e32\u0e1e\u0e43\u0e0a\u0e49\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e40\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e42\u0e06\u0e29\u0e13\u0e32"))))),c.a.createElement("div",{class:"col-sm"},c.a.createElement(d.i,{class:"col-lg-4 col-md-6"},c.a.createElement(d.d,{style:{width:"22rem"}},c.a.createElement(d.f,{className:"img-fluid",src:"https://i.pinimg.com/originals/39/8b/96/398b96b8c70198e345468e5e5d1665c2.jpg",waves:!0}),c.a.createElement(d.e,null,c.a.createElement(d.h,null,"\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e44\u0e01\u0e48\u0e15\u0e38\u0e4b\u0e19"),c.a.createElement(d.g,null,"\u0e20\u0e32\u0e1e\u0e43\u0e0a\u0e49\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e40\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e42\u0e06\u0e29\u0e13\u0e32")))))))))},j=function(e){return c.a.createElement("div",null,c.a.createElement(b.a,{bg:"dark",variant:"dark"},c.a.createElement(b.a.Brand,{href:"/"},"\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e23\u0e01"),c.a.createElement(_.a,{className:"mr-auto"},c.a.createElement(_.a.Link,{href:"/Fooditem "},"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2d\u0e32\u0e2b\u0e32\u0e23"),c.a.createElement(_.a.Link,{href:"/contact "},"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e09\u0e31\u0e19"),c.a.createElement(_.a.Link,{href:"/Reviews "},"Reviews")),c.a.createElement(v.a,{inline:!0},c.a.createElement(k.a,{variant:"outline-info",onClick:function(){u.auth().signOut()}},"LogOut"))),c.a.createElement("div",null,c.a.createElement("section",{class:"mb-6"},c.a.createElement("h1",{class:"h1-responsive font-weight-bold text-center my-4"},"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e09\u0e31\u0e19"),c.a.createElement("div",{class:"card card-cascade"},c.a.createElement("div",{class:"view view-cascade overlay"},c.a.createElement("img",{class:"card-img-top",src:"https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/75550501_2495230860553086_3725527281922211840_o.jpg?_nc_cat=101&_nc_sid=0be424&_nc_eui2=AeHavvWDPNtalcv3ftMKcparj3k5M5cnaNWPeTkzlydo1Y_SWkDNm8yIz4IM1cvkMSIMp1PSf3tvlbzqAnayfNEw&_nc_ohc=iJ7cUd-Nxe8AX96pXbH&_nc_ht=scontent.fbkk5-6.fna&oh=b3f814e5886596eeee3d3f535dff95ef&oe=5ECE67A0",alt:"Card image cap"}),c.a.createElement("a",null,c.a.createElement("div",{class:"mask rgba-white-slight"}))),c.a.createElement("div",{class:"card-body card-body-cascade text-center"},c.a.createElement("h4",{class:"card-title"},c.a.createElement("strong",null,"SARAYUT RATTANACHOT")),c.a.createElement("h6",{class:"font-weight-bold indigo-text py-2"},"6035512068"),c.a.createElement("p",{class:"card-text"},"Mini project 240-311 DISTRIBUTED COM&WEB TECHNO"),c.a.createElement("a",{href:"https://www.facebook.com/hamhamrom"}," Facrbook "),c.a.createElement("a",null," ...or... "),c.a.createElement("a",{href:"mailto:s6035512068@phuket.psu.ac.th"}," E-mail "))))))},y=function(){return c.a.createElement("div",null,c.a.createElement(b.a,{bg:"dark",variant:"dark"},c.a.createElement(b.a.Brand,{href:"/"},"\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e23\u0e01"),c.a.createElement(_.a,{className:"mr-auto"},c.a.createElement(_.a.Link,{href:"/Fooditem "},"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2d\u0e32\u0e2b\u0e32\u0e23"),c.a.createElement(_.a.Link,{href:"/contact "},"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e09\u0e31\u0e19"),c.a.createElement(_.a.Link,{href:"/Reviews "},"Reviews")),c.a.createElement(v.a,{inline:!0},c.a.createElement(k.a,{variant:"outline-info",onClick:function(){u.auth().signOut()}},"LogOut"))),c.a.createElement("div",{class:"d-flex flex-column bd-highlight mb-3"},c.a.createElement("div",{class:"p-2 bd-highlight"},c.a.createElement("body",null,c.a.createElement("div",null,c.a.createElement("div",{id:"carouselExampleCaptions",class:"carousel slide","data-ride":"carousel"},c.a.createElement("ol",{class:"carousel-indicators"},c.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"0",class:"active"}),c.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"1"}),c.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"2"})),c.a.createElement("div",{class:"carousel-inner"},c.a.createElement("div",{class:"carousel-item active"},c.a.createElement("img",{src:"http://m.my-eat.myreadyweb.com//storage/20/97276/images/product/content/c2a/c2abb72901b3f7bc29bf111b1d665a75/content_224654_1012047453.jpg",class:"d-block w-100",alt:"..."}),c.a.createElement("div",{class:"carousel-caption d-none d-md-block"},c.a.createElement("h5",null,"\u0e40\u0e21\u0e19\u0e39\u0e02\u0e32\u0e22\u0e22\u0e2d\u0e14\u0e2e\u0e34\u0e15 \u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e2b\u0e21\u0e39\u0e41\u0e14\u0e07 \u0e41\u0e2b\u0e49\u0e07"),c.a.createElement("p",null,"\u0e20\u0e32\u0e1e\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e42\u0e06\u0e29\u0e13\u0e32"))),c.a.createElement("div",{class:"carousel-item"},c.a.createElement("img",{src:"https://food.mthai.com/app/uploads/2018/12/noodle014.jpg",class:"d-block w-100",alt:"..."}),c.a.createElement("div",{class:"carousel-caption d-none d-md-block"},c.a.createElement("h5",null,"\u0e40\u0e21\u0e19\u0e39\u0e02\u0e32\u0e22\u0e22\u0e2d\u0e14\u0e2e\u0e34\u0e15 \u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e19\u0e48\u0e2d\u0e07\u0e44\u0e01\u0e48"),c.a.createElement("p",null,"\u0e20\u0e32\u0e1e\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e42\u0e06\u0e29\u0e13\u0e32"))),c.a.createElement("div",{class:"carousel-item"},c.a.createElement("img",{src:"https://img.wongnai.com/p/1920x0/2018/04/21/be800be7f3724d9f8c3dc37061e0b508.jpg",class:"d-block w-100",alt:"..."}),c.a.createElement("div",{class:"carousel-caption d-none d-md-block"},c.a.createElement("h5",null,"\u0e40\u0e21\u0e19\u0e39\u0e02\u0e32\u0e22\u0e22\u0e2d\u0e14\u0e2e\u0e34\u0e15 \u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e2b\u0e21\u0e39\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e43\u0e19"),c.a.createElement("p",null,"\u0e20\u0e32\u0e1e\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e42\u0e06\u0e29\u0e13\u0e32")))),c.a.createElement("a",{class:"carousel-control-prev",href:"#carouselExampleCaptions",role:"button","data-slide":"prev"},c.a.createElement("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),c.a.createElement("span",{class:"sr-only"},"Previous")),c.a.createElement("a",{class:"carousel-control-next",href:"#carouselExampleCaptions",role:"button","data-slide":"next"},c.a.createElement("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),c.a.createElement("span",{class:"sr-only"},"Next")))))),c.a.createElement("div",{class:"p-2 bd-highlight"},c.a.createElement("div",{class:"d-flex align-items-center "},c.a.createElement("div",{class:"p-2 bd-highlight justify-content-center"},c.a.createElement("div",null,c.a.createElement("img",{src:"https://i.redd.it/1ko2q5nfywv21.jpg",width:"400",height:"650"}))),c.a.createElement("div",{class:"p-2 bd-highlight"},c.a.createElement("div",{class:"d-flex align-items-center"},c.a.createElement("div",{class:"d-flex justify-content-around"},c.a.createElement("div",{class:"p-2 bd-highlight view zoom"},c.a.createElement("div",null,c.a.createElement("img",{src:"https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.0-9/94257577_1598527560351103_936420870459490304_n.jpg?_nc_cat=106&_nc_sid=110474&_nc_eui2=AeGR-zp6HnrYcTHNwcd-M2guu1vIk32qbzK7W8iTfapvMt7yVAfcrR_RekprYsykEYUPIBbIs6NLRzPDyDa-RYri&_nc_ohc=zW0dd74wmHwAX9hICa6&_nc_ht=scontent.fbkk5-8.fna&oh=2bc8a1142da22f55d95ce65c7a280605&oe=5EC8244B",width:"200",height:"300"}))),c.a.createElement("div",{class:"p-2 bd-highlight"},c.a.createElement("div",null,c.a.createElement("img",{src:"https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/95096311_1598527563684436_1056686238284644352_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_eui2=AeFVSD20hvLR7rSdU8ge4l0CPbGTOfkEFHE9sZM5-QQUcf4iasgIlqbX3opgK63-6HxOCQNJXgxRXXWzL9VTPRMI&_nc_ohc=aEEmwCcc7EIAX-9-IMO&_nc_ht=scontent.fbkk5-7.fna&oh=849605f8c22e97b706e6f810ff6af94a&oe=5ECA0772",width:"200",height:"300"}))),c.a.createElement("div",{class:"p-2 bd-highlight"},c.a.createElement("div",null,c.a.createElement("img",{src:"https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/94017220_1598527717017754_121741827257663488_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_eui2=AeGS_XnOAZVYJ6mtnrhGC3SyvMhoN82i6n28yGg3zaLqfa22-ox6_B4W7zIPSPSk9PaiNhFM7ubbCQg1V5Sx-yQX&_nc_ohc=Oxi-BgnhsI4AX-gcVxq&_nc_ht=scontent.fbkk5-5.fna&oh=ea757fd3223244d3b0a960879d331005&oe=5EC8AEA1",width:"200",height:"300"}))),c.a.createElement("div",{class:"p-2 bd-highlight"},c.a.createElement("div",null,c.a.createElement("img",{src:"https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/94223041_1598527880351071_433696056564252672_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_eui2=AeFk8653YFVSvNoFdgf_OB6156_XEVWkgQznr9cRVaSBDJG7kU7LhLxpr22roJUZdms_Hpfw1XZsLcX3kHorH4yY&_nc_ohc=ZOxr4jsOufIAX-netBA&_nc_ht=scontent.fbkk5-3.fna&oh=9bdd4d4f23f31111dc04e17bb20a609e&oe=5EC88064",width:"200",height:"300"}))),c.a.createElement("div",{class:"p-2 bd-highlight"},c.a.createElement("div",null,c.a.createElement("img",{src:"https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.0-9/94149183_1598527650351094_2698275721532407808_n.jpg?_nc_cat=109&_nc_sid=110474&_nc_eui2=AeH0_ptBVow5nHJM3al7QmIEgYChAxMjKQeBgKEDEyMpBz5e1uWwFr7u-gl4RfgHpJa28imkaGDcR4giWKRJorOt&_nc_ohc=-7jvifz2RmkAX9TlR8i&_nc_ht=scontent.fbkk5-1.fna&oh=bf26d42afa70ca038b2680035b234eec&oe=5EC7171A",width:"200",height:"300"}))))),c.a.createElement("div",{class:"d-flex align-items-center"},c.a.createElement("div",{class:"d-flex justify-content-around"},c.a.createElement("div",{class:"p-2 bd-highlight"},c.a.createElement("div",null,c.a.createElement("img",{src:"https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/94427882_1598527617017764_2250356558644903936_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeFu1qbDZfi4N5x481mAS9uVjsYJ3kWqxs2OxgneRarGzepgZ13JYPKwuDB2K2O_2XRSJOmBRQXVkCbyz0m8vh1v&_nc_ohc=jl9U7xePWl8AX_Srp54&_nc_ht=scontent.fbkk5-6.fna&oh=a55f11c5777ae159b8656a7a5f635e44&oe=5EC85D96",width:"200",height:"300"}))),c.a.createElement("div",{class:"p-2 bd-highlight"},c.a.createElement("div",null,c.a.createElement("img",{src:"https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.0-9/94645000_1598527600351099_890581242855030784_n.jpg?_nc_cat=106&_nc_sid=110474&_nc_eui2=AeElEnRpU8q6a51an1ql7JJH_46QCkoYW-z_jpAKShhb7HEAvTUhlb53D8eEpPioY3HbqjYbAfOYE-MgHfkGWS5Y&_nc_ohc=On1cMqWYe8AAX-RdqVE&_nc_ht=scontent.fbkk5-8.fna&oh=9d92a284f06f5f38350f4f4758658cd9&oe=5EC93A99",width:"200",height:"300"}))),c.a.createElement("div",{class:"p-2 bd-highlight"},c.a.createElement("div",null,c.a.createElement("img",{src:"https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/94135779_1598527677017758_2610417264935043072_n.jpg?_nc_cat=100&_nc_sid=110474&_nc_eui2=AeFDdF2GIaQwyRj1DNvvpbS3d0FZW9FYj2x3QVlb0ViPbAWsU1n0xDeLmT-0lJUI41_FQ4z5aSFEVPPThllGA8x-&_nc_ohc=ihCYVUc5oyIAX8wx-0t&_nc_ht=scontent.fbkk5-5.fna&oh=54a098c9b734f362da70153317bb5792&oe=5EC9BA14",width:"200",height:"300"}))),c.a.createElement("div",{class:"p-2 bd-highlight"},c.a.createElement("div",null,c.a.createElement("img",{src:"https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/94138980_1598527787017747_145976244649852928_n.jpg?_nc_cat=108&_nc_sid=110474&_nc_eui2=AeH2MKvbkCyQ10oItsc4AwikU46_RpEiiqJTjr9GkSKKogpR2ecx1SxHBq-7hCIY92IyqGaK69UEyq3QxjTGV6fD&_nc_ohc=TN1mS2dw7q4AX-tma0B&_nc_ht=scontent.fbkk5-7.fna&oh=ef00eb6928c30e8fcd1ddbe9d00a8f89&oe=5EC6FF06",width:"200",height:"300"}))),c.a.createElement("div",{class:"p-2 bd-highlight"},c.a.createElement("div",null,c.a.createElement("img",{src:"https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/94088609_1598527733684419_2145008535656726528_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeELn89BR_PAcRaZBEy8Sjvw5q6FXmxUgjHmroVebFSCMagwJcW196pVB0IKN32gewMWa6OQdQsPgX9e2cIn7D2q&_nc_ohc=b9KhEcOMHdYAX85JP6b&_nc_ht=scontent.fbkk5-6.fna&oh=06f633a6bbfbe1c5f2e33eec9ef4630e&oe=5EC97864",width:"200",height:"300"}))))))),c.a.createElement("div",{class:"p-2 bd-highlight"},c.a.createElement("body",null,c.a.createElement("div",null,c.a.createElement("img",{src:"https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/15590619_653262511544284_3960322226322284512_n.jpg?_nc_cat=104&_nc_sid=dd9801&_nc_eui2=AeFJaSY7llfGFRHjMRcnfR05AgvAo-PDXIkCC8Cj48NciclW0fBk5p6oFzFQdLzJajtMTTBhxOgSbe-flmUBXnXD&_nc_ohc=hF-xQdjEtDMAX81p4ba&_nc_ht=scontent.fbkk5-5.fna&oh=bcbbc5cab93ca70c7ef96fe4228dac5a&oe=5EC92A3E",width:"1505",height:"450"}))))),c.a.createElement("div",{class:"p-2 bd-highlight justify-content-center text-center "},c.a.createElement(d.o,null,c.a.createElement(d.o,{left:!0,className:"mr-3 text-center",href:"https://www.facebook.com/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7-%E0%B8%9E%E0%B8%B5%E0%B9%88%E0%B8%A3%E0%B8%A1%E0%B8%93%E0%B9%8C-653260611544474/",class:"card"},c.a.createElement(d.o,{object:!0,src:"https://www.aniaetleprogrammeur.com/wp-content/uploads/2019/09/facebook-new-misinformation-measures-1.png",width:"150",height:"100",className:"mr-3 justify-content-center text-center"}),c.a.createElement(d.o,{heading:!0,class:"justify-content-center "},"\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e40\u0e23\u0e32")),c.a.createElement(d.o,{body:!0,class:"justify-content-center "},"House No. 92, Moo 4, Thamnop Sub-district, Singhanakhon District, Songkhla Province 90280 ,or Tel : 081-xxxxxxx")))))},B=function(e){return c.a.createElement("div",null,c.a.createElement(y,null))},x=a(19),N=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={user:{}},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;u.auth().onAuthStateChanged((function(t){t?e.setState({user:t}):e.setState({user:null})}))}},{key:"render",value:function(){return null==this.state.user?c.a.createElement("div",null,c.a.createElement(p,null)):c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(x.a,{exact:!0,path:"/",component:B}),c.a.createElement(x.a,{path:"/login",component:p}),c.a.createElement(x.a,{path:"/Fooditem",component:A}),c.a.createElement(x.a,{path:"/contact",component:j}),c.a.createElement(x.a,{path:"/Reviews",component:w})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(22),R=a(17),I={apiKey:"AIzaSyADl0VGdoA45liNiderICdVjgIxwlSEtLk",authDomain:"myappjan.firebaseapp.com",databaseURL:"https://myappjan.firebaseio.com",projectId:"myappjan",storageBucket:"myappjan.appspot.com",messagingSenderId:"576012620890",appId:"1:576012620890:web:ca4f73772d3ec801013463",measurementId:"G-QWBKMXG31B"},O=a(9),S=a.n(O);a(122);0===S.a.apps.length&&S.a.initializeApp(I);var D=S.a.firestore();Object(R.render)(c.a.createElement(C.a,null,c.a.createElement(N,null)),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a(123)},76:function(e,t,a){},77:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.dbfba657.chunk.js.map