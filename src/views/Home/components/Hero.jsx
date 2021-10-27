import Button from "../../../components/Button";
import Tooltip from "../../../components/Tooltip";
import useTrending from "../../../hooks/useTrending";

export default function Hero() {
  const {
    trends: [trending],
  } = useTrending({ limit: 1 });

  return (
    <main className="Hero">
      {/* <!-- ========== networks ========== --> */}
      <section className="SocialMedia">
        <ul className="SocialIcons">
          <Tooltip 
            className="SocialIcon"
            content="Dribbble"
            position="right"
            to="https://dribbble.com/FrontenDaleo"
          >
            <Button src="dribbble.svg" />
          </Tooltip>

          <Tooltip 
            className="SocialIcon"
            content="LinkedIn"
            position="right"
            to="https://www.linkedin.com/in/leonardo-cruces-b4b142203/"
          >
            <Button src="linkedin.svg" />
          </Tooltip>

          <Tooltip 
            className="SocialIcon"
            content="Github"
            position="right"
            to="https://github.com/ItsMeLeonardo"
          >
            <Button src="github.svg" />
          </Tooltip>

        </ul>
      </section>

      {/* <!-- ========== img hero ========== --> */}
      <div className="HeroImageContent overlayGradient">
        <img
          //the src is from API
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
