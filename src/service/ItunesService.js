export default class ItunesService{
    _apiUrl = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

      getData = async (url)=> {
        const res = await fetch(url);
        if(!res.ok){
          throw new Error(`Could not fetch ${url} recived ${res.status}`);
        }
        return await res.json();
      }
  
      getAlbums = async () =>{
        const res = await this.getData(this._apiUrl);
        return res.feed.entry;
      }
}