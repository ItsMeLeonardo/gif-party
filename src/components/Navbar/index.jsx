import { Link } from 'wouter'
import Button from '../Button'
import SearchInput from '../SearchInput'
import Tooltip from '../Tooltip'

import './style.css'

export default function Navbar() {
  return (
    <nav className='Navbar'>
      <ul className='NavbarItems'>
        <li className='NavbarItem'>
          <Link href='/'>
            <picture className='logo'>
              <source type='image/webp' srcSet='src/static/images/logo.webp' />
              <source type='image/png' srcSet='src/static/images/logo.png' />
              <img src='src/static/icons/logo.svg' alt='Logo gif party' />
            </picture>
            <h4> </h4>
          </Link>
        </li>
        <li className='NavbarItem'>
          <SearchInput />
        </li>

        <Tooltip
          className='NavbarItem'
          position='left'
          content='Random'
          to='/detail/random'
        >
          <Button icon='random' />
        </Tooltip>
      </ul>
    </nav>
  )
}
