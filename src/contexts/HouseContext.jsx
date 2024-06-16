import { createContext, useContext } from 'react'

const HouseContext = createContext()

export function useHouse() {
  return useContext(HouseContext)
}

export function HouseProvider({ children, house }) {
  return (
    <HouseContext.Provider value={house}>
      {children}
    </HouseContext.Provider>
  )
}