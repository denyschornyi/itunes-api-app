import React, { Suspense, Component } from 'react';

import './list.css';

import Service from '../../service/';
import Item from '../item'

export default class List extends Component {

    state = {
        posts: [],
    }   
    
    
    componentDidMount() {
        const service = new Service();
        service.getAlbums()
            .then(res => {
                this.setState ({
                    posts: res
                });
            })
    }

    render() {
        const loadingImg = <div className="album-img">
          <img alt="loading" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" />
        </div>
        
        
        const albums = this.state.posts.map(e => {
          return (
            <Suspense key={e.id.label} fallback={loadingImg}>
              <Item
                image={e["im:image"][2].label}
                title={e.title.label}
                link={e.id.label}
                price={e["im:price"].label}
                date={e["im:releaseDate"].label}
              />
            </Suspense>
          );
        });
    
        return (
            <div className="albums">
              {albums}
            </div>
        );
      }
}
