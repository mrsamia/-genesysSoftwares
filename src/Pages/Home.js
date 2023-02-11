import { Button } from 'bootstrap';
import React from 'react';
import Collection from '../Components/Collection';
import Footer from '../Components/Footer/Footer';
import MyNav from '../Components/Nav/MyNav';
import SectionHeader from '../Components/SectionHeader';

function Home(props) {
    return (
        <div>
            <div className='hero-section'>
                <div className="hero-text-wrapper">
                    <h1 className='hero-text'>Lorem Ipsum is simply <br></br>dummy text of the printing</h1>
                    <h3 className='f-20 pt-3'>Lorem Ipsum is simply dummy text of the.</h3>
                    <div className='pt-5 d-flex justify-content-start'>
                        <button className='shop-now-btn'>Shop Now</button>
                    </div>
                </div>
            </div>
            <section className='section-wrapper bg-color'>
                <div className='container'>
                    <div>
                        <SectionHeader name="Our Collection" />
                    </div>
                    <Collection />
                </div>
            </section>
            <section>
                <div className='off-section'>
                    <div className="off-text-wrapper">
                        <h1 className='hero-text text-center'>20% OFF</h1>
                        <h3 className='f-20 pt-3 text-center'>And extra 50% off sale styles code FORCE20</h3>
                        <div className='pt-5 d-flex justify-content-center'>
                            <button className='view-all-btn'>View All</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-wrapper container'>
                <div className='d-flex justify-content-center'>
                    <SectionHeader name="Our Blog" />
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                        <div >
                            <img src={require('../Images/b1.jpg')} className='img' />
                        </div>
                        <div className='pt-3'>
                            <p className='f-17'>16 May, 2022</p>
                            <p className='f-17'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-6'>
                        <div className='row'>
                            <div className='col-sm-12 col-lg-6'>
                                <img src={require('../Images/b2.jpg')} className='img' />
                            </div>
                            <div className='col-sm-12 col-lg-6'>
                                <div className='pt-3'>
                                    <p className='f-17'>16 May, 2022</p>
                                    <p className='f-17'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='row pt-2 pb-2'>
                            <div className='col-sm-12 col-lg-6'>
                                <img src={require('../Images/b3.jpg')} className='img' />
                            </div>
                            <div className='col-sm-12 col-lg-6'>
                                <div className='pt-3'>
                                    <p className='f-17'>16 May, 2022</p>
                                    <p className='f-17'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12 col-lg-6'>
                                <img src={require('../Images/b4.jpg')} className='img' />
                            </div>
                            <div className='col-sm-12 col-lg-6'>
                                <div className='pt-3'>
                                    <p className='f-17'>16 May, 2022</p>
                                    <p className='f-17'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center pt-5'>
                    <button className='view-all-blog-btn'>View all blog</button>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}

export default Home;