import React, { createContext, useState } from 'react'
import useGetUserCountry from 'hooks/useGetUserCountryInfo'

type Props = {
  children: React.ReactNode
}

export const MenuContext = createContext(undefined)

export const MenuProvider = ({ children }: Props) => {
  const [menuIsOpen, setMenuOpen] = useState(false)
  const { country, currency } = useGetUserCountry()

  return (
    <MenuContext.Provider
      value={{ menuIsOpen, setMenuOpen, country, currency }}
    >
      {children}
    </MenuContext.Provider>
  )
}
