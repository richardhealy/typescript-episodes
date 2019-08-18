import {
  State,
  Dispatch
} from '../store'

export interface ContextProps {
  state: State
  dispatch: Dispatch
}
