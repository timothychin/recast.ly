class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: true
    };
  }

  onMouseClick (e) {
    this.setState({
      currentSong: false
    }); 
  }

  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={exampleVideoData[0]} />
        </div>
        <div className="col-md-5">
          <VideoList onMouseClick={this.onMouseClick} videos={exampleVideoData} playing={this.state.currentSong}/>          
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
