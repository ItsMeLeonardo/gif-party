export default function Trending() {
  //get trending
  return (
    <section className="TrendingContent">
      <div className="Trending overlayGradient big">
        <img
          src="https://picsum.photos/800/800"
          alt="trending gif"
          className="TrendingImg"
        />
      </div>
      <div className="Trending overlayGradient medium">
        <img
          src="https://picsum.photos/800/800"
          alt="trending gif"
          className="TrendingImg"
        />
      </div>
      <div className="Trending overlayGradient medium">
        <img
          src="https://picsum.photos/800/800"
          alt="trending gif"
          className="TrendingImg"
        />
      </div>

      <div className="smallContainer">
        <div className="Trending overlayGradient small">
          <img
            src="https://picsum.photos/800/800"
            alt="trending gif"
            className="TrendingImg"
          />
        </div>
        <div className="Trending overlayGradient small">
          <img
            src="https://picsum.photos/800/800"
            alt="trending gif"
            className="TrendingImg"
          />
        </div>
        <div className="Trending overlayGradient small">
          <img
            src="https://picsum.photos/800/800"
            alt="trending gif"
            className="TrendingImg"
          />
        </div>
      </div>
    </section>
  );
}
