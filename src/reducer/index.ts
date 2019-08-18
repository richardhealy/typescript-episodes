import { 
  State, 
} from '../typings/store'
import {
  Action
} from '../typings/reducer'

export const initialState:ReadonlyState = {
  episodes:[],
  favourites:[]
}

// Makes state immutable (to a point)
// Anything beyond and array of arrays
// will not have immmuatability or (in current
// implementation) will complain when using Array
// functions (like map).
type DeepReadonlyObject<T> = { 
  readonly [K in keyof T]: DeepReadonly<T[K]> 
}

type DeepReadonly<T> = T extends (infer E)[] ? ReadonlyArray<DeepReadonlyObject<E>> : //arrays
  T extends object ? DeepReadonlyObject<T> : // objects
  T // any other type

type ReadonlyState = DeepReadonly<State>

export default function reducer(state:ReadonlyState, action:Action): ReadonlyState {
  switch (action.type) {
    case 'ADD_FAV':
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      }
      case 'REMOVE_FAV':
          const filtered = state.favourites.filter(item => {
            return item.id !== action.payload.id
          })

          return {
            ...state,
            favourites: [...filtered]
          }
    case 'FETCH_DATA':
      return {
        ...state,
        episodes:action.payload
      }
    default :
      return state
  }
}