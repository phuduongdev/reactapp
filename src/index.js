import Lodash from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import YSearch from "youtube-api-search";

const GOOGLE_API_KEY = "AIzaSyDS7IK6prTimykAq2cCGWGHiGnIuvyMwvk";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboard");
  }

  videoSearch(term) {
    YSearch(
      {
        key: GOOGLE_API_KEY,
        term: term
      },
      data => {
        this.setState({ videos: data, selectedVideo: data[0] });
      }
    );
  }

  render() {
    const videoSearch = Lodash.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div className="container">
        <p>Simple React App</p>
        <SearchBar onSearchBarChange={videoSearch} />
        {/*init a new instance of SearchBar object*/}
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onSelectedVideo={v => {
              this.setState({ selectedVideo: v });
            }} //implicit function
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
