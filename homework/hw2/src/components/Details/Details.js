import "./Details.css";

const Details = ({ user, userId, getUserId, setShowPosts }) => {
  return (
    <div className="details">
      <h4 className="details_description">
        {user.id} - {user.name}
      </h4>
      <button
        className="post_btn"
        onClick={() => {
          getUserId(userId);
          setShowPosts(true);
        }}
      >
        Get Posts
      </button>
    </div>
  );
};

export default Details;
