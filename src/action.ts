import appState from "../types/appState"

const increaseLove = (state: appState) => ({
    ...state,
    loveCount: state.loveCount + 1
})

export { increaseLove }