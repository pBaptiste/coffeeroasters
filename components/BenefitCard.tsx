import React from 'react'
import Image from 'next/image'

type Props = {
    imgSrc: string;
    sizes: string;
    title: string;
    description: string;
}

const BenefitCard = ({ imgSrc, sizes, title, description }: Props) => {
    return (
        <div className='flex flex-col md:flex-row xl:flex-col md:gap-[55px] xl:gap-0 items-center justify-center w-[279px] md:w-[573px] xl:w-[350px] h-[382px] md:h-[180px] xl:h-[382px] bg-darkCyan text-lightCream rounded-lg'>
            <div className={`${sizes} relative  mb-14 md:my-[62px] xl:mt-0 xl:mb-[56px] `}>
                <Image src={imgSrc} alt={title} fill className={'object-contain'} />
            </div>
            <div className=''>
                <h3 className='text-center md:text-start xl:text-center serif-1 text-2xl leading-8 mb-6 md:mb-4'>{title}</h3>
                <p className='text-center md:text-start xl:text-center sans-1 text-[.938rem] leading-[1.563rem] w-[212px] md:w-[344px] xl:w-[255px]'>{description}</p>
            </div>

        </div>
    )
}

export default BenefitCard