import { useState } from 'react'
import logo from '../../logo.png'
import s from './Navigation.module.css'
import NavigationMenu from '../navigationMenu/NavigationMenu'
import Burger from '../burger/Burger'

export default function Navigation() {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)

  return (
    <nav className={s.nav}>
      <div className={s.logo}>
        <img className={s.image} src={logo} alt="logo" />
      </div>
      <Burger onClick={toggleVisibility} />
      {visible && <NavigationMenu />}
    </nav>
  )
}
