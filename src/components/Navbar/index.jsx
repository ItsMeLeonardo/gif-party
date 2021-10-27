import Button from "../Button";
import SearchInput from "../SearchInput";

import "./style.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="NavbarItems">
        <li className="NavbarItem">
          <object
            className="logo"
            type="image/svg+xml"
            data={`src/static/icons/logo.svg`}
          ></object>
        </li>
        <li className="NavbarItem">
          <SearchInput />
        </li>
        <li className="NavbarItem TooltipContainer">
          <Button src="random-icon.svg" />
          <span className="Tooltip left"> gif random </span>
        </li>
      </ul>
    </nav>
  );
}
