export default class ItunesService{
    _apiUrl = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

      getData = async (url)=> {
        const res = await fetch(url);
        if(!res.ok){
          throw new Error(`Could not fetch ${url} recived ${res.status}`);
        }
        return await res.json();
      }
  
      getAlbums = async () => {
        const res = await this.getData(this._apiUrl);
        const resData = res.feed.entry;
        return resData.map(this._transformData);
      }

      _transformData = (album) =>{
        return{
          id: album.id.attributes['im:id'],
          img: album['im:image']['2'].label,
          artistName: album['im:artist'].label,
          albumName: album['im:name'].label,
          price: album['im:price'].label,
          releaseDate: album['im:releaseDate'].attributes.label,
          link: album.link.attributes.href,
          rights: album.rights.label,
          title: album.title.label,
        }
      }
}