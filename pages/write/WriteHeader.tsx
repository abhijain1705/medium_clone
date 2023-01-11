import React from 'react'
import { UseLoggedInImageContext } from '../../state/AppContext';
import smallLogo from '../../static/smallLogo.png';
import Image from 'next/image';

const WriteHeader = () => {


    const styles = {
        HeaderWrapper: 'flex items-center justify-between max-w-4xl mx-auto',
        HeaderFirstChild: 'flex items-center gap-2',
        HeaderUser: 'rounded-full',
        HeaderSecondChild: 'flex items-center justify-center gap-2',
        PublishButton: 'bg-[#1a8917] text-white text-[12px] py-1 px-2 rounded-full'
    };

    const { image } = UseLoggedInImageContext();

    return (
        <div className={styles.HeaderWrapper}>
            <div className={styles.HeaderFirstChild}>
                <Image src={smallLogo} width={50} height={50} alt="small_logo" />
                <div>Draft in Abhi Jain</div>
            </div>
            <div className={styles.HeaderSecondChild}>
                <div className={styles.PublishButton}>Publish</div>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-label="Notifications"
                >
                    <path
                        d="M15 18.5a3 3 0 1 1-6 0"
                        stroke="currentColor"
                        strokeLinecap="round"
                    ></path>
                    <path
                        d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
                        stroke="currentColor"
                        strokeLinejoin="round"
                    ></path>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
                        fill="#000"
                    ></path>
                </svg>
                <img className={styles.HeaderUser} src={image} width={30} height={30} alt="user_image" />
            </div>
        </div>
    )

    return (
        <div>WriteHeader</div>
    )
}

export default WriteHeader