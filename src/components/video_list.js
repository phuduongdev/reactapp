import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = props => {
  const videoItem = props.videos.map(v => {
    return (
      <VideoListItem
        key={v.etag}
        video={v}
        onSelectedVideo={props.onSelectedVideo} //pass function onSelectedVideo(v){}; of onSelectedVideo props in index.js
        
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItem}</ul>;
};

export default VideoList;
