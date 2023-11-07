import React from 'react'
import Image from 'next/image'

type Props = {
    imgSrc: string;
    width: number;
    height: number
    title: string;
    street: string;
    city: string;
    postalCode: string;
    phoneNumber: string;
}

const Location = ({ imgSrc, title, width, height, street, city, postalCode, phoneNumber }: Props) => {
    return (
        <div className='flex flex-col items-center md:items-start gap-[47.93px] xl:gap-[45px]'>

            <Image src={imgSrc} alt={title} width={width} height={height} />

            <div className='text-center md:text-start text-darkGreyBlue'>
                <h1 className='serif-1 text-[1.75rem] md:text-2xl xl:text-[2rem] leading-[2.25rem] mb-[22px] xl:mb-6'>{title}</h1>
                <p className='sans-1 text-base font-normal leading-[1.625rem]'>{street}</p>
                <p className='sans-1 text-base font-normal leading-[1.625rem]'>{city}</p>
                <p className='sans-1 text-base font-normal leading-[1.625rem]'>{postalCode}</p>
                <p className='sans-1 text-base font-normal leading-[1.625rem]'>{phoneNumber}</p>
            </div>
        </div>
    )
}

export default Location