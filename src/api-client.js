const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=17b5359a9a420dbd83b8b7f06a9e9b8e&format=json'

function getArtists(){
    return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
      return {
        name: artist.name,
        image: artist.image[3]['#text'],
        likes: 200,
        comments: 140
      }
    }))
}

export { getArtists }
