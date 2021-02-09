import { text } from 'hyperapp'
import { main, p, div, span } from '@hyperapp/html'
import appState from "../types/appState";
import { increaseLove } from './action';

import './style.scss'

const mainView = ({ libraries, loveCount }: appState) => (main(
    [
        div({},
            libraries.map(item =>
                p({}, text(item))
            )
        ),
        div({ class: "love-container" }, [
            span({ class: "love-button", onclick: increaseLove }, text("💗")),
            span({ class: "love-count", "data-testid": "love-count" }, text(`${loveCount}`))
        ])
    ])
)

export default mainView