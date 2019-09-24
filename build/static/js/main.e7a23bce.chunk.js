(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{346:function(e,t,n){e.exports=n.p+"static/media/logo.092ae884.png"},380:function(e,t,n){e.exports=n(766)},397:function(e,t){},399:function(e,t){},415:function(e,t){},417:function(e,t){},586:function(e,t){},765:function(e,t,n){},766:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(14),o=n.n(r),i=n(813),c=n(25),s=n(18),u=n(30),p=n(31),d=n(32),m=n(68),h="https://s3.amazonaws.com/onename/avatar-placeholder.png",f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={person:{name:function(){return"Anonymous"},avatarUrl:function(){return h}}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.userSession;this.setState({person:new m.Person(e.loadUserData().profile)})}},{key:"render",value:function(){var e=this.props,t=e.handleSignOut,n=e.userSession,a=this.state.person;return n.isSignInPending()?null:l.a.createElement("div",{className:"panel-welcome",id:"section-2"},l.a.createElement("div",{className:"avatar-section"},l.a.createElement("img",{src:a.avatarUrl()?a.avatarUrl():h,className:"img-rounded avatar",id:"avatar-image",alt:""})),l.a.createElement("h1",null,"Hello, ",l.a.createElement("span",{id:"heading-name"},a.name()?a.name():"Nameless Person"),"!"),l.a.createElement("p",{className:"lead"},l.a.createElement("button",{className:"btn btn-primary btn-lg",id:"signout-button",onClick:t.bind(this)},"Logout")))}}]),t}(a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.handleSignIn;return l.a.createElement("div",{className:"panel-landing",id:"section-1"},l.a.createElement("h1",{className:"landing-heading"},"Hello, Blockstack!"),l.a.createElement("p",{className:"lead"},l.a.createElement("button",{className:"btn btn-primary btn-lg",id:"signin-button",onClick:e.bind(this)},"Sign In with Blockstack")))}}]),t}(a.Component),g=n(53),E=n.n(g),O=n(218),y=n(17),v=n(802),j=n(342),S=n.n(j),k=n(798),w=n(803),C=n(804),x=n(343),D=n.n(x),N=n(344),F=n.n(N),P=n(805),I=n(220),T=n.n(I),U=n(221),L=n.n(U),_=n(768),A=n(355),J=n(801),z=n(793),H=n(800),B=n(796),q=n(795),V=n(811),X=n(767),M=n(797),W=n(799),G=l.a.forwardRef(function(e,t){return l.a.createElement(X.a,Object.assign({direction:"up",ref:t},e))}),R=function(e){var t=l.a.useState(""),n=Object(A.a)(t,2),a=n[0],r=n[1];return l.a.createElement(z.a,{open:e.open,TransitionComponent:G,onClose:e.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",onBackdropClick:function(){return e.handleClose(e.name)}},l.a.createElement(q.a,{id:"alert-dialog-slide-title"},e.title),l.a.createElement(B.a,null,l.a.createElement(M.a,null,l.a.createElement(V.a,{autoComplete:"off",id:"outlined-name",label:"Name",value:a,onChange:function(e){r(e.target.value)},"aria-describedby":"component-error-text"}),l.a.createElement(W.a,{error:!0,id:"component-error-text"},a.length?"":"Please fill out a name"))),l.a.createElement(H.a,null,l.a.createElement(J.a,{onClick:function(){return e.handleClose(e.name)},color:"primary"},"Cancel"),l.a.createElement(J.a,{disabled:!a,onClick:function(){return e.handleSubmit(a,e.type,e.name)},color:"primary"},"Create")))},Y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={selectedFile:null},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,n=e.handleClose,a=e.name;return l.a.createElement(z.a,{open:t,onClose:function(){return n(a)}},l.a.createElement(q.a,null,"Import a File"),l.a.createElement(B.a,null,l.a.createElement("input",{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",style:{display:"none"}}),l.a.createElement("label",{htmlFor:"contained-button-file"},l.a.createElement(J.a,{variant:"contained",component:"span"},"Choose a File"))),l.a.createElement(H.a,null,l.a.createElement(J.a,{onClick:function(){return n(a)},color:"primary"},"Cancel"),l.a.createElement(J.a,{color:"primary"},"Upload")))}}]),t}(l.a.Component),K=n(812),Q=n(806),Z=n(345),$=n.n(Z),ee=n(94),te=function(e){return function(t){t({type:"UPDATE_DATA",payload:e})}},ne=function(e){return function(t){t({type:"UPDATE_PATH",payload:e})}},ae=function(e){return function(t){t({type:"UPDATE_TEXT",payload:e})}},le=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).userSession=new m.UserSession,e.handleClose=function(t){e.setState(Object(y.a)({},t,!1))},e.handleOpen=function(t){e.setState(Object(y.a)({},t,!0))},e.handleSubmit=function(){var t=Object(O.a)(E.a.mark(function t(n,a,r){var o,i,c,s,u,p,d,m,h,f,b,g,O,v;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e.props.data,i=e.props.path,"file"===a)if(console.log(o),c={type:"file",fileType:"doc",name:n,data:l.a.createElement("p",null,"testing")},null===o)s={0:c},e.userSession.putFile("/data",JSON.stringify(s),{encrypt:!1}).then(function(){e.setState({data:s})});else if(i.length){for(console.log("this should be the folder",o[i[0]]),u=o[i[0]],p=1;p<i.length;p++)u=u.data[i[p]];d=Object.keys(u.data).length,u.data[d]=c,e.userSession.putFile("/data",JSON.stringify(o),{encrypt:!1}).then(function(){e.props.updateData(o)})}else console.log("type of data",typeof o),m=Object.keys(o).length,console.log("index",m),o[m]=c,e.userSession.putFile("/data",JSON.stringify(o),{encrypt:!1}).then(function(){e.props.updateData(o)});else if(console.log("Folder"),h={type:"folder",name:n,data:{}},null===o)f={0:h},e.userSession.putFile("/data",JSON.stringify(f),{encrypt:!1}).then(function(){e.props.updateData(f)});else if(i.length){for(console.log("this should be the folder",o[i[0]]),b=o[i[0]],g=1;g<i.length;g++)b=b.data[i[g]];O=Object.keys(b.data).length,b.data[O]=h,e.userSession.putFile("/data",JSON.stringify(o),{encrypt:!1}).then(function(){e.props.updateData(o)})}else console.log("type of data",typeof o),v=Object.keys(o).length,console.log("index",v),o[v]=h,e.userSession.putFile("/data",JSON.stringify(o),{encrypt:!1}).then(function(){e.props.updateData(o)});e.setState(Object(y.a)({},r,!1));case 4:case"end":return t.stop()}},t)}));return function(e,n,a){return t.apply(this,arguments)}}(),e.handleClick=function(){var t=Object(O.a)(E.a.mark(function t(n,a,l,r,o){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),console.log(a,l,o),"file"!==a){t.next=11;break}return t.next=5,e.setState({history:e.state.history+"".concat(l)});case 5:return t.next=7,e.props.updateText(r);case 7:e.props.updateFileIndex(l),e.props.history.push("/editor/".concat(e.state.history)),t.next=12;break;case 11:e.props.downOneLevel(l,o);case 12:case"end":return t.stop()}},t)}));return function(e,n,a,l,r){return t.apply(this,arguments)}}(),e.state={newFolderOpen:!1,newFileOpen:!1,uploadFileOpen:!1,userSession:null,history:"",fileHistory:[]},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.userSession.getFile("/data",{decrypt:!1}).then(function(t){console.log(t);var n=JSON.parse(t);e.props.updateData(n)})}},{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state,a=(n.data,n.newFileOpen),r=n.newFolderOpen,o=n.uploadFileOpen;return l.a.createElement("div",{className:t.root},l.a.createElement(v.a,{className:t.toolbar},l.a.createElement(k.a,{className:t.toolbar},l.a.createElement(w.a,{button:!0},l.a.createElement(C.a,null,l.a.createElement(S.a,{size:"small"})),l.a.createElement(P.a,{onClick:function(){return e.handleOpen("newFolderOpen")}},"Add Folder")),l.a.createElement(w.a,{button:!0,onClick:function(){return e.handleOpen("uploadFileOpen")}},l.a.createElement(C.a,null,l.a.createElement(D.a,{size:"small"})),l.a.createElement(P.a,null,"Import File")),l.a.createElement(w.a,{button:!0,onClick:function(){return e.handleOpen("newFileOpen")}},l.a.createElement(C.a,null,l.a.createElement(F.a,{size:"small"})),l.a.createElement(P.a,null,"Create File")))),l.a.createElement(K.a,{"aria-label":"breadcrumb"},l.a.createElement("p",null,"root"),this.props.breadcrumbs.length?this.props.breadcrumbs.map(function(e){return l.a.createElement("p",null,e)}):null,l.a.createElement(Q.a,{disabled:!this.props.path.length,onClick:function(){return e.props.upOneLevel()}},l.a.createElement($.a,null))),l.a.createElement(k.a,null,this.props.levels.length?this.props.levels[this.props.levels.length-1].data?Object.values(this.props.levels[this.props.levels.length-1].data).map(function(t,n){return l.a.createElement(w.a,{key:n,button:!0,onClick:function(a){return e.handleClick(a,t.type,n,t.data,t.name)}},l.a.createElement(C.a,null,"file"===t.type?l.a.createElement(T.a,null):l.a.createElement(L.a,null)),l.a.createElement(P.a,null,t.name))}):l.a.createElement("p",null,"No Files in this folder"):this.props.data?Object.values(this.props.data).map(function(t,n){return l.a.createElement(w.a,{key:n,button:!0,onClick:function(a){return e.handleClick(a,t.type,n,t.data,t.name)}},l.a.createElement(C.a,null,"file"===t.type?l.a.createElement(T.a,null):l.a.createElement(L.a,null)),l.a.createElement(P.a,null,t.name))}):l.a.createElement("p",null,"You Haven't Created any files yet")),l.a.createElement(R,{name:"newFolderOpen",title:"Create New Folder",open:r,handleClose:this.handleClose,handleSubmit:this.handleSubmit,type:"folder"}),l.a.createElement(R,{name:"newFileOpen",title:"Create New File",open:a,handleClose:this.handleClose,handleSubmit:this.handleSubmit,type:"file"}),l.a.createElement(Y,{open:o,name:"uploadFileOpen",handleClose:this.handleClose}))}}]),t}(l.a.Component),re=Object(_.a)({root:{boxSizing:"border-box",padding:"20px",paddingTop:"60px"},toolbar:{width:"calc(100% - 240px)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}})(le),oe=Object(ee.b)(function(e){return{data:e.data,path:e.path,text:e.text,levels:e.levels,breadcrumbs:e.breadcrumbs}},{updateText:ae,updateData:te,updatePath:ne,downOneLevel:function(e,t){return function(n){n({type:"DOWN_ONE_LEVEL",payload:{index:e,name:t}})}},upOneLevel:function(){return function(e){e({type:"UP_ONE_LEVEL"})}},updateFileIndex:function(e){return function(t){t({type:"UPDATE_FILE_INDEX",payload:e})}}})(re),ie=n(347),ce=n(808),se=n(807),ue=n(809),pe=n(348),de=n.n(pe),me=n(349),he=n.n(me),fe=n(810),be=n(346),ge=n.n(be),Ee=Object(ie.a)(function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,borderRight:"2px solid blue"},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},link:{color:"black",textDecoration:"none","&:hover":{color:"black"}}}});function Oe(){var e=Ee();return l.a.createElement("div",{className:e.root},l.a.createElement(se.a,null),l.a.createElement(ce.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},anchor:"left"},l.a.createElement("div",{className:e.toolbar}),l.a.createElement(ue.a,null),l.a.createElement("img",{src:ge.a,alt:"logo",style:{width:"100%"}}),l.a.createElement(k.a,null,l.a.createElement(fe.a,{to:"/profile",className:e.link},l.a.createElement(w.a,{button:!0},l.a.createElement(C.a,null,l.a.createElement(de.a,{size:"small"})),l.a.createElement(P.a,null,"Profile"))),l.a.createElement(fe.a,{to:"/files",className:e.link},l.a.createElement(w.a,{button:!0},l.a.createElement(C.a,null,l.a.createElement(he.a,{size:"small"})),l.a.createElement(P.a,null,"Files"))))))}var ye=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).userSession=new m.UserSession,e.onChangeHandler=function(t){t.target.files[0]&&e.setState({file:t.target.files[0]})},e.testFunction=function(t){t.preventDefault();e.userSession.putFile("test",JSON.stringify([{test1:"hello world"},{test2:"hello world again"}]),{encrypt:!1}).then(function(e){console.log(e),alert("uploaded")}).catch(function(e){console.log(e)})},e.getfile=function(){e.userSession.getFile("test",{decrypt:!1}).then(function(e){console.log(JSON.parse(e))})},e.state={file:null,uploadProgress:0,userSession:null},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Upload"),l.a.createElement("input",{accept:"audio/mp3",type:"file",onChange:this.onChangeHandler}),l.a.createElement("button",{onClick:this.testFunction},"Upload"),l.a.createElement("button",{onClick:this.getfile},"Get File"))}}]),t}(l.a.Component),ve=n(19),je=n(55),Se=(n(664),n(350)),ke=n.n(Se),we=n(351),Ce=n.n(we),xe=n(356);function De(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?De(n,!0).forEach(function(t){Object(y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):De(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Fe=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleSaveChanges=function(e){if(e.preventDefault(),n.props.path.length){for(var t=Ne({},n.props.data),a=Object(ve.a)(n.props.path),l=t[a[0]],r=1;r<a.length;r++)l=l.data[a[r]];console.log("folder it is changing!!!!",l),l.data[n.props.index].data=n.state.text,n.props.updateData(t),n.props.userSession.putFile("/data",JSON.stringify(t),{encrypt:!1})}else{var o=n.props.match.params.path;console.log(o);var i=Ne({},n.props.data);i[o].data=n.state.text,n.props.userSession.putFile("/data",JSON.stringify(i),{encrypt:!1})}},n.modules={toolbar:[[{font:[]},{color:[]}],[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"},{align:[]}],["link","image"],["blockquote","code-block"],["clean"]]},n.formats=["font","color","header","bold","italic","underline","strike","blockquote","list","bullet","indent","align","link","image","blockquote","code-block"],n.state={text:n.props.text},n.handleChange=n.handleChange.bind(Object(je.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({text:e}),console.log(this.state.text)}},{key:"render",value:function(){var e=this.props.classes;return l.a.createElement(xe.a,{className:e.paper},l.a.createElement(Ce.a,{onClick:this.handleSaveChanges}),l.a.createElement(ke.a,{style:{height:"100%"},value:this.state.text,onChange:this.handleChange,modules:this.modules,formats:this.formats}))}}]),t}(l.a.Component),Pe=Object(_.a)({container:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},paper:{width:"96%",border:"1px solid black",height:"90vh",overflowY:"scroll"},toolbar:{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",height:"10vh"}})(Fe),Ie=Object(ee.b)(function(e){return{data:e.data,path:e.path,text:e.text,index:e.fileIndex}},{updateText:ae,updateData:te,updatePath:ne})(Pe),Te=n(814),Ue=new m.AppConfig,Le=new m.UserSession({appConfig:Ue}),_e=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={userData:null},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;Le.isSignInPending()&&Le.handlePendingSignIn().then(function(t){window.history.replaceState({},document.title,"/"),e.setState({userData:t})})}},{key:"handleSignIn",value:function(e){e.preventDefault(),Le.redirectToSignIn()}},{key:"handleSignOut",value:function(e){e.preventDefault(),Le.signUserOut(window.location.origin)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"site-wrapper"},Le.isUserSignedIn()?l.a.createElement("div",null,l.a.createElement(Te.a,{path:"/",render:function(){return l.a.createElement(Oe,null)}}),l.a.createElement("div",{id:"test",style:{boxSizing:"border-box",paddingLeft:"250px"}},l.a.createElement(Te.a,{exact:!0,path:"/files/:path?",render:function(t){return l.a.createElement(oe,Object.assign({},t,{changeText:e.setText}))}}),l.a.createElement(Te.a,{path:"/upload",render:function(){return l.a.createElement(ye,null)}}),l.a.createElement(Te.a,{path:"/profile",render:function(){return l.a.createElement(f,{userSession:Le,handleSignOut:e.handleSignOut})}}),l.a.createElement(Te.a,{exact:!0,path:"/",render:function(){return l.a.createElement(f,{userSession:Le,handleSignOut:e.handleSignOut})}}),l.a.createElement(Te.a,{path:"/editor/:path",render:function(e){return l.a.createElement(Ie,Object.assign({userSession:Le},e))}}))):l.a.createElement(b,{userSession:Le,handleSignIn:this.handleSignIn}))}}]),t}(a.Component),Ae=(n(765),n(119));function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Je(n,!0).forEach(function(t){Object(y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var He={data:{},path:[],breadcrumbs:[],text:"",levels:[],fileIndex:null},Be=n(353),qe=n(354),Ve=n.n(qe),Xe=Object(Ae.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_DATA":return ze({},e,{data:t.payload,levels:[],path:[],breadcrumbs:[]});case"UPDATE_TEXT":return ze({},e,{text:t.payload});case"DOWN_ONE_LEVEL":var n=Object(ve.a)(e.path),a=Object(ve.a)(e.breadcrumbs);a.push(t.payload.name),n.push(t.payload.index);for(var l=Object(ve.a)(e.levels),r=e.data[n[0]],o=1;o<n.length;o++)r=r.data[n[o]];return console.log("folder pushed to levels",r),l.push(r),ze({},e,{path:n,levels:l,breadcrumbs:a});case"UP_ONE_LEVEL":var i=Object(ve.a)(e.path),c=Object(ve.a)(e.levels),s=Object(ve.a)(e.breadcrumbs);return i.pop(),c.pop(),s.pop(),ze({},e,{path:i,levels:c,breadcrumbs:s});case"UPDATE_FILE_INDEX":return ze({},e,{fileIndex:t.payload});default:return e}},Object(Ae.a)(Be.a,Ve.a));o.a.render(l.a.createElement(i.a,null,l.a.createElement(ee.a,{store:Xe},l.a.createElement(_e,null))),document.getElementById("root"))}},[[380,1,2]]]);
//# sourceMappingURL=main.e7a23bce.chunk.js.map