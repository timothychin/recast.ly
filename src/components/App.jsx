class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      selectedVideo: exampleVideoData[0],
      query: 'cats'
    };
    this.onVideoSearch = this.onVideoSearch.bind(this);
  // e is the video being selected
  // onVideoSelect () {
  //   this.setState({selectedVideo})
  // }
  }
  
  componentDidMount () {
    // what to do with this props 
    var options = {
      key: window.YOUTUBE_API_KEY, 
      q: 'cats', 
      maxResults: 5
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({      
        videoList: videos,
        selectedVideo: videos[0]
      });
    }); 
  }
  
  onVideoSearch (query) {
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY, 
      q: query, 
      maxResults: 5
    }, 
    (videos) => {
      this.setState({      
        videoList: videos
      });
    }).bind(this); 
  }
  
  


  render () {
    return (
      <div>
        <Nav onVideoSearch={this.onVideoSearch}/>
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
