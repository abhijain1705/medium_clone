import React, { useState } from "react";
import { auth, provider } from '../firebase.config';

interface Prop {
    isVisible: boolean;
    onClose: () => void
}

const Popup = ({ isVisible, onClose }: Prop) => {
    const styles = {
        popUp:
            `fixed z-[1000] inset-0 bg-white bg-opacity-75 backdrop-blur-sm flex justify-center items-center`,
        popUpWrapper: "sm:h-[600px] sm:w-[600px] h-[100%] w-[100%] rounded-[4px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white p-4",
        popUpInnerWrapper: 'w-[100%] h-[100%] flex flex-col items-center',
        xWrapper: 'w-[100%] text-right cursor-pointer',
        popupText: 'px-28 font-mediumSerif font-medium mt-24 text-[28px]',
        signInButton: 'flex border border-1 mt-16 gap-3 text-[12px] border-[#a8a8a8] rounded-[99em] pt-[6px] cursor-pointer pr-[16px] pb-[8px] pl-[12px] justify-center items-center',
        popUpNoAccountText: 'tracking-tight mt-12 text-[13px]',
        popUpNoAccountSpanText: 'text-[#1a8917] font-bold cursor-pointer',
        popUpCenterText: 'text-center text-[#757575] mt-12 px-20 text-[12px]',
        popUpUnderlineSpanText: 'underline'
    };

    function handleClose(e: any) {
        if (e.target.id === 'popup') onClose();
    }


    function login() {
        auth.signInWithPopup(provider)
            .then((res) => {
                console.log(res.user);
                window.location.reload();
            })
            .catch(alert);
    }

    const [isSignUp, setisSignUp] = useState(false);

    if (!isVisible) return null;

    return (
        <div onClick={handleClose} id='popup' className={styles.popUp}>
            <div className={`${styles.popUpWrapper} popup`}>
                <div className={styles.popUpInnerWrapper}>
                    <div onClick={onClose} className={styles.xWrapper}>X</div>
                    <div className={styles.popupText}>{isSignUp ? 'Join Medium.' : 'Welcome back.'}</div>
                    <div onClick={login} className={styles.signInButton}>
                        <svg width="25" height="25" className="gn y">
                            <g fill="none" fillRule="evenodd">
                                <path
                                    d="M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z"
                                    fill="#4285F4"
                                ></path>
                                <path
                                    d="M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z"
                                    fill="#34A853"
                                ></path>
                                <path
                                    d="M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z"
                                    fill="#FBBC05"
                                ></path>
                                <path
                                    d="M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z"
                                    fill="#EA4335"
                                ></path>
                            </g>
                        </svg>
                        Sign in with Google
                    </div>
                    <div className={styles.popUpNoAccountText}>
                        {isSignUp ? 'Already have an account' : 'No accound? '} <span onClick={() => isSignUp ? setisSignUp(false) : setisSignUp(true)} className={styles.popUpNoAccountSpanText}>{isSignUp ? 'Sign in' : 'Create one'}</span>
                    </div>
                    {
                        isSignUp ? null : <div className={styles.popUpCenterText}>
                            Forgot email or trouble signing in? <span className={styles.popUpUnderlineSpanText}>Get help.</span>
                        </div>
                    }
                    <div className={styles.popUpCenterText}>
                        Click “Sign In” to agree to Medium’s <span className={styles.popUpUnderlineSpanText}>Terms of Service</span> and acknowledge
                        that Medium’s <span className={styles.popUpUnderlineSpanText}>Privacy Policy</span> applies to you.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
