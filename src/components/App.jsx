class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: exampleVideoData[0]
    };
  }
  // e is the video being selected


  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.selectedVideo} />
        </div>
        <div className="col-md-5">
          <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={exampleVideoData} />          
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
