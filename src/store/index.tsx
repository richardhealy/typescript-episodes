import React from 'react'
import { 
  StoreProviderProps,
} from '../typings/store'
import {
  ContextProps
} from '../typings/context'

import reducer, { initialState } from '../reducer'

export const Store = React.createContext({} as ContextProps)

export const StoreProvider: React.FC<StoreProviderProps> = (props:StoreProviderProps, {}) => {

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const context = {state , dispatch}
  return (
    <Store.Provider value={context}>
      {props.children}
    </Store.Provider>
  )
}
