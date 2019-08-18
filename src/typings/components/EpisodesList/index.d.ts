export type Episode = {
  id:number
  image: {
    medium:string
  }
  name:string
  season:number
  number:number
}

export type EpisodesListProps = {
  episodes: Array<Episode>
}
