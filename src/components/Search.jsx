var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" onChange={_.debounce(() => props.onVideoSearch(document.getElementsByClassName('form-control')[0].value), 300)} type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
