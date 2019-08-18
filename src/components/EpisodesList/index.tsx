import React from 'react'
import { Store } from '../../store'
import { ContextProps } from '../../typings/context'
import { 
  Episode, 
  EpisodesListProps 
} from '../../typings/components/EpisodesList'

import { toggleFavAction } from './funcs/index.funcs'

export const EpisodesList = (props:EpisodesListProps) => {
  
  const { episodes } = props

  const context:ContextProps = React.useContext(Store)
  const { state, dispatch }: ContextProps = context

  return (
    <section className="episode-layout">
    {
      episodes.map((episode:Episode, index:number) => (
        <section className="episode-box" key={index}>
          <img 
            src={episode.image.medium} 
            alt={`Rick and Morty ${episode.name}`}
          />
          <div>{episode.name}</div>
          <div>
            Season: {episode.season} Number: {episode.number}
            <button 
              type="button"
              onClick={() => toggleFavAction(dispatch, state, episode)}
            >
              {
                state.favourites.find(fav => 
                  fav.id === episode.id) ? `\u2764` : `Fav` 
              }
            </button>
          </div>
        </section>
      ))
    }
    </section>
  )
}

export default EpisodesList