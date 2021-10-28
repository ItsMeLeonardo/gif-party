import useTrending from '../../../hooks/useTrending'

export default function Trending() {
  
  const limit = 6

  const {trends} = useTrending({ limit })
  
  //get trending
  return (
    <section className="TrendingContent">
      <div className="Trending overlayGradient big">
        <img
          src={trends[0]}
          alt="trending gif"
          className="TrendingImg"
        />
      </div>
      <div className="Trending overlayGradient medium">
        <img
          src={trends[1]}
          alt="trending gif"
          className="TrendingImg"
        />
      </div>
      <div className="Trending overlayGradient medium">
        <img
          src={trends[2]}
          alt="trending gif"
          className="TrendingImg"
        />
      </div>

      <div className="smallContainer">
        <div className="Trending overlayGradient small">
          <img
            src={trends[3]}
            alt="trending gif"
            className="TrendingImg"
          />
        </div>
        <div className="Trending overlayGradient small">
          <img
            src={trends[4]}
            alt="trending gif"
            className="TrendingImg"
          />
        </div>
        <div className="Trending overlayGradient small">
          <img
            src={trends[5]}
            alt="trending gif"
            className="TrendingImg"
          />
        </div>
      </div>
    </section>
  );
}
