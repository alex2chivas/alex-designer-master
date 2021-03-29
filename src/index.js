import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance
} from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase/app'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import reducers from './reducers'
import Home from './component/homeFolder/home'
import About from './component/about/About'
// import Contact from './component/contact/Contact'
import Collections from './component/collections/Collections'
import Collection from './component/collections/Collection'
import history from '../src/history'
import Header from './component/homeFolder/header'
import EditPost from './component/forms/EditPost'
import DeletePost from './component/forms/DeletePost'
import NoMatch from './component/homeFolder/noMatch'
import NewPost from './component/forms/NewPost'
import Login from './component/auth/login'
import fbConfig from './config/fbConfig'
import { persistConfig } from './config/persistConfig'

import './scss/main.scss'

const persistedReducer = persistReducer(persistConfig, reducers)
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig)
  )
)

const persistor = persistStore(store)

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/design/about' exact component={About} />
            {/* <Route path='/design/contact' exact component={Contact} /> */}
            <Route path='/design/collection' exact component={Collections} />
            <Route path='/design/collection/:id' exact component={Collection} />
            <Route path='/design/edit/:id' exact component={EditPost} />
            <Route path='/design/delete/:id' exact component={DeletePost} />
            <Route path='/design/auth/login' exact component={Login} />
            <Route path='/design/new' exact component={NewPost} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </ReactReduxFirebaseProvider>
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
)
