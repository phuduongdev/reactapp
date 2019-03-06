import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading....</div>;
  }

  const videoId = video.id.videoId;
  const url = "https://www.youtube.com/embed/" + videoId;

  return (
    <div className="col-md-8">
      <div className="embed-responsive embed-responsive-21by9">
        <iframe className="embed-responsive-item" src={url} title={url} />
      </div>
      <div className="media-body">
        <h5 className="mt-0">{video.snippet.title}</h5>
        {video.snippet.description}
      </div>
    </div>
  );
};

export default VideoDetail;
