import block from 'bem-cn'
import React from 'react'
import './MainMenuItem.css'
import { NavLink } from 'react-router-dom'

interface Props {
  name: string,
  to: string,
  active?: boolean,
  onClick: () => void
}

const b = block('main-menu-item')

export const MainMenuItem: React.FC<Props> = ({
  name,
  to,
  active = false,
  onClick
}) => {
  return (
    <NavLink 
      to={to} 
      className={b({active})}
      onClick={onClick}
    >
      {name}
    </NavLink>
  )
}