import React from 'react'
import VideoContainer from './VideoContainer'
import NavBar from './NavBar'
import Login from './Login'
import Filter from "./Filter";


export default class Main extends React.Component {
  // state = {
  //     videos: [],
  //     searchResults: []
  // }


  state = {
    videos: this.props.videos,
    filteredVideos: [],
    searchResults: this.props.videos,
    filter: "All"
  };

  filterVideos = value => {
    this.setState({
      filter: value,
      filteredVideos: this.state.videos.filter(
        video => video.language === value
      )
    });
  };

    
    handleSubmit = (value) => {
        let original = this.state.videos
        let searchResults = original.filter(video => video.title.toLowerCase().includes(value))
        this.setState({searchResults: searchResults})
        this.loadVideos()
    }

  loadVideos = () => {
    // console.log(this.state.searchResults)
    // console.log(this.state.videos)
    console.log(this.state);
    if (this.state.videos === this.state.searchResults) {
      return (
        <VideoContainer
          filterVideos={this.filterVideos}
          videos={this.props.videos}
          filteredVideos={this.state.filteredVideos}
          filter={this.state.filter}
          languageOptions={this.languageOptions}
        />
      );
    } else {
      return (
        <VideoContainer
          filterVideos={this.filterVideos}
          videos={this.props.videos}
          filteredVideos={this.state.filteredVideos}
          filter={this.state.filter}
          languageOptions={this.languageOptions}
        />
      );
    }
  };

    render(){
       // console.log(this.handleLoginSubmit)
        return(
            <div className="main-page">
                <NavBar handleSubmit={this.handleSubmit}/>
                
                <div className="filter-container">
                  <Filter
                    filterVideos={this.filterVideos}
                    languageOptions={this.languageOptions}
                  />
                </div>
                {this.loadVideos()}
            </div>
        )
    }

  // componentDidMount(){
  //     fetch('localhost:3000/videos')
  //     .then((res) => {return res.json})
  //     .then((videos) => this.setState({videos: videos}))
  // }
}
