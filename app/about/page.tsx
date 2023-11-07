import React from 'react'
import type { Metadata } from 'next'
import Banner from '@/components/Banner'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import Location from '@/components/Location'

export const metadata: Metadata = {
    title: 'About Us - Coffeeroasters',
    description: 'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.',
}

const About = () => {
    return (
        <main>
            {/* Banner Section */}
            <Banner
                title='About Us'
                titleStyle='text-[1.75rem] md:text-[2rem] xl:text-[2.5rem] leading-7 md:leading-10 xl:leading-[3rem] mb-6'
                desc='Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.'
                imgSmSrc='/assets/about/mobile/image-hero-whitecup.jpg'
                imgMdSrc='/assets/about/tablet/image-hero-whitecup.jpg'
                imgLgSrc='/assets/about/desktop/image-hero-whitecup.jpg'
                imgAlt='white cup'
            />

            {/* Commitments Section */}
            <section>
                <div className='mb-[198px] md:mb-[304px] xl:mb-[256px] flex flex-col md:flex-row md:items-center md:justify-between xl:justify-center gap-12 md:gap-0 xl:w-full xl:gap-[125px] '>
                    {/* <Image src={}/> */}
                    <div className='relative w-[327px] md:w-[281px] xl:w-[445px] h-[400px] md:h-[470px] xl:h-[520px] rounded-[10px]'>
                        <ResponsiveImage
                            imgSmSrc='/assets/about/mobile/image-commitment.jpg'
                            imgMdSrc='/assets/about/tablet/image-commitment.jpg'
                            imgLgSrc='/assets/about/desktop/image-commitment.jpg'
                            imgAlt='our commitment'
                        />
                    </div>
                    <div className='text-darkGreyBlue'>
                        <h1 className='text-center md:text-start serif-1 text-[2rem] xl:text-[2.5rem] leading-[3rem] mb-[30px] xl:mb-8'>Our commitment</h1>
                        <p className='text-center md:text-start sans-1 text-[.938rem] xl:text-base font-normal leading-[1.563rem] xl:leading-[1.625rem] opacity-80 max-w-[327px] md:max-w-[339px] xl:max-w-[540px]'>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
                    </div>
                </div>
            </section>

            <section className='mb-[120px] md:mb-[144px] xl:mb-[168px]'>
                <div className='relative bg-darkGreyBlue w-[327px] md:w-[688px] xl:w-[1280px] rounded-[10px] -z-20'>
                    <div className='absolute w-[279px] md:w-[573px] xl:w-[445px] h-[156px] md:h-[320px] xl:h-[474px] top-[-70px] md:top-[-170px] xl:top-[-80px] left-[50%] translate-x-[-50%] xl:left-auto xl:translate-x-0 xl:right-[85px]'>
                        <ResponsiveImage
                            imgSmSrc='/assets/about/mobile/image-quality.jpg'
                            imgMdSrc='/assets/about/tablet/image-quality.jpg'
                            imgLgSrc='/assets/about/desktop/image-quality.jpg'
                            imgAlt='cup of coffee'
                        />
                    </div>
                    <div className='text-lightCream pt-[142px] md:pt-[224px] xl:pt-[88px] px-6 md:px-[74px] xl:px-[85px] pb-[61px] md:pb-[67px] xl:pb-[176px] flex flex-col items-center xl:items-start gap-6 md:gap-[24px] xl:gap-8'>
                        <h2 className='text-center xl:text-start serif-1 text-[1.75rem] md:text-[2rem] xl:text-[2.5rem] leading-7 md:leading-[3rem]'>Uncompromising quality</h2>
                        <p className='text-center xl:text-start sans-1 text-[.938rem] xl:text-base leading-[1.563rem] xl:leading-[1.625rem] opacity-80 font-normal xl:max-w-[540px]'>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast
                            consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
                    </div>
                </div>
            </section>

            <section className='mb-[120px] md:mb-[144px] xl:mb-[168px]'>
                <div className='w-[327px] md:w-[688px] xl:w-[1045px] xl:ml-[85px]'>
                    <h3 className='text-center md:text-start text-grey serif-1 text-2xl leading-8 mb-[72px]'>Our headquarters</h3>
                    <div className='flex flex-col md:flex-row gap-20 md:gap-10 xl:gap-[125px] md:items-center'>
                        <Location
                            imgSrc='/assets/about/desktop/illustration-uk.svg'
                            width={40.842}
                            height={49.072}
                            title='United Kingdom'
                            street='68 Asfordby Rd'
                            city='Alcaston'
                            postalCode='SY6 1YA'
                            phoneNumber='+44 1241 918425'
                        />
                        <Location
                            imgSrc='/assets/about/desktop/illustration-canada.svg'
                            width={51.559}
                            height={49.956}
                            title='Canada'
                            street='1528  Eglinton Avenue'
                            city='Toronto'
                            postalCode='Ontario M4P 1A6'
                            phoneNumber='+1 416 485 2997'
                        />
                        <Location
                            imgSrc='/assets/about/desktop/illustration-australia.svg'
                            width={40.842}
                            height={49.072}
                            title='Australia'
                            street='36 Swanston Street'
                            city='Kewell'
                            postalCode='Victoria'
                            phoneNumber='+61 4 9928 3629'
                        />
                    </div>
                </div>

            </section>
        </main>
    )
}

export default About