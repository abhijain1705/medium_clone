import React, { ReactNode } from 'react';
import { auth } from '../firebase.config';
import { ContextLoggedInImageProvider } from './AppContext';

interface IProp {
    children: ReactNode;
}

const UserContextProvider = ({ children }: IProp) => {

    return (
        <ContextLoggedInImageProvider.Provider value={{ image: auth.currentUser?.photoURL || 'https://fastly.picsum.photos/id/173/200/300.jpg?hmac=9Ed5HxHOL3tFCOiW6UHx6a3hVksxDWc7L7p_WzN9N9Q' }}>
            {children}
        </ContextLoggedInImageProvider.Provider>
    )
}

export default UserContextProvider