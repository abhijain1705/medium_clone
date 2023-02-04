import React from "react";
import { UseScrollContext } from "../../state/AppContext";
import { MoreFromMedium } from '../../data/PostComponent';
import { ProfileCompo } from "../../authAfterComponents/AfterRight";
import { linksArray } from "../../data/Section";
import Image from 'next/image';

const BlogRight = () => {

    const { scrollY } = UseScrollContext();
    console.log(scrollY)

    const styles = {
        BlogRightWrapper: `p-8 max-w-[300px] mr-24 h-max hidden lg:flex flex-col ${scrollY > 550 ? "fixed bottom-0" : "absolute"
            } bg-white right-[50px]`,
        BlogUnlimitedButton:
            "bg-black text-white cursor-pointer my-4 py-2 text-center rounded-full text-[12px]",
        BlogProfileBox: "flex flex-col mt-4 gap-3",
        profileButton:
            "bg-[#848585] text-white fill-white cursor-pointer p-2 rounded-full",
        BlogProfileImg: "w-[75px] h-[75px] rounded-full",
        BlogProfileName: "tracking-tight text-[14px] font-semibold",
        BlogProfileFollower: "tracking-tight text-[14px] text-[#757575]",
        BlogProfileAbout: "tracking-tight text-[12px] text-[#757575]",
        BlogProfileButtonWrapper: "flex gap-2 items-center text-center text-[13px]",
        AddWrapper: 'mt-8',
        blogArrayWrapper: "mt-8 flex md:max-w-[275px] xl:max-w-[300px] flex-wrap gap-2",
        links: 'text-[10px] text-[#757575] cursor-pointer w-max'
    };

    return (
        <div className={styles.BlogRightWrapper}>
            <div className={styles.BlogUnlimitedButton}>Get unlimited access</div>
            <div className={styles.BlogProfileBox}>
                <Image
                    className={styles.BlogProfileImg}
                    src="https://miro.medium.com/fit/c/48/48/1*PmKEk3HdNVyjAx3eitRQRQ.png"
                    alt=""
                />
                <div>
                    <div className={styles.BlogProfileName}>Mais Alheraki</div>
                    <div className={styles.BlogProfileFollower}>253 Followers</div>
                </div>
                <div className={styles.BlogProfileAbout}>
                    Software engineer, Geek, Designer, Reader & always a Lifetime Learner!
                </div>
                <div className={styles.BlogProfileButtonWrapper}>
                    <div className={`${styles.profileButton} px-4`}>Follow</div>
                    <div>
                        <svg
                            width="38"
                            height="38"
                            viewBox="0 0 38 38"
                            fill="none"
                            stroke="white"
                            className={styles.profileButton}
                        >
                            <rect
                                x="26.25"
                                y="9.25"
                                width="0.5"
                                height="6.5"
                                rx="0.25"
                            ></rect>
                            <rect
                                x="29.75"
                                y="12.25"
                                width="0.5"
                                height="6.5"
                                rx="0.25"
                                transform="rotate(90 29.75 12.25)"
                            ></rect>
                            <path d="M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"></path>
                            <path d="M11.5 14.5L19 20l4-3"></path>
                        </svg>
                    </div>
                </div>

            </div>
            <div className={styles.AddWrapper}>
                {
                    MoreFromMedium.map((val, ind) => (
                        <div key={ind}>
                            <ProfileCompo
                                name={val.head}
                                para={val.para}
                                img={val.img}
                                blogAds={true} />
                        </div>
                    ))
                }
            </div>
            <div className={styles.blogArrayWrapper}>
                {
                    linksArray.map((itm, ind) => (
                        <div key={ind} className={styles.links}>{itm}</div>
                    ))
                }
            </div>
            <div>
            </div>
        </div>
    );
};

export default BlogRight;
