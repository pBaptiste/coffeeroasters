"use client"
import React, { useState, useEffect } from 'react'
import ActionLink from '@/components/ActionLink'
import Image from 'next/image'

const CallToAction = () => {
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
        }

        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }

    }, [windowWidth])

    function imageLoader(src: string, width: number) {
        if (width < 768) {
            return `/assets/home/mobile/${src}`;
        } else if (width < 1280) {
            return `/assets/home/tablet/${src}`;
        } else {
            return `/assets/home/desktop/${src}`;
        }
    }

    return (
        <section className='mb-[120px] md:mb-[203px] xl:mb-[262px]'>
            <div className='relative flex flex-col items-center md:items-start justify-center w-[327px] h-[500px] md:w-[689px] md:h-[500px] xl:w-[1280px] xl:h-[600px] px-6 md:pl-[58px] rounded-[10px]'>
                <h1 className='text-lightCream serif-1 text-center md:text-start text-[2.5rem] md:text-5xl xl:text-7xl leading-10 md:leading-[3rem] xl:leading-[4.5rem] pb-6 xl:pb-8 md:max-w-[398px] xl:max-w-[493px]'>Great coffee made simple.</h1>
                <p className='text-lightCream sans-1 text-center md:text-start text-[.938rem] font-normal leading-[1.563rem] opacity-80 pb-10 md:max-w-[398px] xl:max-w-[410px]'>Start your mornings with the world’s best coffees. Try our expertly curated artisan
                    coffees from our best roasters delivered directly to your door, at your schedule.</p>
                <ActionLink text='Create your plan' link='/subscribe' />

                <Image src={imageLoader('image-hero-coffeepress.jpg', windowWidth)}
                    alt='coffee press'
                    fill
                    className='absolute top-0 left-0 object-cover -z-10 rounded-[10px]'
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wAABgAB/5W08QAAAABJRU5ErkJggg==" />
            </div>

        </section>
    )
}

export default CallToAction