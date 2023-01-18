import React from 'react';
import bucketGirl from '../../assets/image/bucketgirl.png'
const Landing = () => {
    return (
        <>
            <div class="hero h-screen lg:h-[60vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row">

                    <div data-aos="fade-right">
                        <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src={bucketGirl} class="h-full" alt='' />
                    </div>
                </div>
            </div>
            <div className='shadow-lg p-10 w-5/6 rounded-2xl mx-auto z-20 gap-4 bg-base-200 mt-[-50px]'>
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 '>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full  m-2" />

                    <input type="text" placeholder="Type here" class="input input-bordered w-full  m-2" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full  m-2" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full  m-2" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full  m-2" />

                    <input type="text" placeholder="Type here" class="input input-bordered w-full  m-2" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full  m-2" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full  m-2" />
                </div>
                <button className='btn btn-primary mt-5'>Get a quote</button>
            </div>
        </>
    );
};

export default Landing;