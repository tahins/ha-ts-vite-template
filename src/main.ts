import { app } from 'hyperapp'
import initialState from './state'
import mainView from './view'

app({
  init: initialState,
  view: mainView,
  node: document.querySelector('#app')
})
