import { Episode } from '../../../typings/components/EpisodesList'
import { Dispatch, State } from '../../../typings/store'

export const toggleFavAction = (dispatch:Dispatch, state:State, episode:Episode) => {

  if(!state.favourites.includes(episode)) {
    return dispatch({
      type:'ADD_FAV',
      payload:episode
    })
  } else {
    return dispatch({
      type:'REMOVE_FAV',
      payload:episode
    })
  } 
}