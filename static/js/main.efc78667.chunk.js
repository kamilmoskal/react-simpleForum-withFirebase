(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{221:function(e,t,a){e.exports=a(430)},226:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(216),o=a.n(c),i=(a(226),a(7)),l=a(8),s=a(10),m=a(9),u=a(11),d=a(217),p=a.n(d),E=a(432),h=a(5),f=Object(h.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(E.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/",className:"red darken-3"},e.profile.name)),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/create"},"Create Topic")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/",onClick:e.signOut},"Log out")))}),b=function(){return r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(E.a,{to:"/signin"},"Log in")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/signup"},"Sign in")))},v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".sidenav");p.a.Sidenav.init(e,{edge:"left",inDuration:250})}},{key:"render",value:function(){var e=this.props,t=e.auth,a=e.profile,n=t.uid?r.a.createElement(f,{profile:a}):r.a.createElement(b,null);return r.a.createElement("nav",{className:"nav-wrapper red darken-4"},r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{to:"/",className:"brand-logo"},r.a.createElement("span",null,"Simple Forum")),r.a.createElement("a",{href:"/",className:"sidenav-trigger","data-target":"mobile-links"},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("ul",{className:"right hide-on-med-and-down"},n),r.a.createElement("ul",{className:"sidenav",id:"mobile-links"},n)))}}]),t}(n.Component),g=Object(h.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(v),O=a(26),C=a(434),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.id,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.resetAuthError()}},{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(C.a,{to:"/"}):r.a.createElement("div",{className:"container row"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"col s12 m6 offset-m3"},r.a.createElement("h5",null,"Sign in"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("div",{className:"btn red darken-4 waves-effect waves-light",onClick:this.handleSubmit},"Login")),r.a.createElement("div",{className:"center"},t?r.a.createElement("p",{className:"red-text"},t):null)))}}]),t}(n.Component),y=Object(h.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",error:t})})}));var a},resetAuthError:function(){e({type:"RESET_ERROR"})}}})(N),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",name:""},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.id,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.resetAuthError()}},{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(C.a,{to:"/"}):r.a.createElement("div",{className:"container row"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"col s12 m6 offset-m3"},r.a.createElement("h5",null,"Sign up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",id:"name",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("div",{className:"btn red darken-4 waves-effect waves-light",onClick:this.handleSubmit},"Sign up")),t?r.a.createElement("p",{className:"center red-text"},t):null))}}]),t}(n.Component),j=Object(h.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signUp:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=n.getFirestore,o=r(),i=c();o.auth().createUserWithEmailAndPassword(a.email,a.password).then(function(e){return i.collection("users").doc(e.user.uid).set({name:a.name})}).then(function(){e({type:"SIGNUP_SUCCESS"})}).catch(function(t){e({type:"SIGNUP_ERROR",error:t})})}));var a},resetAuthError:function(){e({type:"RESET_ERROR"})}}})(R),S=a(233),w=function(e){var t=e.topic;return r.a.createElement("div",{className:"card"},r.a.createElement("blockquote",{className:"flow-text"},r.a.createElement("p",{className:"text-title"},t.title,r.a.createElement("span",{className:"secondary-content black-text"},t.comments.length))))},T=function(e){var t=e.topics;return r.a.createElement("div",{className:"topic-list section"},t&&t.map(function(e){return r.a.createElement(S.a,{to:"/topic/"+e.id,key:e.id},r.a.createElement(w,{topic:e}))}))},I=a(28),_=a(21),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.topics;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m8 l6 offset-m2 offset-l3"},r.a.createElement(T,{topics:e}))))}}]),t}(n.Component),M=Object(_.d)(Object(h.b)(function(e){return{topics:e.firestore.ordered.topics}}),Object(I.firestoreConnect)([{collection:"topics"}]))(k),F=a(22),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),""!==a.state.title&&""!==a.state.content?(a.props.createTopic(a.state),a.props.history.push("/")):a.props.formNullTopic()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.resetFormError()}},{key:"render",value:function(){var e=this.props,t=e.auth,a=e.formError;return t.uid?r.a.createElement("div",{className:"container row"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"col s12 m6 offset-m3"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Topic"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Topic Content"),r.a.createElement("textarea",{onChange:this.handleChange,id:"content",className:"materialize-textarea"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn red darken-4 waves-effect waves-light"},"Create")),r.a.createElement("div",{className:"center"},a?r.a.createElement("p",{className:"red-text"},a):null))):r.a.createElement(C.a,{to:"/"})}}]),t}(n.Component),D=Object(h.b)(function(e){return{auth:e.firebase.auth,formError:e.topic.formError}},function(e){return{createTopic:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=n.getFirestore,c=a().firebase.profile,o=a().firebase.auth.uid;r().collection("topics").add(Object(F.a)({},e,{name:c.name,nameId:o,createdAt:new Date,comments:[]})).then(function(){t({type:"CREATE_TOPIC",topic:e})}).catch(function(e){t({type:"CREATE_TOPIC_ERROR",error:e})})}}(t))},formNullTopic:function(){e({type:"FORM_NULL_TOPIC"})},resetFormError:function(){e({type:"RESET_ERROR"})}}})(x),A=a(61),L=a.n(A),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={editContent:"",topicId:"",commentId:""},a.handleChange=function(e){a.setState({editContent:e.target.value})},a.handleClick=function(e){e.preventDefault(),a.setState({topicId:a.props.comment.idTopic,commentId:a.props.comment.id},function(){this.props.editComment(this.state)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.showEdit?r.a.createElement("div",{className:"input-field addcomment"},r.a.createElement("textarea",{id:"content",className:"materialize-textarea",defaultValue:this.props.comment.content,onChange:this.handleChange}),r.a.createElement("button",{className:"btn red darken-4 waves-effect waves-light",onClick:this.handleClick},"Edit comment")):r.a.createElement("div",null);return r.a.createElement("span",null,e)}}]),t}(n.Component),P=Object(h.b)(null,function(e){return{editComment:function(t){return e((a=t,function(e,t,n){n.getFirebase;var r=(0,n.getFirestore)(),c=t().firestore.data.topics[a.topicId].comments,o=[];c.forEach(function(e){o.push({content:e.content,createdAt:e.createdAt,editDate:e.editDate,edited:e.edited,id:e.id,idTopic:e.idTopic,name:e.name,nameId:e.nameId})});var i=c.findIndex(function(e){return e.id===a.commentId});o[i].content=a.editContent,o[i].editDate=new Date,o[i].edited=!0,r.collection("topics").doc(a.topicId).update({comments:o}).then(function(){e({type:"EDIT_COMMENT"})}).catch(function(t){e({type:"EDIT_COMMENT_ERROR",error:t})})}));var a}}})(U),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showEdit:!1},a.handleClick=function(){a.setState(function(e){return{showEdit:!e.showEdit}})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.comment,n=t.auth;return r.a.createElement("div",{className:"collection-item"},a.edited?r.a.createElement("span",null,"edited: ",L()(a.editDate.toDate()).calendar()):null,r.a.createElement("p",null,a.content),r.a.createElement("div",{className:"grey-text"},L()(a.createdAt.toDate()).format("MMMM Do YYYY, h:mm:ss a")),r.a.createElement("div",{className:"grey-text text-darken-1"},a.name),n.uid===a.nameId?r.a.createElement("div",{className:"delete-comment lighten-4 grey-text",onClick:function(){e.props.deleteComment(a)}},r.a.createElement("i",{className:"material-icons"},"delete_forever")):null,n.uid===a.nameId?r.a.createElement("div",{className:"delete-comment lighten-4 grey-text",onClick:this.handleClick},r.a.createElement("i",{className:"material-icons"},"edit")):null,n.uid===a.nameId?r.a.createElement(P,{showEdit:this.state.showEdit,comment:a}):null)}}]),t}(n.Component),Y=Object(h.b)(function(e){return{auth:e.firebase.auth}},function(e){return{deleteComment:function(t){return e((a=t,function(e,t,n){n.getFirebase;var r=(0,n.getFirestore)(),c=t().firestore.data.topics[a.idTopic].comments.filter(function(e){return e.id!==a.id});r.collection("topics").doc(a.idTopic).update({comments:c}).then(function(){e({type:"DELETE_COMMENT"})}).catch(function(t){e({type:"DELETE_COMMENT_ERROR",error:t})})}));var a}}})(G),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={content:"",topicId:"",commentId:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){if(e.preventDefault(),""!==a.state.content){var t=10*Math.random();a.setState({topicId:a.props.location.pathname.slice(7),commentId:t},function(){this.props.createComment(this.state),this.setState({content:""}),this.props.resetFormError()})}else a.props.formNullComment()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.resetFormError()}},{key:"render",value:function(){var e=this.props,t=e.topic,a=e.auth,n=e.formError,c=a.uid?r.a.createElement("div",{className:"card col s12 m12 l8 offset-l2"},r.a.createElement("div",{className:"card-content"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange,value:this.state.content}),r.a.createElement("label",{htmlFor:"textarea1"},"Comment")),r.a.createElement("button",{className:"btn red darken-4 waves-effect waves-light",onClick:this.handleSubmit},"Add comment"),r.a.createElement("div",{className:"center"},n?r.a.createElement("p",{className:"red-text"},n):null)))):r.a.createElement("div",{className:"card center z-depth-0 col s12 m12 l8 offset-l2 grey-text"},"log in to add comments");return t?r.a.createElement("div",{className:"container section row"},r.a.createElement("div",{className:"card col s12 m12 l8 offset-l2"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"flow-text"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action lighten-4 grey-text"},r.a.createElement("div",null,L()(t.createdAt.toDate()).calendar()),r.a.createElement("div",null,t.name))),r.a.createElement("div",{className:"collection col s12 m12 l8 offset-l2"},t.comments&&t.comments.map(function(e){return r.a.createElement(Y,{comment:e,key:e.id})})),c):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading topic..."))}}]),t}(n.Component),W=Object(_.d)(Object(h.b)(function(e,t){var a=t.location.pathname.slice(7),n=e.firestore.data.topics;return{topic:n?n[a]:null,auth:e.firebase.auth,formError:e.topic.formError}},function(e){return{createComment:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,o=a().firebase.auth.uid;r.collection("topics").doc(e.topicId).update({comments:r.FieldValue.arrayUnion({content:e.content,id:e.commentId,idTopic:e.topicId,name:c.name,nameId:o,createdAt:new Date,editDate:"",edited:!1})}).then(function(){t({type:"CREATE_COMMENT",topic:e})}).catch(function(e){t({type:"CREATE_COMMENT_ERROR",error:e})})}}(t))},formNullComment:function(){e({type:"FORM_NULL_COMMENT"})},resetFormError:function(){e({type:"RESET_ERROR"})}}}),Object(I.firestoreConnect)([{collection:"topics"}]))(z),B=a(433),q=a(435),H=a(431),J=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(B.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(q.a,null,r.a.createElement(H.a,{exact:!0,path:"/",component:M}),r.a.createElement(H.a,{path:"/signin",component:y}),r.a.createElement(H.a,{path:"/signup",component:j}),r.a.createElement(H.a,{path:"/create",component:D}),r.a.createElement(H.a,{patch:"/topic/:id",component:W}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(381);var K={authError:null},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;return"LOGIN_SUCCESS"===t.type?(console.log("You logged in succesfull!"),Object(F.a)({},e,{authError:null})):"LOGIN_ERROR"===t.type?(console.log("You failed log in!",t.error),Object(F.a)({},e,{authError:"Login failed"})):"SIGNOUT_SUCCESS"===t.type?(console.log("You logged out sucesfull"),e):"SIGNUP_SUCCESS"===t.type?(console.log("You signed up sucesfull"),Object(F.a)({},e,{authError:null})):"SIGNUP_ERROR"===t.type?(console.log("Signup error"),Object(F.a)({},e,{authError:t.error.message})):"RESET_ERROR"===t.type?Object(F.a)({},e,{authError:null}):e},$={formError:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;return"CREATE_TOPIC"===t.type?(console.log("created topic"),e):"CREATE_TOPIC_ERROR"===t.type?(console.log("created topic error",t.error),e):"CREATE_COMMENT"===t.type?(console.log("created comment"),e):"CREATE_COMMENT_ERROR"===t.type?(console.log("created comment error",t.error),e):"DELETE_COMMENT"===t.type?(console.log("comment deleted"),e):"DELETE_COMMENT_ERROR"===t.type?(console.log("comment delete error",t.error),e):"EDIT_COMMENT"===t.type?(console.log("comment edited"),e):"EDIT_COMMENT_ERROR"===t.type?(console.log("comment edit error",t.error),e):"FORM_NULL_TOPIC"===t.type?Object(F.a)({},e,{formError:"To publish topic, you must fill title and content"}):"FORM_NULL_COMMENT"===t.type?Object(F.a)({},e,{formError:"To publish comment, you must fill content"}):"RESET_ERROR"===t.type?Object(F.a)({},e,{formError:null}):e},X=a(62),Z=Object(_.c)({auth:V,topic:Q,firestore:X.firestoreReducer,firebase:I.firebaseReducer}),ee=a(220),te=a(90),ae=a.n(te);a(423),a(428);ae.a.initializeApp({apiKey:"AIzaSyDR0yKOSTWhzOM_Y_p83p9IidxCbxDaHno",authDomain:"forum-98544.firebaseapp.com",databaseURL:"https://forum-98544.firebaseio.com",projectId:"forum-98544",storageBucket:"forum-98544.appspot.com",messagingSenderId:"152163714241"}),ae.a.firestore().settings({timestampsInSnapshots:!0});var ne=ae.a,re=Object(_.e)(Z,Object(_.d)(Object(_.a)(ee.a.withExtraArgument({getFirebase:I.getFirebase,getFirestore:X.getFirestore})),Object(X.reduxFirestore)(ne),Object(I.reactReduxFirebase)(ne,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));re.firebaseAuthIsReady.then(function(){o.a.render(r.a.createElement(h.a,{store:re},r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[221,2,1]]]);
//# sourceMappingURL=main.efc78667.chunk.js.map