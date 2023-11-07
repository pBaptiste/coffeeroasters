import React from 'react'
import Banner from '@/components/Banner'
import Step from '@/components/Step'
import SubscriptionPlan from '@/components/SubscriptionPlan'

const Subscribe = () => {
    return (
        <main>
            <div className='flex justify-center'>
                <Banner
                    title='Create a plan'
                    titleStyle='text-[2.5rem] md:text-[3rem] xl:text-[4.5rem] leading-10 md:leading-[2.5rem] xl:leading-[4.5rem] mb-[22px] md:mb-6 xl:mb-8'
                    desc='Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'
                    imgSmSrc='/assets/plan/mobile/image-hero-blackcup.jpg'
                    imgMdSrc='/assets/plan/tablet/image-hero-blackcup.jpg'
                    imgLgSrc='/assets/plan/desktop/image-hero-blackcup.jpg'
                    imgAlt='black cup'
                />
            </div>


            <section className='mb-[111.03px]'>
                <div className='rounded-[10px] bg-darkGreyBlue text-lightCream w-[375px] md:w-[768px] xl:w-[1280px] px-6 md:px-10 xl:pl-[85px] xl:pr-[150px] py-20 md:pt-[97px] md:pb-[70px] xl:py-[100px]'>
                    <div className='hidden md:flex items-center mb-[62px]'>
                        <div className='w-[31px] h-[31px] border-2 border-darkCyan rounded-full'></div>
                        <div className='w-[210px] xl:w-[350px] h-[2px] bg-paleOrange'></div>
                        <div className='w-[31px] h-[31px] border-2 border-darkCyan rounded-full'></div>
                        <div className='w-[210px] xl:w-[350px] h-[2px] bg-paleOrange'></div>
                        <div className='w-[31px] h-[31px] border-2 border-darkCyan rounded-full'></div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-14 md:gap-[10px] md:justify-between'>
                        <Step number='01' title='Pick your coffee' description='Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.' />
                        <Step number='02' title='Choose the frequency' description='Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.' />
                        <Step number='03' title='Receive and enjoy!' description='We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.' />
                    </div>
                </div>
            </section>

            <SubscriptionPlan />
        </main>
    )
}

export default Subscribe