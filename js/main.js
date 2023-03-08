//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
window.onload = getFetch;

const key = 'ggekUVbNrmWc1jK3CK9uDZrVkroFUS4Bf4K55Ywc'

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        if( data.media_type === 'image' ){
          document.querySelector('img').src = data.hdurl
        } else if ( data.media_type === 'video' ){
          document.querySelector('iframe').src = data.url
        }    

        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

