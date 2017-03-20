import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  command: require('./command').default  
})

export default rootReducer
