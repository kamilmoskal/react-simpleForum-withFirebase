(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{221:function(e,t,a){e.exports=a(430)},226:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(216),o=a.n(c),i=(a(226),a(14)),l=a(15),s=a(17),m=a(16),u=a(18),d=a(217),p=a.n(d),E=a(432),f=a(6),h=Object(f.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(E.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/",className:"red darken-3"},e.profile.name)),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/create"},"Create Topic")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/",onClick:e.signOut},"Log out")))}),b=function(){return r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(E.a,{to:"/signin"},"Log in")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/signup"},"Sign in")))},g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".sidenav");p.a.Sidenav.init(e,{edge:"left",inDuration:250})}},{key:"render",value:function(){var e=this.props,t=e.auth,a=e.profile,n=t.uid?r.a.createElement(h,{profile:a}):r.a.createElement(b,null);return r.a.createElement("nav",{className:"nav-wrapper red darken-4"},r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{to:"/",className:"brand-logo"},r.a.createElement("span",null,"Simple Forum")),r.a.createElement("a",{href:"/",className:"sidenav-trigger","data-target":"mobile-links"},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("ul",{className:"right hide-on-med-and-down"},n),r.a.createElement("ul",{className:"sidenav",id:"mobile-links"},n)))}}]),t}(n.Component),v=Object(f.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(g),O=a(26),N=a(434),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.id,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.resetAuthError()}},{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(N.a,{to:"/"}):r.a.createElement("div",{className:"container row"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"col s12 m6 offset-m3"},r.a.createElement("h5",null,"Sign in"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("div",{className:"btn red darken-4 waves-effect waves-light",onClick:this.handleSubmit},"Login")),r.a.createElement("div",{className:"center"},t?r.a.createElement("p",{className:"red-text"},t):null)))}}]),t}(n.Component),C=Object(f.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",error:t})})}));var a},resetAuthError:function(){e({type:"RESET_ERROR"})}}})(y),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",name:""},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.id,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.resetAuthError()}},{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(N.a,{to:"/"}):r.a.createElement("div",{className:"container row"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"col s12 m6 offset-m3"},r.a.createElement("h5",null,"Sign up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",id:"name",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("div",{className:"btn red darken-4 waves-effect waves-light",onClick:this.handleSubmit},"Sign up")),t?r.a.createElement("p",{className:"center red-text"},t):null))}}]),t}(n.Component),j=Object(f.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signUp:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=n.getFirestore,o=r(),i=c();o.auth().createUserWithEmailAndPassword(a.email,a.password).then(function(e){return i.collection("users").doc(e.user.uid).set({name:a.name})}).then(function(){e({type:"SIGNUP_SUCCESS"})}).catch(function(t){e({type:"SIGNUP_ERROR",error:t})})}));var a},resetAuthError:function(){e({type:"RESET_ERROR"})}}})(R),S=a(233),w=function(e){var t=e.topic;return r.a.createElement("div",{className:"card"},r.a.createElement("blockquote",{className:"flow-text"},r.a.createElement("p",{className:"text-title"},t.title,r.a.createElement("span",{className:"secondary-content black-text"},t.comments.length))))},T=function(e){var t=e.topics;return r.a.createElement("div",{className:"topic-list section"},t&&t.map(function(e){return r.a.createElement(S.a,{to:"/topic/"+e.id,key:e.id},r.a.createElement(w,{topic:e}))}))},_=a(28),F=a(21),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.topics;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m8 l6 offset-m2 offset-l3"},r.a.createElement(T,{topics:e}))))}}]),t}(n.Component),k=Object(F.d)(Object(f.b)(function(e){return{topics:e.firestore.ordered.topics}}),Object(_.firestoreConnect)([{collection:"topics"}]))(I),M=a(22),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),""!==a.state.title&&""!==a.state.content?(a.props.createTopic(a.state),a.props.history.push("/")):a.props.formNullTopic()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.resetFormError()}},{key:"render",value:function(){var e=this.props,t=e.auth,a=e.formError;return t.uid?r.a.createElement("div",{className:"container row"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"col s12 m6 offset-m3"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Topic"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Topic Content"),r.a.createElement("textarea",{onChange:this.handleChange,id:"content",className:"materialize-textarea"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn red darken-4 waves-effect waves-light"},"Create")),r.a.createElement("div",{className:"center"},a?r.a.createElement("p",{className:"red-text"},a):null))):r.a.createElement(N.a,{to:"/"})}}]),t}(n.Component),A=Object(f.b)(function(e){return{auth:e.firebase.auth,formError:e.topic.formError}},function(e){return{createTopic:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=n.getFirestore,c=a().firebase.profile,o=a().firebase.auth.uid;r().collection("topics").add(Object(M.a)({},e,{name:c.name,nameId:o,createdAt:new Date,comments:[]})).then(function(){t({type:"CREATE_TOPIC",topic:e})}).catch(function(e){t({type:"CREATE_TOPIC_ERROR",error:e})})}}(t))},formNullTopic:function(){e({type:"FORM_NULL_TOPIC"})},resetFormError:function(){e({type:"RESET_ERROR"})}}})(x),L=a(89),D=a.n(L),U=Object(f.b)(function(e){return{auth:e.firebase.auth}},function(e){return{deleteComment:function(t){return e((a=t,function(e,t,n){n.getFirebase;var r=(0,n.getFirestore)(),c=t().firestore.data.topics[a.idTopic].comments.filter(function(e){return e.id!==a.id});r.collection("topics").doc(a.idTopic).update({comments:c}).then(function(){e({type:"DELETE_COMMENT",topic:a})}).catch(function(t){e({type:"DELETE_COMMENT_ERROR",error:t})})}));var a}}})(function(e){var t=e.comment,a=e.auth;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("p",null,t.content),r.a.createElement("div",{className:"lighten-4 grey-text"},D()(t.createdAt.toDate()).calendar()),r.a.createElement("div",{className:"lighten-4 grey-text"},t.name),a.uid===t.nameId?r.a.createElement("div",{className:"delete-comment lighten-4 grey-text",onClick:function(){e.deleteComment(t)}},r.a.createElement("i",{className:"material-icons"},"delete_forever")):null)}),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={content:"",topicId:"",commentId:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){if(e.preventDefault(),""!==a.state.content){var t=10*Math.random();a.setState({topicId:a.props.location.pathname.slice(7),commentId:t},function(){this.props.createComment(this.state),this.setState({content:""}),this.props.resetFormError()})}else a.props.formNullComment()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.resetFormError()}},{key:"render",value:function(){var e=this.props,t=e.topic,a=e.auth,n=e.formError,c=a.uid?r.a.createElement("div",{className:"card col s12 m12 l8 offset-l2"},r.a.createElement("div",{className:"card-content"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange,value:this.state.content}),r.a.createElement("label",{htmlFor:"textarea1"},"Comment")),r.a.createElement("button",{className:"btn red darken-4 waves-effect waves-light",onClick:this.handleSubmit},"Add comment"),r.a.createElement("div",{className:"center"},n?r.a.createElement("p",{className:"red-text"},n):null)))):r.a.createElement("div",{className:"card center z-depth-0 col s12 m12 l8 offset-l2 grey-text"},"log in to add comments");return t?r.a.createElement("div",{className:"container section row"},r.a.createElement("div",{className:"card col s12 m12 l8 offset-l2"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"flow-text"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action lighten-4 grey-text"},r.a.createElement("div",null,D()(t.createdAt.toDate()).calendar()),r.a.createElement("div",null,t.name))),r.a.createElement("div",{className:"collection col s12 m12 l8 offset-l2"},t.comments&&t.comments.map(function(e){return r.a.createElement(U,{comment:e,key:e.id})})),c):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading topic..."))}}]),t}(n.Component),G=Object(F.d)(Object(f.b)(function(e,t){var a=t.location.pathname.slice(7),n=e.firestore.data.topics;return{topic:n?n[a]:null,auth:e.firebase.auth,formError:e.topic.formError}},function(e){return{createComment:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,o=a().firebase.auth.uid;r.collection("topics").doc(e.topicId).update({comments:r.FieldValue.arrayUnion({content:e.content,id:e.commentId,idTopic:e.topicId,name:c.name,nameId:o,createdAt:new Date})}).then(function(){t({type:"CREATE_COMMENT",topic:e})}).catch(function(e){t({type:"CREATE_COMMENT_ERROR",error:e})})}}(t))},formNullComment:function(){e({type:"FORM_NULL_COMMENT"})},resetFormError:function(){e({type:"RESET_ERROR"})}}}),Object(_.firestoreConnect)([{collection:"topics"}]))(P),z=a(433),W=a(435),Y=a(431),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(z.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(W.a,null,r.a.createElement(Y.a,{exact:!0,path:"/",component:k}),r.a.createElement(Y.a,{path:"/signin",component:C}),r.a.createElement(Y.a,{path:"/signup",component:j}),r.a.createElement(Y.a,{path:"/create",component:A}),r.a.createElement(Y.a,{patch:"/topic/:id",component:G}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(381);var q={authError:null},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;return"LOGIN_SUCCESS"===t.type?(console.log("You logged in succesfull!"),Object(M.a)({},e,{authError:null})):"LOGIN_ERROR"===t.type?(console.log("You failed log in!",t.error),Object(M.a)({},e,{authError:"Login failed"})):"SIGNOUT_SUCCESS"===t.type?(console.log("You logged out sucesfull"),e):"SIGNUP_SUCCESS"===t.type?(console.log("You signed up sucesfull"),Object(M.a)({},e,{authError:null})):"SIGNUP_ERROR"===t.type?(console.log("Signup error"),Object(M.a)({},e,{authError:t.error.message})):"RESET_ERROR"===t.type?Object(M.a)({},e,{authError:null}):e},J={formError:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;return"CREATE_TOPIC"===t.type?(console.log("created topic"),e):"CREATE_TOPIC_ERROR"===t.type?(console.log("created topic error",t.error),e):"CREATE_COMMENT"===t.type?(console.log("created comment"),e):"CREATE_COMMENT_ERROR"===t.type?(console.log("created comment error",t.error),e):"DELETE_COMMENT"===t.type?(console.log("comment deleted"),e):"DELETE_COMMENT_ERROR"===t.type?(console.log("comment delete error",t.error),e):"FORM_NULL_TOPIC"===t.type?Object(M.a)({},e,{formError:"To publish topic, you must fill title and content"}):"FORM_NULL_COMMENT"===t.type?Object(M.a)({},e,{formError:"To publish comment, you must fill content"}):"RESET_ERROR"===t.type?Object(M.a)({},e,{formError:null}):e},V=a(61),$=Object(F.c)({auth:H,topic:K,firestore:V.firestoreReducer,firebase:_.firebaseReducer}),Q=a(220),X=a(90),Z=a.n(X);a(423),a(428);Z.a.initializeApp({apiKey:"AIzaSyDR0yKOSTWhzOM_Y_p83p9IidxCbxDaHno",authDomain:"forum-98544.firebaseapp.com",databaseURL:"https://forum-98544.firebaseio.com",projectId:"forum-98544",storageBucket:"forum-98544.appspot.com",messagingSenderId:"152163714241"}),Z.a.firestore().settings({timestampsInSnapshots:!0});var ee=Z.a,te=Object(F.e)($,Object(F.d)(Object(F.a)(Q.a.withExtraArgument({getFirebase:_.getFirebase,getFirestore:V.getFirestore})),Object(V.reduxFirestore)(ee),Object(_.reactReduxFirebase)(ee,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));te.firebaseAuthIsReady.then(function(){o.a.render(r.a.createElement(f.a,{store:te},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[221,2,1]]]);
//# sourceMappingURL=main.db92406d.chunk.js.map