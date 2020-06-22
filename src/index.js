class ItunesApi{
  _apiUrl = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';
  async getData(url){
    const res = await fetch(url);

    if(!res.ok){
      throw new Error(`Could not fetch ${url} recived ${res.status}`);
    }
    return await res.json();
  }

  async getAlbums(){
    const res = await this.getData(this._apiUrl);
    return res.feed.entry;
  }

}

const data = new ItunesApi();

data.getAlbums().then( albums => {
  console.log(albums);
  albums.forEach(album => {
    console.log(album);
  });
});
