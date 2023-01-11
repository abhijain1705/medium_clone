import React from "react";
import {
    recommendTopics,
    WhoToFollowUser,
    ReviewPeoples,
} from "../data/AfterAuthRight";
import { linksArray } from "../data/Section";
import { UseScrollContext } from "../state/AppContext";

const AfterRight = () => {

    const { scrollY } = UseScrollContext();

    const styles = {
        AfterRightWrapper: `p-8 h-max hidden lg:flex flex-col ${scrollY > 550 ? 'fixed bottom-0' : 'absolute'} bg-white right-[50px]`,
        AfterUnlimitedButton:
            "bg-black text-white cursor-pointer my-4 py-2 text-center rounded-full text-[12px]",
        AfterReviewText: "my-4 font-semibold text-[12px]",
        AfterFullListText:
            "text-[#1a8917] font-semibold text-[12px] cursor-pointer",
        TopicsWrapper: "max-w-[250px] flex flex-wrap gap-2 mt-4",
        Topic:
            "bg-[#E6E6E6] w-max py-[4px] cursor-pointer px-4 rounded-full text-[12px]",
        FollowCompoWrapper: "flex max-w-[275px]",
        FollowButton:
            "border ml-2 border-1 cursor-pointer text-[14px]  border-[#757575] w-max h-max py-1 px-4 rounded-full",
        ClickText: 'text-[12px] flex max-w-[300px] text-[#757575]',
        boxArrayWrapper: "mt-8 flex md:max-w-[275px] xl:max-w-[300px] flex-wrap gap-2",
        links: 'text-[10px] text-[#757575] cursor-pointer w-max'
    };

    console.log(scrollY)

    return (
        <div className={styles.AfterRightWrapper}>
            <div className={styles.AfterUnlimitedButton}>Get unlimited access</div>
            <div className={styles.AfterReviewText}>2022 in Review</div>
            {ReviewPeoples.map((val, ind) => (
                <ProfileCompo
                    followPeople={false}
                    name={val.head}
                    para={val.para}
                    img={val.img}
                />
            ))}
            <div className={styles.AfterFullListText}>See the full list</div>

            <div className="mt-8">
                <div className="font-semibold tracking-tight text-[14px]">
                    Recommended topics
                </div>
                <div className={styles.TopicsWrapper}>
                    {recommendTopics.map((itm, ind) => (
                        <div className={styles.Topic} key={ind}>
                            {itm}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <div className="mb-4 font-semibold tracking-tight text-[14px]">
                    Who to follow
                </div>
                {WhoToFollowUser.map((val, ind) => (
                    <div key={ind} className={styles.FollowCompoWrapper}>
                        <ProfileCompo
                            followPeople={true}
                            name={val.head}
                            para={val.para}
                            img={val.img}
                        />
                        <div className={styles.FollowButton}>Follow</div>
                    </div>
                ))}
            </div>
            <div className={styles.AfterFullListText}>See more suggestions</div>
            <div className="mb-4 font-semibold tracking-tight text-[14px] mt-8">
                Reading list
            </div>
            <div className={styles.ClickText}>
                <span>Click the</span>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="#757575"
                    className="pf it"
                >
                    <path
                        d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                        fill="#292929"
                    ></path>
                </svg>{" "}
                <span>
                    on any story to easily add it to your reading list or a custom list that
                    you can share.
                </span>
            </div>
            <div className={styles.boxArrayWrapper}>
                {
                    linksArray.map((itm, ind) => (
                        <div className={styles.links} key={ind}>{itm}</div>
                    ))
                }
            </div>
        </div>
    );
};

interface ProfileProp {
    img: string;
    name: string;
    para: string;
    followPeople?: boolean;
    blogAds?: boolean;
}

export const ProfileCompo = ({ img, name, para, followPeople }: ProfileProp) => {
    const styles = {
        ProfileWrapper: "flex flex-col gap-1 cursor-pointer mb-4",
        ProfileChild_1: `flex items-center ${followPeople ? "font-bold text-[12px]" : "font-normal text-[10px]"
            } gap-2`,
        ProfileChild_2: `${followPeople ? "font-normal text-[10px]" : "font-bold text-[12px]"
            }`,
    };

    return (
        <div className={styles.ProfileWrapper}>
            <div className={styles.ProfileChild_1}>
                <img
                    width={20}
                    height={20}
                    className="rounded-full"
                    src={img}
                    alt="user"
                />
                <div>{name}</div>
            </div>
            <div className={styles.ProfileChild_2}>{para}</div>
        </div>
    );
};

export default AfterRight;
