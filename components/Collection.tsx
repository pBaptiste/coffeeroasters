import React from 'react'
import CollectionItem from './CollectionItem'

const Collection = () => {
    const collectionItems = [
        {
            imgSrc: '/assets/home/desktop/image-gran-espresso.png',
            title: "Gran Espresso",
            description: "Light and flavorful blend with cocoa and black pepper for an intense experience"
        },
        {
            imgSrc: '/assets/home/desktop/image-planalto.png',
            title: "Planalto",
            description: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
        },
        {
            imgSrc: '/assets/home/desktop/image-piccollo.png',
            title: "Piccollo",
            description: "Mild and smooth blend featuring notes of toasted almond and dried cherry "
        },
        {
            imgSrc: '/assets/home/desktop/image-danche.png',
            title: "Danche",
            description: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
        },

    ]
    return (
        <section className='flex flex-col items-center relative mb-[120px] md:mb-[130px] xl:mb-[188px]'>
            <h1 className='serif-1 text-[2.7rem] md:text-[5.8rem] xl:text-[10rem] content mb-10 md:absolute md:top-[-80px] xl:top-[-150px]'>our collection</h1>
            <div className='flex flex-col xl:flex-row gap-12'>
                {collectionItems.map((item, index) => (
                    <CollectionItem key={index} imgSrc={item.imgSrc} title={item.title} description={item.description} />
                ))}
            </div>
        </section>
    )
}

export default Collection