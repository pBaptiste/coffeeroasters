import React from 'react'

type Props = {
    number: string;
    title: string;
    description: string;
}

const Step = ({ number, title, description }: Props) => {
    return (
        <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-center md:text-start text-paleOrange serif-1 text-7xl leading-[4.5rem] mb-6 xl:mb-[38px]'>{number}</h1>
            <div>
                <h2 className='text-center md:text-start serif-1 text-[1.75rem] xl:text-[2rem] leading-8 xl:leading-[2.25rem] mb-6 xl:mb-[42px] md:max-w-[200px]'>{title}</h2>
                <p className='text-center md:text-start sans-1 text-[.938rem] xl:text-base leading-[1.563rem] xl:leading-[1.625rem] md:max-w-[211px] xl:max-w-[285px]'>{description}</p>
            </div>
        </div>
    )
}

export default Step