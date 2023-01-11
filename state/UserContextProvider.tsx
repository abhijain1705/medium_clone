import React, { ReactNode } from 'react';
import { auth } from '../firebase.config';
import { ContextLoggedInImageProvider } from './AppContext';

interface IProp {
    children: ReactNode;
}

const UserContextProvider = ({ children }: IProp) => {
    
    return (
        <ContextLoggedInImageProvider.Provider value={{ image: auth.currentUser?.photoURL || '' }}>
            {children}
        </ContextLoggedInImageProvider.Provider>
    )
}

export default UserContextProvider