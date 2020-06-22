import ItunesService from './service/itunes-service'

const data = new ItunesService();

data.getAlbums().then( albums => {
  console.log(albums);
  albums.forEach(album => {
    console.log(album);
  });
});
