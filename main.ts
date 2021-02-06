import './style.scss'

import { app, text } from 'hyperapp'
import { main, p } from '@hyperapp/html'

interface appState {
  libraries: Array<string>
}

const initialState: appState = {
  libraries: ["Hyperapp +\\", "Typescript TS", "Vite ⚡"]
}

app({
  init: initialState,
  view: ({ libraries }: appState) => main(
    libraries.map(item =>
      p({}, text(item))
    )
  ),
  node: document.querySelector('#app')
})
