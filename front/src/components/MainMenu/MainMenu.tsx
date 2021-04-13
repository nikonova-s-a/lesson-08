import block from 'bem-cn'
import { useState } from 'react'
import './MainMenu.css'
import { MainMenuItem } from './MainMenuItem/MainMenuItem'
import { MainMenuItemName } from './MainMenuItem/MainMenuItemName'

interface Props {
}

const b = block('main-menu')

export const MainMenu: React.FC<Props> = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(MainMenuItemName.Catalog);

  return (
    <nav className={b()}>
      <MainMenuItem
        name={MainMenuItemName.Catalog}
        to='/catalog'
        active={MainMenuItemName.Catalog === activeMenuItem}
        onClick={() => setActiveMenuItem(MainMenuItemName.Catalog)}
      />

      <MainMenuItem
        name={MainMenuItemName.Authors}
        to='/ref/authors'
        active={MainMenuItemName.Authors === activeMenuItem}
        onClick={() => setActiveMenuItem(MainMenuItemName.Authors)}
      />

      <MainMenuItem
        name={MainMenuItemName.Genres}
        to='/ref/genres'
        active={MainMenuItemName.Genres === activeMenuItem}
        onClick={() => setActiveMenuItem(MainMenuItemName.Genres)}
      />

      <MainMenuItem
        name={MainMenuItemName.Languages}
        to='/ref/languages'
        active={MainMenuItemName.Languages === activeMenuItem}
        onClick={() => setActiveMenuItem(MainMenuItemName.Languages)}
      />

      <MainMenuItem
        name={MainMenuItemName.Publishers}
        to='/ref/publishers'
        active={MainMenuItemName.Publishers === activeMenuItem}
        onClick={() => setActiveMenuItem(MainMenuItemName.Publishers)}
      />
    </nav>
  )
}
