import React from 'react'
import ActionLink from '@/components/ActionLink'
import { ResponsiveImage } from './ResponsiveImage'

const CallToAction = () => {
    return (
        <section className='mb-[120px] md:mb-[203px] xl:mb-[262px]'>
            <div className='relative flex flex-col items-center md:items-start justify-center w-[327px] h-[500px] md:w-[689px] md:h-[500px] xl:w-[1280px] xl:h-[600px] px-6 md:pl-[58px] rounded-[10px]'>
                <h1 className='text-lightCream serif-1 text-center md:text-start text-[2.5rem] md:text-5xl xl:text-7xl leading-10 md:leading-[3rem] xl:leading-[4.5rem] pb-6 xl:pb-8 md:max-w-[398px] xl:max-w-[493px]'>Great coffee made simple.</h1>
                <p className='text-lightCream sans-1 text-center md:text-start text-[.938rem] font-normal leading-[1.563rem] opacity-80 pb-10 md:max-w-[398px] xl:max-w-[410px]'>Start your mornings with the world’s best coffees. Try our expertly curated artisan
                    coffees from our best roasters delivered directly to your door, at your schedule.</p>
                <ActionLink text='Create your plan' link='/subscribe' />

                <ResponsiveImage imgSmSrc='/assets/home/mobile/image-hero-coffeepress.jpg'
                    imgMdSrc='/assets/home/tablet/image-hero-coffeepress.jpg'
                    imgLgSrc='/assets/home/desktop/image-hero-coffeepress.jpg'
                    imgAlt='coffee press'
                    priority={true} />
            </div>

        </section>
    )
}

export default CallToAction