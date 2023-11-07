"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMobileNavigation() {
        setIsMenuOpen((prev) => !prev);

        // Enable or disable scrolling based on the state
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    }

    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,

            },
        },
        closed: {
            y: -100, // Adjust this value as needed
            opacity: 0,
        },
    };

    return (
        <header>
            <nav>
                <div className='w-[327px] md:w-[689px] xl:w-[1280px]  flex items-center justify-between pt-8 md:pt-10 xl:pt-[43.56px] pb-10 md:pb-[53px] xl:pb-[43.44px]'>
                    {/* Logo */}
                    {/* #333D4B */}
                    <Link href='/'>
                        <Image src='/assets/shared/desktop/logo.svg' alt='Logo' width={237} height={27}
                            className='w-[163px] md:w-[236px] h-[18px] md:h-[26px]' />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileNavigation}
                        className='md:hidden'>

                        {isMenuOpen ?
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <Image src='/assets/shared/mobile/icon-close.svg' alt='close icon' width={14} height={13} />
                            </motion.div>

                            :
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <Image src='/assets/shared/mobile/icon-hamburger.svg' alt='hamburger icon' width={16} height={15} />
                            </motion.div>

                        }
                    </button>

                    {/* Navigation List */}
                    <ul className='hidden md:flex gap-[33px]'>
                        <li ><Link className='text-center sans-1 text-xs font-bold leading-[0.938rem] text-grey tracking-[0.923px] uppercase hover:text-darkGreyBlue transition-colors duration-200' href='/'>Home</Link></li>
                        <li ><Link className='text-center sans-1 text-xs font-bold leading-[0.938rem] text-grey tracking-[0.923px] uppercase hover:text-darkGreyBlue transition-colors duration-200' href='/about'>About Us</Link></li>
                        <li ><Link className='text-center sans-1 text-xs font-bold leading-[0.938rem] text-grey tracking-[0.923px] uppercase hover:text-darkGreyBlue transition-colors duration-200' href='/subscribe'>Create Your Plan</Link></li>
                    </ul>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen &&
                    <motion.nav
                        className='md:hidden absolute top-[90px] left-0 mobile-bg w-full h-full z-20 mobile-bg'
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={variants}
                    >
                        <ul className='flex flex-col items-center justify-center py-10 gap-8'>
                            <li ><Link className='text-center serif-1 text-2xl leading-8' onClick={toggleMobileNavigation} href='/'>Home</Link></li>
                            <li ><Link className='text-center serif-1 text-2xl leading-8' onClick={toggleMobileNavigation} href='/about'>About Us</Link></li>
                            <li ><Link className='text-center serif-1 text-2xl leading-8' onClick={toggleMobileNavigation} href='/subscribe'>Create Your Plan</Link></li>
                        </ul>
                    </motion.nav>
                }
            </AnimatePresence>
        </header>
    )
}

export default Navbar