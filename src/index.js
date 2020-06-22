
const getData = async (url) => {
  const res = await fetch(url);

  if(!res.ok){
    throw new Error(`Could not fetch ${url} recived ${res.status}`);
  }
  
  const body = await res.json();
  return body;
}
getData('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
  .then(body => {
    console.log(body);
  })
  .catch( (err) => {
    console.error('Could not fetch', err);
  })
