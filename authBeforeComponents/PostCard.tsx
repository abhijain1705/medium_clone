import React from "react";
import Link from "next/link";
import { PostData } from "../data/PostComponent";

const PostCard = () => {
    const styles = {
        postWrapper:
            "flex mt-16 mx-auto max-w-[450px] sm:max-w-[500px] md:max-w-[600px] lg:w-[500px] xl:w-[600px] xl:max-w-[700px] cursor-pointer",
        postTextWrapper: "w-[75%] flex flex-col justify-center",
        postImageWrapper: "h-[100px] w-[100px]",
        postTextFirstChild: "flex items-center gap-2 text-[12px] font-[600]",
        postTextSecondChild: "font-bold text-[14px] md:text-[18px] leading-[28px]",
        postTextThirdChild: "font-normal text-[12px] text-gray-600",
        postTextForthChild: "flex justify-between mt-12 items-center",
        postTextForthChildTextWrappr:
            "flex justify-between items-center gap-5 text-[10px]",
        postTextTag: "bg-[#f2f2f2] text-[#757575] p-1 rounded-full",
        madeByImage: 'h-[20px] w-[20px] rounded-full',
        IconDiv: 'flex gap-5'
    };

    return (
        <Link href={`/blog/${1}`}>
            <div className={styles.postWrapper}>
                <div className={styles.postTextWrapper}>
                    <div className={styles.postTextFirstChild}>
                        <img
                            alt="madeBy"
                            className={styles.madeByImage}
                            src={PostData.madeByImg}
                        />
                        {PostData.madeBy}
                        <span className="font-normal"> in </span> {PostData.madeByTopic}
                    </div>
                    <div className={styles.postTextSecondChild}>{PostData.topic}</div>
                    <div className={styles.postTextThirdChild}>{PostData.subTopic}</div>
                    <div className={styles.postTextForthChild}>
                        <div className={styles.postTextForthChildTextWrappr}>
                            <div>{PostData.date}</div>
                            <div>{PostData.minRead}</div>
                            <div className={styles.postTextTag}>{PostData.tag}</div>
                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M12.4 12.77l-1.81 4.99a.63.63 0 0 1-1.18 0l-1.8-4.99a.63.63 0 0 0-.38-.37l-4.99-1.81a.62.62 0 0 1 0-1.18l4.99-1.8a.63.63 0 0 0 .37-.38l1.81-4.99a.63.63 0 0 1 1.18 0l1.8 4.99a.63.63 0 0 0 .38.37l4.99 1.81a.63.63 0 0 1 0 1.18l-4.99 1.8a.63.63 0 0 0-.37.38z"
                                    fill="#FFC017"
                                ></path>
                            </svg>
                        </div>
                        <div className={styles.IconDiv}>
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 25 25"
                                fill="none"
                                className="mc"
                            >
                                <path
                                    d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                                    fill="#292929"
                                ></path>
                            </svg>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.25 12h7.5"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
                                    fill="#000"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <img
                    src={PostData.blogPost}
                    className={styles.postImageWrapper}
                    alt="post"
                />
            </div>
        </Link>
    );
};

export default PostCard;
