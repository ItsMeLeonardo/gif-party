import Button from "../../../components/Button";

export default function Hero() {
  //TODO: convert the tooltip to component
  return (
    <main className="Hero">
      {/* <!-- ========== networks ========== --> */}
      <section className="SocialMedia">
        <ul className="SocialIcons">
          <li className="SocialIcon TooltipContainer">
            <Button src="src/static/icons/dribbble.svg"/>
            <span className="Tooltip right"> Dribbble </span>
          </li>
          <li className="SocialIcon TooltipContainer">
            <Button src="src/static/icons/linkedin.svg"/>

            <span className="Tooltip right"> LinkedIn </span>
          </li>
          <li className="SocialIcon TooltipContainer">
            <Button src="src/static/icons/github.svg"/>
            <span className="Tooltip right"> Github </span>
          </li>
        </ul>
      </section>

      {/* <!-- ========== img hero ========== --> */}
      <div className="HeroImageContent overlayGradient">
        <img
          //the src is from API
          src="https://picsum.photos/800/800"
          alt="gif of this moment"
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
