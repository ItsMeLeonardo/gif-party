import Navbar from "../../components/Navbar";
import { Subtitle, TextDescription } from "../../components/TextSeparator";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
Trending;
import "./style.css";

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <div className="scroll">
        <i className="scrollIcon"></i>
        <a href="#trending" className="btn white">
          <span className="text-gradient">scroll</span>
          <i className="arrowIcon"></i>
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
