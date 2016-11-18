class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      selectedVideo: exampleVideoData[0]
    };
  // e is the video being selected
  // onVideoSelect () {
  //   this.setState({selectedVideo})
  // }
  }
  
  componentDidMount () {
    // what to do with this props 
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, q: 'rick-astley', maxResults: 5}, (video) => {
      this.setState({      
        videoList: video,
        selectedVideo: video[0]
      });
    }); 
  }
  


  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.selectedVideo} />
        </div>
        <div className="col-md-5">
          <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videoList} />         
        </div>
      </div>
    );
  }
}
// {<VideoList onVideoSelect={this.onVideoSelect.bind(this)} videos={exampleVideoData} />}         

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
