import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Option {
    title: string;
    desc: string;
}

type Props = {
    id: string;
    title: string;
    options: Option[];
    selectedTitle: React.Dispatch<React.SetStateAction<string>>;
}

const Options = ({ id, title, options, selectedTitle }: Props) => {
    const [isOpen, setIsOpen] = useState(true)
    const [isActive, setIsActive] = useState(0)

    useEffect(() => {
        const handleSelected = () => {
            selectedTitle(options[isActive].title)
        }

        handleSelected()

    }, [isActive, options, selectedTitle])

    return (
        <div id={id}>
            <div className='flex items-center justify-between mb-8 md:mb-10'>
                <h3 className='serif-1 text-2xl md:text-[2rem] text-grey leading-7 md:leading-[3rem] max-w-[240px] md:max-w-none'>{title}</h3>
                <button onClick={() => setIsOpen(prev => !prev)}>
                    <Image src='/assets/plan/desktop/icon-arrow.svg' alt='arrow' width={19} height={13} className={`${isOpen && 'rotate-180'}`} />
                </button>
            </div>

            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        className={`flex flex-col md:flex-row gap-4 md:gap-[10px] `}>
                        {options.map((option, index) => (
                            <div onClick={() => setIsActive(index)} key={index} className={`${isActive === index ? 'bg-darkCyan text-lightCream' : 'bg-[#F4F1EB] text-darkGreyBlue'}  hover:bg-paleOrange hover:text-darkGreyBlue transition-colors duration-[400] px-[25px] py-6 md:pt-8 md:pb-[84px] rounded-lg cursor-pointer`}>
                                <h3 className='serif-1 text-2xl leading-8 mb-2 md:mb-6'>{option.title}</h3>
                                <p className='sans-1 text-base leading-[1.625rem]'>{option.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                }
            </AnimatePresence>

        </div>
    )
}

export default Options