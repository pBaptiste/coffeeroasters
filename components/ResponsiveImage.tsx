"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

type Props = {
    imgSmSrc: string;
    imgMdSrc: string;
    imgLgSrc: string;
    imgAlt: string;
}

export const ResponsiveImage = ({ imgSmSrc, imgMdSrc, imgLgSrc, imgAlt }: Props) => {
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

    function imageLoader(width: number) {
        if (width < 768) {
            return `${imgSmSrc}`;
        } else if (width < 1280) {
            return `${imgMdSrc}`;
        } else {
            return `${imgLgSrc}`;
        }
    }
    return (
        <Image src={imageLoader(windowWidth)}
            alt={imgAlt}
            fill
            className='absolute top-0 left-0 object-cover -z-10 rounded-[10px]'
        />
    )
}
