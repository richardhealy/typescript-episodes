import Api from '../../../api'
import { Dispatch } from '../../../typings/store'

export const dispatchFetchData = async (dispatch:Dispatch) => {

  const data = await Api.fetchEpisodeAction()
  const dataJSON = await data.json()
  await dispatch({
    type:'FETCH_DATA',
    payload:dataJSON._embedded.episodes
  })
}