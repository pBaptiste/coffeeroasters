import React from 'react'
import BenefitCard from './BenefitCard'

const Benefits = () => {
    return (
        <section className='mb-[717px] md:mb-[434px] xl:mb-[351px]'>
            <div className='relative flex flex-col items-center w-[327px] md:w-[688px] xl:w-[1280px] h-[902px] md:h-[573px] xl:h-[577px] rounded-[10px] bg-[#2C343E] text-lightCream pt-16 md:pt-14 xl:pt-[100px] px-6'>
                <h2 className='text-center text-[1.75rem] md:text-[2rem] xl:text-[2.5rem] leading-7 md:leading-[3rem] serif-1 mb-6 xl:mb-8'>Why choose us?</h2>
                <p className='text-center sans-1 text-[.938rem] opacity-80 font-normal leading-[1.563rem] md:max-w-[540px]'>A large part of our role is choosing which particular coffees will be featured  in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>

                <div className='absolute top-[305px] md:top-[275px] xl:top-[346px] flex flex-col xl:flex-row gap-6 xl:gap-[30px]'>
                    <BenefitCard imgSrc='/assets/home/desktop/icon-coffee-bean.svg' sizes='w-[72px] h-[72px] md:w-[56px] md:h-[56px] xl:w-[72px] xl:h-[72px]' title='Best quality' description='Discover an endless variety of the world’s best artisan coffee from each of our roasters.' />
                    <BenefitCard imgSrc='/assets/home/desktop/icon-gift.svg' sizes='w-[72px] h-[72px] md:w-[56px] md:h-[56px] xl:w-[72px] xl:h-[72px]' title='Exclusive benefits' description='Special offers and swag when you subscribe, including 30% off your first shipment.' />
                    <BenefitCard imgSrc='/assets/home/desktop/icon-truck.svg' sizes='w-[72px] h-[50px] md:w-[55px] md:h-[39px] xl:w-[72px] xl:h-[50px]' title='Free shipping' description='We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.' />
                </div>
            </div>

        </section>
    )
}

export default Benefits