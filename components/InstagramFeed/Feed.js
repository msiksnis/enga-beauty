export default function Feed({ feed }) {
  const { id, caption, media_type, media_url } = feed;
  let post;

  switch (media_type) {
    case "VIDEO":
      post = (
        <div className="feed-item">
          <video
            // width="100%"
            // height="auto"
            src={media_url}
            type="video/mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      );
      break;
    case "CAROUSEL_ALBUM":
      post = (
        <div className="feed-item">
          <img
            // width="100%"
            // height="auto"
            id={id}
            src={media_url}
            alt={caption}
          />
        </div>
      );
      break;
    default:
      post = (
        <div className="feed-item">
          <img
            // width="100%"
            // height="auto"
            id={id}
            src={media_url}
            alt={caption}
          />
        </div>
      );
  }

  return <div className="">{post}</div>;
}
