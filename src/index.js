class ItunesApi{
  _apiUrl = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';
  async getData(url){
    const res = await fetch(url);

    if(!res.ok){
      throw new Error(`Could not fetch ${url} recived ${res.status}`);
    }
    return await res.json();
  }

  getMusicArray(){
    return this.getData(this._apiUrl);
  }

}

const data = new ItunesApi();

data.getMusicArray().then( body => {
  const musicArr = body.feed.entry;
  console.log(musicArr);
});
