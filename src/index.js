import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "materialize-css/dist/css/materialize.min.css";
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
/////connecting with firebase
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
/// thunk with extra argument firebase/firestore umozliwia w action async do bazydanych
import fbConfig from './fbConfig'

const store = createStore(rootReducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {useFirestoreForProfile: true , userProfile: 'users', attachAuthIsReady: true})
    )///// reactReduxFirebase first 2 parameters, zmus firebase to dodanie do state profili userow
);     

//////wait for firebase auth initialize and then render dom to prevent wrong dom flash/dispaly based on auth status
///// added attachAuthIsReady as second parametr to reactReduxFirebase and store.firebaseAuthIsReady.then before render DOM
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
})
