import React from 'react'
import { UserContext } from './UserContext'


const user ={

    id: 123,
    name: 'Jaime Nicolas Guzman',
    email: 'jaime@gmail.com'
}


//usualmente los high order component a diferencia de un componente tradicional es que en las propertys son las rutas (children)
export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{Hola: 'mundo',user: user}}>
        {children}
    </UserContext.Provider>
  )
}
