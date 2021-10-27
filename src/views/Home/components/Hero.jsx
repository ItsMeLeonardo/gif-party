import Button from "../../../components/Button";
import useTrending from "../../../hooks/useTrending";

export default function Hero() {

  const { trends:[trending] } = useTrending({limit: 1});

  //TODO: convert the tooltip to component and link to social media
  return (
    <main className="Hero">
      {/* <!-- ========== networks ========== --> */}
      <section className="SocialMedia">
        <ul className="SocialIcons">
          <li className="SocialIcon TooltipContainer">
            <Button src="dribbble.svg"/>
            <span className="Tooltip right"> Dribbble </span>
          </li>
          <li className="SocialIcon TooltipContainer">
            <Button src="linkedin.svg"/>
            <span className="Tooltip right"> LinkedIn </span>
          </li>
          <li className="SocialIcon TooltipContainer">
            <Button src="github.svg"/>
            <span className="Tooltip right"> Github </span>
          </li>
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
