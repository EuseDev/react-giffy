import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if(Array.isArray(data)){
    const gifs = data.map(image => {
      const {images, title, id} = image
      const { url } = images.downsized_medium
      return { title, id, url}
    })
   return gifs
  }
  return []
}

export default function getGifs({limit = 25, keyword ='random'}){
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}


/*

la version que hice antes de la peticion a la api
export default function getGifs({keyword = 'morty'} = []){
    const apiURL =`${API_URL}/gifs/search?api_key=${API_KEY}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response
      if(Array.isArray(data)){
      const gifs = data.map(image => {
        const {images, title, id} = image
        const { url } = images.fixed_height_downsampled
        return {title, id, url}
      })
      
      return gifs
      }
    })
}
*/