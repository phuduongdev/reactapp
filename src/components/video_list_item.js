import React from "react";

const VideoListItem = props => {
  return (
    <li
      onClick={() => props.onSelectedVideo(props.video)}
      className="list-group-item list-group-item-action list-group-item-secondary"
    >
      <div className="media video-list">
        <img
          className="mr-3"
          src={props.video.snippet.thumbnails.default.url}
          alt={props.video.snippet.title}
        />
        <div className="media-body">
          <h5 className="mt-0">{props.video.snippet.title}</h5>
          {/* {props.video.snippet.description} */}
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
