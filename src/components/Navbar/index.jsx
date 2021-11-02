import { Link } from 'wouter'
import Button from '../Button'
import SearchInput from '../SearchInput'
import Tooltip from '../Tooltip'

import './style.css'

// [_] change to object to img add source           <img src="" alt="" srcSet='...'/>

export default function Navbar() {
  return (
    <nav className='Navbar'>
      <ul className='NavbarItems'>
        <li className='NavbarItem'>
          <Link href='/'>
            <object
              className='logo'
              type='image/svg+xml'
              data={`src/static/icons/logo.svg`}
            ></object>
            <h4> </h4>
          </Link>
        </li>
        <li className='NavbarItem'>
          <SearchInput />
        </li>

        <Tooltip
          className='NavbarItem'
          position='left'
          content='Gif random'
          to='/detail/random'
        >
          <Button srcOfIcon='random-icon.svg' />
        </Tooltip>
      </ul>
    </nav>
  )
}
