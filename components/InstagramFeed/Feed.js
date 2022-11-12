export default function Feed({ feed }) {
  const { id, caption, media_type, media_url } = feed;
  let post;

  if (media_type === "VIDEO") {
    post = (
      <div className="feed-item">
        <video
          src={media_url}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    );
  } else {
    post = (
      <div className="feed-item">
        <img id={id} src={media_url} alt={caption} />
      </div>
    );
  }

  return <>{post}</>;
}
