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
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nisi voluptas, perspiciatis deleniti tenetur doloremque in magnam laboriosam rem. Iste consectetur delectus in debitis voluptas recusandae aliquid iusto, itaque doloribus ab vel, fugit vero.
                        </p>
                        <button className="bg-white-box btn btn-darken btn-inline ">
                            <FaLongArrowAltRight />
                        </button>
                    </div>
                    <div className="hero-image">
                        <img
                            src="../../public/images/World.jpg"
                            alt="World map Vector image"
                            className='banner-image'
                        />
                    </div>
                </div>
            </main>
        </>
    )
}