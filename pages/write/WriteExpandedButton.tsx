import React, { useState, createRef } from 'react';

interface expandedButtonProp {
    buttonStyle: {
        top: string;
    };
    handleAddImage(SelectedImage: File | null): void;
    imgBtnRef: React.RefObject<HTMLDivElement>;
}

const WriteExpandedButton = ({ buttonStyle, handleAddImage, imgBtnRef }: expandedButtonProp) => {

    const styles = {
        button: "border-2 bg-white z-20 group border-green-500 relative cursor-pointer rounded-[100%] w-[40px] h-[40px] m-[2px] flex justify-center p-[4px] items-center",
        span: "absolute hidden group-hover:block bottom-[-35px] text-[12px] bg-white border-2 border-grey-400 px-[4px] py-[2px] whitespace-nowrap",
        buttonWrapper: `flex absolute left-[290px]`
    };

    const [rotateSvgImage, setrotateSvgImage] = useState(false);
    const [imgBtnVisible, setimgBtnVisible] = useState(false);
    const [vidBtnVisible, setvidBtnVisible] = useState(false);
    const [cdBtnVisible, setcdBtnVisible] = useState(false);

    const readImageRef = createRef<HTMLInputElement>();

    function readImage() {
        readImageRef.current?.click();
    }

    const handleRotateIcon = () => {
        setrotateSvgImage(!rotateSvgImage);
        setTimeout(() => {
            setimgBtnVisible(!imgBtnVisible);
        }, 100);
        setTimeout(() => {
            setvidBtnVisible(!vidBtnVisible);
        }, 200);
        setTimeout(() => {
            setcdBtnVisible(!cdBtnVisible);
        }, 300);
    };

    return (
        <div style={buttonStyle} className={styles.buttonWrapper}>
            <div onClick={handleRotateIcon} className={styles.button}>
                <svg className={`${rotateSvgImage ? 'rotate-45 transition delay-150 duration-300 linear' : ''}`} width={25} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path>
                </svg>
            </div>
            <div ref={imgBtnRef} onClick={readImage} className={`${styles.button} ${imgBtnVisible ? "block" : "hidden"}`}>
                <svg width={25} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                </svg>
                <span className={styles.span}>add a photo</span>
                <input
                    ref={readImageRef}
                    type="file"
                    name="myImage"
                    placeholder='select image'
                    hidden={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        if (event.target.files !== null) {
                            handleAddImage(event.target!.files[0]);
                            handleRotateIcon();
                        }
                    }}
                />
            </div>
            <div className={`${styles.button} ${vidBtnVisible ? "block" : "hidden"}`}>
                <svg width={25} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"></path>
                </svg>
                <span className={styles.span}>add a video</span>
            </div>
            <div className={`${styles.button} ${cdBtnVisible ? "block" : "hidden"}`}>
                <svg width={25} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path>
                </svg>
                <span className={styles.span}>add a code</span>
            </div>
        </div>
    )
}

export default WriteExpandedButton;