import React, {useState} from 'react'
import './Layout.css'
import { MenuToggle } from "../../components/MenuToggle/MenuToggle";
import { Drawer } from "../../components/Drawer/Drawer";

export const Layout = ({children}) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenuHandler = () => setIsOpened(!isOpened);

  return (
    <div className={'layout'}>
      <Drawer
        isOpen={isOpened}
        onClose={toggleMenuHandler}
      />
      <MenuToggle
        isOpen={isOpened}
        onToggle={toggleMenuHandler}
      />
      <main className={'layout__context'}>
        { children }
      </main>
    </div>
  )
}


