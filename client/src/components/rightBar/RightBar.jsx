import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
      <span>Suggested Ads For You</span>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/1933587/pexels-photo-1933587.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="suggestionImage1"
          />
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/16774290/pexels-photo-16774290.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="suggestionImage2"
          />
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="suggestionImage3"
          />
        </div>
      </div>
    </div>
  );
};

export default RightBar;
