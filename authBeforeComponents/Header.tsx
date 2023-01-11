import React from 'react';
import Image from 'next/image'
import logo from '../static/logo.png';
import { UseScrollContext } from "../state/AppContext";

interface Prop {
    onOpen: () => void
}

const Header = ({ onOpen }: Prop) => {

    const { scrollY } = UseScrollContext();

    
    const styles = {
        wrapper: `flex fixed transition-all ${scrollY > 340 ? 'bg-white' : 'bg-[#FCC017]'} w-[100%] z-[1000] justify-center gap-10 border border-black border-t-0 border-l-0 border-r-0 border-b-1`,
        content: "max-w-5xl flex flex-1 p-3 justify-between gap-10",
        logoContainer: "flex items-center flex-start",
        logo: "cursor-pointer object-contain",
        bannerNav: "gap-5 items-center cursor-pointer text-[12px]",
        accentedButton: `${scrollY > 340 ? 'bg-[#1A8917]' : 'bg-black'} text-white py-2 px-4 rounded-full`,
        hideButton: 'sm:hidden flex',
        hideBannerNav: 'sm:flex hidden'
    };


    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Image alt='logo' height={30} width={150} src={logo} className={styles.logo} />
                </div>

                <div className={`${styles.bannerNav} ${styles.hideBannerNav}`}>
                    <div>Our story</div>
                    <div>Membership</div>
                    <div>Write</div>
                    <div onClick={onOpen}>Sign in</div>
                    <div onClick={onOpen} className={styles.accentedButton}>Get started</div>
                </div>
                <div onClick={onOpen} className={`${styles.accentedButton} ${styles.hideButton}`}>Get started</div>
            </div>
        </div>
    )
}

export default Header