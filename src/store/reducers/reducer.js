    
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';

const reducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer
});

export default reducer