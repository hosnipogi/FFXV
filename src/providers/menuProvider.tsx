import React, { createContext, useState } from 'react'

type Props = {
  children: React.ReactNode
}

export const MenuContext = createContext(undefined)

export const MenuProvider = ({ children }: Props) => {
  const [menuIsOpen, setMenuOpen] = useState(false)

  return (
    <MenuContext.Provider
      value={{ menuIsOpen, setMenuOpen }}
    >
      {children}
    </MenuContext.Provider>
  )
}
