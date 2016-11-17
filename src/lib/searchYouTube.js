var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=cats&type=video&videoEmbeddable=true&key={AIzaSyADc6ECazReq64E7Nk6nzAMEsXmbMClyII}', // CREATE HELPER TO MAKE THIS WORK
    type: 'GET',
    data: {
      key: options.key,
      q: options.q,
      maxResults: options.maxResult
    }, 
    // key: window.YOUTUBE_API_KEY,
    // q: options.q,
    // maxResults: options.maxResults,
    success: function(data) {
      // reset the state from the App view  
      console.log('HELLOOOO');
      return data;
    }
  });
};

window.searchYouTube = searchYouTube;
