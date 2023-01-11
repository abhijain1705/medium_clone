import React from "react";
import PostCard from "./PostCard";
import { UseScrollContext } from "../state/AppContext";

import { boxArray, linksArray } from "../data/Section";

const Section = () => {

  const { scrollY } = UseScrollContext();

  const styles = {
    sectionWrapper: "flex flex-col-reverse md:flex-row gap-20 max-w-5xl mx-auto py-12",
    postCollections: "h-[100%] overflow-srcoll",
    bottomBar: `flex pl-4 flex-col relative ${scrollY > 340 ? 'lg:fixed top-[100px]' : 'lg:absolute'} lg:h-[100vh] lg:right-[0px] xl:right-[200px] gap-5`,
    bottomText: 'font-bold text-[12px]',
    box: 'text-[10px] text-[#757575] cursor-pointer py-1 px-4 border-1 border w-max border-[#e6e6e6]',
    boxArrayWrapper: "flex md:max-w-[275px] xl:max-w-[300px] flex-wrap gap-2",
    links: 'text-[10px] text-[#757575] cursor-pointer w-max'
  };

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.postCollections}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.bottomText}>DISCOVER MORE OF WHAT MATTERS TO YOU</div>
        <div className={styles.boxArrayWrapper}>
          {
            boxArray.map((itm, ind) => (
              <div className={styles.box} key={ind}>{itm}</div>
            ))
          }
        </div>
        <hr />
        <div className={styles.boxArrayWrapper}>
          {
            linksArray.map((itm, ind) => (
              <div className={styles.links} key={ind}>{itm}</div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Section;
