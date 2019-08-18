export type State = {
  readonly episodes:Array<any>,
  readonly favourites:Array<any>
}

export type Dispatch = ({type:string}:{
  type:string, 
  payload:object
}) => void

export type StoreProviderProps = {
  children:any
}
