import React from 'react'
import { ResponsiveImage } from './ResponsiveImage'

type Props = {
    title: string;
    titleStyle: string;
    desc: string;
    imgSmSrc: string;
    imgMdSrc: string;
    imgLgSrc: string;
    imgAlt: string;
}

const Banner = ({ title, titleStyle, desc, imgSmSrc, imgMdSrc, imgLgSrc, imgAlt }: Props) => {
    return (
        <section>
            <div className='relative w-[327px] md:w-[689px] xl:w-[1280px] h-[400px] xl:h-[450px] px-6 md:pl-[58px] flex flex-col items-center md:items-start justify-center text-lightCream mb-[120px] md:mb-[144px] xl:mb-[168px]'>
                <h1 className={`${titleStyle} text-center md:text-start serif-1`}>{title}</h1>
                <p className='sans-1 text-center md:text-start text-[.938rem] xl:text-base font-normal leading-[1.563rem] xl:leading-[1.625rem] md:max-w-[398px] xl:max-w-[445px] opacity-80'>{desc}</p>
                <ResponsiveImage imgSmSrc={imgSmSrc} imgMdSrc={imgMdSrc} imgLgSrc={imgLgSrc} imgAlt={imgAlt} priority={true} />
            </div>
        </section>
    )
}

export default Banner