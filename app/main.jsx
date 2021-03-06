'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import {fetchQueue} from 'APP/app/reducers/queue'
import {fetchSetItems} from 'APP/app/reducers/set'
import {whoami} from 'APP/app/reducers/auth'
import {fetchAllSetsFromDb} from 'APP/app/reducers/sets'
import store from 'APP/app/store'
import {Output} from 'APP/app/components/Output'
import {Root} from 'APP/app/components/Root'
import LiveApp from './containers/LiveApp'
import EffectScreen from './containers/EffectScreen'
import Controller from './containers/Controller'
import axios from 'axios'

const socket = io(window.location.origin)

socket.on('connect', () => {
  // console.log("*******I have connected to the server!*****")
})

const onRootEnter = () => {
  store.dispatch(fetchQueue('queueLeft'))
  store.dispatch(fetchQueue('queueRight'))
  store.dispatch(fetchSetItems())
  store.dispatch(whoami)
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root} onEnter={onRootEnter} />
      <Route path="/output" component={Output} onEnter={onRootEnter}/>
      <Route path="/live" component={LiveApp} />
      {/*Testing Routes*/}
      <Route path="/effects" component={EffectScreen} />
      <Route path="/controller" component={Controller}/>
    </Router>
  </Provider>,
  document.getElementById('main')
)
