import React, { Suspense, Component } from 'react';

import './list.css';

import Service from '../../service/';
import Item from '../item'
import Header from '../header'

export default class List extends Component {

    state = {
        posts: [],
        term: ''
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
    onSearchChange(term){
        console.log(term);
        this.setState( {term} );
    }
    render() {
        const loadingImg = <div className="album-img">
          <img alt="loading" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" />
        </div>
        
        
        const albums = this.state.posts.map(e => {
          return (
              
            <Suspense key={e.id.label} fallback={loadingImg}>
              <Item
                id={e.id.attributes['im:id']}
                image={e["im:image"][1].label}
                title={e.title.label}
                link={e.id.label}
                price={e["im:price"].label}
                artist={e['im:artist'].label}
                name={e['im:name'].label}
                category={e.category}
                releaseDate={e['im:releaseDate'].attributes.label}
              />
            </Suspense>
          );
        });
    
        return (
            <div className="container">
                <Header  onSearchChange={this.onSearchChange} />
                <div className="albums accordion container" id="accordionExample">
                    {albums}
                </div>
            </div>
        );
      }
}
