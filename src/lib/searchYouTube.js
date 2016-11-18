var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search', 
    type: 'GET',
    data: {      
      key: window.YOUTUBE_API_KEY,
      q: options.q,
      maxResults: options.maxResults,
      part: 'snippet',
      type: 'video'
    }, 
    success: function(data) {
      // reset the state from the App view
      console.log('Succeeds'); 
      return callback(data.items);
    }
  });
};

window.searchYouTube = searchYouTube;
