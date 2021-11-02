import Button from "../../../components/Button";
import Tooltip from "../../../components/Tooltip";
import useTrending from "../../../hooks/useTrending";
import { socialNetworks } from "../../../utils/socialNetworks";

export default function Hero() {
  const {
    trends: [trending],
  } = useTrending({ limit: 1 });

  // TODO: separate the networks from other files, 📂utils/socialNetworks.js, and then import here and replace the lines #17 to #42, use .map(...)

  return (
    <main className="Hero">
      {/* <!-- ========== networks ========== --> */}
      <section className="SocialMedia">
        <ul className="SocialIcons">
          {socialNetworks.map((network) => {
            return (
              <Tooltip
                key={network.name}
                className="SocialIcon"
                content={network.name}
                position="right"
                to={network.url}
              >
                <Button srcOfIcon={network.icon} />
              </Tooltip>
            );
          })}
        </ul>
      </section>

      {/* <!-- ========== img hero ========== --> */}
      <div className="HeroImageContent overlayGradient">
        <img
          src={trending?.image}
          alt={trending?.title}
          className="HeroImage"
        />
        <h1 className="HeroPhrase">
          The live is <br />
          better with <br />
          gifs
        </h1>
        <h1 className="HeroPhrase border">
          The live is <br />
          better with <br />
          gifs
        </h1>
      </div>
    </main>
  );
}
