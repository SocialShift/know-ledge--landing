"use client"
import { createContext, useContext, useState } from 'react'

const NavbarContext = createContext()

export function NavbarProvider({ children }) {
  const [isTransparent, setIsTransparent] = useState(true)

  return (
    <NavbarContext.Provider value={{ isTransparent, setIsTransparent }}>
      {children}
    </NavbarContext.Provider>
  )
}

export function useNavbar() {
  return useContext(NavbarContext)
} 