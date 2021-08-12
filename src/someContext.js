import React, { createContext } from 'react'

export const someContext = React.createContext({name: 'Yehuda'});

export const someContextProvider = (props) => {
     return (
      <someContext.Provider value={someContext}>
        {props.children}  
      </someContext.Provider>
    );
}


