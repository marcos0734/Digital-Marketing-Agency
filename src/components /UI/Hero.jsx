import React from 'react';
import '../../styles/hero.css'
import herodarkImg from '../../images/hero-img.png'
const Hero = () => {
    return (
    <section className="hero__section">
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                    <div>
                    <h2>We're creating perfect</h2>
                    <h2>Digital Products To</h2>
                    <h2 className="highlight">Promote your Brand</h2>
                    </div>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sit laboriosam distinctio maxime fugiat. Fugit vel pariatur ducimus voluptatem officiis corporis aliquam eligendi.</p>

                    <div className="hero__btns">
                        <button className="primary__btn">Get Started Now</button>
                        <button className="secondary__btn">Discover More</button>
                    </div>
                </div>
                <div className="hero__img">
                     <img src={herodarkImg} alt="hero-img" srcset="" />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Hero;