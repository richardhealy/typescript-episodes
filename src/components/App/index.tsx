import React from 'react'

import { Store } from '../../store'
import { ContextProps } from '../../typings/context'
import '../../css/style.css'

import EpisodesList from '../EpisodesList'

import { dispatchFetchData } from './funcs/index.funcs'

export const App = () => {

  const context:ContextProps = React.useContext(Store)
  const { state, dispatch }: ContextProps = context

  React.useEffect( () => {
    state.episodes.length === 0 && dispatchFetchData(dispatch)
  })

  const { episodes } = state

  return (
    <>
      <div className="header">
        <h1>TypeScript Test</h1>
        <p>TypeScript, React and Hooks</p>
      </div>
      <EpisodesList episodes={episodes} />
    </>
  )
}

export default App
