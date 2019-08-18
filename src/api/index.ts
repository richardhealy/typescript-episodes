const fetchEpisodeAction = async (): Promise<Response> => {
  const apiUrl = 'https://api.tvmaze.com/singlesearch/shows?q=game+of+thrones&embed=episodes'
  return fetch(apiUrl)
}

const Api = {
  fetchEpisodeAction
}

export default Api
