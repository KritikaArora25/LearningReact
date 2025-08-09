"use client"
import React, { createContext } from 'react'       //create context
export const MyContext = createContext()

const Context = ({children}) => {
    const username = "Kritika Arora"
  return (
    <div>
        <MyContext.Provider value={username}>
            {children}
        </MyContext.Provider>
    </div>
  )
}

export default Context