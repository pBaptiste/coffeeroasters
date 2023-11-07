import React from 'react'
import Image from 'next/image'

type Props = {
    imgSrc: string;
    title: string;
    description: string;
}

const CollectionItem = ({ imgSrc, title, description }: Props) => {
    return (
        <div className='flex flex-col md:flex-row xl:flex-col items-center'>
            <div className='relative w-[200px] h-[151px] md:w-[256px] md:h-[193px] mb-6 md:mb-0 xl:mb-[71px] md:mr-[36px] xl:mr-0'>
                <Image src={imgSrc} alt={title} fill className='object-contain' />
            </div>

            <div className='flex flex-col items-center md:items-start xl:items-center w-[282px] xl:w-[245px] text-darkGreyBlue'>
                <h2 className='text-center md:text-start xl:text-center serif-1 text-2xl leading-8 mb-4 md:mb-6'>{title}</h2>
                <p className='text-center md:text-start xl:text-center sans-1 text-[.938rem] font-normal leading-[1.563rem]'>{description}</p>
            </div>
        </div>
    )
}

export default CollectionItem