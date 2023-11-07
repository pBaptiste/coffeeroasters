"use client"
import React, { useState, useEffect, useRef } from 'react'
import Options from './Options'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
const SubscriptionPlan = () => {
    const [selectedPlan, setSelectedPlan] = useState('Capsule')
    const [selectedCoffeeType, setSelectedCoffeeType] = useState('Single Origin')
    const [selectedQuantity, setSelectedQuantity] = useState('250g')
    const [selectedCoffeeGrinding, setSelectedCoffeeGrinding] = useState('Wholebean')
    const [seletctedDelivery, setSelectedDelivery] = useState('Every week')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleIsModalOpen = () => {
        setIsModalOpen(true)
    }

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    })

    const orderSummaryRef = useRef<HTMLDivElement | null>(null)

    const handleOutsideClick = (e: MouseEvent) => {
        if (orderSummaryRef.current && !orderSummaryRef.current.contains(e.target as Node)) {
            setIsModalOpen(false)
        }
    };

    useEffect(() => {
        // Add a click event listener to the document to handle outside clicks
        document.addEventListener('click', handleOutsideClick);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    },); // Empty dependency array to run the effect only once

    return (
        <section className='mb-[120px] flex justify-center gap-[125px]'>
            <div className='hidden xl:flex flex-col gap-6'>
                <a href="#Preferences" className='text-2xl leading-32 serif-1'><span className='text-darkCyan pr-[28.5px] text-opacity-50'>01</span> <span className='text-darkGreyBlue text-opacity-50 hover:text-opacity-100'>Preferences</span></a>
                <a href="#Bean Type" className='text-2xl leading-32 serif-1 pt-6 pr-8 border-t border-grey'><span className='text-darkGreyBlue pr-[28.5px] text-opacity-50'>02</span> <span className='text-darkGreyBlue text-opacity-50 hover:text-opacity-100'>Bean Type</span></a>
                <a href="#Quantity" className='text-2xl leading-32 serif-1 pt-6 pr-8 border-t border-grey'><span className='text-darkGreyBlue pr-[28.5px] text-opacity-50'>03</span> <span className='text-darkGreyBlue text-opacity-50 hover:text-opacity-100'>Quantity</span></a>
                <a href="#Grind Option" className='text-2xl leading-32 serif-1 pt-6 pr-8 border-t border-grey'><span className='text-darkGreyBlue pr-[28.5px] text-opacity-50'>04</span> <span className='text-darkGreyBlue text-opacity-50 hover:text-opacity-100'>Grind Option</span></a>
                <a href="#Deliveries" className='text-2xl leading-32 serif-1 pt-6 pr-8 border-t border-grey'><span className='text-darkGreyBlue pr-[28.5px] text-opacity-50'>05</span> <span className='text-darkGreyBlue text-opacity-50 hover:text-opacity-100'>Deliveries</span></a>
            </div>

            <div className='flex flex-col items-center'>
                <div className='w-[328px] md:w-[689px] xl:w-[730px] flex flex-col gap-[110px] md:gap-[100px] mb-[120px] '>
                    <Options
                        id='Preferences'
                        title='How do you drink your coffee?'
                        options={[
                            { title: 'Capsule', desc: 'Compatible with Nespresso systems and similar brewers' },
                            { title: 'Filter', desc: 'For pour over or drip methods like Aeropress, Chemex, and V60' },
                            { title: 'Espresso', desc: 'Dense and finely ground beans for an intense, flavorful experience' },
                        ]}
                        selectedTitle={setSelectedPlan}
                    />
                    <Options
                        id='Bean Type'
                        title='What type of coffee?'
                        options={[
                            { title: 'Single Origin', desc: 'Distinct, high quality coffee from a specific family-owned farm' },
                            { title: 'Decaf', desc: 'Just like regular coffee, except the caffeine has been removed' },
                            { title: 'Blended', desc: 'Combination of two or three dark roasted beans of organic coffees' },
                        ]}
                        selectedTitle={setSelectedCoffeeType}
                    />
                    <Options
                        id='Quantity'
                        title='How much would you like?'
                        options={[
                            { title: '250g', desc: 'Perfect for the solo drinker. Yields about 12 delicious cups.' },
                            { title: '500g', desc: 'Perfect option for a couple. Yields about 40 delectable cups.' },
                            { title: '1000g', desc: 'Perfect for offices and events. Yields about 90 delightful cups.' },
                        ]}
                        selectedTitle={setSelectedQuantity}
                    />
                    <Options
                        id='Grind Option'
                        title='Want us to grind them?'
                        options={[
                            { title: 'Wholebean', desc: 'Best choice if you cherish the full sensory experience' },
                            { title: 'Filter', desc: 'For drip or pour-over coffee methods such as V60 or Aeropress' },
                            { title: 'Cafetiére', desc: 'Course ground beans specially suited for french press coffee' },
                        ]}
                        selectedTitle={setSelectedCoffeeGrinding}
                    />
                    <Options
                        id='Deliveries'
                        title='How often should we deliver?'
                        options={[
                            { title: 'Every week', desc: '$7.20 per shipment. Includes free first-class shipping.' },
                            { title: 'Every 2 weeks', desc: '$9.60 per shipment. Includes free priority shipping.' },
                            { title: 'Every month', desc: '$12.00 per shipment. Includes free priority shipping.' },
                        ]}
                        selectedTitle={setSelectedDelivery}
                    />
                </div>

                <div className='flex flex-col items-center gap-14'>
                    <div className='bg-darkGreyBlue text-lightCream w-[328px] md:w-[689px] xl:w-[730px] rounded-[10px] px-[25px] py-8'>
                        <h3 className='sans-1 text-base font-normal leading-[1.625rem] opacity-[0.5037] uppercase mb-2'>Order Summary</h3>
                        <p className='serif-1 text-2xl leading-10 text-lightCream'>“I drink my coffee as <span className='text-darkCyan'>{selectedPlan}</span>, with a <span className='text-darkCyan'>{selectedCoffeeType}</span> type of bean. <span className='text-darkCyan'>{selectedQuantity}</span> ground ala <span className='text-darkCyan'>{selectedCoffeeGrinding}</span>, sent to me <span className='text-darkCyan'>{seletctedDelivery}</span>.”</p>
                    </div>
                    <button onClick={handleIsModalOpen} className='px-[31px] pt-[15px] pb-4 bg-darkCyan hover:bg-[#66D2CF] transition-colors duration-300 text-lightCream text-[1.125rem] leading-[1.563rem] serif-1 rounded-md xl:self-end'>Create my plan!</button>

                </div>
            </div>

            <AnimatePresence>
                {/* Modal */}
                {isModalOpen &&
                    <div
                        className='fixed top-0 left-0 z-30 flex items-center justify-center w-full min-h-full bg-black bg-opacity-50'
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            ref={orderSummaryRef}
                            className='rounded-lg w-[327px] md:w-[540px] bg-lightCream '>
                            <div className='rounded-t-lg bg-darkGreyBlue py-7 md:pt-14 md:pb-10 pl-6 md:pl-14  text-lightCream text-[1.75rem] leading-8 md:text-[2.5rem] serif-1'>
                                Order Summary
                            </div>
                            <div className='px-6 md:px-14 pt-10 pb-6 md:py-14'>
                                <p className='serif-1 text-2xl leading-10 text-grey'>“I drink my coffee as <span className='text-darkCyan'>{selectedPlan}</span>, with a <span className='text-darkCyan'>{selectedCoffeeType}</span> type of bean. <span className='text-darkCyan'>{selectedQuantity}</span> ground ala <span className='text-darkCyan'>{selectedCoffeeGrinding}</span>, sent to me <span className='text-darkCyan'>{seletctedDelivery}</span>.”</p>
                                <p className='sans-1 text-darkGreyBlue text-opacity-80 text-[.938rem] leading-[1.563rem] mb-6 md:mb-[47px]'>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
                                <div className='flex items-center gap-[13px]'>
                                    <span className='hidden md:block text-darkGreyBlue text-[2rem] leading-[2.25rem] serif-1'>$14.00 / mo</span>
                                    <Link href='/' className='px-[31px] md:flex md:justify-center pt-[15px] pb-4 bg-darkCyan hover:bg-[#66D2CF] transition-colors duration-300 text-lightCream text-[1.125rem] leading-[1.563rem] serif-1 rounded-md md:flex-1'>Checkout <span className='md:hidden'>- $14.00 / mo</span></Link>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                }
            </AnimatePresence>
        </section>
    )
}

export default SubscriptionPlan