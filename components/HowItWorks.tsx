import React from 'react'
import Step from './Step'
import ActionLink from './ActionLink'
const HowItWorks = () => {
    return (
        <section>
            <div className='flex flex-col items-center md:items-start w-[327px] md:w-[689px] xl:w-[1045px] mb-[120px] md:mb-[144px] xl:mb-[200px]'>
                <h3 className='mb-20 md:mb-10 xl:mb-20 text-grey serif-1 text-2xl leading-8'>How it works</h3>
                <div className='hidden md:flex items-center mb-[62px]'>
                    <div className='w-[31px] h-[31px] border-2 border-darkCyan rounded-full'></div>
                    <div className='w-[210px] xl:w-[350px] h-[2px] bg-paleOrange'></div>
                    <div className='w-[31px] h-[31px] border-2 border-darkCyan rounded-full'></div>
                    <div className='w-[210px] xl:w-[350px] h-[2px] bg-paleOrange'></div>
                    <div className='w-[31px] h-[31px] border-2 border-darkCyan rounded-full'></div>
                </div>
                <div className='text-darkGreyBlue flex flex-col md:flex-row gap-14 md:gap-[10px] mb-20 md:mb-[44px] md:w-full md:justify-between'>
                    <Step number='01' title='Pick your coffee' description='Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.' />
                    <Step number='02' title='Choose the frequency' description='Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.' />
                    <Step number='03' title='Receive and enjoy!' description='We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.' />
                </div>
                <ActionLink text='Create your plan' link='/subscribe' />
            </div>

        </section>
    )
}

export default HowItWorks