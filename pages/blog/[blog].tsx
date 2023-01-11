import React from 'react'
import AfterHead from '../../authAfterComponents/AfterHead';
import AfterSection from '../../authAfterComponents/AfterSection';
import ScrollContextProvider from '../../state/ScrollContextProvider';
import UserContextProvider from '../../state/UserContextProvider';
import BlogRight from './BlogRight';
import BlogSection from './BlogSection';

const Blog = () => {

    const styles = {
        AfterBody: 'flex relative'
    }

    return (
        <ScrollContextProvider>
            <UserContextProvider>
                <main className='overflow-x-hidden'>
                    <AfterHead />
                    <div className={styles.AfterBody}>
                        <BlogSection />
                        <BlogRight />
                    </div>
                </main>
            </UserContextProvider>
        </ScrollContextProvider>
    )
}

export default Blog;