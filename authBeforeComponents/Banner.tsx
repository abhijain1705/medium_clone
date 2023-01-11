import React from 'react';
import banner from '../static/banner.png';
import Image from 'next/image';

const Banner = () => {

    const styles = {
        bannerWrapper: 'bg-[#FCC017] pt-20 flex w-full border border-black border-t-0 border-l-0 border-r-0 border-b-1 items-center justify-between min-h-[300px]',
        bannerText: 'w-max gap-5 lg:ml-60 md:ml-36 ml-20 py-[50px] flex flex-col text-start',
        bannerImageWrapper: 'md:flex hidden',
        bannerImage: 'object-contain',
        bannerTitle: 'text-[105px] font-mediumSerif max-w-xl leading-[98px]',
        bannerPara: 'font-normal max-w-[300px]',
        bannerButton: 'bg-black text-white w-max py-2 px-8 rounded-full',
    };

  return (
    <div className={styles.bannerWrapper}>
        <div className={styles.bannerText}>
            <div className={styles.bannerTitle}>Stay curious.</div>
            <div className={styles.bannerPara}>Discover stories, thinking, and expertise from writers on any topic.</div>
            <div className={styles.bannerButton}>Start reading</div>
        </div>
        <div className={styles.bannerImageWrapper}>
            <Image src={banner} alt='banner' height={300} className={styles.bannerImage} />
        </div>
    </div>
  )
}

export default Banner