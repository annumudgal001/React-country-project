import React from 'react'

import { FaLongArrowAltRight } from 'react-icons/fa'
export const HeroSection = () => {
    return (
        <>
            <main className='hero-section main'>
                <div className="grid container grid-two-cols">
                    <div className="hero-content">
                        <h1 className="heading-xl">
                            Explore the world one Country at a time
                        </h1>
                        <p className="paragraph">
                            Embark on a journey through countries, cultures, and captivating facts. From vibrant capitals to unique traditions, WorldAtlas brings the globe to your fingertips. Explore now and uncover the stories that shape our world.
                        </p>
                        <button className="bg-white-box btn btn-darken btn-inline ">
                            <FaLongArrowAltRight />
                        </button>
                    </div>
                    <div className="hero-image">
                        <img
                            src="../../public/images/World.png"
                            alt="World map Vector image"
                            className='banner-image'
                        />
                    </div>
                </div>
            </main>
        </>
    )
}