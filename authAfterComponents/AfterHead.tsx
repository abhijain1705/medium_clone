import React from "react";
import Image from "next/image";
import smallLogo from "../static/smallLogo.png";
import { auth } from "../firebase.config";
import { UseLoggedInImageContext } from "../state/AppContext";
import Link from "next/link";

const AfterHead = () => {
  const styles = {
    HeaderWrapper:
      "w-[100vw] px-4 pr-8 border border-[#E6E6E6] border-t-0 border-l-0 border-r-0 border-b-1 flex justify-between items-center",
    HeaderChild_1: "flex gap-5 justify-between items-center",
    HeaderChild_2: "flex gap-5 justify-between items-center",
    HeaderSearchInput: "bg-[#F2F2F2] text-[14px] focus:outline-0",
    HeaderSearchWrapper: 'p-[4px] rounded-[18px] flex gap-3 relative bg-[#F2F2F2] items-center',
    HeaderWriteWrapper: 'flex items-center gap-2 text-[12px] cursor-pointer',
    HeaderUser: 'rounded-full'
  };

  const { image } = UseLoggedInImageContext();

  function logOut() {
    auth.signOut();
  }

  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.HeaderChild_1}>
        <Image src={smallLogo} width={50} height={50} alt="small_logo" />
        <div className={styles.HeaderSearchWrapper}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z"
              fill="currentColor"
            ></path>
          </svg>
          <input
            className={styles.HeaderSearchInput}
            type={"text"}
            placeholder="Search Medium"
          />
        </div>
      </div>
      <div className={styles.HeaderChild_2}>
        <Link href={`/write/${1}`}>
          <div className={styles.HeaderWriteWrapper}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Write"
            >
              <path
                d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                fill="currentColor"
              ></path>
              <path
                d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                stroke="currentColor"
              ></path>
            </svg>
            Write
          </div></Link>
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
        <img onClick={logOut} className={styles.HeaderUser} src={image} width={30} height={30} alt="user_image" />
      </div>
    </div>
  );
};

export default AfterHead;
