import React from 'react'
import ScrollContextProvider from '../../state/ScrollContextProvider';
import UserContextProvider from '../../state/UserContextProvider';
import WriteHeader from './WriteHeader';
import WriterSection from './WriterSection';

const Write = () => {


    const styles = {
        AfterBody: 'flex relative'
    }

    return (
        <ScrollContextProvider>
            <UserContextProvider>
                <main className='overflow-x-hidden'>
                    <WriteHeader />
                    <WriterSection />
                </main>
            </UserContextProvider>
        </ScrollContextProvider>
    )
}

export default Write;