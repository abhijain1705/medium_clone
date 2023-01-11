import React, { useState } from "react";
import PostCard from "../authBeforeComponents/PostCard";
import { UseScrollContext } from "../state/AppContext";

const AfterSection = () => {

    const {scrollY} = UseScrollContext();

    const styles = {
        AfterSectionWrapper:
            "flex px-28 flex-col w-[100%] lg:w-[65%] border border-[#E6E6E6] border-t-0 border-l-0 border-r-1 border-b-0",
        HorizontalLine: "mt-4 w-[600px]",
        AfterSectionTextWrapper: "flex gap-5",
        FixedBar: `${scrollY > 77 ? 'fixed' : 'absolute'} bg-white top-0 pt-[30px]`,
        AfterSectionChild_1: "h-[40px] mt-12 gap-2 flex flex-col relative",
        AfterSectionTabText: "m-0 text-[12px] cursor-pointer",
        AfterSectionSectedTab: `border pb-4 border-black border-t-0 border-l-0 border-r-0 border-b-1`,
    };

    const [tabsNavigation, settabsNavigation] = useState(1);

    return (
        <div className={styles.AfterSectionWrapper}>
            <div className={styles.AfterSectionChild_1}>
                <div className={styles.FixedBar}>
                    <div className={styles.AfterSectionTextWrapper}>
                        <svg onClick={() => settabsNavigation(0)} width="19" height="19" className={`${styles.AfterSectionTabText} ${tabsNavigation == 0 ? styles.AfterSectionSectedTab : ''}`}>
                            <path
                                d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                        <div onClick={() => settabsNavigation(1)} className={`${styles.AfterSectionTabText} ${tabsNavigation == 1 ? styles.AfterSectionSectedTab : ''}`}>For you</div>
                        <div onClick={() => settabsNavigation(2)} className={`${styles.AfterSectionTabText} ${tabsNavigation == 2 ? styles.AfterSectionSectedTab : ''}`}>Following</div>
                    </div>
                    <hr className="w-[600px] relative bottom-0" />
                </div>
            </div>
            <div>
                <PostCard />
                <hr className={styles.HorizontalLine} />
                <PostCard />
                <hr className={styles.HorizontalLine} />
                <PostCard />
                <hr className={styles.HorizontalLine} />
                <PostCard />
                <hr className={styles.HorizontalLine} />
                <PostCard />
                <hr className={styles.HorizontalLine} />
                <PostCard />
                <hr className={styles.HorizontalLine} />
                <PostCard />
                <hr className={styles.HorizontalLine} />
                <PostCard />
                <hr className={styles.HorizontalLine} />
                <PostCard />
                <hr className={styles.HorizontalLine} />
                <PostCard />
                <hr className={styles.HorizontalLine} />
                <PostCard />
                <hr className={styles.HorizontalLine} />
                <PostCard />
                <hr className={styles.HorizontalLine} />
            </div>
        </div>
    );
};

export default AfterSection;
