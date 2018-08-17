import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Searchbar from 'searchBar';
import _ from 'lodash';
// import { BrowserRouter as Router, Route, IndexRoute, hashHistory, Switch} from 'react-router-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './src/components/videoList';
import VideoDetail from './src/components/VideoDetail';
const API_KEY = 'AIzaSyDEdFyl5a5iAu8ZFwKzu3SdUstnqEFp1gY';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {videos: [], selectedVideo: null};
    this.videoSearch('iPhone X');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, videos=> this.setState({videos:videos,selectedVideo:videos[0]}));
  }

  render(){

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <Searchbar onSearchTermChange={videoSearch}/>
        <VideoDetail  video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);
