import { useState } from 'react'
import s from './FilterItem.module.css'

export default function FilterItem(props) {
    const [active, setActive] = useState(false)
    const toggleActive = () => setActive(!active)
  
    return (
      <p
        role="presentation"
        onKeyDown={toggleActive}
        key={props.item.toString()}
        onClick={toggleActive}
        className={`${s.item} ${active ? s.active : ''}`}>
        {props.item}
      </p>
    )
  }