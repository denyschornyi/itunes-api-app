
const getData = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
}
getData('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
  .then(body => {
    console.log(body);
  })
