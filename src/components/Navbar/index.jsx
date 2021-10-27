import Button from '../Button';
import SearchInput from '../SearchInput'

import './style.css'

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="NavbarItems">
        <li className="NavbarItem">
          <div className="logo"></div>
        </li>
        <li className="NavbarItem">
          <SearchInput />
        </li>
        <li className="NavbarItem TooltipContainer">
          <Button />     
          <span className="Tooltip left"> gif random </span>
        </li>
      </ul>
    </nav>
  );
}
