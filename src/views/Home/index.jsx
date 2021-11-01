import Navbar from "../../components/Navbar";
import { Subtitle, TextDescription } from "../../components/TextSeparator";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Trending from "./components/Trending";

import "./style.css";

export default function Home() {
  //TODO: easy loading for trending and categories
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <div className="scroll">
        <i className="scrollIcon"></i>
        <a href="#trending" className="btn white">
          <span className="text-gradient">scroll</span>
          <object
            className="arrowIcon"
            type="image/svg+xml"
            data={`src/static/icons/arrow-down.svg`}
          ></object>
        </a>
      </div>

      <Subtitle content={"Trending"} id="trending" />
      <Trending />

      <Subtitle content={"Categories"} />
      <TextDescription>
        {"Choose a category that interesting you"}
      </TextDescription>

      <Categories />
    </>
  );
}
