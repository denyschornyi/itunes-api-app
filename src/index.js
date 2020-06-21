fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
    .then((res) => {
      return res.json();
    })
    .then( body => {
      console.log(body)
    })