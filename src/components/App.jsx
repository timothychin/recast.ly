class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      selectedVideo: null
    };
  // e is the video being selected
  // onVideoSelect () {
  //   this.setState({selectedVideo})
  // }
  }
  
  componentDidMount () {
    console.log(props);
    var result = this.props.searchYouTube({key: window.YOUTUBE_API_KEY, q: 'cats', maxResults: 5}, i => i);  
    var currentVideo = result[0];
    this.setState({      
      videoList: result,
      selectedVideo: result[0]
    });
  }
  


  render () {
    return (
      <div>
        {console.log(props)}
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
