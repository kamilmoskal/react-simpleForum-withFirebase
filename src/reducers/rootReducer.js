import authReducer from './authReducer'
import topicReducer from './topicReducer'
import { combineReducers } from 'redux'
/// zeby brac dane z firebase
import { firestoreReducer } from 'redux-firestore'
/// do auth
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth : authReducer,
    topic: topicReducer,
    //// 1 dostep do danych z bazy /2 connect component z data base
    firestore: firestoreReducer,
    firebase: firebaseReducer   /// jesli bierzemy state z firestora to zwraca nam także informacje firebase w tym stan usera auth

})

export default rootReducer