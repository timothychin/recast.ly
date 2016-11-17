// import exampleVideoData;

var VideoList = (props) => {
  const videoEntries = props.videos.map(video => 
    <VideoListEntry onVideoSelect={props.onVideoSelect} 
    key={video.etag}    
    video={video}/>
  );

  return (
  <div className="video-list media">
    {videoEntries}
  </div>
  );
};



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// ReactDOM.render(<VideoList video={} />, document.getElementById('app'));
// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
